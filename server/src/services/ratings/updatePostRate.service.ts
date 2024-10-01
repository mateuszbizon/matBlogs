import { PrismaClient } from "@prisma/client";
import { TRatePostSchema } from "../../dtos/ratePost.dto";

const prisma = new PrismaClient()

export async function updatePostRate(postRate: TRatePostSchema, postId: string, userId: string) {
    return await prisma.postRating.upsert({
        where: {
            postId_userId: {
                postId: postId,
                userId: userId
            }
        },
        create: {
            value: postRate.value,
            postId: postId,
            userId: userId
        },
        update: {
            value: postRate.value
        }
    })
}