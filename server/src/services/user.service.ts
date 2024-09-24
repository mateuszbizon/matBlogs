import { PrismaClient } from "@prisma/client"
import { TUserSchema } from "../dtos/user.dto"

const prisma = new PrismaClient()

export async function getUserByUsername(username: string) {
    return await prisma.user.findUnique({
        where: {
            username: username
        }
    })
}

export async function createUser(user: TUserSchema) {
    return await prisma.user.create({
        data: {
            username: user.username,
            name: user.name,
            password: user.password
        },
        select: {
            id: true,
            username: true,
            name: true,
        }
    })
}