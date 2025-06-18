import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUser } from "@/lib/getUser";

export async function POST(request: NextRequest) {
  const user = await getUser();
  if (!user) return new NextResponse("Unauthorized", { status: 401 });

  const { title } = await request.json();
  const today = new Date(new Date().toISOString().split("T")[0]);

  const habit = await prisma.habit.create({
    data: {
      userId: user.id,
      title,
      date: today,
    },
  });

  return NextResponse.json(habit);
}
