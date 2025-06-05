import React from 'react';

export default function SubscriptionSection() {
  return (
    <section className="bg-yellow-400 py-16 px-4 rounded-3xl relative overflow-hidden mb-12 mt-12 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">Be kind to your mind</h2>
      <ul className="text-gray-800 mb-6 space-y-2 max-w-lg mx-auto">
        <li>✔️ Access the full library of 500+ meditations on everything from stress, to resilience, to compassion</li>
        <li>✔️ Put your mind to bed with sleep sounds, music, and wind-down exercises</li>
        <li>✔️ Make mindfulness a part of your daily routine with tension-melting workouts, relaxing yoga, focus music playlists, and more</li>
      </ul>
      <div className="bg-white rounded-xl shadow p-6 mb-6 w-full max-w-md flex flex-col items-center">
        <div className="text-gray-900 font-semibold mb-2">14 days free, then $69.99 USD/year</div>
        <div className="text-gray-500 text-sm mb-4">$5.83 USD/month</div>
        <button className="bg-yellow-400 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-yellow-500 transition">Get this deal</button>
      </div>
      <div className="flex space-x-4 mt-4">
        <div className="w-32 h-64 bg-orange-300 rounded-2xl shadow-lg flex items-center justify-center text-2xl font-bold">App</div>
        <div className="w-32 h-48 bg-white rounded-2xl shadow-lg flex items-center justify-center text-2xl font-bold">Preview</div>
      </div>
    </section>
  );
} 