import { NextFunction, Request, Response } from "express";
import { getUserByUsername } from "../../services/users/getUserByUsername.service";
import { BadRequestError } from "../../errors/BadRequestError";
import { DatabaseError } from "../../errors/DatabaseError";
import { fromZodError } from "zod-validation-error"
import { messages } from "../../messages";
import { TMainResponse, TUpdateUserResponse } from "../../types/responses";
import { TUpdateUserSchema, updateUserSchema } from "../../dtos/updateUser.dto";
import { TUpdateUserParams } from "../../types/params";
import { updateUser } from "../../services/users/updateUser.service";
import { getUserById } from "../../services/users/getUserById.service";
import { ForbiddenError } from "../../errors/ForbiddenError";

export async function updateUserController(req: Request<TUpdateUserParams, {}, TUpdateUserSchema>, res: Response<TMainResponse<TUpdateUserResponse>>, next: NextFunction) {
    const { username, name } = req.body
    const { userId } = req.params

    try {
        const existingUser = await getUserById(userId)

        if (!existingUser) {
            return next(new BadRequestError(messages.user.userNotFound))
        }

        if (res.locals.userId !== existingUser.id) {
            return next(new ForbiddenError(messages.forbidden.notAuthor))
        }

        const validationResult = updateUserSchema.safeParse(req.body)

        if (!validationResult.success) {
            return next(new BadRequestError(fromZodError(validationResult.error).details[0].message))
        }

        const existingUsername = await getUserByUsername(username)

        if (existingUsername && existingUsername.username !== existingUser.username) {
            return next(new BadRequestError(messages.user.usernameAlreadyExists))
        }

        const updatedUser = await updateUser({ username, name }, userId)

        return res.status(200).json({
            statusCode: 200,
            message: messages.user.userUpdated,
            data: {
                user: updatedUser
            }
        })
    } catch (error) {
        next(new DatabaseError())
    }
}