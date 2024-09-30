import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function getCommentById(commentId: string) {
    return await prisma.comment.findUnique({
        where: {
            id: commentId
        }
    })
}