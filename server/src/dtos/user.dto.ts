import { z } from "zod"

export const userSchema = z.object({
    username: z.string().min(5, "Length of username must be between 5 and 20.").max(20, "Length of username must be between 5 and 20."),
    name: z.string().min(1, "Name can't be empty."),
    password: z.string().min(1, "Password can't be empty.")
})

export type TUserSchema = z.infer<typeof userSchema>