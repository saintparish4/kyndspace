import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUser } from "@/lib/getUser";

export async function POST(request: NextRequest) {
    const user = await getUser();
    if (!user) return new NextResponse("Unauthorized", { status: 401 });

    const { classId } = await request.json();

    // Check capacity
    const count = await prisma.booking.count({ where: { classId } });
    const cls = await prisma.class.findUnique({ where: { id: classId } });
    if (!cls) return new NextResponse("Class not found", { status: 404 });
    if (count >= cls.capacity) return new NextResponse("Class is full", { status: 409 });

    // Create booking (unique constraints prevent duplicates)
    const booking = await prisma.booking.create({
        data: { classId, userId: user.id },
    });

    return NextResponse.json(booking);
}

