import { NextFunction, Request, Response } from "express";
import { DatabaseError } from "../../errors/DatabaseError";
import { TRatePostParams } from "../../types/params";
import { getPostById } from "../../services/posts/getPostById.service";
import { NotFoundError } from "../../errors/NotFoundError";
import { messages } from "../../messages";
import { ratePostSchema, TRatePostSchema } from "../../dtos/ratePost.dto";
import { BadRequestError } from "../../errors/BadRequestError";
import { fromZodError } from "zod-validation-error";
import { updatePostRate } from "../../services/ratings/updatePostRate.service";
import { TMainResponse } from "../../types/responses";
import { TPostRatingResponse } from "../../types/responses/rating.response";

export async function ratePostController(
    req: Request<TRatePostParams, {}, TRatePostSchema>, 
    res: Response<TMainResponse<TPostRatingResponse>>, 
    next: NextFunction
) {
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

        const postRated = await updatePostRate({ value }, postId, res.locals.userId)

        return res.status(200).json({
            statusCode: 200,
            message: messages.rating.postRated,
            data: {
                rating: postRated
            }
        })
    } catch (error) {
        console.error(error)
        next(new DatabaseError())
    }
}