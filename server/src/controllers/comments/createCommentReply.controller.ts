import { NextFunction, Request, Response } from "express";
import { DatabaseError } from "../../errors/DatabaseError";
import { commentSchema, TCommentSchema } from "../../dtos/comment.dto";
import { TCreateCommentReplyParams } from "../../types/params";
import { BadRequestError } from "../../errors/BadRequestError";
import { fromZodError } from "zod-validation-error";
import { NotFoundError } from "../../errors/NotFoundError";
import { messages } from "../../messages";
import { TMainResponse } from "../../types/responses";
import { TCommentReplyResponse } from "../../types/responses/comment.response";
import { getCommentById } from "../../services/comments/getCommentById.service";
import { createCommentReply } from "../../services/comments/createCommentReply.service";
import { getUserByUsername } from "../../services/users/getUserByUsername.service";

export async function createCommentReplyController(
    req: Request<TCreateCommentReplyParams, {}, TCommentSchema>, 
    res: Response<TMainResponse<TCommentReplyResponse>>, 
    next: NextFunction
) {
    const { content } = req.body
    const { commentId, username } = req.params

    try {
        const existingComment = await getCommentById(commentId)

        if (!existingComment) {
            return next(new NotFoundError(messages.comment.commentNotFound))
        }

        const existingUser = await getUserByUsername(username)

        if (!existingUser) {
            return next(new BadRequestError(messages.user.userNotFound))
        }

        const commentValidation = commentSchema.safeParse(req.body)

        if (!commentValidation.success) {
            return next(new BadRequestError(fromZodError(commentValidation.error).details[0].message))
        }

        const createdReply = await createCommentReply({ content }, commentId, res.locals.userId, username)

        return res.status(201).json({
            statusCode: 201,
            message: messages.comment.commentReplyCreated,
            data: {
                commentReply: createdReply
            }
        })
    } catch (error) {
        console.error(error)
        next(new DatabaseError())
    }
}