import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUserById(userId: string) {
    return await prisma.user.findUnique({
        where: {
            id: userId
        }
    })
}