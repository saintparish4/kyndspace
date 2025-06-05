import React from 'react';

interface CardData {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ResourceCardsProps {
  cards: CardData[];
}

const ResourceCards: React.FC<ResourceCardsProps> = ({ cards }) => (
  <section className="w-full py-16">
    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {cards.map((card, idx) => (
        <div 
          key={idx} 
          className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-blue-100"
        >
          <div className="text-4xl mb-6 bg-gradient-to-br from-blue-50 to-indigo-50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            {card.icon}
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            {card.title}
          </h3>
          <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
            {card.description}
          </p>
          <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a href="#" className="text-blue-600 font-medium inline-flex items-center gap-2 hover:gap-3 transition-all duration-300">
              Learn more
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ResourceCards; 