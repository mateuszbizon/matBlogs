import { NextFunction, Request, Response } from "express";
import { DatabaseError } from "../../errors/DatabaseError";
import { getUserById } from "../../services/users/getUserById.service";
import { NotFoundError } from "../../errors/NotFoundError";
import { messages } from "../../messages";
import { fileSchema } from "../../dtos/file.dto";
import { BadRequestError } from "../../errors/BadRequestError";
import { fromZodError } from "zod-validation-error";
import { uploadImageToCloudinary } from "../../utils/cloudinary";
import { updateUserProfile } from "../../services/users/updateUserProfile.service";
import { TMainResponse } from "../../types/responses";
import { TProfileResponse } from "../../types/responses/user.response";
import { deleteTemporaryFile } from "../../utils/deleteFile";
import { generateJwt } from "../../utils/generateJwt";

export async function updateUserProfileController(
    req: Request, 
    res: Response<TMainResponse<TProfileResponse>>, 
    next: NextFunction
) {
    const photo = req.file

    try {
        const existingUser = await getUserById(res.locals.userId)

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

        const updatedProfile = await updateUserProfile(res.locals.userId, imageUrl)

        const token = generateJwt({
            id: existingUser.id,
            name: existingUser.name,
            username: existingUser.username,
            userPhoto: updatedProfile.photo
        })

        const isProduction = process.env.NODE_ENV === 'production';

        res.cookie("authToken", token, {
            httpOnly: true,
            secure: isProduction,
            maxAge: 3 * 24 * 60 * 60 * 1000
        })

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