import React from 'react';

const info = [
  {
    title: 'Meditation benefits',
    items: [
      "What if I don't notice meditation benefits right away?",
      'Meditation for stress',
      'Meditation for sadness',
      'Meditation for Self-compassion',
      'Meditation for self-esteem',
      'Meditation for happiness',
      'Meditation for Parenting',
    ],
  },
  {
    title: 'How to meditate',
    items: [
      'How to meditate',
      'What is the difference between thinking and meditating?',
      'What the Spotting Technique is and how to take advantage of it',
    ],
  },
  {
    title: 'Guided meditations',
    items: [
      'Body scan meditation to reduce anxiety',
      'Gratitude meditation',
      'Walking meditation',
      'Running meditation',
      'Meditation for compassion',
    ],
  },
];

export default function InfoCarousel() {
  return (
    <section className="py-12">
      <h2 className="text-xl font-semibold mb-6 text-center text-gray-900">Meditations for any mind, any mood, any goal</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-4">
        {info.map((col, i) => (
          <div key={i} className="bg-white rounded-xl p-6 shadow text-left">
            <h3 className="font-bold mb-2 text-gray-900">{col.title}</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              {col.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-2">
        <span className="w-2 h-2 bg-gray-400 rounded-full inline-block" />
        <span className="w-2 h-2 bg-gray-300 rounded-full inline-block" />
        <span className="w-2 h-2 bg-gray-300 rounded-full inline-block" />
      </div>
    </section>
  );
} 