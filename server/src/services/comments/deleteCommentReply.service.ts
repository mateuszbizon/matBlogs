import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function deleteCommentReply(commentId: string) {
    return await prisma.commentReply.delete({
        where: {
            id: commentId
        }
    })
}