import { NextFunction, Request, Response } from "express";
import { AuthenticationError } from "../../errors/AuthenticationError";
import jwt from "jsonwebtoken";
import { messages } from "../../messages";
import { TMainResponse } from "../../types/responses";

export function verifyJwtController(req: Request, res: Response<TMainResponse>, next:NextFunction) {
    try {
        const token = req.headers.authorization?.split(" ")[1]

        if (!token) {
            return next(new AuthenticationError(messages.auth.tokenInvalid))
        }

        jwt.verify(token, "authToken")

        return res.status(200).json({
            statusCode: 200, 
            message: messages.auth.userStillSignedIn
        })
    } catch (error) {
        next(new AuthenticationError())
    }
}