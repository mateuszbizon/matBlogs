import { NextFunction, Request, Response } from "express";
import { deleteTemporaryFile } from "../../utils/deleteFile";
import { DatabaseError } from "../../errors/DatabaseError";
import { postSchema, TPostSchema } from "../../dtos/post.dto";
import { createPost } from "../../services/posts/createPost.service";
import { messages } from "../../messages";
import { AuthenticationError } from "../../errors/AuthenticationError";
import { BadRequestError } from "../../errors/BadRequestError";
import { uploadImageToCloudinary } from "../../utils/cloudinary";
import { fromZodError } from "zod-validation-error";
import { fileSchema } from "../../dtos/file.dto";
import { TCreatePostResponse, TMainResponse } from "../../types/responses";

export async function createPostController(req: Request<{}, {}, TPostSchema>, res: Response<TMainResponse<TCreatePostResponse>>, next: NextFunction) {
    const { title, content } = req.body
    const postPhoto = req.file

    try {
        if (!res.locals.userId) {
            return next(new AuthenticationError(messages.auth.tokenInvalid))
        }

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

        const imageUrl = await uploadImageToCloudinary(postPhoto.path)

        if (!imageUrl) {
            return next(new DatabaseError())
        }

        const createdPost = await createPost({ title, content }, imageUrl, res.locals.userId)

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