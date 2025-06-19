import { Resend } from "resend";
import prisma from "./prisma";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendReminderEmail(to: string, text: string) {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: to,
    subject: "Gentle Reminder from KyndSpace",
    html: "Test",
  });
}

export async function persistInApp(userId: string, message: string) {
  await prisma.notification.create({
    data: {
      userId,
      message,
    },
  });
}
