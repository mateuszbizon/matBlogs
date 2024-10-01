import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function searchUsers(search: string) {
    return await prisma.user.findMany({
        where: {
            OR: [
                {
                    username: {
                        contains: search,
                        mode: 'insensitive'
                    }
                },
                {
                    name: {
                        contains: search,
                        mode: "insensitive"
                    }
                }
            ],
        },
        select: {
            id: true,
            username: true,
            name: true,
        },
        orderBy: {
            username: "asc"
        },
    })
}