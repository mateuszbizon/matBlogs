import { NextFunction, Request, Response } from "express";
import { deleteTemporaryFile } from "../../utils/deleteFile";
import { DatabaseError } from "../../errors/DatabaseError";
import { postSchema, TPostSchema } from "../../dtos/post.dto";
import { createPost } from "../../services/posts/createPost.service";
import { messages } from "../../messages";
import { BadRequestError } from "../../errors/BadRequestError";
import { uploadImageToCloudinary } from "../../utils/cloudinary";
import { fromZodError } from "zod-validation-error";
import { fileSchema } from "../../dtos/file.dto";
import { TMainResponse } from "../../types/responses";
import { getPostBySlug } from "../../services/posts/getPostBySlug";
import { generateSlug } from "../../utils/generateSlug";
import { TPostReponse } from "../../types/responses/post.response";

export async function createPostController(req: Request<{}, {}, TPostSchema>, res: Response<TMainResponse<TPostReponse>>, next: NextFunction) {
    const { title, content } = req.body
    const postPhoto = req.file

    try {
        const postValidation = postSchema.safeParse(req.body)

        if (!postValidation.success) {
            return next(new BadRequestError(fromZodError(postValidation.error).details[0].message))
        }

        if (!postPhoto) {
            return next(new BadRequestError(messages.file.fileNotProvided))
        }

        const fileValidation = fileSchema.safeParse(req.file)

        if (!fileValidation.success) {
            return next(new BadRequestError(fromZodError(fileValidation.error).details[0].message))
        }

        const slug = generateSlug(title)

        const existingPost = await getPostBySlug(slug)

        if (existingPost) {
            return next(new BadRequestError(messages.post.postSlugAlreadyExists))
        }

        const imageUrl = await uploadImageToCloudinary(postPhoto.path)

        if (!imageUrl) {
            return next(new DatabaseError())
        }

        const createdPost = await createPost({ title, content }, imageUrl, res.locals.userId, slug)

        return res.status(201).json({
            statusCode: 201, 
            message: messages.post.postCreated, 
            data: {
                post: createdPost
            }
        })
    } catch (error) {
        next(new DatabaseError())
    } finally {
        if (postPhoto) {
            deleteTemporaryFile(postPhoto.path)
        }
    }
}