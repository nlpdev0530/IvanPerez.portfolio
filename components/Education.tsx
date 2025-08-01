'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, GraduationCap, Award } from 'lucide-react';

export function Education() {
  const { t } = useLanguage();

  const education = [
    {
      degree: 'Information Technology Project Management',
      institution: 'Proyecto Educación y Nuevas Tecnologías',
      location: 'Argentina',
      period: '2018 - 2020',
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'IFTS N° 26',
      location: 'Argentina',
      period: '2013 - 2017',
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2020',
    },
    {
      name: 'Software Engineer',
      issuer: 'Hacker Rank',
      date: '2022',
    },
    {
      name: 'Frontend Developer',
      issuer: 'Hacker Rank',
      date: '2022',
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t.education.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.education.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <GraduationCap className="h-6 w-6 mr-3 text-blue-600" />
              Academic Background
            </h3>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {edu.degree}
                    </CardTitle>
                    <CardDescription className="flex items-center text-primary font-semibold">
                      <GraduationCap className="h-4 w-4 mr-2" />
                      {edu.institution}
                    </CardDescription>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground mt-2">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {edu.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {edu.location}
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Award className="h-6 w-6 mr-3 text-purple-600" />
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <h4 className="font-bold text-foreground">{cert.name}</h4>
                      <p className="text-sm text-primary font-medium">{cert.issuer}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>Issued: {cert.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}