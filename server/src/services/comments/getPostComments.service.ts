import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function getPostComments(postId: string) {
    return await prisma.comment.findMany({
        where: {
            postId: postId
        },
        include: {
            commentReplies: {
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
            },
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