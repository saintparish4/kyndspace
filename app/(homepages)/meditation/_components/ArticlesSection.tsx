import React from 'react';

const articles = [
  { color: 'bg-yellow-200', label: 'All Articles' },
  { color: 'bg-blue-200', label: 'Mental Health' },
  { color: 'bg-cyan-200', label: 'Mindfulness' },
  { color: 'bg-purple-200', label: 'Sleep' },
];

export default function ArticlesSection() {
  return (
    <section className="py-12">
      <h2 className="text-xl font-semibold mb-6 text-center text-gray-900">More articles from Headspace</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {articles.map((a, i) => (
          <div key={i} className={`${a.color} rounded-2xl h-32 flex items-center justify-center text-lg font-semibold shadow`}>{a.label}</div>
        ))}
      </div>
    </section>
  );
} 