// worker.ts
import { registerReminderWorker } from '@/lib/queue';
import { scheduleReminders } from '@/cron/scheduleReminders';

// Start background processes
registerReminderWorker();
scheduleReminders();

console.log('Reminder worker running…');
