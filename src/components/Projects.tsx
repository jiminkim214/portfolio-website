import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: 'ClarityAI',
      description: 'A full-stack AI-powered application that provides personalized therapeutic support and mental health chat with advanced natural language processing.',
      tech: ['React', 'TypeScript', 'TailwindCSS', 'PostgreSQL', 'Supabase'],
      github: 'https://github.com/jiminkim214/ClarityAI',
      live: 'https://example.com',
      featured: true,
      stats: { stars: 24, forks: 8 }
    },
    {
      title: 'CornellGO',
      description: 'A mobile application for Cornell University students to explore campus through interactive challenges and gamified experiences.',
      tech: ['Dart', 'TypeScript', 'JavaScript', 'Figma'],
      github: 'https://github.com/cornell-dti/cornell-go',
      featured: true,
      stats: { stars: 15, forks: 12 }
    },
    {
      title: 'BeanSearch',
      description: 'A sophisticated search engine implementation using natural language processing and advanced information retrieval techniques.',
      tech: ['Python', 'NLP', 'SVD', 'TF-IDF'],
      github: 'https://github.com/chrisrjohnson04/BeanSearch',
      stats: { stars: 8, forks: 3 }
    },
    {
      title: 'BOOTedCamp',
      description: 'A backend application designed to help students learn new skills and track their progress through structured learning paths.',
      tech: ['OCaml', 'Git'],
      github: 'https://github.com/jiminkim214/BOOTedCamp',
      live: 'https://www.youtube.com/watch?v=IWzOTUvt2xI',
      stats: { stars: 12, forks: 5 }
    },
    {
      title: 'Saferbites',
      description: 'A food allergy app that helps users find safe dining options based on their specific allergies and dietary restrictions.',
      tech: ['React', 'Figma', 'CSS'],
      github: 'https://github.com/jiminkim214/saferbites',
      live: 'https://www.youtube.com/watch?v=GRLzZO94CQo',
      stats: { stars: 6, forks: 2 }
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            A showcase of recent work and personal projects demonstrating innovation, 
            technical expertise, and creative problem-solving.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects.filter(p => p.featured).map((project, index) => (
              <div
                key={index}
                className={`group relative bg-white border border-gray-100 rounded-3xl p-8 hover:border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-medium rounded-full">
                    Featured
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm border border-gray-200 hover:bg-gray-100 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Star size={14} />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork size={14} />
                      <span>{project.stats.forks}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-300"
                    >
                      <Github size={18} />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-300"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <div
                key={index}
                className={`group bg-white border border-gray-100 rounded-2xl p-6 hover:border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 2) * 150}ms` }}
              >
                <h3 className="text-lg font-medium text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-50 text-gray-700 rounded text-xs border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-gray-500 text-xs">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Star size={12} />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork size={12} />
                      <span>{project.stats.forks}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-all duration-300"
                    >
                      <Github size={16} />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-all duration-300"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;