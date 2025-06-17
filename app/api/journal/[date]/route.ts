import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUser } from "@/lib/getUser";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ date: string }> }
) {
  const user = await getUser();
  if (!user) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const { date } = await params;
  const entryDate = new Date(date);
  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId_date: { userId: user.id, date: entryDate },
    },
  });

  return NextResponse.json(entry);
}
