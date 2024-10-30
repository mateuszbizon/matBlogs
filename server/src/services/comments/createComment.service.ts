import { PrismaClient } from "@prisma/client";
import { TCommentSchema } from "../../dtos/comment.dto";

const prisma = new PrismaClient()

export async function createComment(comment: TCommentSchema, postId: string, userId: string) {
    return await prisma.comment.create({
        data: {
            content: comment.content,
            postId: postId,
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