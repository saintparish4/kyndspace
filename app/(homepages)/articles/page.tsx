import React from 'react';

export default function ArticlesPage() {
  const articles = [
    {
      title: "Understanding Mindfulness: A Beginner's Guide",
      excerpt: "Learn the fundamentals of mindfulness and how it can transform your daily life.",
      category: "Mindfulness",
      date: "March 15, 2024",
      readTime: "5 min read"
    },
    {
      title: "The Science of Sleep: Why Quality Rest Matters",
      excerpt: "Discover the latest research on sleep and its impact on mental health and well-being.",
      category: "Sleep",
      date: "March 10, 2024",
      readTime: "7 min read"
    },
    {
      title: "Meditation Techniques for Stress Relief",
      excerpt: "Explore different meditation techniques that can help you manage stress effectively.",
      category: "Meditation",
      date: "March 5, 2024",
      readTime: "6 min read"
    },
    {
      title: "Mental Health in the Digital Age",
      excerpt: "Understanding how technology affects our mental well-being and strategies for digital wellness.",
      category: "Mental Health",
      date: "February 28, 2024",
      readTime: "8 min read"
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-4 md:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-sky-400 via-pink-200 to-teal-300 bg-clip-text text-transparent">
        Articles & Resources
      </h1>
      <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        Explore our collection of expert-written articles, research insights, and practical resources
        to support your mental well-being journey.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((article, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-sky-400/20 via-pink-200/20 to-teal-300/20">
                {article.category}
              </span>
              <span className="text-sm text-gray-400">{article.date}</span>
            </div>
            <h2 className="text-xl font-semibold mb-2 text-white">{article.title}</h2>
            <p className="text-gray-300 mb-4">{article.excerpt}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">{article.readTime}</span>
              <button className="text-sm font-medium text-white hover:text-sky-400 transition-colors">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 