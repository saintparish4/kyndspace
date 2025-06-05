import React from 'react';

type ArticleSectionProps = {
  sectionTitle: string;
  category: string;
};

const placeholderArticles = [
  { title: 'Sample Article 1', summary: 'Short summary of article 1.', date: '2024-03-01', readTime: '5 min', link: '#' },
  { title: 'Sample Article 2', summary: 'Short summary of article 2.', date: '2024-03-02', readTime: '6 min', link: '#' },
  { title: 'Sample Article 3', summary: 'Short summary of article 3.', date: '2024-03-03', readTime: '7 min', link: '#' },
  { title: 'Sample Article 4', summary: 'Short summary of article 4.', date: '2024-03-04', readTime: '8 min', link: '#' },
];

export default function ArticleSection({ sectionTitle, category }: ArticleSectionProps) {
  // Placeholder loading state
  const loading = false;
  return (
    <section className="w-full py-10 md:py-16 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-900">{sectionTitle}</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {loading ? (
            Array(4).fill(0).map((_, i) => (
              <div key={i} className="h-40 bg-gray-200 animate-pulse rounded-xl" />
            ))
          ) : (
            placeholderArticles.map((article, i) => (
              <div key={i} className="bg-white rounded-xl shadow p-5 flex flex-col justify-between hover:shadow-lg transition">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">{article.title}</h4>
                  <p className="text-gray-500 text-sm mb-3">{article.summary}</p>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
                <a href={article.link} className="mt-2 text-sm text-blue-500 hover:underline">Read More →</a>
              </div>
            ))
          )}
        </div>
        {/* Pagination controls */}
        <div className="flex items-center justify-center gap-2">
          {[1,2,3,4,5].map((n) => (
            <button key={n} className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-300 text-gray-600 hover:bg-gray-100 transition text-sm font-medium">
              {n}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
} 