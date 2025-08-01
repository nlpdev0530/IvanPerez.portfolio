'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowDown, ExternalLink, Mail } from 'lucide-react';

export function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground animate-slide-up">
              {t.hero.greeting}
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight animate-slide-up delay-200">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                {t.hero.name}
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground animate-slide-up delay-300">
              {t.hero.title}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up delay-400">
              {t.hero.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up delay-500">
            <Button
              size="lg"
              onClick={() => scrollToSection('#projects')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              {t.hero.cta}
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('#contact')}
              className="border-2 font-medium px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              {t.hero.contact}
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="pt-12 animate-bounce">
            <button
              onClick={() => scrollToSection('#about')}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <ArrowDown className="h-6 w-6 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}