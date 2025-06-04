import React from 'react';

export default function MeditationPage() {
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

  return (
    <div className="min-h-screen pt-24 px-4 md:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-sky-400 via-pink-200 to-teal-300 bg-clip-text text-transparent">
        Meditation
      </h1>
      <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        Discover the transformative power of meditation with our guided sessions and expert resources.
      </p>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-white">Benefits of Meditation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 text-white">Meditation Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {meditationTypes.map((type, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2 text-white">{type.title}</h3>
              <p className="text-gray-300 mb-4">{type.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">{type.duration}</span>
                <button className="text-sm font-medium text-white hover:text-sky-400 transition-colors">
                  Start Session →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 