import React from 'react';

const articles = [
  { icon: '😊', title: 'All Articles', color: 'bg-yellow-200' },
  { icon: '💤', title: 'Sleep', color: 'bg-purple-200' },
  { icon: '🧘‍♀️', title: 'Meditation', color: 'bg-orange-200' },
  { icon: '🧠', title: 'Mental Health', color: 'bg-blue-200' },
];

const ArticlesRow = () => (
  <section className="py-10 grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
    {articles.map((a, i) => (
      <div key={i} className={`rounded-xl p-6 flex flex-col items-center shadow ${a.color}`}>
        <div className="w-16 h-16 bg-white/70 rounded-full mb-2 flex items-center justify-center text-3xl">{a.icon}</div>
        <div className="font-semibold mb-1 text-gray-900">{a.title}</div>
      </div>
    ))}
  </section>
);

export default ArticlesRow; 