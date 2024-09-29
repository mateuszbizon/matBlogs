import { z } from "zod"
import { usernameLengthMessage, usernameMaxLength, usernameMinLength } from "./user.dto"

export const updateUserSchema = z.object({
    username: z.string().min(usernameMinLength, usernameLengthMessage).max(usernameMaxLength, usernameLengthMessage),
    name: z.string().min(1, "Name can't be empty."),
})

export type TUpdateUserSchema = z.infer<typeof updateUserSchema>