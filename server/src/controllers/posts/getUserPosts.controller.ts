import { NextFunction, Request, Response } from "express";
import { DatabaseError } from "../../errors/DatabaseError";
import { TGetUserPostsParams } from "../../types/params";
import { getUserById } from "../../services/users/getUserById.service";
import { BadRequestError } from "../../errors/BadRequestError";
import { messages } from "../../messages";
import { getUserPosts } from "../../services/posts/getUserPosts.service";
import { TMainResponse } from "../../types/responses";
import { TGetUserPostsResponse } from "../../types/responses/post.response";
import { TGetUserPostsQueryParams } from "../../types/query-params";

export async function getUserPostsController(
    req: Request<TGetUserPostsParams, {}, {}, TGetUserPostsQueryParams>, 
    res: Response<TMainResponse<TGetUserPostsResponse>>, 
    next: NextFunction
) {
    const { userId } = req.params
    const page = parseInt(req.query.page) || 1
    
    try {
        const existingUser = await getUserById(userId)

        if (!existingUser) {
            return next(new BadRequestError(messages.user.userNotFound))
        }

        const userPosts = await getUserPosts(userId, page, req.query.sort)

        return res.status(200).json({
            statusCode: 200,
            message: messages.post.postsRetrieved,
            data: {
                posts: userPosts
            }
        })
    } catch (error) {
        console.error(error)
        next(new DatabaseError())
    }
}