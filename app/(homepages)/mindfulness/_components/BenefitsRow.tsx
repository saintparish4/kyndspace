import React from 'react';

const benefits = [
  { icon: '😌', title: 'Mindful Breathing', desc: 'Simple, science-backed exercises to help you reset and calm your mind.', color: 'from-amber-100 to-amber-50' },
  { icon: '🧠', title: 'Learn more about mindfulness', desc: 'Just getting started? Our tips and resources can help you build your mindfulness skills.', color: 'from-blue-100 to-blue-50' },
  { icon: '🎯', title: 'Increased Focus', desc: 'Mindfulness can help you improve attention, memory, and focus.', color: 'from-purple-100 to-purple-50' },
  { icon: '👨‍👩‍👧‍👦', title: 'Mindful families', desc: 'A comprehensive collection dedicated to families, relationships, and parenting support.', color: 'from-pink-100 to-pink-50' },
];

const BenefitsRow = () => (
  <section className="py-10 grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
    {benefits.map((b, i) => (
      <div key={i} className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 flex flex-col items-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200">
        <div className={`w-16 h-16 flex items-center justify-center rounded-2xl text-3xl mb-4 bg-gradient-to-br ${b.color} group-hover:scale-110 transition-transform duration-300`}>
          {b.icon}
        </div>
        <div className="font-bold mb-2 text-center text-gray-900 text-lg group-hover:text-indigo-600 transition-colors duration-300">{b.title}</div>
        <div className="text-gray-600 text-center text-sm leading-relaxed">{b.desc}</div>
      </div>
    ))}
  </section>
);

export default BenefitsRow; 