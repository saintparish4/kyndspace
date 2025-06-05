import React from 'react';

const HeroSection = () => (
  <section className="relative flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 rounded-b-[3rem] px-8 py-16 mb-12 overflow-hidden min-h-screen w-full">
    {/* Left: Text and CTAs */}
    <div className="flex-1 z-10 max-w-xl">
      <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
        <span className="text-white text-sm font-medium">✨ New: Guided Meditation Series</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
        Raise your game with<br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-100">
          mindfulness
        </span>
      </h1>
      <p className="text-xl text-white/90 mb-8 max-w-md leading-relaxed">
        Feel the benefit of mindfulness exercises & activities. Mindfulness is the ability to be present and free from distraction. Try different mindfulness techniques to raise your mental game in everyday life.
      </p>
      <div className="flex items-center gap-4 mb-4">
        <button className="flex items-center bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition text-lg hover:scale-105 transform duration-200">
          <span className="mr-2">▶</span> Play
        </button>
        <button className="bg-white/10 backdrop-blur-sm border border-white/40 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/20 transition text-lg hover:scale-105 transform duration-200">
          Try for free
        </button>
      </div>
      <div className="flex items-center gap-6 mt-8">
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-pink-400 to-purple-400" />
          ))}
        </div>
        <p className="text-white/80 text-sm">
          Join <span className="font-semibold">10,000+</span> mindful practitioners
        </p>
      </div>
    </div>
    {/* Right: Illustration */}
    <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0 z-10">
      <div className="w-72 h-[500px] bg-white/10 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center shadow-2xl border border-white/20">
        <div className="w-48 h-[400px] bg-gradient-to-br from-white/90 to-white/70 rounded-2xl flex items-center justify-center text-gray-400 text-lg shadow-inner">
          [Phone Illustration]
        </div>
      </div>
    </div>
    {/* Decorative background shapes */}
    <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl z-0" />
    <div className="absolute -bottom-16 -right-16 w-60 h-60 bg-white/10 rounded-full blur-3xl z-0" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl z-0" />
  </section>
);

export default HeroSection; 