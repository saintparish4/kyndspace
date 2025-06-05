import React from 'react';

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

interface MindfulnessBenefitsProps {
  benefits: Benefit[];
}

const MindfulnessBenefits: React.FC<MindfulnessBenefitsProps> = ({ benefits }) => (
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
);

export default MindfulnessBenefits; 