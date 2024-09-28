import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function deletePost(postId: string) {
    return await prisma.post.delete({
        where: {
            id: postId,
        }
    })
}