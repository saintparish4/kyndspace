import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUser } from "@/lib/getUser";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await getUser();
  if (!user) return new NextResponse("Unauthorized", { status: 401 });

  const { isCompleted } = await request.json();
  const { id: habitId } = await params;

  // Ensure user owns habit
  const existingHabit = await prisma.habit.findUnique({
    where: { id: habitId },
  });
  if (!existingHabit || existingHabit.userId !== user.id) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const updatedHabit = await prisma.habit.update({
    where: { id: habitId },
    data: { isCompleted },
  });

  return NextResponse.json(updatedHabit);
}
