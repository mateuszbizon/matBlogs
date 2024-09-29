import { NextFunction, Request, Response } from "express";
import { DatabaseError } from "../../errors/DatabaseError";
import { TUpdateUserProfileParams } from "../../types/params";
import { getUserById } from "../../services/users/getUserById.service";
import { NotFoundError } from "../../errors/NotFoundError";
import { messages } from "../../messages";
import { fileSchema } from "../../dtos/file.dto";
import { BadRequestError } from "../../errors/BadRequestError";
import { fromZodError } from "zod-validation-error";
import { uploadImageToCloudinary } from "../../utils/cloudinary";
import { updateUserProfile } from "../../services/users/updateUserProfile.service";
import { TMainResponse, TUpdateUserProfileResponse } from "../../types/responses";
import { deleteTemporaryFile } from "../../utils/deleteFile";

export async function updateUserProfileController(
    req: Request<TUpdateUserProfileParams>, 
    res: Response<TMainResponse<TUpdateUserProfileResponse>>, 
    next: NextFunction
) {
    const photo = req.file
    const { userId } = req.params

    try {
        const existingUser = await getUserById(userId)

        if (!existingUser) {
            return next(new NotFoundError(messages.user.userNotFound))
        }

        if (!photo) {
            return next(new BadRequestError(messages.file.fileNotProvided))
        }

        const fileValidation = fileSchema.safeParse(photo)

        if (!fileValidation.success) {
            return next(new BadRequestError(fromZodError(fileValidation.error).details[0].message))
        }

        const imageUrl = await uploadImageToCloudinary(photo.path)

        if (!imageUrl) {
            return next(new DatabaseError())
        }

        const updatedProfile = await updateUserProfile(userId, imageUrl)

        return res.status(200).json({
            statusCode: 200,
            message: messages.user.userProfileUpdated,
            data: {
                profile: updatedProfile
            }
        })
    } catch (error) {
        console.error(error)
        next(new DatabaseError())
    } finally {
        if (photo) {
            deleteTemporaryFile(photo.path)
        }
    }
}