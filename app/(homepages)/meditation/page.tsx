import React from 'react';
import HeroSection from './_components/HeroSection';
import FeatureHighlights from './_components/FeatureHighlights';
import InfoCarousel from './_components/InfoCarousel';
import BenefitsSection from './_components/BenefitsSection';
import ContentHighlights from './_components/ContentHighlights';
import ProgramsSection from './_components/ProgramsSection';
import SubscriptionSection from './_components/SubscriptionSection';
import ArticlesSection from './_components/ArticlesSection';
import CustomFooter from './_components/CustomFooter';
import MenuNav from '@/global/components/menu-nav';
import Promobanner from '@/global/components/promobanner';

export default function MeditationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Promobanner />
      <MenuNav />
      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-16">
        <HeroSection />
        <div className="space-y-16">
          <FeatureHighlights />
          <InfoCarousel />
          <BenefitsSection />
          <ContentHighlights />
          <ProgramsSection />
          <SubscriptionSection />
          <ArticlesSection />
        </div>
      </main>
      <CustomFooter />
    </div>
  );
} 