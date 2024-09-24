import { Request, Response, NextFunction } from "express";
import { DatabaseError } from "../../errors/DatabaseError";
import { signInSchema, TSignInSchema } from "../../dtos/signIn.dto";
import { getUserByUsername } from "../../services/users/getUserByUsername.service";
import { BadRequestError } from "../../errors/BadRequestError";
import { messages } from "../../messages";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { fromZodError } from "zod-validation-error";

export async function signInController(req: Request<{}, {}, TSignInSchema>, res: Response, next: NextFunction) {
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

        const token = jwt.sign({ id: existingUser.id }, "authToken", { expiresIn: "3h" })

        res.status(200).json({ statusCode: 200, message: messages.auth.signedIn, data: token })
    } catch (error) {
        next(new DatabaseError())
    }
}