import React from 'react';

export default function SleepPage() {
  const sleepTips = [
    {
      title: "Consistent Sleep Schedule",
      description: "Maintain a regular sleep-wake cycle, even on weekends, to regulate your body's internal clock.",
      icon: "⏰"
    },
    {
      title: "Bedtime Routine",
      description: "Create a relaxing pre-sleep routine to signal your body it's time to wind down.",
      icon: "🛁"
    },
    {
      title: "Sleep Environment",
      description: "Keep your bedroom cool, dark, and quiet for optimal sleep conditions.",
      icon: "🌙"
    },
    {
      title: "Digital Detox",
      description: "Avoid screens and blue light exposure at least 1 hour before bedtime.",
      icon: "📱"
    }
  ];

  const sleepResources = [
    {
      title: "Sleep Stories",
      description: "Calming narratives designed to help you drift into a peaceful sleep.",
      duration: "20-45 min"
    },
    {
      title: "Sleep Sounds",
      description: "Soothing ambient sounds and white noise to mask disruptive noises.",
      duration: "8 hours"
    },
    {
      title: "Sleep Meditation",
      description: "Guided meditation specifically designed for better sleep quality.",
      duration: "10-30 min"
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-4 md:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-sky-400 via-pink-200 to-teal-300 bg-clip-text text-transparent">
        Sleep
      </h1>
      <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        Discover the secrets to better sleep with our expert tips, guided sessions, and sleep-enhancing resources.
      </p>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-white">Sleep Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sleepTips.map((tip, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">{tip.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{tip.title}</h3>
              <p className="text-gray-300">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 text-white">Sleep Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sleepResources.map((resource, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2 text-white">{resource.title}</h3>
              <p className="text-gray-300 mb-4">{resource.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">{resource.duration}</span>
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