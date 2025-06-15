import React from 'react';

// Define the props interface
interface ProjectSectionProps {
  translations: {
    title: string;
    projects?: {
      title: string;
      description: string;
      technologies: string[];
      image: string;
      link?: string;
    }[];
  };
  isVisible: boolean;
}

export default function ProjectSection({
  translations,
  isVisible,
}: ProjectSectionProps) {
  return (
    <section
      id="projects"
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-white/5 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {translations.title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {translations.projects?.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:bg-white/15 transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row h-full">
                {/* Image Section */}
                <div className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Text Section */}
                <div className="sm:w-3/5 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies?.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-md border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300"
                      >
                        View Project
                        <svg
                          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )) || (
            <div className="col-span-full text-center text-gray-400 py-12">
              <p>No projects to display</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
