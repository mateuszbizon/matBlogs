import { z } from "zod"

const allowedDecimalNumbers = ["0", "5"]

export const ratePostSchema = z.object({
    value: z.number().min(0, "Minimum value is 0").max(5, "Maximum value is 5").refine(value => {
        const decimal = value.toString().split(".")[1]

        if (decimal?.length > 1) {
            return false
        }

        if (!decimal || allowedDecimalNumbers.includes(decimal)) {
            return true
        }

        return false
    }, "Maximum one digit (0 or 5) after the decimal point.")
})

export type TRatePostSchema = z.infer<typeof ratePostSchema>