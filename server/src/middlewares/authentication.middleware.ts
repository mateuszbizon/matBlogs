import { Request, Response, NextFunction } from "express"
import { AuthenticationError } from "../errors/AuthenticationError"
import jwt from "jsonwebtoken"
import { messages } from "../messages"

export function authenticationMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.headers.authorization?.split(" ")[1]

        if (!token) {
            return next(new AuthenticationError(messages.auth.tokenInvalid))
        }

        jwt.verify(token, "authToken")

        next()
    } catch (error) {
        next(new AuthenticationError())
    }
}