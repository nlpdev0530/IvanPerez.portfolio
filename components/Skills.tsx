'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t.skills.categories.language,
      skills: [
        { name: 'JavaScript', level: 95, color: 'bg-yellow-500' },
        { name: 'TypScript', level: 90, color: 'bg-blue-500' },
        { name: 'Python', level: 90, color: 'bg-yellow-600' },
        { name: 'PHP', level: 95, color: 'bg-violet-500' },
        { name: 'JAVA', level: 85, color: 'bg-red-500' }
      ]
    },
    {
      title: t.skills.categories.frontend,
      skills: [
        { name: 'React', level: 95, color: 'bg-blue-500' },
        { name: 'Next.js', level: 90, color: 'bg-gray-800' },
        { name: 'Vue.js', level: 90, color: 'bg-blue-600' },
        { name: 'AngularJS', level: 85, color: 'bg-red-700' },
        { name: 'Tailwind CSS', level: 90, color: 'bg-cyan-500' }
      ]
    },
    {
      title: t.skills.categories.backend,
      skills: [
        { name: 'Node.js', level: 95, color: 'bg-yellow-600' },
        { name: 'NestJS', level: 85, color: 'bg-pink-500' },
        { name: 'Django', level: 90, color: 'bg-green-700' },
        { name: 'Laravel', level: 90, color: 'bg-red-400' },
        { name: 'Spring Boot', level: 80, color: 'bg-green-400' },
      ]
    },
    {
      title: t.skills.categories.database,
      skills: [
        { name: 'MongoDB', level: 95, color: 'bg-green-500' },
        { name: 'MySQL', level: 85, color: 'bg-blue-800' },
        { name: 'PostgreSQL', level: 90, color: 'bg-blue-900' },
        { name: 'Oracle', level: 90, color: 'bg-red-400' },
      ]
    },
    {
      title: t.skills.categories.ai,
      skills: [
        { name: 'LangChain/LlamaIndex', level: 90, color: 'bg-blue-900' },
        { name: 'OpenAI', level: 90, color: 'bg-gray-500' },
        { name: 'Anthropic', level: 85, color: 'bg-yellow-900' },
        { name: 'Pinecone', level: 85, color: 'bg-slate-900' },
        { name: 'Hugging Face', level: 80, color: 'bg-yellow-600' },
      ]
    },
    {
      title: t.skills.categories.tools,
      skills: [
        { name: 'Git', level: 90, color: 'bg-orange-600' },
        { name: 'Azure', level: 80, color: 'bg-blue-600' },
        { name: 'AWS', level: 80, color: 'bg-orange-500' },
        { name: 'GCP', level: 85, color: 'bg-yellow-500' },
        { name: 'Jira', level: 80, color: 'bg-purple-600' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t.skills.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-center">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}