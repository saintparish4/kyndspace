import React from 'react';

const highlights = [
  { color: 'bg-orange-200', label: 'Everyday Gratitude' },
  { color: 'bg-green-200', label: 'Body Scan' },
  { color: 'bg-blue-200', label: 'Unwind' },
  { color: 'bg-yellow-200', label: 'Waking Up' },
];

export default function ContentHighlights() {
  return (
    <section className="py-12">
      <h2 className="text-xl font-semibold mb-6 text-center text-gray-900">Meditation content – meditations to help with life's more challenging moments</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {highlights.map((h, i) => (
          <div key={i} className={`${h.color} rounded-2xl h-32 flex items-center justify-center text-lg font-semibold shadow`}>{h.label}</div>
        ))}
      </div>
      <div className="flex justify-center space-x-2 mt-4">
        <span className="w-2 h-2 bg-gray-400 rounded-full inline-block" />
        <span className="w-2 h-2 bg-gray-300 rounded-full inline-block" />
        <span className="w-2 h-2 bg-gray-300 rounded-full inline-block" />
      </div>
    </section>
  );
} 