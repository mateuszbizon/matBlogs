import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function updateUserProfile(userId: string, photo: string) {
    return await prisma.profile.upsert({
        where: {
            userId: userId,
        },
        create: {
            photo: photo,
            userId: userId
        },
        update: {
            photo: photo
        }
    })
}