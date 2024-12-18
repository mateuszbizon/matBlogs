import { NextFunction, Request, Response } from "express";
import { deleteTemporaryFile } from "../../utils/deleteFile";
import { DatabaseError } from "../../errors/DatabaseError";
import { postSchema, TPostSchema } from "../../dtos/post.dto";
import { messages } from "../../messages";
import { BadRequestError } from "../../errors/BadRequestError";
import { uploadImageToCloudinary } from "../../utils/cloudinary";
import { fromZodError } from "zod-validation-error";
import { fileSchema } from "../../dtos/file.dto";
import { updatePost } from "../../services/posts/updatePost.service";
import { TUpdatePostParams } from "../../types/params";
import { getPostById } from "../../services/posts/getPostById.service";
import { NotFoundError } from "../../errors/NotFoundError";
import { TMainResponse } from "../../types/responses";
import { ForbiddenError } from "../../errors/ForbiddenError";
import { generateSlug } from "../../utils/generateSlug";
import { getPostBySlug } from "../../services/posts/getPostBySlug";
import { TPostReponse } from "../../types/responses/post.response";

export async function updatePostController(
    req: Request<TUpdatePostParams, {}, TPostSchema>, 
    res: Response<TMainResponse<TPostReponse>>, 
    next: NextFunction
) {      
    const { title, content } = req.body
    const { postId } = req.params
    const postPhoto = req.file

    try {
        const existingPost = await getPostById(postId)

        if (!existingPost) {
            return next(new NotFoundError(messages.post.postNotFound))
        }

        if (res.locals.userId !== existingPost.authorId) {
            return next(new ForbiddenError(messages.forbidden.notPostAuthor))
        }

        const postValidation = postSchema.safeParse(req.body)

        if (!postValidation.success) {
            return next(new BadRequestError(fromZodError(postValidation.error).details[0].message))
        }

        if (!postPhoto) {
            return next(new BadRequestError(messages.file.fileNotProvided))
        }

        const fileValidation = fileSchema.safeParse(postPhoto)

        if (!fileValidation.success) {
            return next(new BadRequestError(fromZodError(fileValidation.error).details[0].message))
        }

        const slug = generateSlug(title)

        const existingSlug = await getPostBySlug(slug)

        if (existingSlug && existingSlug.slug !== existingPost.slug) {
            return next(new BadRequestError(messages.post.postSlugAlreadyExists))
        }

        const imageUrl = await uploadImageToCloudinary(postPhoto.path)

        if (!imageUrl) {
            return next(new DatabaseError())
        }

        const updatedPost = await updatePost({ title, content }, imageUrl, postId, slug)

        return res.status(200).json({
            statusCode: 200, 
            message: messages.post.postUpdated, 
            data: {
                post: updatedPost
            }
        })
    } catch (error) {
        console.error(error)
        next(new DatabaseError())
    } finally {
        if (postPhoto) {
            deleteTemporaryFile(postPhoto.path)
        }
    }
}