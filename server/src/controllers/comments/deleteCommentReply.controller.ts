import { NextFunction, Request, Response } from "express";
import { DatabaseError } from "../../errors/DatabaseError";
import { TDeleteCommentReplyParams } from "../../types/params";
import { NotFoundError } from "../../errors/NotFoundError";
import { messages } from "../../messages";
import { TMainResponse } from "../../types/responses";
import { TCommentReplyResponse } from "../../types/responses/comment.response";
import { ForbiddenError } from "../../errors/ForbiddenError";
import { getCommentReplyById } from "../../services/comments/getCommentReplyById.service";
import { deleteCommentReply } from "../../services/comments/deleteCommentReply.service";

export async function deleteCommentReplyController(
    req: Request<TDeleteCommentReplyParams>, 
    res: Response<TMainResponse<TCommentReplyResponse>>, 
    next: NextFunction
) {
    const { commentReplyId } = req.params

    try {
        const existingComment = await getCommentReplyById(commentReplyId)

        if (!existingComment) {
            return next(new NotFoundError(messages.comment.commentNotFound))
        }

        if (res.locals.userId !== existingComment.authorId) {
            return next(new ForbiddenError(messages.forbidden.notCommentAuthor))
        }

        const deletedCommentReply = await deleteCommentReply(commentReplyId)

        return res.status(200).json({
            statusCode: 200,
            message: messages.comment.commentDeleted,
            data: {
                commentReply: deletedCommentReply
            }
        })
    } catch (error) {
        console.error()
        next(new DatabaseError())
    }
}