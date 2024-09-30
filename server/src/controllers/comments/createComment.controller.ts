import { NextFunction, Request, Response } from "express";
import { DatabaseError } from "../../errors/DatabaseError";
import { commentSchema, TCommentSchema } from "../../dtos/comment.dto";
import { TCreateCommentParams } from "../../types/params";
import { BadRequestError } from "../../errors/BadRequestError";
import { fromZodError } from "zod-validation-error";
import { getPostById } from "../../services/posts/getPostById.service";
import { NotFoundError } from "../../errors/NotFoundError";
import { messages } from "../../messages";
import { createComment } from "../../services/comments/createComment.service";
import { TMainResponse } from "../../types/responses";
import { TCommentReponse } from "../../types/responses/comment.response";

export async function createCommentController(
    req: Request<TCreateCommentParams, {}, TCommentSchema>, 
    res: Response<TMainResponse<TCommentReponse>>, 
    next: NextFunction
) {
    const { content } = req.body
    const { postId } = req.params

    try {
        const existingPost = await getPostById(postId)

        if (!existingPost) {
            return next(new NotFoundError(messages.post.postNotFound))
        }

        const commentValidation = commentSchema.safeParse(req.body)

        if (!commentValidation.success) {
            return next(new BadRequestError(fromZodError(commentValidation.error).details[0].message))
        }

        const createdComment = await createComment({ content }, postId, res.locals.userId)

        return res.status(201).json({
            statusCode: 201,
            message: messages.comment.commentCreated,
            data: {
                comment: createdComment
            }
        })
    } catch (error) {
        console.error()
        next(new DatabaseError())
    }
}