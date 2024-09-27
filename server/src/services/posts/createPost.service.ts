import { TPostSchema } from "../../dtos/post.dto";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function createPost(postData: TPostSchema, postPhoto: string, userId: string) {
    return await prisma.post.create({
        data: {
            title: postData.title,
            content: postData.content,
            titlePhoto: postPhoto,
            authorId: userId
        }
    })
}