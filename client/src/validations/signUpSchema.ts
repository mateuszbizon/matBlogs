import { z } from "zod"

export const usernameMinLength = 5
export const usernameMaxLength = 20
export const usernameLengthMessage = `Length of username must be between ${usernameMinLength} and ${usernameMaxLength}.`

export const signUpSchema = z.object({
    username: z.string().min(usernameMinLength, usernameLengthMessage).max(usernameMaxLength, usernameLengthMessage),
    name: z.string().min(1, "Name can't be empty."),
    password: z.string().min(1, "Password can't be empty.")
})

export type TSignUpSchema = z.infer<typeof signUpSchema>