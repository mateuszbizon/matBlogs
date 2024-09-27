import { Request, Response, NextFunction } from "express"
import { AuthenticationError } from "../errors/AuthenticationError"
import jwt, { JwtPayload } from "jsonwebtoken"
import { messages } from "../messages"

export function authenticationMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.headers.authorization?.split(" ")[1]

        if (!token) {
            return next(new AuthenticationError(messages.auth.tokenInvalid))
        }

        const decodedData = jwt.verify(token, "authToken") as JwtPayload

        res.locals.userId = decodedData.id

        if (!res.locals.userId) {
            return next(new AuthenticationError(messages.auth.tokenInvalid))
        }

        next()
    } catch (error) {
        next(new AuthenticationError())
    }
}