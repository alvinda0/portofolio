import React from 'react';
import { GraduationCap } from 'lucide-react';

// Define the props interface
interface SkillsSectionProps {
  translations: {
    title: string;
    education: {
      title: string;
      degree: string;
      university: string;
      period: string;
    };
    skills?: Array<{
      name: string;
      level: number;
      color: string;
    }>;
  };
  isVisible: boolean;
}

// Default skills data (can be overridden by translations.skills)
const defaultSkills = [
  { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-yellow-600' },
  { name: 'TypeScript', level: 85, color: 'from-blue-400 to-blue-600' },
  { name: 'React', level: 80, color: 'from-cyan-400 to-cyan-600' },
  { name: 'Node.js', level: 75, color: 'from-green-400 to-green-600' },
];

export default function SkillsSection({
  translations,
  isVisible,
}: SkillsSectionProps) {
  // Use skills from translations if available, otherwise use default skills
  const skills = translations.skills || defaultSkills;
  return (
    <section
      id="skills"
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-white/5 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {translations.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/50 hover:bg-white/15 transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-white font-semibold">{skill.name}</span>
                <span className="text-blue-400 text-sm font-bold">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div
                  className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out transform origin-left`}
                  style={{
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 100}ms`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-purple-400/50 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">
                {translations.education.title}
              </h3>
            </div>
            <p className="text-blue-400 font-semibold mb-1 text-lg">
              {translations.education.degree}
            </p>
            <p className="text-gray-300 mb-2 font-medium">
              {translations.education.university}
            </p>
            <p className="text-gray-400 text-sm bg-gray-700/50 px-3 py-1 rounded-full inline-block">
              {translations.education.period}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
