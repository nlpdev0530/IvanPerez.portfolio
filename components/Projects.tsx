'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'Sterling Organization',
      description: `Successfully delivered a dynamic, secure, and scalable website that effectively represents the company's investment strategies and enhances stakeholder engagement, serving as a vital platform for marketing and information dissemination.`,
      image: '/img/projects/sterlingorganization.jpg',
      video: false,
      category: 'web',
      technologies: ['TypeScript', 'PHP', 'Vue.js', 'GraphQL', 'Tailwind CSS', 'Laravel', 'MySQL', 'AWS', 'Nginx', 'Docker'],
      demoUrl: 'https://www.sterlingorganization.com/',
      sourceUrl: ''
    },
    {
      title: 'Houzz',
      description: 'Successfully contributed to a leading platform that revolutionizes home renovation and design, providing an all-in-one solution that connects homeowners with industry professionals and resources, making home improvement projects simpler and more accessible.',
      image: '/img/projects/houzz.mp4',
      video: true,
      category: 'web',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'GCP'],
      demoUrl: 'https://www.houzz.com/',
      sourceUrl: ''
    },
    {
      title: 'Sanyo Steel',
      description: `Delivered a professional, secure, and scalable corporate website that effectively showcases Sanyo Steel Ltd.'s rich history, extensive project portfolio, and industry leadership, strengthening its online presence and stakeholder engagement.`,
      image: '/img/projects/sanyosteel.mp4',
      video: true,
      category: 'web',
      technologies: ['Next.js', 'TypeScript', 'Bootstrap', 'Python', 'Django', 'PostgreSQL', 'GCP'],
      demoUrl: 'https://www.sanyosteel.jp/',
      sourceUrl: ''
    },
    {
      title: '5.11',
      description: `Delivered a dynamic and mission-aligned digital presence that effectively communicates 5.11’s purpose, engages customers, and supports their journey toward readiness and service.`,
      image: '/img/projects/511tactical.mp4',
      video: true,
      category: 'web',
      technologies: ['HTML', 'BootScrap', 'Jquery', 'PHP', 'Laravel', 'MySQL', 'AWS'],
      demoUrl: 'https://www.511tactical.com/',
      sourceUrl: ''
    },
    {
      title: 'Bose',
      description: `Delivered a compelling digital presence that effectively communicates Bose’s legacy of innovation and commitment to delivering world-class audio experiences, reaching audiences globally and supporting ongoing brand growth.`,
      image: '/img/projects/bose.JPG',
      category: 'web',
      technologies: ['AngularJs', 'Bootstrap', 'Java', 'Spring Boot', 'MySQL', 'AWS'],
      demoUrl: 'https://www.bose.com/',
      sourceUrl: ''
    },
    {
      title: 'Williams Sonoma',
      description: 'Delivered a compelling digital experience that educates consumers on responsible sourcing and sustainability, encouraging ethical purchasing decisions and reinforcing the brand’s mission for a better future.',
      image: '/img/projects/williams.JPG',
      category: 'web',
      technologies: ['Nuxt.js', 'TypeScript', 'Element UI', 'NestJS', 'WebSocket', 'Lodash', 'MySQL', 'Redis', 'Vercel', 'AWS', 'Docker'],
      demoUrl: 'https://www.williams-sonoma.ca/',
      sourceUrl: ''
    },
    {
      title: 'Furniture House',
      description: 'Delivered a comprehensive digital solution that enhances efficiency, improves customer experience, and supports the company’s commitment to innovative supply chain management.',
      image: '/img/projects/furniture-house.jpg',
      category: 'web',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase'],
      demoUrl: 'https://furniture-house-a6e5b.web.app/',
      sourceUrl: 'https://github.com/nlpdev0530/furniture-house-client'
    },
    {
      title: 'Safari',
      description: 'Produced high-quality, scalable templates and styles that serve as the foundation for engaging websites and applications, reducing development time and maintaining visual consistency.',
      image: '/img/projects/safari.JPG',
      category: 'web',
      technologies: ['Gulp', 'Sass', 'Jinja'],
      demoUrl: 'https://nailheart.github.io/Safari/',
      sourceUrl: 'https://github.com/nlpdev0530/safari-landing'
    },
    {
      title: 'Inessa',
      description: 'Developed modern, fast-loading storefronts with React and Tailwind CSS, ensuring a seamless shopping experience across devices.',
      image: '/img/projects/perfume.JPG',
      category: 'web',
      technologies: ['React', 'Tailwind Css', 'Netlify'],
      demoUrl: 'https://innesa.netlify.app/',
      sourceUrl: 'https://github.com/nlpdev0530/perfume-shop'
    },
    {
      title: 'Cafe',
      description: 'Complete brand identity design for a tech startupDeveloped an interactive and dynamic frontend interface to enhance user experience, allowing customers to browse products, view discounts, and place orders seamlessly.',
      image: '/img/projects/cafe.JPG',
      category: 'web',
      technologies: ['Angular', 'Jquery', 'Firebase'],
      demoUrl: 'https://vi-cafe-b963a.web.app/',
      sourceUrl: 'https://github.com/nlpdev0530/Cafe-shop'
    },
    {
      title: 'Fitness App',
      description: `As the lead developer of AI Workout Generator, I designed and implemented a full-stack AI-driven fitness platform that delivers highly personalized workout plans in under three minutes. Leveraging GPT-4 via OpenAI, I built an intelligent workout generation system that adapts to user input—such as fitness level, goals, and preferences—collected through a streamlined onboarding questionnaire.
The result is a dynamic, user-adaptive fitness journey that evolves with each user's growth.`,
      image: '/img/projects/aiworkoutgenerator.webp',
      category: 'ai',
      technologies: ['Python', 'TypeScript', 'React', 'Recharts', 'Django', 'Langchain', 'Pinecone', 'OpenAI', 'Azure', 'Google Analytics', 'Stripe'],
      demoUrl: 'https://aiworkoutgenerator.com/',
      sourceUrl: ''
    },

    {
      title: 'Yuna AI',
      description: `Designed a therapeutic AI assistant capable of 24/7 empathetic conversations using Anthropic's Claude fine-tuned prompts, with guardrails and emotional intelligence cues to ensure safe, non-triggering responses.`,
      image: '/img/projects/yuna.webp',
      category: 'ai',
      technologies: ['Python', 'TypeScript', 'React', 'Django', 'NLP', 'LangChain', 'Hugging Face', 'Claude', 'PostgreSQL', 'Vercel', 'AWS'],
      demoUrl: 'https://www.yuna.io/',
      sourceUrl: ''
    },
    {
      title: 'Chatbase',
      description: 'Developed an AI chatbot creation platform allowing users to upload PDFs, DOCX, TXT files, or enter URLs/sitemaps, and auto-generate a ChatGPT-style assistant trained exclusively on that content using OpenAI’s GPT-4 and embedding search Pinecone.',
      image: '/img/projects/chatbase.webm',
      video: true,
      category: 'ai',
      technologies: ['TypeScript', 'Next.js', 'HeroUI', 'NestJS', 'WebSocket', 'RAG', 'LlamaIndex', 'Pinecone', 'OpenAI', 'GCP', 'Vercel', 'Stripe'],
      demoUrl: 'https://www.chatbase.co/',
      sourceUrl: ''
    }
  ];

  const filters = [
    { key: 'all', label: t.projects.filters.all },
    { key: 'web', label: t.projects.filters.web },
    { key: 'mobile', label: t.projects.filters.mobile },
    { key: 'ai', label: t.projects.filters.ai },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t.projects.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.key}
              variant={activeFilter === filter.key ? 'default' : 'outline'}
              onClick={() => setActiveFilter(filter.key)}
              className="rounded-full transition-all duration-300"
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                {project.video ? (
                  <video src={project.image} autoPlay loop muted className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110" />
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={500}
                    className="w-full h-60 transition-transform duration-300 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border-white/20">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {t.projects.viewProject}
                      </Button>
                    </Link>
                    {project.sourceUrl && (
                      <Link href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline" className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border-white/20">
                          <Github className="h-4 w-4 mr-2" />
                          {t.projects.sourceCode}
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="rounded-full">
            {t.projects.viewAll}
          </Button>
        </div>
      </div>
    </section>
  );
}