import { Queue, Worker, Job } from "bullmq";
import IORedis from "ioredis";
import { sendReminderEmail, persistInApp } from "./reminderHelpers";

const connection = new IORedis({
    host: "redis-13866.c99.us-east-1-4.ec2.redns.redis-cloud.com",
    port: 13866,
    password: "SYeaAgLHS9gclHiTSfNUC2yozaMaXgRq",
    maxRetriesPerRequest: null
});

export const reminderQueue = new Queue("reminder", { connection });

export function registerReminderWorker() {
    new Worker(
        "reminder",
        async (job: Job) => {
            const { userId, email, message } = job.data;
           await sendReminderEmail(email, message);
           await persistInApp(userId, message);
        },
        { connection }
    );
}