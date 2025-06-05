import React from 'react';
import HeroSection from './_components/HeroSection';
import FeatureCards from './_components/FeatureCards';
import LatestSleepArticles from './_components/LatestSleepArticles';
import DreamyAudioSection from './_components/DreamyAudioSection';
import SleepcastsCarousel from './_components/SleepcastsCarousel';
import SleepTipsTools from './_components/SleepTipsTools';
import SleepContentCarousel from './_components/SleepContentCarousel';
import MoreArticlesSection from './_components/MoreArticlesSection';
import SleepFooter from './_components/SleepFooter';
import MenuNav from '@/global/components/menu-nav';
import Promobanner from '@/global/components/promobanner';

export default function SleepPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0826] to-[#18143a] text-white">
      <Promobanner />
      <MenuNav />
      <main className="relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        
        {/* Main content with improved spacing and animations */}
        <div className="relative">
          <HeroSection />
          <div className="space-y-24">
            <FeatureCards />
            <LatestSleepArticles />
            <DreamyAudioSection />
            <SleepcastsCarousel />
            <SleepTipsTools />
            <SleepContentCarousel />
            <MoreArticlesSection />
          </div>
          <SleepFooter />
        </div>
      </main>
    </div>
  );
} 