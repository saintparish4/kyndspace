import React from 'react';

const tips = [
  {
    title: 'What is mindfulness?',
    icon: '🧘‍♀️',
    items: [
      'Flow state',
      'How to be more present',
      "Why it's so hard to not overthink",
      'Positive insights in the moment',
    ],
    color: 'from-violet-500 to-purple-500'
  },
  {
    title: 'Mindful eating',
    icon: '🥗',
    items: [
      'Tuning into eating signals',
      'Eating and mindfulness',
      "Ways to tune in to how you're really eating",
      'The intricate, specific connection between the mind and the plate',
    ],
    color: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Breathing exercises',
    icon: '🫁',
    items: [
      'How mindful breathing affects your whole body',
      'Breathing exercises to reduce stress',
      'How I create breathing space in my house',
    ],
    color: 'from-blue-500 to-indigo-500'
  },
];

const TipsToolsSection = () => (
  <section className="py-12">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Explore Mindfulness Tools
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Discover practical tools and techniques to enhance your mindfulness practice and improve your daily life.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {tips.map((tip, i) => (
        <div key={i} className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tip.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
            {tip.icon}
          </div>
          <div className="font-bold mb-4 text-gray-900 text-xl group-hover:text-indigo-600 transition-colors duration-300">
            {tip.title}
          </div>
          <ul className="space-y-3">
            {tip.items.map((item, idx) => (
              <li key={idx} className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-200 mr-2"></span>
                <a href="#" className="hover:underline text-sm">{item}</a>
              </li>
            ))}
          </ul>
          <button className="mt-6 text-sm font-medium text-indigo-600 hover:text-indigo-700 flex items-center group-hover:translate-x-1 transition-transform duration-200">
            Learn more
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default TipsToolsSection; 