import React from 'react';

export default function MindfulnessPage() {
  const practices = [
    {
      title: "Mindful Breathing",
      description: "Focus on your breath to anchor yourself in the present moment.",
      duration: "5-10 min",
      level: "Beginner"
    },
    {
      title: "Body Scan",
      description: "Systematically bring awareness to different parts of your body.",
      duration: "10-20 min",
      level: "All Levels"
    },
    {
      title: "Mindful Walking",
      description: "Practice mindfulness while walking, noticing each step and your surroundings.",
      duration: "15-30 min",
      level: "Intermediate"
    }
  ];

  const benefits = [
    {
      title: "Reduced Anxiety",
      description: "Regular mindfulness practice can help manage anxiety and stress levels.",
      icon: "😌"
    },
    {
      title: "Better Focus",
      description: "Improve your ability to concentrate and stay present in daily activities.",
      icon: "🎯"
    },
    {
      title: "Emotional Regulation",
      description: "Develop better control over your emotional responses and reactions.",
      icon: "💫"
    },
    {
      title: "Improved Relationships",
      description: "Enhance your connections through mindful communication and presence.",
      icon: "🤝"
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-4 md:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-sky-400 via-pink-200 to-teal-300 bg-clip-text text-transparent">
        Mindfulness
      </h1>
      <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        Cultivate presence and awareness in your daily life through our guided mindfulness practices.
      </p>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-white">Mindfulness Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {practices.map((practice, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm px-3 py-1 rounded-full bg-gradient-to-r from-sky-400/20 via-pink-200/20 to-teal-300/20">
                  {practice.level}
                </span>
                <span className="text-sm text-gray-400">{practice.duration}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{practice.title}</h3>
              <p className="text-gray-300 mb-4">{practice.description}</p>
              <button className="text-sm font-medium text-white hover:text-sky-400 transition-colors">
                Start Practice →
              </button>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 text-white">Benefits of Mindfulness</h2>
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
    </div>
  );
} 