import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-yellow-400 to-yellow-300 py-20 px-6 flex flex-col md:flex-row items-center justify-between rounded-3xl relative overflow-hidden mb-16 shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
      <div className="max-w-xl z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">Meditation made simple</h1>
        <p className="text-lg text-gray-800 mb-8 leading-relaxed">Guided meditations to help you manage life's more challenging moments. Meditation is a life skill. By using guided meditation from Headspace, you'll learn to be more present for everything you do.</p>
        <button className="bg-white text-yellow-500 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          Try for free
        </button>
      </div>
      <div className="mt-10 md:mt-0 flex-shrink-0 z-10">
        <div className="flex space-x-6">
          <div className="w-36 h-72 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl flex items-center justify-center text-2xl font-bold transform hover:-rotate-3 transition-transform duration-300">App</div>
          <div className="w-36 h-56 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl flex items-center justify-center text-2xl font-bold transform hover:rotate-3 transition-transform duration-300">Preview</div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute left-0 bottom-0 w-40 h-24 bg-white/30 rounded-full opacity-60 -z-1" style={{filter:'blur(12px)'}} />
      <div className="absolute right-0 top-0 w-48 h-32 bg-white/30 rounded-full opacity-60 -z-1" style={{filter:'blur(14px)'}} />
      <div className="absolute left-1/4 top-1/4 w-24 h-24 bg-white/20 rounded-full opacity-40 -z-1" style={{filter:'blur(8px)'}} />
    </section>
  );
} 