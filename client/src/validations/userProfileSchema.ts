import { z } from "zod"

const acceptedFileTypes = ["image/jpeg", "image/png", "image/gif"]

export const userProfileSchema = z.object({
    photo: z.any().refine(
        (file) => {
            return acceptedFileTypes.includes(file?.type)
        }, { message: "Invalid file type. Only JPEG, PNG, and GIF are allowed." }
    )
})

export type TUserProfileSchema = z.infer<typeof userProfileSchema>