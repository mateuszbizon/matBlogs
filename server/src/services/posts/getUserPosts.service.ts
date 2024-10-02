import { PrismaClient } from "@prisma/client";
import { getSortString } from "../../utils/getSortString";

const prisma = new PrismaClient()
const postsLimit = 10

export async function getUserPosts(userId: string, page: number, sort: string) {
    const order = getSortString(sort)

    return await prisma.post.findMany({
        where: {
            authorId: userId
        },
        skip: (page - 1) * postsLimit,
        take: postsLimit,
        orderBy: {
            createdAt: order
        }
    })
}