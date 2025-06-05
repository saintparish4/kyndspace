import React from 'react';

const HeroSection = () => (
  <section className="pt-32 pb-24 px-4 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
    <div className="flex-1 space-y-6">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
        Put your mind to sleep
      </h1>
      <p className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
        Drift off with sleep meditations, sleep music, and more. Start a journey to better sleep with science-backed audio, tips, and tools. Wake up refreshed and ready to take on the day.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-white text-[#0a0826] px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
          Try it free
        </button>
        <button className="border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
          Learn more
        </button>
      </div>
    </div>
    <div className="flex-1 flex justify-center items-center">
      <div className="relative">
        {/* Decorative circles */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-500/20 rounded-full blur-sm" />
        <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full blur-sm" />
        
        {/* App mockup */}
        <div className="w-64 h-96 bg-gradient-to-br from-purple-600 to-indigo-800 rounded-3xl shadow-2xl flex items-center justify-center text-2xl font-bold transform hover:scale-105 transition-all duration-300">
          <div className="text-center">
            <div className="text-4xl mb-2">🌙</div>
            <div className="text-sm opacity-80">Sleep App</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection; 