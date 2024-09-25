import { NextFunction, Request, Response } from "express";
import { deleteFile } from "../../utils/deleteFile";
import { DatabaseError } from "../../errors/DatabaseError";

export async function createPostController(req: Request, res: Response, next: NextFunction) {
    const postPhoto = req.file
    console.log(postPhoto)

    try {
        if (postPhoto) {
            deleteFile(postPhoto.path)
        }
    } catch (error) {
        next(new DatabaseError())
    }
}