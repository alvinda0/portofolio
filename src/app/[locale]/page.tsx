'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/hooks/use-translation';

import type { Locale } from '@/lib/translations';
import Navbar from '@/component/navbar';
import HeroSection from '@/component/hero-section';
import AboutSection from '@/component/about-section';
import ExperienceSection from '@/component/experience-section';
import SkillsSection from '@/component/skills-section';
import ContactSection from '@/component/contact-section';
import Footer from '@/component/footer';
import ProjectSection from '@/component/project-section';

export default function Portfolio() {
  const params = useParams();
  const locale = params.locale as Locale;
  const t = useTranslation(locale);

  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Navigation */}
      <Navbar
        translations={t.nav}
        activeSection={activeSection}
        locale={locale}
      />

      {/* Hero Section */}
      <HeroSection translations={t.hero} isVisible={isVisible} />

      <ProjectSection translations={t.projects} isVisible={isVisible} />

      {/* About Section */}
      <AboutSection translations={t.about} isVisible={isVisible} />

      {/* Experience Section */}
      <ExperienceSection translations={t.experience} isVisible={isVisible} />

      {/* Skills Section */}
      <SkillsSection translations={t.skills} isVisible={isVisible} />

      {/* Contact Section */}
      <ContactSection
        translations={t.contact}
        formData={formData}
        setFormData={setFormData}
        isVisible={isVisible}
      />

      {/* Footer */}
      <Footer translations={t.footer} />
    </div>
  );
}
