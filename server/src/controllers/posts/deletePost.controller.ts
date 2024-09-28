import { NextFunction, Request, Response } from "express";
import { TDeletePostParams } from "../../types/params";
import { getPostById } from "../../services/posts/getPostById.service";
import { NotFoundError } from "../../errors/NotFoundError";
import { messages } from "../../messages";
import { ForbiddenError } from "../../errors/ForbiddenError";
import { deletePost } from "../../services/posts/deletePost.service";
import { TDeletePostResponse, TMainResponse } from "../../types/responses";
import { DatabaseError } from "../../errors/DatabaseError";

export async function deletePostController(req: Request<TDeletePostParams>, res: Response<TMainResponse<TDeletePostResponse>>, next: NextFunction) {
    const { postId } = req.params

    try {
        const existingPost = await getPostById(postId)

        if (!existingPost) {
            return next(new NotFoundError(messages.post.postNotFound))
        }

        if (res.locals.userId !== existingPost.authorId) {
            return next(new ForbiddenError(messages.forbidden.notPostAuthor))
        }

        const deletedPost = await deletePost(postId)

        return res.status(200).json({
            statusCode: 200, 
            message: messages.post.postDeleted, 
            data: {
                post: deletedPost
            }
        })
    } catch (error) {
        console.error(error)
        next(new DatabaseError())
    }
}