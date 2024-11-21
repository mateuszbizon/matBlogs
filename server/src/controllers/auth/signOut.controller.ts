import { NextFunction, Response, Request } from "express";
import { TMainResponse } from "../../types/responses";
import { messages } from "../../messages";
import { DatabaseError } from "../../errors/DatabaseError";

export function signOutController(req: Request, res: Response<TMainResponse>, next: NextFunction) {
    try {
        res.clearCookie("authToken")

        return res.status(200).json({
            statusCode: 200,
            message: messages.auth.userSignedOut,
        })
    } catch (error) {
        console.error(error)
        next(new DatabaseError())
    }
}