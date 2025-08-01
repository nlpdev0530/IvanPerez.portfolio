'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';

export function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      // period: '2022 - ' + t.experience.present,
      description: 'Led development of enterprise web applications using React, Node.js, and AWS. Managed a team of 4 developers and improved application performance by 40%.',
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL', 'Docker'],
      achievements: [
        'Reduced application load time by 40%',
        'Led migration to microservices architecture',
        'Mentored 4 junior developers'
      ]
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Digital Innovations Inc',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create responsive and user-friendly interfaces.',
      technologies: ['Vue.js', 'Python', 'Django', 'MongoDB', 'Redis'],
      achievements: [
        'Delivered 15+ client projects on time',
        'Implemented automated testing reducing bugs by 60%',
        'Optimized database queries improving performance by 35%'
      ]
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      period: '2019 - 2020',
      description: 'Built responsive web applications and collaborated with UX/UI designers to implement pixel-perfect designs. Focused on performance optimization and accessibility.',
      technologies: ['React', 'JavaScript', 'Sass', 'Webpack', 'Jest'],
      achievements: [
        'Improved website accessibility score to 98%',
        'Reduced bundle size by 50%',
        'Implemented responsive design for mobile users'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t.experience.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.experience.subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          <div className="space-y-12">
            {t.experience.career.map((experience, index) => (
              <div key={index + 1} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-background shadow-lg z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 pl-12 md:pl-0' : 'md:pl-8 pl-12 md:pr-0'}`}>
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <CardTitle className="text-xl font-bold text-foreground">
                            {experience.title}
                          </CardTitle>
                          <CardDescription className="flex items-center text-[20px] text-primary font-semibold mt-1">
                            {experience.logo ? (
                              <Image
                                src={experience.logo}
                                alt={experience.company}
                                width={25}
                                height={25}
                                className="mr-2"
                              />
                            ) : (
                              <Building className="h-6 w-6 mr-2" />
                            )}
                            {experience.company}
                          </CardDescription>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {experience.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {experience.location}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {experience.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}