import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function getCompleteUser(username: string) {
    return await prisma.user.findUnique({
        where: {
            username: username
        },
        select: {
            id: true,
            username: true,
            name: true,
            profile: true,
            _count: {
                select: {
                    posts: true
                }
            }
        },
    })
}