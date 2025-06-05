import React from 'react';
import Image from 'next/image';

const categories = [
  { 
    name: 'Mental Health', 
    image: '/categories/mental.svg'
  },
  { 
    name: 'Meditation', 
    image: '/categories/meditation.svg'
  },
  { 
    name: 'Mindfulness', 
    image: '/categories/mindfulness.svg'
  },
  { 
    name: 'Sleep', 
    image: '/categories/sleep.svg'
  },
];

export default function CategoryGrid() {
  // Placeholder loading state
  const loading = false;
  return (
    <section className="w-full py-10 md:py-16 bg-gray-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-900">Explore articles by category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {loading ? (
            Array(4).fill(0).map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 animate-pulse rounded-xl" />
            ))
          ) : (
            categories.map((cat, i) => (
              <div key={cat.name} className="flex flex-col items-center justify-center bg-white rounded-xl shadow p-8 hover:shadow-lg transition cursor-pointer min-h-[300px] min-w-[250px] relative overflow-hidden group">
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 " />
                </div>
                <div className="relative z-10 flex flex-col items-center">
                  <span className="font-medium text-black text-lg">{cat.name}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
} 