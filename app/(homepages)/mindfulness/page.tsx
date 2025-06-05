import React from 'react';
import MindfulnessPractices from './_components/MindfulnessPractices';
import MindfulnessBenefits from './_components/MindfulnessBenefits';
import HeroSection from './_components/HeroSection';
import BenefitsRow from './_components/BenefitsRow';
import TipsToolsSection from './_components/TipsToolsSection';
import ContentCarousel from './_components/ContentCarousel';
import PromoSection from './_components/PromoSection';
import ArticlesRow from './_components/ArticlesRow';
import MenuNav from '@/global/components/menu-nav';
import Promobanner from '@/global/components/promobanner';
  
export default function MindfulnessPage() {
  const practices = [
    {
      title: "Mindful Breathing",
      description: "Focus on your breath to anchor yourself in the present moment.",
      duration: "5-10 min",
      level: "Beginner"
    },
    {
      title: "Body Scan",
      description: "Systematically bring awareness to different parts of your body.",
      duration: "10-20 min",
      level: "All Levels"
    },
    {
      title: "Mindful Walking",
      description: "Practice mindfulness while walking, noticing each step and your surroundings.",
      duration: "15-30 min",
      level: "Intermediate"
    }
  ];

  const benefits = [
    {
      title: "Reduced Anxiety",
      description: "Regular mindfulness practice can help manage anxiety and stress levels.",
      icon: "😌"
    },
    {
      title: "Better Focus",
      description: "Improve your ability to concentrate and stay present in daily activities.",
      icon: "🎯"
    },
    {
      title: "Emotional Regulation",
      description: "Develop better control over your emotional responses and reactions.",
      icon: "💫"
    },
    {
      title: "Improved Relationships",
      description: "Enhance your connections through mindful communication and presence.",
      icon: "🤝"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <Promobanner />
      <MenuNav />
      <main className="w-full max-w-[1920px] mx-auto">
        <HeroSection />
        <div className="px-4 md:px-8 space-y-16 py-16">
          <BenefitsRow />
          <TipsToolsSection />
          <ContentCarousel />
          <PromoSection />
          <ArticlesRow />
          <section className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Mindfulness
            </h1>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Cultivate presence and awareness in your daily life through our guided mindfulness practices.
            </p>
            <MindfulnessPractices practices={practices} />
            <MindfulnessBenefits benefits={benefits} />
          </section>
        </div>
      </main>
    </div>
  );
} 