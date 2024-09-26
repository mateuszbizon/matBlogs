import { NextFunction, Request, Response } from "express";
import { deleteFile } from "../../utils/deleteFile";
import { DatabaseError } from "../../errors/DatabaseError";
import { TPostSchema } from "../../dtos/post.dto";
import { createPost } from "../../services/posts/createPost.service";
import { messages } from "../../messages";
import { AuthenticationError } from "../../errors/AuthenticationError";
import { BadRequestError } from "../../errors/BadRequestError";

export async function createPostController(req: Request<{}, {}, TPostSchema>, res: Response, next: NextFunction) {
    const { title, content } = req.body
    const postPhoto = req.file
    console.log(postPhoto)

    try {
        if (!res.locals.userId) {
            return next(new AuthenticationError(messages.auth.tokenInvalid))
        }

        if (!postPhoto) {
            return next(new BadRequestError(messages.file.fileNotProvided))
        }

        const createdPost = await createPost({ title, content }, "photo", res.locals.userId)

        deleteFile(postPhoto.path)

        return res.status(201).json({ statusCode: 201, message: messages.post.postCreated, data: createdPost })
    } catch (error) {
        next(new DatabaseError())
    }
}