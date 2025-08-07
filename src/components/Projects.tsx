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
      tech: ['React', 'TypeScript', 'TailwindCSS', 'PostgreSQL', 'Supabase'],
      github: 'https://github.com/jiminkim214/ClarityAI',
      live: 'https://example.com'
    },
    {
      title: 'CornellGO',
      description: 'A mobile application for Cornell University students to explore campus through interactive challenges and gamified experiences.',
      tech: ['Dart', 'TypeScript', 'JavaScript', 'Figma'],
      github: 'https://github.com/cornell-dti/cornell-go'
    },
    {
      title: 'BeanSearch',
      description: 'A sophisticated search engine implementation using natural language processing and advanced information retrieval techniques.',
      tech: ['Python', 'NLP', 'SVD', 'TF-IDF'],
      github: 'https://github.com/chrisrjohnson04/BeanSearch'
    },
    {
      title: 'BOOTedCamp',
      description: 'A backend application designed to help students learn new skills and track their progress through structured learning paths.',
      tech: ['OCaml', 'Git'],
      github: 'https://github.com/jiminkim214/BOOTedCamp',
      live: 'https://www.youtube.com/watch?v=IWzOTUvt2xI'
    },
    {
      title: 'Saferbites',
      description: 'A food allergy app that helps users find safe dining options based on their specific allergies and dietary restrictions.',
      tech: ['React', 'Figma', 'CSS'],
      github: 'https://github.com/jiminkim214/saferbites',
      live: 'https://www.youtube.com/watch?v=GRLzZO94CQo'
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
          <h2 className="text-4xl md:text-5xl font-light text-black mb-4 tracking-tight">
            Projects
          </h2>
          <div className="w-16 h-0.5 bg-black mx-auto opacity-20 mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            A showcase of recent work and personal projects demonstrating innovation, 
            technical expertise, and creative problem-solving.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group bg-white border border-gray-100 rounded-lg p-6 hover:border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-medium text-black mb-3 group-hover:text-gray-700 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light text-sm">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-xs border border-gray-200 hover:bg-gray-100 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-end space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-all duration-300"
                  >
                    <Github size={18} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-all duration-300"
                    >
                      <ExternalLink size={18} />
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