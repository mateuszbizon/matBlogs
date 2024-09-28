import { NextFunction, Request, Response } from "express";
import { TGetSinglePostParams } from "../../types/params";
import { getPostById } from "../../services/posts/getPostById.service";
import { NotFoundError } from "../../errors/NotFoundError";
import { messages } from "../../messages";
import { TGetSinglePostResponse, TMainResponse } from "../../types/responses";
import { DatabaseError } from "../../errors/DatabaseError";

export async function getSinglePostController(
    req: Request<TGetSinglePostParams>, 
    res: Response<TMainResponse<TGetSinglePostResponse>>, 
    next: NextFunction
) {
    const { postId } = req.params

    try {
        const existingPost = await getPostById(postId)

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