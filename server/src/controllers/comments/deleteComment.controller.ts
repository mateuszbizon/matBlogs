import { NextFunction, Request, Response } from "express";
import { DatabaseError } from "../../errors/DatabaseError";
import { TCreateCommentParams, TDeleteCommentParams } from "../../types/params";
import { getPostById } from "../../services/posts/getPostById.service";
import { NotFoundError } from "../../errors/NotFoundError";
import { messages } from "../../messages";
import { TMainResponse } from "../../types/responses";
import { getCommentById } from "../../services/comments/getCommentById.service";
import { TCommentReponse } from "../../types/responses/comment.response";
import { deleteComment } from "../../services/comments/deleteComment.service";
import { ForbiddenError } from "../../errors/ForbiddenError";

export async function deleteCommentController(
    req: Request<TDeleteCommentParams>, 
    res: Response<TMainResponse<TCommentReponse>>, 
    next: NextFunction
) {
    const { commentId } = req.params

    try {
        const existingComment = await getCommentById(commentId)

        if (!existingComment) {
            return next(new NotFoundError(messages.comment.commentNotFound))
        }

        if (res.locals.userId !== existingComment.authorId) {
            return next(new ForbiddenError(messages.forbidden.notCommentAuthor))
        }

        const deletedComment = await deleteComment(commentId)
        
        return res.status(200).json({
            statusCode: 200,
            message: messages.comment.commentDeleted,
            data: {
                comment: deletedComment
            }
        })
    } catch (error) {
        console.error(error)
        next(new DatabaseError())
    }
}