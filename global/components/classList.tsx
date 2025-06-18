"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import ClassCard from "./classCard";
import { useState } from "react";

export default function ClassList() {
  const queryClient = useQueryClient();
  const [bookingPendingId, setPendingId] = useState<string | null>(null);

  // Fetch today's classes
  const { data: classes = [] } = useQuery({
    queryKey: ["classes", "today"],
    queryFn: async () => {
      const res = await fetch(
        "/api/classes?date=" + new Date().toISOString().split("T")[0]
      );
      if (!res.ok) throw new Error("Failed to load classes");
      return res.json();
    },
  });

  // Fetch User's bookings
  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", "user"],
    queryFn: async () => {
      const res = await fetch("/api/bookings/user");
      if (!res.ok) throw new Error("Failed to load bookings");
      return res.json();
    },
  });

  const bookedIds = new Set<string>(
    bookings.map((b: any) => b.classId as string)
  );

  // Mutate booking with optimistic UI
  const bookMutation = useMutation({
    mutationFn: async (classId: string) => {
      setPendingId(classId);
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ classId }),
      });
      if (!res.ok) throw new Error("Failed to book class");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings", "user"] });
    },
    onSettled: () => setPendingId(null),
  });

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {classes.map((cls: any) => (
        <ClassCard
          key={cls.id}
          cls={cls}
          onBook={(id) => bookMutation.mutate(id)}
          isBooked={bookedIds.has(cls.id)}
          bookingPending={bookingPendingId === cls.id}
        />
      ))}
    </div>
  );
}
