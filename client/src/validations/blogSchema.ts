import { z } from "zod"

const titleMinLength = 1;
const titleMaxLength = 50;
const titleLengthMessage = `Title length must be between ${titleMinLength} and ${titleMaxLength}`
const acceptedFileTypes = ["image/jpeg", "image/png", "image/gif"]

export const blogSchema = z.object({
    title: z.string().min(titleMinLength, titleLengthMessage).max(titleMaxLength, titleLengthMessage),
    titlePhoto: z.any().refine(
        (file) => {
            return acceptedFileTypes.includes(file?.type)
        }, { message: "Invalid file type. Only JPEG, PNG, and GIF are allowed." }
    )
})

export type TBlogSchema = z.infer<typeof blogSchema>