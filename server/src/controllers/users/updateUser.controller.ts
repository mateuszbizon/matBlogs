import { NextFunction, Request, Response } from "express";
import { getUserByUsername } from "../../services/users/getUserByUsername.service";
import { BadRequestError } from "../../errors/BadRequestError";
import { DatabaseError } from "../../errors/DatabaseError";
import { fromZodError } from "zod-validation-error"
import { messages } from "../../messages";
import { TMainResponse } from "../../types/responses";
import { TUpdateUserResponse } from "../../types/responses/user.response";
import { TUpdateUserSchema, updateUserSchema } from "../../dtos/updateUser.dto";
import { updateUser } from "../../services/users/updateUser.service";
import { getUserById } from "../../services/users/getUserById.service";
import { generateJwt } from "../../utils/generateJwt";

export async function updateUserController(req: Request<{}, {}, TUpdateUserSchema>, res: Response<TMainResponse<TUpdateUserResponse>>, next: NextFunction) {
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

        const token = generateJwt({
            id: updatedUser.id,
            name: updatedUser.name,
            username: updatedUser.username,
            userPhoto: updatedUser.profile?.photo
        })

        const isProduction = process.env.NODE_ENV === 'production';

        res.cookie("authToken", token, {
            httpOnly: true,
            secure: isProduction,
            maxAge: 3 * 24 * 60 * 60 * 1000,
            sameSite: "none",
        })

        return res.status(200).json({
            statusCode: 200,
            message: messages.user.userUpdated,
            data: {
                name: updatedUser.name,
                username: updatedUser.username
            }
        })
    } catch (error) {
        console.error(error)
        next(new DatabaseError())
    }
}