import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function getCommentReplyById(commentId: string) {
    return await prisma.commentReply.findUnique({
        where: {
            id: commentId
        }
    })
}