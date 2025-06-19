import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUser } from "@/lib/getUser";

export async function GET(request: NextRequest) {
  const user = await getUser();
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const todayStart = new Date(new Date().toISOString().split("T")[0]);
  const tomorrow = new Date(todayStart);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [habitsToday, lastEntry, nextBooking] = await Promise.all([
    prisma.habit.findMany({
      where: { userId: user.id, date: todayStart },
    }),
    prisma.journalEntry.findFirst({
      where: { userId: user.id },
      orderBy: { date: "desc" },
    }),
    prisma.booking.findFirst({
      where: {
        userId: user.id,
        class: { startTime: { gt: new Date() } },
      },
      include: { class: true },
      orderBy: { class: { startTime: "asc" } },
    }),
  ]);

  return NextResponse.json({
    habitsCompleted: habitsToday.filter((habit) => habit.isCompleted).length,
    habitsTotal: habitsToday.length,
    lastJournal: lastEntry
      ? {
          date: lastEntry.date.toISOString().split("T")[0],
          snippet: lastEntry.content.slice(0, 120),
        }
      : null,
    nextClasss: nextBooking
      ? {
          id: nextBooking.class.id,
          title: nextBooking.class.title,
          startTime: nextBooking.class.startTime,
        }
      : null,
  });
}
