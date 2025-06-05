import React from 'react';

export default function Footer() {
  // Placeholder loading state
  const loading = false;
  return (
    <footer className="w-full bg-gray-50 pt-12 pb-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Newsletter signup */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl">📧</span>
            <span className="font-semibold text-gray-800">Stay in the loop</span>
          </div>
          <form className="flex gap-2 w-full md:w-auto">
            <input type="email" placeholder="Email address" className="px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none" />
            <button type="submit" className="bg-gray-900 text-white px-6 py-2 rounded-r-full font-semibold">Subscribe</button>
          </form>
        </div>
        {/* Links columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {['Get some Headspace', 'Our content', 'About us', 'Support'].map((section, i) => (
            <div key={i}>
              <div className="font-bold text-gray-700 mb-3">{section}</div>
              <ul className="space-y-2">
                {Array(4).fill(0).map((_, j) => (
                  <li key={j} className="text-gray-500 hover:text-gray-900 cursor-pointer">Link {j+1}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* App download buttons */}
        <div className="flex gap-4 mb-6">
          <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2"><span></span> App Store</button>
          <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2"><span>▶️</span> Google Play</button>
        </div>
        <div className="text-xs text-gray-400 text-center">© 2024 Headspace. All rights reserved.</div>
      </div>
    </footer>
  );
} 