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
                user: true,
            }
        },
        comments: true,
    }
 }) 
}