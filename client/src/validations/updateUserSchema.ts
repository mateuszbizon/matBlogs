import { z } from "zod"

export const usernameMinLength = 5
export const usernameMaxLength = 20
export const usernameLengthMessage = `Length of username must be between ${usernameMinLength} and ${usernameMaxLength}.`

export const updateUserSchema = z.object({
    username: z.string().min(usernameMinLength, usernameLengthMessage).max(usernameMaxLength, usernameLengthMessage),
    name: z.string().min(1, "Name can't be empty."),
})

export type TUpdateUserSchema = z.infer<typeof updateUserSchema>