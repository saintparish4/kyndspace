import React from 'react';

const SleepFooter = () => (
  <footer className="bg-[#f7f6f3] text-[#0a0826] py-12 mt-12">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex-1">
        <div className="text-2xl font-bold mb-2">Stay in the loop</div>
        <div className="mb-4 text-gray-700">Subscribe for updates, tips, and more.</div>
        <form className="flex gap-2">
          <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none" />
          <button className="bg-[#0a0826] text-white px-6 py-2 rounded-r-full font-semibold">Subscribe</button>
        </form>
      </div>
      <div className="flex-1 flex flex-col items-center md:items-end">
        <div className="mb-2">Get the app</div>
        <div className="flex gap-2">
          <div className="w-24 h-8 bg-gray-400 rounded" />
          <div className="w-24 h-8 bg-gray-400 rounded" />
        </div>
      </div>
    </div>
  </footer>
);

export default SleepFooter; 