import { NextFunction, Request, Response } from "express";
import { getUserByUsername } from "../../services/users/getUserByUsername.service";
import { BadRequestError } from "../../errors/BadRequestError";
import { DatabaseError } from "../../errors/DatabaseError";
import { fromZodError } from "zod-validation-error"
import { messages } from "../../messages";
import { TMainResponse } from "../../types/responses";
import { TUserResponse } from "../../types/responses/user.response";
import { TUpdateUserSchema, updateUserSchema } from "../../dtos/updateUser.dto";
import { updateUser } from "../../services/users/updateUser.service";
import { getUserById } from "../../services/users/getUserById.service";

export async function updateUserController(req: Request<{}, {}, TUpdateUserSchema>, res: Response<TMainResponse<TUserResponse>>, next: NextFunction) {
    const { username, name } = req.body

    try {
        const existingUser = await getUserById(res.locals.userId)

        if (!existingUser) {
            return next(new BadRequestError(messages.user.userNotFound))
        }

        const validationResult = updateUserSchema.safeParse(req.body)

        if (!validationResult.success) {
            return next(new BadRequestError(fromZodError(validationResult.error).details[0].message))
        }

        const existingUsername = await getUserByUsername(username)

        if (existingUsername && existingUsername.username !== existingUser.username) {
            return next(new BadRequestError(messages.user.usernameAlreadyExists))
        }

        const updatedUser = await updateUser({ username, name }, res.locals.userId)

        return res.status(200).json({
            statusCode: 200,
            message: messages.user.userUpdated,
            data: {
                user: updatedUser
            }
        })
    } catch (error) {
        console.error(error)
        next(new DatabaseError())
    }
}