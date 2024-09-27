import { PrismaClient } from "@prisma/client"
import { TPostSchema } from "../../dtos/post.dto"

const prisma = new PrismaClient()

export async function getPostById(postId: string) {
 return await prisma.post.findUnique({
    where: {
        id: postId,
    }
 }) 
}