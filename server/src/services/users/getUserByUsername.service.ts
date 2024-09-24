import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUserByUsername(username: string) {
	return await prisma.user.findUnique({
		where: {
			username: username,
		},
	});
}