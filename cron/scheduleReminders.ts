import cron from "node-cron";
import prisma from "@/lib/prisma";
import { reminderQueue } from "@/lib/queue";

const NY_TZ = "America/New_York";

export function scheduleReminders() {
  cron.schedule("* * * * *", async () => {
    console.log("[CRON] Running reminder job (every minute for testing)");

    const today = new Date(
      new Date().toLocaleString("en-US", { timeZone: NY_TZ })
    );

    const users = await prisma.user.findMany({
      select: { id: true, email: true },
    });

    console.log(`[CRON] Found ${users.length} users`);

    for (const user of users) {
      //Journal Check
      const journalToday = await prisma.journalEntry.findFirst({
        where: { userId: user.id, date: today },
      });

      //Habit Check
      const habitsToday = await prisma.habit.findMany({
        where: { userId: user.id, date: today },
      });
      const incompleteHabits = habitsToday.filter(
        (habit) => !habit.isCompleted
      ).length;

      let msg: string | null = null;
      if (!journalToday && incompleteHabits > 0) {
        msg = `Good morning! You have not written in your journal and you have ${incompleteHabits} habits to complete today!`;
      } else if (!journalToday) {
        msg = "Good morning! Don't forget to write in your journal today!";
      } else if (incompleteHabits > 0) {
        msg = `Good morning! You have ${incompleteHabits} habits to complete today!`;
      }

      if (msg) {
        console.log(`[CRON] Adding reminder for user ${user.email}: ${msg}`);
        await reminderQueue.add(
          "send",
          { userId: user.id, email: user.email, message: msg },
          { jobId: `${user.id}-${today.toISOString().slice(0, 10)}` }
        );
      }
    }
  });
}
