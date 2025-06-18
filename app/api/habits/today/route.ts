import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUser } from "@/lib/getUser";

export async function GET() {
    const user = await getUser();
    if (!user) return new NextResponse("Unauthorized", { status: 401 });

    const today = new Date(new Date().toISOString().split("T")[0]);
    const habits = await prisma.habit.findMany({
        where: { userId: user.id, date: today },
        orderBy: { createdAt: "asc" },
    });

    return NextResponse.json(habits);
}