import React from 'react';
import HeroSection from './_components/HeroSection';
import CategoryGrid from './_components/CategoryGrid';
import ArticleSection from './_components/ArticleSection';
import PromoMeditation from './_components/PromoMeditation';
import Footer from './_components/Footer';
import MenuNav from '@/global/components/menu-nav';
import Promobanner from '@/global/components/promobanner';

export default function ArticlesPage() {
  return (
    <main className="w-full bg-white">
      <Promobanner />
      <MenuNav />
      <HeroSection />
      <CategoryGrid />
      <ArticleSection sectionTitle="Latest mental health and wellbeing articles" category="mental" />
      <ArticleSection sectionTitle="Latest Mindfulness articles" category="mindfulness" />
      <PromoMeditation />
      <ArticleSection sectionTitle="Latest meditation articles" category="meditation" />
      <ArticleSection sectionTitle="Latest Sleep articles" category="sleep" />
      <Footer />
    </main>
  );
} 