"use client";

import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import AvatarUploader from "./avatarUploader";

export default function DashboardSummary() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["dashboard"],
    queryFn: async () => {
      const res = await fetch("/api/dashboard");
      if (!res.ok) throw new Error("Failed to fetch dashboard data");
      return res.json();
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <p>Error: Failed to load Dashboard </p>;

  const {
    avatarUrl,
    habitsCompleted,
    habitsTotal,
    lastJournal,
    nextClass,
  } = data;

  return (
    <div className="space-y-6">
      {/* Avatar */}
      <AvatarUploader currentUrl={avatarUrl} />

      {/* Habits */}
      <div className="p-4 border rounded">
        <h3 className="font-semibold">Today’s Habits</h3>
        <p className="text-sm">
          {habitsCompleted} / {habitsTotal} completed
        </p>
      </div>

      {/* Last Journal */}
      <div className="p-4 border rounded">
        <h3 className="font-semibold">Last Journal Entry</h3>
        {lastJournal ? (
          <>
            <p className="text-sm text-gray-500">
              {lastJournal.date}
            </p>
            <p className="mt-1">{lastJournal.snippet}…</p>
          </>
        ) : (
          <p className="text-sm text-gray-500">No entries yet.</p>
        )}
      </div>

      {/* Upcoming Class */}
      <div className="p-4 border rounded">
        <h3 className="font-semibold">Next Class</h3>
        {nextClass ? (
          <p className="text-sm">
            {nextClass.title}{' '}
            on {format(new Date(nextClass.startTime), 'PPPp')}
          </p>
        ) : (
          <p className="text-sm text-gray-500">No upcoming bookings.</p>
        )}
      </div>
    </div>
  );
}
