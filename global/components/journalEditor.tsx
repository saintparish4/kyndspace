"use client";

import { useState, useEffect, useCallback } from "react";

export default function JournalEditor() {
  const [content, setContent] = useState("");
  const date = new Date().toISOString().split("T")[0];

  // 1. Load existing content on mount
  useEffect(() => {
    fetch(`/api/journal/${date}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.content) setContent(data.content);
      });
  }, [date]);

  // 2. Save helper function
  const saveEntry = useCallback(
    (text: string) => {
      fetch("/api/journal/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: text, date }),
      });
    },
    [date]
  );

  // 3. Auto-save on blur
  const handleBlur = () => {
    if (content.trim()) saveEntry(content);
  };

  // 4. Auto-save every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (content.trim()) saveEntry(content);
    }, 2000);
    return () => clearInterval(interval);
  }, [content, saveEntry]);

  return (
    <textarea
      className="w-full h-64 p-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={content}
      onChange={(e) => setContent(e.target.value)}
      onBlur={handleBlur}
      placeholder="What is on your mind today?"
    />
  );
}
