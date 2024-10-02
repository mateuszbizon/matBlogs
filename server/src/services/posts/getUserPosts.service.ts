import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function getUserPosts(userId: string) {
    return await prisma.post.findMany({
        where: {
            authorId: userId
        }
    })
}