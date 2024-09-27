import { z } from "zod"

export const fileSchema = z.object({
    mimetype: z.enum(["image/jpeg", "image/png", "image/gif"], {
        errorMap: () => ({ message: "Invalid file type. Only JPEG, PNG, and GIF are allowed." }),
    }), 
})

export type TFileSchema = z.infer<typeof fileSchema>