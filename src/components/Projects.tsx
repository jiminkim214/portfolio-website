import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: 'ClarityAI',
      description: 'A full-stack AI-powered application that provides personalized therapeutic support and mental health chat with advanced natural language processing.',
      tech: ['Python', 'React', 'TypeScript', 'TailwindCSS', 'PostgreSQL', 'Supabase'],
      github: 'https://github.com/jiminkim214/ClarityAI',
      live: 'https://clarity-ai-vert.vercel.app',
      image: '/images/projects/clarityai.png',
      imageAlt: 'ClarityAI interface showing AI-powered mental health chat'
    },
    {
      title: 'CornellGO',
      description: 'A mobile application for Cornell University students to explore campus through interactive challenges and gamified experiences.',
      tech: ['Dart', 'TypeScript', 'JavaScript', 'Figma'],
      github: 'https://github.com/cornell-dti/cornell-go',
      image: '/images/projects/cornellgo.png',
      imageAlt: 'CornellGO mobile app interface'
    },
    {
      title: 'BeanSearch',
      description: 'A sophisticated search engine implementation using natural language processing and advanced information retrieval techniques.',
      tech: ['Python', 'NLP', 'SVD', 'TF-IDF'],
      github: 'https://github.com/chrisrjohnson04/BeanSearch',
      image: '/images/projects/beansearch.png',
      imageAlt: 'BeanSearch engine interface'
    },
    {
      title: 'BOOTedCamp',
      description: 'A backend application designed to help students learn new skills and track their progress through structured learning paths.',
      tech: ['OCaml', 'Git'],
      github: 'https://github.com/jiminkim214/BOOTedCamp',
      live: 'https://www.youtube.com/watch?v=IWzOTUvt2xI',
      image: '/images/projects/bootedcamp.png',
      imageAlt: 'BOOTedCamp learning platform'
    },
    {
      title: 'Saferbites',
      description: 'A food allergy app that helps users find safe dining options based on their specific allergies and dietary restrictions.',
      tech: ['React', 'Figma', 'CSS'],
      github: 'https://github.com/jiminkim214/saferbites',
      live: 'https://www.youtube.com/watch?v=GRLzZO94CQo',
      image: '/images/projects/saferbites.png',
      imageAlt: 'Saferbites app showing food allergy options'
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
    <section id="projects" ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-6xl font-light text-black mb-4 tracking-tight">
            Projects
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-8"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Changed to 2 columns layout with larger cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group bg-white border border-gray-100 rounded-xl p-8 hover:border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="mb-8 overflow-hidden rounded-lg">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.currentTarget.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 256"><rect width="400" height="256" fill="%23f3f4f6"/><text x="200" y="128" text-anchor="middle" dy="0.3em" font-family="sans-serif" font-size="18" fill="%236b7280">${project.title}</text></svg>`;
                      }}
                    />
                  ) : (
                    // Placeholder for projects without images
                    <div className="w-full h-64 bg-gray-100 flex items-center justify-center rounded-lg">
                      <span className="text-gray-500 font-light text-xl">{project.title}</span>
                    </div>
                  )}
                </div>

                {/* Project Content - Increased spacing */}
                <div className="mb-6">
                  <h3 className="text-2xl font-medium text-black mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light text-base">
                    {project.description}
                  </p>
                </div>
                
                {/* Tech Stack - Larger tags */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-sm border border-gray-200 hover:bg-gray-100 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links - Larger buttons */}
                <div className="flex justify-end space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-all duration-300"
                    title="View GitHub Repository"
                  >
                    <Github size={20} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-all duration-300"
                      title="View Live Project"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
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