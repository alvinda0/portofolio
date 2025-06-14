import React from 'react';

// Define the props interface
interface AboutSectionProps {
  translations: {
    title: string;
    description: string;
    stats: {
      experience: string;
      projects: string;
      technologies: string;
      satisfaction: string;
    };
  };
  isVisible: boolean;
}

export default function AboutSection({
  translations,
  isVisible,
}: AboutSectionProps) {
  return (
    <section
      id="about"
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-white/5 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {translations.title}
        </h2>

        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          {translations.description}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300">
            <div className="text-2xl font-bold text-blue-400 mb-2">2+</div>
            <div className="text-gray-300 text-sm">
              {translations.stats.experience}
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300">
            <div className="text-2xl font-bold text-purple-400 mb-2">10+</div>
            <div className="text-gray-300 text-sm">
              {translations.stats.projects}
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300">
            <div className="text-2xl font-bold text-pink-400 mb-2">5+</div>
            <div className="text-gray-300 text-sm">
              {translations.stats.technologies}
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300">
            <div className="text-2xl font-bold text-green-400 mb-2">100%</div>
            <div className="text-gray-300 text-sm">
              {translations.stats.satisfaction}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
