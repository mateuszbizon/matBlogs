import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function deleteComment(commentId: string) {
    return await prisma.comment.delete({
        where: {
            id: commentId
        }
    })
}