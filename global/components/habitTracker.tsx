"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

interface Habit {
    id: string;
    title: string;
    isCompleted: boolean;
}

export default function HabitTracker() {
    const [newHabit, setNewHabit] = useState("");
    const queryClient = useQueryClient();

    // Fetch habits for today
    const { data: habits = [], isLoading } = useQuery({
        queryKey: ["habits", "today"],
        queryFn: async () => {
            const res = await fetch('/api/habits/today');
            if (!res.ok) throw new Error('Failed to fetch habits');
            return res.json();
        }
    });

    // Add new habit
    const addHabit = useMutation({
        mutationFn: async (title: string) => {
            const res = await fetch('/api/habits', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title }),
            });
            if (!res.ok) throw new Error('Failed to add habit');
            return res.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['habits', 'today'] });
        }
    });

    // Toggle completion
    const toggleHabit = useMutation({
        mutationFn: async ({ id, isCompleted }: { id: string; isCompleted: boolean }) => {
            const res = await fetch(`/api/habits/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ isCompleted }),
            });
            if (!res.ok) throw new Error('Failed to update habit');
            return res.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['habits', 'today'] });
        }
    });

    // Handle form submission
    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if (newHabit.trim()) {
            addHabit.mutate(newHabit.trim());
            setNewHabit("");
        }
    };
    
    if (isLoading) return <div>Loading habits...</div>;
    return (
        <div className="max-w-md mx-auto p-4">
          <h2 className="text-xl font-semibold mb-4">Today's Habits</h2>
    
          <ul className="space-y-2 mb-4">
            {habits.map((h: Habit) => (
              <li key={h.id} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={h.isCompleted}
                  onChange={() =>
                    toggleHabit.mutate({ id: h.id, isCompleted: !h.isCompleted })
                  }
                />
                <span className={h.isCompleted ? 'line-through text-gray-400' : ''}>
                  {h.title}
                </span>
              </li>
            ))}
          </ul>
    
          <div className="flex space-x-2">
            <input
              type="text"
              className="flex-grow border rounded p-2"
              placeholder="New habit"
              value={newHabit}
              onChange={(e) => setNewHabit(e.target.value)}
            />
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded"
              onClick={handleAdd}
              disabled={addHabit.isPending}
            >
              Add
            </button>
          </div>
        </div>
      );
}
