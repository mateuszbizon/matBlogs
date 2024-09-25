import { Request, Response, NextFunction } from "express"
import { AuthenticationError } from "../errors/AuthenticationError"
import jwt from "jsonwebtoken"

export function authenticationMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.headers.authorization?.split(" ")[1]

        if (!token) {
            return next(new AuthenticationError())
        }

        jwt.verify(token, "authToken")

        next()
    } catch (error) {
        next(new AuthenticationError())
    }
}