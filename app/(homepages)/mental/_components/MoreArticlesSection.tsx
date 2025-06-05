import React from 'react';

interface Category {
  name: string;
  icon: React.ReactNode;
}

interface Article {
  title: string;
  link: string;
}

interface MoreArticlesSectionProps {
  categories: Category[];
  articlesByCategory: { [category: string]: Article[] };
}

const MoreArticlesSection: React.FC<MoreArticlesSectionProps> = ({ categories, articlesByCategory }) => (
  <section className="w-full bg-white py-12 flex flex-col items-center">
    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-8">
      {categories.map((cat, idx) => (
        <div key={idx} className="bg-gray-100 rounded-xl p-6 text-center">
          <div className="text-4xl mb-2">{cat.icon}</div>
          <h4 className="font-bold mb-4">{cat.name}</h4>
          <ul className="space-y-2">
            {(articlesByCategory[cat.name] || []).map((article, i) => (
              <li key={i}>
                <a href={article.link} className="text-blue-600 hover:underline">{article.title}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default MoreArticlesSection; 