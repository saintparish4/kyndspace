import React from 'react';

const SleepcastsCarousel = () => (
  <section className="py-16 max-w-7xl mx-auto px-4">
    <h2 className="text-2xl font-bold mb-8 text-center">Sleepcasts - drift off to sleep with these calming bedtime stories</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {[1,2,3,4].map(i => (
        <div key={i} className="bg-white/10 rounded-xl p-4 flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-400 rounded-lg mb-4" />
          <div className="h-4 w-3/4 bg-gray-500 rounded mb-2" />
          <div className="h-3 w-1/2 bg-gray-600 rounded" />
        </div>
      ))}
    </div>
  </section>
);

export default SleepcastsCarousel; 