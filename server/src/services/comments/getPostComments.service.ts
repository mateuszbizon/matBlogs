import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function getPostComments(postId: string) {
    return await prisma.comment.findMany({
        where: {
            postId: postId
        },
        include: {
            commentReplies: true
        }
    })
}