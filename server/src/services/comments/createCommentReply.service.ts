import { PrismaClient } from "@prisma/client";
import { TCommentSchema } from "../../dtos/comment.dto";

const prisma = new PrismaClient()

export async function createCommentReply(comment: TCommentSchema, commentId: string, userId: string, username: string) {
    return await prisma.commentReply.create({
        data: {
            content: comment.content,
            replyingTo: username,
            commentId: commentId,
            authorId: userId
        },
        include: {
            author: {
                select: {
                    id: true,
                    name: true,
                    username: true,
                    profile: true,
                }
            }
        }
    })
}