import React from 'react';

interface Practice {
  title: string;
  description: string;
  duration: string;
  level: string;
}

interface MindfulnessPracticesProps {
  practices: Practice[];
}

const MindfulnessPractices: React.FC<MindfulnessPracticesProps> = ({ practices }) => (
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
);

export default MindfulnessPractices; 