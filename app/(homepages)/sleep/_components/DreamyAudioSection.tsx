import React from 'react';

const DreamyAudioSection = () => (
  <section className="py-24 bg-gradient-to-b from-[#0a0826] to-[#18143a] flex flex-col items-center">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
        Try our dreamy audio for free
      </h2>
      <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
        Experience the power of our sleep-inducing audio content. From calming nature sounds to guided meditations, find your perfect sleep companion.
      </p>
      <button className="bg-gradient-to-r from-sky-400 to-purple-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:from-sky-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 mb-12">
        Get started for free
      </button>
      
      {/* Audio Player */}
      <div className="w-full max-w-3xl bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center text-2xl">
            🎵
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-1">Calming Ocean Waves</h3>
            <p className="text-sm text-gray-400">Sleep Sounds • 45 min</p>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="w-full h-1 bg-white/10 rounded-full mb-4">
          <div className="w-1/3 h-full bg-gradient-to-r from-sky-400 to-purple-500 rounded-full" />
        </div>
        
        {/* Controls */}
        <div className="flex items-center justify-between text-sm text-gray-400">
          <span>15:00</span>
          <div className="flex items-center gap-6">
            <button className="hover:text-white transition-colors">⏮</button>
            <button className="hover:text-white transition-colors text-xl">⏯</button>
            <button className="hover:text-white transition-colors">⏭</button>
          </div>
          <span>45:00</span>
        </div>
      </div>
    </div>
  </section>
);

export default DreamyAudioSection; 