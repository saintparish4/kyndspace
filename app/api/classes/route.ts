import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const dateParam = url.searchParams.get("date"); // optional date parameter
  const todayStart = dateParam
    ? new Date(dateParam)
    : new Date(new Date().toISOString().split("T")[0]);

  const tomorrow = new Date(todayStart);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const classes = await prisma.class.findMany({
    where: {
      startTime: {
        gte: todayStart,
        lt: tomorrow,
      },
    },
    orderBy: { startTime: "asc" },
  });
  return NextResponse.json(classes);
}
