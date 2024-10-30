import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function getCompletePost(slug: string) {
 return await prisma.post.findUnique({
    where: {
        slug: slug,
    },
    include: {
        postRatings: {
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        username: true,
                        profile: true,
                    }
                },
            }
        },
        author: {
            select: {
                id: true,
                name: true,
                username: true,
                profile: true,
            }
        },
        _count: {
            select: {
                comments: true
            }
        }
    }
 }) 
}