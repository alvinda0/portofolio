import React, { useState } from 'react';
import { Languages } from 'lucide-react'; // or your icon library, adjust the import path if needed

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  function scrollToSection(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(section);
    }
  }

  const [language, setLanguage] = useState<'en' | 'id'>('en');

  function toggleLanguage(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    setLanguage((prev) => (prev === 'en' ? 'id' : 'en'));
  }

  // Assuming you have a translation object `t` that depends on `language`
  const t = {
    nav: {
      home: language === 'en' ? 'Home' : 'Beranda',
      about: language === 'en' ? 'About' : 'Tentang',
      experience: language === 'en' ? 'Experience' : 'Pengalaman',
      skills: language === 'en' ? 'Skills' : 'Keahlian',
      contact: language === 'en' ? 'Contact' : 'Kontak',
    },
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Alvinda
          </div>
          <div className="hidden md:flex space-x-8">
            {(
              ['hero', 'about', 'experience', 'skills', 'contact'] as const
            ).map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors duration-300 hover:text-blue-400 ${
                  activeSection === section ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                {t.nav[section === 'hero' ? 'home' : section]}
              </button>
            ))}
          </div>
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
          >
            <Languages className="w-4 h-4" />
            <span className="text-sm font-medium">
              {language.toUpperCase()}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
