import React from 'react';

const PromoSection = () => (
  <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl flex flex-col md:flex-row items-center justify-between px-8 md:px-12 mb-12 relative overflow-hidden">
    {/* Left: Text and checklist */}
    <div className="flex-1 max-w-xl z-10">
      <div className="inline-block px-4 py-2 bg-amber-100 rounded-full mb-6">
        <span className="text-amber-800 text-sm font-medium">✨ Special Offer</span>
      </div>
      <div className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
        Be kind to your mind
      </div>
      <ul className="space-y-4 mb-8">
        {[
          'Access the full library of 500+ meditations on everything from stress, to sleep, to compassion',
          'Put your mind to bed with sleep sounds, music, and wind-down exercises',
          'Make mindfulness a part of your daily routine with reminders, relaxing visuals, and more'
        ].map((item, i) => (
          <li key={i} className="flex items-start">
            <div className="w-6 h-6 rounded-full bg-amber-200 flex items-center justify-center mr-3 mt-0.5">
              <svg className="w-4 h-4 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
      <div className="bg-white rounded-2xl p-6 mb-4 w-full max-w-sm shadow-lg border border-amber-100">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="font-bold text-lg text-gray-900">14 day free trial</div>
            <div className="text-sm text-gray-600">Then $5.83/month</div>
          </div>
          <div className="text-2xl font-bold text-amber-600">-50%</div>
        </div>
        <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-md hover:shadow-lg">
          Get this deal
        </button>
        <p className="text-xs text-gray-500 text-center mt-3">
          Cancel anytime. No commitment required.
        </p>
      </div>
    </div>
    {/* Right: Phone illustration */}
    <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0 z-10">
      <div className="w-72 h-[500px] bg-white/80 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl border border-amber-100">
        <div className="w-48 h-[400px] bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl flex items-center justify-center text-gray-400 text-lg shadow-inner">
          [Phone Illustration]
        </div>
      </div>
    </div>
    {/* Decorative background shapes */}
    <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-200/30 rounded-full blur-3xl z-0" />
    <div className="absolute -bottom-16 -right-16 w-60 h-60 bg-orange-200/30 rounded-full blur-3xl z-0" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-100/20 rounded-full blur-3xl z-0" />
  </section>
);

export default PromoSection; 