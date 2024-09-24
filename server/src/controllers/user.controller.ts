import { NextFunction, Request, Response } from "express";
import { createUser, getUserByUsername } from "../services/user.service";
import { BadRequestError } from "../errors/BadRequestError";
import { DatabaseError } from "../errors/DatabaseError";
import { TUserSchema } from "../dtos/user.dto";
import bcrypt from "bcryptjs"

export async function signUpController(req: Request<{}, {}, TUserSchema>, res: Response, next: NextFunction) {
    const { username, name, password } = req.body

    try {
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