import React from 'react';

export default function CustomFooter() {
  return (
    <footer className="bg-gray-50 pt-12 pb-6 mt-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Newsletter */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div className="mb-4 md:mb-0">
            <div className="font-semibold text-gray-800 mb-1">Stay in the loop</div>
            <div className="text-gray-500 text-sm mb-2">Be the first to get updates on our latest content, special offers, and more from Headspace.</div>
            <form className="flex">
              <input type="email" placeholder="Email address" className="px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none" />
              <button type="submit" className="bg-gray-800 text-white px-4 py-2 rounded-r-md font-semibold">Subscribe</button>
            </form>
          </div>
          <div className="flex space-x-4 items-center">
            <a href="#" className="text-gray-500 hover:text-gray-700 text-2xl">🌐</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-2xl">🐦</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-2xl">📘</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-2xl">📸</a>
          </div>
        </div>
        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="font-semibold mb-2 text-gray-700">Get some Headspace</div>
            <ul className="space-y-1 text-sm text-gray-600">
              <li><a href="#">Meditation</a></li>
              <li><a href="#">Sleep</a></li>
              <li><a href="#">Mindfulness</a></li>
              <li><a href="#">Stress relief</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2 text-gray-700">Our content</div>
            <ul className="space-y-1 text-sm text-gray-600">
              <li><a href="#">Articles</a></li>
              <li><a href="#">Guided meditations</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Podcasts</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2 text-gray-700">About us</div>
            <ul className="space-y-1 text-sm text-gray-600">
              <li><a href="#">Company</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2 text-gray-700">Get the app</div>
            <div className="flex space-x-2 mt-2">
              <a href="#" className="inline-block"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10" /></a>
              <a href="#" className="inline-block"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-10" /></a>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="text-center text-xs text-gray-400 border-t border-gray-100 pt-4">© {new Date().getFullYear()} Headspace. All rights reserved.</div>
      </div>
    </footer>
  );
} 