import { z } from "zod"

export const commentSchema = z.object({
    content: z.string().min(1, "Comment can't be empty.")
})

export type TCommentSchema = z.infer<typeof commentSchema>