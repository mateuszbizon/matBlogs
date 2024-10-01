import { NextFunction, Request, Response } from "express";
import { DatabaseError } from "../../errors/DatabaseError";
import { TRatePostParams } from "../../types/params";
import { getPostById } from "../../services/posts/getPostById.service";
import { NotFoundError } from "../../errors/NotFoundError";
import { messages } from "../../messages";
import { ratePostSchema, TRatePostSchema } from "../../dtos/ratePost.dto";
import { BadRequestError } from "../../errors/BadRequestError";
import { fromZodError } from "zod-validation-error";

export async function ratePostController(req: Request<TRatePostParams, {}, TRatePostSchema>, res: Response, next: NextFunction) {
    const { postId } = req.params
    const { value } = req.body
    
    try {
        const existingPost = await getPostById(postId)

        if (!existingPost) {
            return next(new NotFoundError(messages.post.postNotFound))
        }

        const validationResult = ratePostSchema.safeParse(req.body)

        if (!validationResult.success) {
            return next(new BadRequestError(fromZodError(validationResult.error).details[0].message))
        }

        
    } catch (error) {
        console.error(error)
        next(new DatabaseError())
    }
}