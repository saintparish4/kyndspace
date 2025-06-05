import React from 'react';

interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}

interface FooterProps {
  sections: FooterSection[];
}

const Footer: React.FC<FooterProps> = ({ sections }) => (
  <footer className="w-full bg-gray-900 text-white py-12 px-4">
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      {sections.map((section, idx) => (
        <div key={idx}>
          <h5 className="font-bold mb-4">{section.title}</h5>
          <ul className="space-y-2">
            {section.links.map((link, i) => (
              <li key={i}>
                <a href={link.href} className="hover:underline text-gray-300">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="mt-8 text-center text-gray-500 text-sm">© {new Date().getFullYear()} BluSky Labs. All rights reserved.</div>
  </footer>
);

export default Footer; 