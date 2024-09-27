import { PrismaClient } from "@prisma/client"
import { TPostSchema } from "../../dtos/post.dto"

const prisma = new PrismaClient()

export async function updatePost(postData: TPostSchema, postPhoto: string, postId: string) {
 return await prisma.post.update({
    where: {
        id: postId,
    },
    data: {
        title: postData.title,
        content: postData.content,
        titlePhoto: postPhoto,
    }
 })   
}