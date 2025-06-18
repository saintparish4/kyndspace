import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUser } from "@/lib/getUser";

export async function GET(request: NextRequest) {
    const user = await getUser();
    if (!user) return new NextResponse("Unauthorized", { status: 401 });

    const bookings = await prisma.booking.findMany({
        where: { userId: user.id },
        include: { class: true },
        orderBy: { class: { startTime: "asc" } },
    });

    return NextResponse.json(bookings);
}