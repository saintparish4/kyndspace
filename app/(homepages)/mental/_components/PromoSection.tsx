import React from 'react';

interface PromoSectionProps {
  title: string;
  bullets: string[];
  offer: string;
  ctaText: string;
  ctaOnClick?: () => void;
}

const PromoSection: React.FC<PromoSectionProps> = ({ title, bullets, offer, ctaText, ctaOnClick }) => (
  <section className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 py-20 px-4 rounded-3xl relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h2 className="text-4xl font-bold mb-8 text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
        {title}
      </h2>
      <ul className="mb-10 text-lg text-gray-800 space-y-4">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-center justify-center group">
            <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-4 text-blue-600 font-bold shadow-sm group-hover:scale-110 transition-transform duration-300">
              ✓
            </span>
            <span className="group-hover:text-blue-600 transition-colors duration-300">{b}</span>
          </li>
        ))}
      </ul>
      <div className="bg-white rounded-2xl p-6 shadow-lg mb-8 inline-block">
        <p className="text-xl font-semibold text-gray-900">{offer}</p>
      </div>
      <button
        onClick={ctaOnClick}
        className="group bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
      >
        <span className="flex items-center gap-2">
          {ctaText}
          <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
      </button>
    </div>
  </section>
);

export default PromoSection; 