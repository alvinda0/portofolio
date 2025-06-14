import { Calendar } from 'lucide-react';

type Experience = {
  icon: React.ReactNode;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  tech: string[];
};

const experiences: Experience[] = [
  {
    icon: <Calendar />,
    title: 'Frontend Developer',
    company: 'Awesome Company',
    location: 'Remote',
    period: 'Jan 2022 - Present',
    description:
      'Worked on building modern web applications using React and TypeScript.',
    tech: ['React', 'TypeScript', 'TailwindCSS'],
  },
  // Add more experience objects as needed
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp: Experience, index: number) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    {exp.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-blue-400 font-semibold">
                        {exp.company}
                      </p>
                      <p className="text-gray-400 text-sm">{exp.location}</p>
                    </div>
                    <div className="flex items-center gap-2 text-purple-400 font-semibold mt-2 md:mt-0">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
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
