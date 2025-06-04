import React from 'react';

export default function MentalHealthPage() {
  const resources = [
    {
      title: "Stress Management",
      description: "Learn effective techniques to manage and reduce stress in your daily life.",
      category: "Self-Care",
      icon: "🧘‍♂️"
    },
    {
      title: "Anxiety Relief",
      description: "Discover practical strategies to cope with anxiety and worry.",
      category: "Mental Wellness",
      icon: "😌"
    },
    {
      title: "Emotional Well-being",
      description: "Tools and practices to enhance your emotional health and resilience.",
      category: "Self-Care",
      icon: "💫"
    },
    {
      title: "Professional Support",
      description: "Connect with mental health professionals for personalized guidance.",
      category: "Support",
      icon: "🤝"
    }
  ];

  const supportTools = [
    {
      title: "Mood Tracker",
      description: "Track your daily mood patterns and identify triggers.",
      features: ["Daily logging", "Pattern analysis", "Progress insights"]
    },
    {
      title: "Guided Journaling",
      description: "Express your thoughts and feelings through structured journaling prompts.",
      features: ["Daily prompts", "Reflection exercises", "Progress tracking"]
    },
    {
      title: "Crisis Resources",
      description: "Immediate support and resources for mental health emergencies.",
      features: ["24/7 helpline", "Emergency contacts", "Crisis intervention"]
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-4 md:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-sky-400 via-pink-200 to-teal-300 bg-clip-text text-transparent">
        Mental Health
      </h1>
      <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        Your journey to better mental health starts here. Access resources, tools, and support for your well-being.
      </p>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-white">Mental Health Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">{resource.icon}</div>
              <span className="text-sm px-3 py-1 rounded-full bg-gradient-to-r from-sky-400/20 via-pink-200/20 to-teal-300/20 mb-4 inline-block">
                {resource.category}
              </span>
              <h3 className="text-xl font-semibold mb-2 text-white">{resource.title}</h3>
              <p className="text-gray-300">{resource.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 text-white">Support Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supportTools.map((tool, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2 text-white">{tool.title}</h3>
              <p className="text-gray-300 mb-4">{tool.description}</p>
              <ul className="space-y-2 mb-4">
                {tool.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-300 flex items-center">
                    <span className="text-sky-400 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="text-sm font-medium text-white hover:text-sky-400 transition-colors">
                Access Tool →
              </button>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-16 p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-center">
        <h3 className="text-xl font-semibold mb-2 text-white">Need Immediate Support?</h3>
        <p className="text-gray-300 mb-4">
          If you're experiencing a mental health crisis, help is available 24/7.
        </p>
        <button className="bg-gradient-to-r from-sky-400 via-pink-200 to-teal-300 text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity">
          Get Help Now
        </button>
      </div>
    </div>
  );
} 