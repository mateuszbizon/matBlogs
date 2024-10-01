import { NextFunction, Request, Response } from "express";
import { DatabaseError } from "../../errors/DatabaseError";
import { TSearchUsersQueryParams } from "../../types/query-params";
import { BadRequestError } from "../../errors/BadRequestError";
import { messages } from "../../messages";
import { searchUsers } from "../../services/users/searchUsers.service";
import { TMainResponse } from "../../types/responses";
import { TSearchUsersResponse } from "../../types/responses/user.response";

export async function searchUsersController(
    req: Request<{}, {}, {}, TSearchUsersQueryParams>, 
    res: Response<TMainResponse<TSearchUsersResponse>>, 
    next: NextFunction
) {
    const { search } = req.query

    try {
        if (!search) {
            return next(new BadRequestError(messages.search.searchEmpty))
        }

        const users = await searchUsers(search)

        return res.status(200).json({
            statusCode: 200,
            message: messages.user.usersRetrieved,
            data: {
                users: users,
                usersLength: users.length
            }
        })
    } catch (error) {
        console.error(error)
        next(new DatabaseError())
    }
}