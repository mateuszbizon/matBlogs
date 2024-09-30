import { NextFunction, Request, Response } from "express";
import { DatabaseError } from "../../errors/DatabaseError";
import { TGetCompleteUserParams } from "../../types/params";
import { getCompleteUser } from "../../services/users/getCompleteUser.service";
import { NotFoundError } from "../../errors/NotFoundError";
import { messages } from "../../messages";
import { TGetSingleUserResponse, TMainResponse } from "../../types/responses";

export async function getSingleUserController(
    req: Request<TGetCompleteUserParams>, 
    res: Response<TMainResponse<TGetSingleUserResponse>>, 
    next: NextFunction
) {
    const { username } = req.params

    try {
        const existingUser = await getCompleteUser(username)

        if (!existingUser) {
            return next(new NotFoundError(messages.user.userNotFound))
        }

        return res.status(200).json({
            statusCode: 200,
            message: messages.user.userRetrieved,
            data: {
                user: {
                    id: existingUser.id,
                    name: existingUser.name,
                    username: existingUser.username,
                    profile: existingUser.profile,
                },
                postsAmount: existingUser._count.posts
            }
        })
    } catch (error) {
        console.error(error)
        next(new DatabaseError())
    }
}