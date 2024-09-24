import { NextFunction, Request, Response } from "express";
import { createUser, getUserByUsername } from "../services/user.service";
import { BadRequestError } from "../errors/BadRequestError";
import { DatabaseError } from "../errors/DatabaseError";
import { TUserSchema, userSchema } from "../dtos/user.dto";
import bcrypt from "bcryptjs"
import { fromZodError } from "zod-validation-error"

export async function signUpController(req: Request<{}, {}, TUserSchema>, res: Response, next: NextFunction) {
    const { username, name, password } = req.body

    try {
        const validationResult = userSchema.safeParse(req.body)

        if (!validationResult.success) {
            return next(new BadRequestError(fromZodError(validationResult.error).details[0].message))
        }

        const existingUser = await getUserByUsername(username)

        if (existingUser) {
            return next(new BadRequestError("User with given username already exists."))
        }

        const hashedPassword = await bcrypt.hash(password, 12)

        const createdUser = await createUser({ username, name, password: hashedPassword })

        return res.status(201).json({ statusCode: 201, message: "User created.", data: createdUser })
    } catch (error) {
        next(new DatabaseError())
    }
}