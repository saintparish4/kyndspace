import React from 'react';

const features = [
  { icon: '📖', title: "What is meditation step by step", desc: "New to meditation? We've got you covered! The Headspace app walks you through the essentials to help you build a practice that's simple and sustainable." },
  { icon: '⏱️', title: 'Bite-sized meditations', desc: 'Sometimes, a moment to pause and reset is all people need. We have bite-sized meditations to help you reset, anytime, or simply, bedtime.' },
  { icon: '🧑‍🎓', title: 'Meditation for beginners', desc: 'Meditation for all ages and all levels. The Headspace app is perfect for beginners and experts alike.' },
  { icon: '🔬', title: 'Evidence-based techniques', desc: 'The effectiveness of meditation is supported by research. The Headspace app uses evidence-based techniques.' },
];

export default function FeatureHighlights() {
  return (
    <section className="bg-white py-10 rounded-3xl shadow mb-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="text-4xl mb-2">{f.icon}</div>
            <h3 className="font-semibold mb-1 text-gray-900">{f.title}</h3>
            <p className="text-gray-600 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 