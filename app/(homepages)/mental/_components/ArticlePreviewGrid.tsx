import React from 'react';

interface ArticleData {
  title: string;
  summary: string;
  link: string;
}

interface ArticlePreviewGridProps {
  articles: ArticleData[];
}

const ArticlePreviewGrid: React.FC<ArticlePreviewGridProps> = ({ articles }) => (
  <section className="w-full py-16">
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
        Featured Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article, idx) => (
          <a 
            key={idx} 
            href={article.link} 
            className="group block bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-blue-100"
          >
            <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg mb-4 overflow-hidden">
              <div className="w-full h-full bg-[url('/article-placeholder.jpg')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500"></div>
            </div>
            <h4 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              {article.title}
            </h4>
            <p className="text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
              {article.summary}
            </p>
            <div className="mt-4 flex items-center text-blue-600 font-medium">
              Read article
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ArticlePreviewGrid; 