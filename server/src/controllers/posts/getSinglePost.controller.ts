import { NextFunction, Request, Response } from "express";
import { TGetSinglePostParams } from "../../types/params";
import { NotFoundError } from "../../errors/NotFoundError";
import { messages } from "../../messages";
import { TGetSinglePostResponse, TMainResponse } from "../../types/responses";
import { DatabaseError } from "../../errors/DatabaseError";
import { getCompletePost } from "../../services/posts/getCompletePost";

export async function getSinglePostController(
    req: Request<TGetSinglePostParams>, 
    res: Response<TMainResponse<TGetSinglePostResponse>>, 
    next: NextFunction
) {
    const { slug } = req.params

    try {
        const existingPost = await getCompletePost(slug)

        if (!existingPost) {
            return next(new NotFoundError(messages.post.postNotFound))
        }

        return res.status(200).json({
            statusCode: 200, 
            message: messages.post.postRetrieved, 
            data: {
                post: existingPost
            }
        })
    } catch (error) {
        console.error(error)
        next(new DatabaseError())
    }
}