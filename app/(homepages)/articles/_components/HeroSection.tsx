import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  // Placeholder loading state
  const loading = false;
  return (
    <section className="w-full h-screen bg-gray-50 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between px-4 md:px-16 border-b border-gray-100">
      <div className="flex-1 mb-8 md:mb-0">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Kyndspace Articles</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-xl">
          {loading ? <span className="animate-pulse bg-gray-200 h-6 w-2/3 inline-block rounded" /> :
            'Explore and enjoy hundreds of articles that are intended to educate and inspire. Whether your mood or goal, feel free to browse our expert-informed articles on meditation, mindfulness, mental health, sleep, and overall well-being.'}
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow transition">Try for free</button>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="relative w-100 h-100">
          <Image 
            src="/idk/content-1.png" 
            alt="Kyndspace Articles Hero" 
            fill
            className="object-cover rounded-full shadow-none"
            priority
          />
        </div>
      </div>
    </section>
  );
} 