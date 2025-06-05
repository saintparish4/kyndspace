import React from 'react';

export default function PromoMeditation() {
  // Placeholder loading state
  const loading = false;
  return (
    <section className="w-full bg-yellow-300 py-16 px-4 border-b border-yellow-200 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1 mb-8 md:mb-0">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-900">A meditation for diffusing conflict</h3>
          <p className="text-yellow-900 mb-6 max-w-lg">
            {loading ? <span className="animate-pulse bg-yellow-200 h-6 w-2/3 inline-block rounded" /> :
              "Difficult or distressing situations will always arise but it's how we choose to respond, rather than react, that can make all the difference. That's why a meditation such as 'Managing Conflict' exists — to demonstrate how mindfulness can be our ally within a conflict, at home or at work."}
          </p>
          {/* Promo audio player placeholder */}
          <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4 max-w-md">
            <span className="text-2xl">▶️</span>
            <div>
              <div className="font-semibold text-gray-800">Managing conflict</div>
              <div className="text-xs text-gray-500">Audio player placeholder</div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          {/* Illustration placeholder */}
          <div className="w-60 h-60 bg-yellow-200 rounded-3xl flex items-center justify-center">
            <span className="text-7xl">📱</span>
          </div>
        </div>
      </div>
      {/* Decorative cloud shapes (optional) */}
      <div className="absolute left-0 bottom-0 w-40 h-20 bg-white/40 rounded-t-full" style={{zIndex:0}} />
      <div className="absolute right-0 top-0 w-32 h-16 bg-white/40 rounded-b-full" style={{zIndex:0}} />
    </section>
  );
} 