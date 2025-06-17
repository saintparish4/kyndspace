import { auth } from "./auth";
import { NextRequest } from "next/server";
import { headers } from "next/headers";
import prisma from "./prisma";

export async function getUser() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        return null;
    }

    const user = await prisma.user.findUnique({
        where: {
            id: session.user.id,
        },
    });

    return user;
}