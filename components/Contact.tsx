'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Linkedin, Github, Heart } from 'lucide-react';

export function Contact() {
  const { t } = useLanguage();

  const contactLinks = [
    {
      icon: Mail,
      label: t.contact.email,
      href: 'mailto:ivantalamona1229@gmail.com',
      color: 'text-red-500 hover:bg-red-50 dark:hover:bg-red-950'
    },
    {
      icon: Linkedin,
      label: t.contact.linkedin,
      href: 'https://linkedin.com/in/ivan-perez-talamona-b909161b0',
      color: 'text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950'
    },
    {
      icon: Github,
      label: t.contact.github,
      href: 'https://github.com/nlpdev0530',
      color: 'text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'
    },
    {
      icon: "hackerrank",
      label: t.contact.hackerRank,
      href: 'https://hackerrank.com/',
      color: 'text-green-400 hover:bg-green-50 dark:hover:bg-green-950'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;

            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center space-y-3 ${link.color} transition-colors duration-300`}
                  >
                    {Icon === "hackerrank" ? (
                      <Image
                        src="/img/hackerrank-logo.svg"
                        alt="HackerRank"
                        width={50}
                        height={50}
                        className="h-12 w-12 rounded-full"
                      />
                    ) : (
                      <Icon className="h-12 w-12" />
                    )}
                    <span className="text-sm font-medium">{link.label}</span>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <footer className="border-t border-border/40 pt-8 mt-16">
          <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Ivan Perez Talamona
            </p>
            <p className="flex items-center mt-2 sm:mt-0">
              {t.footer.made} <Heart className="h-4 w-4 mx-1 text-red-500" /> {t.footer.by} Ivan Perez Talamona
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}