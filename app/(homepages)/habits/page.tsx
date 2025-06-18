import HabitTracker from '@/global/components/habitTracker';
import Providers from '@/app/providers';

export default function HabitsPage() {
  return (
    <section className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6">Habit Tracker</h1>
      <Providers>
        <HabitTracker />
      </Providers>
    </section>
  );
}
