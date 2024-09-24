import { z } from "zod"

export const userSchema = z.object({
    username: z.string(),
    name: z.string(),
    password: z.string()
})

export type TUserSchema = z.infer<typeof userSchema>