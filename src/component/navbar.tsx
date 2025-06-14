import React, { useState } from 'react';
import { Languages, Menu, X } from 'lucide-react';
import type { Locale } from '@/lib/translations';

interface NavbarProps {
  translations: {
    home: string;
    about: string;
    experience: string;
    skills: string;
    contact: string;
  };
  activeSection: string;
  locale: Locale;
}

export default function Navbar({
  translations,
  activeSection,
  locale,
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function scrollToSection(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  }

  function toggleLanguage(): void {
    const newLocale = locale === 'en' ? 'id' : 'en';
    // Navigate to the new locale URL
    const currentPath = window.location.pathname;
    const pathWithoutLocale = currentPath.replace(/^\/(en|id)/, '');
    window.location.href = `/${newLocale}${pathWithoutLocale}`;
  }

  function toggleMobileMenu(): void {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Alvinda
          </div>

          {/* Desktop Navigation */}
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
                {translations[section === 'hero' ? 'home' : section]}
              </button>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <Languages className="w-4 h-4" />
              <span className="text-sm font-medium">
                {locale.toUpperCase()}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-3">
              {(
                ['hero', 'about', 'experience', 'skills', 'contact'] as const
              ).map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-left px-4 py-2 rounded-lg capitalize transition-colors duration-300 hover:bg-white/10 hover:text-blue-400 ${
                    activeSection === section
                      ? 'text-blue-400 bg-white/5'
                      : 'text-gray-300'
                  }`}
                >
                  {translations[section === 'hero' ? 'home' : section]}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
