import { Request, Response, NextFunction } from "express";
import { DatabaseError } from "../../errors/DatabaseError";
import { signInSchema, TSignInSchema } from "../../dtos/signIn.dto";
import { getUserByUsername } from "../../services/users/getUserByUsername.service";
import { BadRequestError } from "../../errors/BadRequestError";
import { messages } from "../../messages";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { fromZodError } from "zod-validation-error";
import { TMainResponse } from "../../types/responses";
import { TSignInResponse } from "../../types/responses/user.response";

export async function signInController(req: Request<{}, {}, TSignInSchema>, res: Response<TMainResponse<TSignInResponse>>, next: NextFunction) {
    const { username, password } = req.body

    try {
        const resultValidation = signInSchema.safeParse(req.body)

        if (!resultValidation.success) {
            return next(new BadRequestError(fromZodError(resultValidation.error).details[0].message))
        }

        const existingUser = await getUserByUsername(username)

        if (!existingUser) {
            return next(new BadRequestError(messages.auth.invalidSignIn))
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)

        if (!isPasswordCorrect) {
            return next(new BadRequestError(messages.auth.invalidSignIn))
        }

        const token = jwt.sign({
            id: existingUser.id, 
            username: existingUser.username, 
            name: existingUser.name
        }, "authToken", { expiresIn: "3d" })

        const isProduction = process.env.NODE_ENV === 'production';

        res.cookie("authToken", token, {
            httpOnly: true,
            secure: isProduction,
            maxAge: 3 * 24 * 60 * 60 * 1000
        })

        res.status(200).json({
            statusCode: 200, 
            message: messages.auth.signedIn, 
            data: {
                id: existingUser.id, 
                name: existingUser.name, 
                username: existingUser.username,
                userPhoto: existingUser.profile?.photo
            }
        })
    } catch (error) {
        console.error(error)
        next(new DatabaseError())
    }
}