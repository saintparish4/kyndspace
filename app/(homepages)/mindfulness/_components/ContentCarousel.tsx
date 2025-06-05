import React from 'react';

const cards = [
  { 
    icon: '🧘‍♂️', 
    title: 'Mini Mindful Minutes',
    desc: 'Quick exercises for busy days',
    color: 'from-amber-400 to-orange-400'
  },
  { 
    icon: '💸', 
    title: 'Mindful Spending',
    desc: 'Make conscious financial decisions',
    color: 'from-emerald-400 to-green-400'
  },
  { 
    icon: '💻', 
    title: 'Mindful Tech',
    desc: 'Balance digital wellness',
    color: 'from-blue-400 to-indigo-400'
  },
  { 
    icon: '🥗', 
    title: 'Mindful Eating',
    desc: 'Nourish body and mind',
    color: 'from-rose-400 to-pink-400'
  },
];

const ContentCarousel = () => (
  <section className="py-12">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Daily Mindfulness Practices
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Explore our curated collection of mindfulness practices designed to fit into your daily routine.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {cards.map((card, i) => (
        <div key={i} className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 overflow-hidden">
          <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${card.color}`}></div>
          <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
            {card.icon}
          </div>
          <div className="font-bold mb-2 text-gray-900 text-lg group-hover:text-indigo-600 transition-colors duration-300">
            {card.title}
          </div>
          <div className="text-gray-600 text-sm mb-4">
            {card.desc}
          </div>
          <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700 flex items-center group-hover:translate-x-1 transition-transform duration-200">
            Start practice
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      ))}
    </div>
    <div className="flex justify-center items-center gap-4">
      <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-indigo-600 hover:text-indigo-600 transition-colors duration-200">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div className="flex gap-2">
        {[0,1,2,3].map(i => (
          <button key={i} className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${i === 0 ? 'bg-indigo-600' : 'bg-gray-300 hover:bg-gray-400'}`}></button>
        ))}
      </div>
      <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-indigo-600 hover:text-indigo-600 transition-colors duration-200">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </section>
);

export default ContentCarousel; 