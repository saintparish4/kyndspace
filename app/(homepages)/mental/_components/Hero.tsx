import React from 'react';

interface HeroProps {
  headline: string;
  subheadline: string;
  videoUrl?: string;
  ctaText?: string;
  ctaOnClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ headline, subheadline, videoUrl, ctaText, ctaOnClick }) => (
  <section className="w-full min-h-[80vh] bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-24 px-4 md:px-16 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/20"></div>
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
      <div className="flex-1 mb-8 md:mb-0 animate-fade-in-up">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
          {headline}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl leading-relaxed">
          {subheadline}
        </p>
        {ctaText && (
          <button 
            onClick={ctaOnClick} 
            className="group bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span className="flex items-center gap-2">
              {ctaText}
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        )}
      </div>
      {videoUrl && (
        <div className="flex-1 relative">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <video 
              src={videoUrl} 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </div>
    {/* Decorative elements */}
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 to-indigo-600/20" />
    <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400/30 rounded-full blur-2xl" />
    <div className="absolute -bottom-16 -right-16 w-60 h-60 bg-indigo-400/30 rounded-full blur-2xl" />
  </section>
);

export default Hero; 