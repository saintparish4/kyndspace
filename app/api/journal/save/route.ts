import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUser } from "@/lib/getUser";

export async function POST(request: Request) {
    const user = await getUser();
    if (!user) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    const { content, date } = await request.json();
    const entryDate = new Date(date);

    const entry = await prisma.journalEntry.upsert({
        where: {
            userId_date: { userId: user.id, date: entryDate },
        },
        update: { content },
        create: {
            userId: user.id,
            content,
            date: entryDate,
        },
    });

    return NextResponse.json(entry);
}