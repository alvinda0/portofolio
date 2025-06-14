import React, { useEffect, useState } from 'react';
import {
  User,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Github,
  Download,
} from 'lucide-react';

// Example translation object; replace with your i18n solution or import as needed
const t = {
  hero: {
    title: "Hi, I'm Alvinda Shahrul",
    subtitle: 'Frontend Developer & UI Enthusiast',
    description:
      'I build modern, responsive web applications with a focus on great user experiences.',
    location: 'Indonesia',
    contactBtn: 'Contact Me',
    downloadBtn: 'Download CV',
  },
};

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  function scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div
        className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
              <User className="w-16 h-16 text-blue-400" />
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          {t.hero.title}
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-4">
          {t.hero.subtitle}
        </p>

        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          {t.hero.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin className="w-5 h-5 text-blue-400" />
            <span>{t.hero.location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Phone className="w-5 h-5 text-blue-400" />
            <span>0857-1438-4307</span>
          </div>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="mailto:alvindashahrul0@gmail.com"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/alvinda-shahrul-79b53a231/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            {t.hero.contactBtn}
          </button>
          <button className="px-8 py-3 border border-blue-400 text-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center gap-2 justify-center">
            <Download className="w-5 h-5" />
            {t.hero.downloadBtn}
          </button>
        </div>
      </div>
    </section>
  );
}
