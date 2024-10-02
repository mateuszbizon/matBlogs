import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function searchPosts(search: string) {
    return await prisma.post.findMany({
        where: {
            OR: [
                {
                    title: {
                        contains: search,
                        mode: "insensitive"
                    }
                },
                {
                    content: {
                        contains: search,
                        mode: "insensitive"
                    }
                }
            ]
        },
        orderBy: {
            title: "asc"
        }
    })
}