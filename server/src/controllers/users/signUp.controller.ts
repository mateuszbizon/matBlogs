import { NextFunction, Request, Response } from "express";
import { getUserByUsername } from "../../services/users/getUserByUsername.service";
import { createUser } from "../../services/users/createUser.service";
import { BadRequestError } from "../../errors/BadRequestError";
import { DatabaseError } from "../../errors/DatabaseError";
import { TUserSchema, userSchema } from "../../dtos/user.dto";
import bcrypt from "bcryptjs"
import { fromZodError } from "zod-validation-error"
import { messages } from "../../messages";
import { TMainResponse, TSignUpResponse, } from "../../types/responses";

export async function signUpController(req: Request<{}, {}, TUserSchema>, res: Response<TMainResponse<TSignUpResponse>>, next: NextFunction) {
    const { username, name, password } = req.body

    try {
        const validationResult = userSchema.safeParse(req.body)

        if (!validationResult.success) {
            return next(new BadRequestError(fromZodError(validationResult.error).details[0].message))
        }

        const existingUser = await getUserByUsername(username)

        if (existingUser) {
            return next(new BadRequestError(messages.user.usernameAlreadyExists))
        }

        const hashedPassword = await bcrypt.hash(password, 12)

        const createdUser = await createUser({ username, name, password: hashedPassword })

        return res.status(201).json({
            statusCode: 201, 
            message: messages.user.userCreated, 
            data: {
                user: createdUser
            }
        })
    } catch (error) {
        next(new DatabaseError())
    }
}