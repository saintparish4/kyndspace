import React from 'react';

const benefits = [
  {
    title: "Stress Reduction",
    description: "Regular meditation practice has been shown to reduce stress levels and promote emotional well-being.",
    icon: "🧘‍♀️"
  },
  {
    title: "Improved Focus",
    description: "Enhance your concentration and attention span through guided meditation sessions.",
    icon: "🎯"
  },
  {
    title: "Better Sleep",
    description: "Meditation techniques can help you achieve deeper, more restful sleep.",
    icon: "😴"
  },
  {
    title: "Emotional Balance",
    description: "Develop greater emotional awareness and stability through mindfulness practice.",
    icon: "💫"
  }
];

export default function BenefitsSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Benefits of Meditation</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <div 
            key={index} 
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
          >
            <div className="text-5xl mb-6 transform hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
            <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 