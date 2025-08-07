import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'ClarityAI',
      description: 'A full-stack AI-powered application that provides personalized therapeutic support and mental health chat.',
      tech: ['React', 'TypeScript', 'TailwindCSS', 'PostgreSQL', 'Supabase'],
      github: 'https://github.com/jiminkim214/ClarityAI',
      live: 'https://example.com'
    },
    {
      title: 'CornellGO',
      description: 'A mobile application for Cornell University students to explore campus through interactive challenges.',
      tech: ['Dart', 'TypeScript', 'JavaScript', 'Figma'],
      github: 'https://github.com/cornell-dti/cornell-go'
    },
    {
      title: 'BeanSearch',
      description: 'A search engine implementation using natural language processing and information retrieval techniques.',
      tech: ['Python', 'NLP', 'SVD', 'TF-IDF'],
      github: 'https://github.com/chrisrjohnson04/BeanSearch'
    },
    {
      title: 'BOOTedCamp',
      description: 'A backend application designed to help students learn new skills and track their progress.',
      tech: ['OCaml', 'Git'],
      github: 'https://github.com/jiminkim214/BOOTedCamp',
      live: 'https://www.youtube.com/watch?v=IWzOTUvt2xI'
    },
    {
      title: 'Saferbites',
      description: 'A food allergy app that helps users find safe dining options based on their allergies.',
      tech: ['React', 'Figma', 'CSS'],
      github: 'https://github.com/jiminkim214/saferbites',
      live: 'https://www.youtube.com/watch?v=GRLzZO94CQo'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-4 tracking-tight">
            Projects
          </h2>
          <div className="w-16 h-0.5 bg-black mx-auto opacity-20 mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            A showcase of recent work and personal projects demonstrating skills in creating innovative solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:border-gray-200"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-normal text-black mb-3 leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed font-light">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-xs border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm text-black border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm text-black border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                      >
                        <ExternalLink size={14} />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;