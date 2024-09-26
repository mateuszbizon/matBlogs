import { z } from "zod"

const titleMinLength = 1;
const titleMaxLength = 50;
const titleLengthMessage = `Title length must be between ${titleMinLength} and ${titleMaxLength}`

export const postSchema = z.object({
    title: z.string().min(titleMinLength, titleLengthMessage).max(titleMaxLength, titleLengthMessage),
    content: z.string().min(1, "Content can't be empty.")
})

export type TPostSchema = z.infer<typeof postSchema>