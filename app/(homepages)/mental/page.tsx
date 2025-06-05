"use client";
import React from 'react';
import Hero from './_components/Hero';
import ResourceCards from './_components/ResourceCards';
import ArticlePreviewGrid from './_components/ArticlePreviewGrid';
import PromoSection from './_components/PromoSection';
import MoreArticlesSection from './_components/MoreArticlesSection';
import Footer from './_components/Footer';
import MenuNav from '@/global/components/menu-nav';
import Promobanner from '@/global/components/promobanner';

export default function MentalHealthPage() {
  // Placeholder data
  const resourceCards = [
    { icon: '📚', title: 'Mental health resources', description: 'Evidence-based practices and expert-led guidance to help you do more of what matters to you.' },
    { icon: '🎧', title: 'Podcasts', description: 'Episodes of Headspace podcasts to inspire hope, love, and respect.' },
    { icon: '💬', title: 'Headspace conversations', description: 'Deep and honest conversations about anything from shame and anger, sadness and parenting.' },
  ];

  const articles = [
    { title: 'Mental health coaching', summary: "One-on-one text-based support to guide you through life's challenges.", link: '#' },
    { title: 'Managing stress', summary: "It's not always possible to control what's happening around us, but it is possible to change how we relate to stressful events.", link: '#' },
    { title: 'Everyday anxiety', summary: 'Feelings of anxiousness can be unsettling, but there are ways to cope.', link: '#' },
  ];

  const promoBullets = [
    'Access the full library of 500+ meditations on everything from stress, to resilience, to compassion',
    'Put your mind to bed with sleep sounds, music, and wind-down exercises',
    'Make mindfulness a part of your daily routine with tension-releasing workouts, relaxing yoga, Focus music playlists, and more',
  ];

  const categories = [
    { name: 'All Articles', icon: '📖' },
    { name: 'Sleep', icon: '😴' },
    { name: 'Meditation', icon: '🧘' },
    { name: 'Mindfulness', icon: '🎈' },
  ];
  const articlesByCategory = {
    'All Articles': [ { title: 'What is mental health coaching?', link: '#' } ],
    'Sleep': [ { title: 'How to sleep better', link: '#' } ],
    'Meditation': [ { title: 'Meditation for beginners', link: '#' } ],
    'Mindfulness': [ { title: 'Mindfulness in daily life', link: '#' } ],
  };

  const footerSections = [
    { title: 'Get some Headspace', links: [ { label: 'Mental health coaching', href: '#' }, { label: 'Meditation', href: '#' } ] },
    { title: 'Our content', links: [ { label: 'Articles', href: '#' }, { label: 'Podcasts', href: '#' } ] },
    { title: 'About us', links: [ { label: 'About Headspace', href: '#' }, { label: 'Careers', href: '#' } ] },
    { title: 'Support', links: [ { label: 'Help', href: '#' }, { label: 'Contact', href: '#' } ] },
  ];

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col">
      <Promobanner />
      <MenuNav />
      <div className="flex-grow">
        <Hero
          headline="Supporting your mental health"
          subheadline="Mental health resources and expert-led guidance to help you take better care of yourself."
          videoUrl={undefined}
          ctaText="Try for free"
          ctaOnClick={() => {}}
        />
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
          <section className="w-full animate-fade-in-up">
            <ResourceCards cards={resourceCards} />
          </section>
          
          <section className="w-full animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <ArticlePreviewGrid articles={articles} />
          </section>
          
          <section className="w-full animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <PromoSection
              title="Be kind to your mind"
              bullets={promoBullets}
              offer="7-day free trial. $5.83 USD/month after."
              ctaText="Get this deal"
              ctaOnClick={() => {}}
            />
          </section>
          
          <section className="w-full animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <MoreArticlesSection categories={categories} articlesByCategory={articlesByCategory} />
          </section>
        </div>
      </div>
      <div className="mt-auto">
        <Footer sections={footerSections} />
      </div>
    </main>
  );
} 