import { NextFunction, Request, Response } from "express";
import { DatabaseError } from "../../errors/DatabaseError";
import { TSearchPostsQueryParams } from "../../types/query-params";
import { BadRequestError } from "../../errors/BadRequestError";
import { messages } from "../../messages";
import { TMainResponse } from "../../types/responses";
import { searchPosts } from "../../services/posts/searchPosts.service";
import { TSearchPostsResponse } from "../../types/responses/post.response";

export async function searchPostsController(
    req: Request<{}, {}, {}, TSearchPostsQueryParams>, 
    res: Response<TMainResponse<TSearchPostsResponse>>, 
    next: NextFunction
) {
    const { search } = req.query

    try {
        if (!search) {
            return next(new BadRequestError(messages.search.searchEmpty))
        }

        const posts = await searchPosts(search)

        return res.status(200).json({
            statusCode: 200,
            message: messages.post.postsRetrieved,
            data: {
                posts: posts
            }
        })
    } catch (error) {
        console.error(error)
        next(new DatabaseError())
    }
}