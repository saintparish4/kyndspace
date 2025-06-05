import React from 'react';

const FeatureCards = () => {
  const features = [
    {
      icon: "🌙",
      title: "Sleep solutions for everyone",
      description: "Personalized sleep programs tailored to your needs"
    },
    {
      icon: "🔬",
      title: "Science-backed sleep support",
      description: "Expert-backed techniques and proven methods"
    },
    {
      icon: "💫",
      title: "Here for you from day to night",
      description: "24/7 support and guidance for better sleep"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#18143a] to-[#0a0826]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 hover:bg-white/10 border border-white/10"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards; 