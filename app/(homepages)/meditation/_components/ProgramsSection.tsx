import React from 'react';

const meditationTypes = [
  {
    title: "Guided Meditation",
    description: "Perfect for beginners, with expert-led sessions to help you get started.",
    duration: "5-20 min"
  },
  {
    title: "Mindfulness Practice",
    description: "Focus on the present moment and develop awareness of your thoughts and feelings.",
    duration: "10-30 min"
  },
  {
    title: "Breathing Exercises",
    description: "Simple yet powerful techniques to calm your mind and body.",
    duration: "3-10 min"
  }
];

export default function ProgramsSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">Meditation Programs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {meditationTypes.map((type, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{type.title}</h3>
            <p className="text-gray-700 mb-4">{type.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{type.duration}</span>
              <button className="text-sm font-medium text-yellow-500 hover:text-yellow-600 transition-colors">
                Start Session →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 