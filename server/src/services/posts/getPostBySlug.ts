import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function getPostBySlug(slug: string) {
 return await prisma.post.findUnique({
    where: {
        slug: slug,
    }
 }) 
}