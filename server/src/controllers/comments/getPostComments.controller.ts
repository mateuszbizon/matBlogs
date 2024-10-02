import { NextFunction, Request, Response } from "express";
import { DatabaseError } from "../../errors/DatabaseError";
import { TGetPostCommentsParams } from "../../types/params";
import { getPostById } from "../../services/posts/getPostById.service";
import { BadRequestError } from "../../errors/BadRequestError";
import { messages } from "../../messages";
import { getPostComments } from "../../services/comments/getPostComments.service";
import { TMainResponse } from "../../types/responses";
import { TGetPostCommentsResponse } from "../../types/responses/comment.response";

export async function getPostCommentsController(req: Request<TGetPostCommentsParams>, res: Response<TMainResponse<TGetPostCommentsResponse>>, next: NextFunction) {
    const { postId } = req.params
    
    try {
        const existingPost = await getPostById(postId)

        if (!existingPost) {
            return next(new BadRequestError(messages.post.postNotFound))
        }

        const postComments = await getPostComments(postId)

        return res.status(200).json({
            statusCode: 200,
            message: messages.comment.commentsRetrieved,
            data: {
                comments: postComments
            }
        })
    } catch (error) {
        console.error(error)
        next(new DatabaseError)
    }
}