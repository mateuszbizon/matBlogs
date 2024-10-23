import { NextFunction, Request, Response } from "express";
import { AuthenticationError } from "../../errors/AuthenticationError";
import jwt, { JwtPayload } from "jsonwebtoken";
import { messages } from "../../messages";
import { TMainResponse } from "../../types/responses";
import { TSignInResponse } from "../../types/responses/user.response";

export function verifyJwtController(req: Request, res: Response<TMainResponse<TSignInResponse>>, next:NextFunction) {
    try {
        const token = req.cookies.authToken

        if (!token) {
            return next(new AuthenticationError(messages.auth.tokenInvalid))
        }

        const decodedData = jwt.verify(token, "authToken") as JwtPayload

        return res.status(200).json({
            statusCode: 200, 
            message: messages.auth.userStillSignedIn,
            data: {
                id: decodedData.id,
                username: decodedData.username,
                name: decodedData.name
            }
        })
    } catch (error) {
        console.error(error)
        next(new AuthenticationError())
    }
}