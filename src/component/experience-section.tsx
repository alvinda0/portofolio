import React from 'react';
import { Calendar } from 'lucide-react';

// Define the props interface
interface ExperienceSectionProps {
  translations: {
    title: string;
    jobs: Array<{
      title: string;
      company: string;
      location: string;
      period: string;
      description: string;
      tech: string[];
    }>;
  };
  isVisible: boolean;
}

export default function ExperienceSection({
  translations,
  isVisible,
}: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {translations.title}
          </h2>
        </div>

        <div className="space-y-8">
          {translations.jobs.map((exp, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 hover:text-blue-400 transition-colors duration-200">
                        {exp.title}
                      </h3>
                      <p className="text-blue-400 font-semibold text-lg">
                        {exp.company}
                      </p>
                      <p className="text-gray-400 text-sm">{exp.location}</p>
                    </div>
                    <div className="flex items-center gap-2 text-purple-400 font-semibold mt-2 md:mt-0 bg-purple-500/10 px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30 hover:border-blue-400/50 hover:bg-blue-500/30 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
