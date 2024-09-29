import { PrismaClient } from "@prisma/client";
import { TUpdateUserSchema } from "../../dtos/updateUser.dto";

const prisma = new PrismaClient();

export async function updateUser(user: TUpdateUserSchema, userId: string) {
    return await prisma.user.update({
        where: {
            id: userId,
        },
        data: {
            name: user.name,
            username: user.username
        },
        select: {
            id: true,
            username: true,
            name: true,
        }
    })
}