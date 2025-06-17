import { PrismaClient, Prisma } from "../app/generated/prisma";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] =[
    {
        name: "John Doe",
        email: "john.doe@example.com",
        image: "https://github.com/shadcn.png",
        emailVerified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        name: "Jane Doe",
        email: "jane.doe@example.com",
        image: "https://github.com/shadcn.png",
        emailVerified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        name: "John Smith",
        email: "john.smith@example.com",
        image: "https://github.com/shadcn.png",
        emailVerified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        image: "https://github.com/shadcn.png",
        emailVerified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];

export async function main() {
    for (const u of userData) {
        await prisma.user.create({
            data: u 
        });
    }
}

main(); 