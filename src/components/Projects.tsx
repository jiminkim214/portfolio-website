import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: 'ClarityAI',
      description: 'A full-stack AI-powered application that provides personalized therapeutic support and mental health chat with advanced natural language processing.',
      tech: ['Python', 'React', 'TypeScript', 'TailwindCSS', 'PostgreSQL', 'Supabase'],
      github: 'https://github.com/jiminkim214/ClarityAI',
      live: 'https://clarity-ai-vert.vercel.app',
      image: '/img/projects/clarityai1.png',
      imageAlt: 'ClarityAI interface showing AI-powered mental health chat'
    },
    {
      title: 'CornellGO',
      description: 'A mobile application for Cornell University students to explore campus through interactive challenges and gamified experiences.',
      tech: ['Dart', 'TypeScript', 'JavaScript', 'Figma'],
      github: 'https://github.com/cornell-dti/cornell-go',
      image: '/img/projects/cornellgo1.png',
      imageAlt: 'CornellGO mobile app interface'
    },
    {
      title: 'BOOTedCamp',
      description: 'A backend application designed to help students learn new skills and track their progress through structured learning paths.',
      tech: ['OCaml', 'React', 'CSV', 'Git'],
      github: 'https://github.com/jiminkim214/BOOTedCamp',
      live: 'https://booted-camp.vercel.app',
      image: '/img/projects/bootedcamp1.png',
      imageAlt: 'BOOTedCamp learning platform'
    },
    {
      title: 'BeanSearch',
      description: 'A sophisticated search engine implementation using natural language processing and advanced information retrieval techniques.',
      tech: ['Python', 'NLP', 'SVD', 'TF-IDF'],
      github: 'https://github.com/chrisrjohnson04/BeanSearch',
      image: '/img/projects/beansearch.png',
      imageAlt: 'BeanSearch engine interface'
    },
    {
      title: 'Saferbites',
      description: 'A food allergy app that helps users find safe dining options based on their specific allergies and dietary restrictions.',
      tech: ['React', 'Figma', 'CSS'],
      github: 'https://github.com/jiminkim214/saferbites',
      live: 'https://www.youtube.com/watch?v=GRLzZO94CQo',
      image: '/img/projects/saferbites.png',
      imageAlt: 'Saferbites app showing food allergy options'
    },
  ];

  // Preload images for faster rendering
  useEffect(() => {
    const preloadImages = () => {
      projects.forEach((project, index) => {
        if (project.image) {
          const img = new Image();
          img.onload = () => {
            setLoadedImages(prev => new Set(prev).add(index));
          };
          img.src = project.image;
        }
      });
    };

    preloadImages();
  }, []);

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

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set(prev).add(index));
  };

  const isImageLoaded = (index: number) => loadedImages.has(index);

  // Function to handle card clicks
  const handleCardClick = (project: any) => {
    const url = project.live || project.github;
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  // Function to handle individual link clicks (prevent card click)
  const handleLinkClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation(); // Prevent card click
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            A showcase of recent work and personal projects demonstrating innovation, 
            technical expertise, and creative problem-solving.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group bg-white border border-gray-100 rounded-xl p-8 hover:border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onClick={() => handleCardClick(project)}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Optimized Image Section */}
                <div className="mb-8 overflow-hidden rounded-lg relative">
                  {/* Loading skeleton */}
                  {!isImageLoaded(index) && (
                    <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center z-10">
                      <div className="text-gray-400 text-sm">Loading...</div>
                    </div>
                  )}
                  
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className={`w-full h-96 object-cover transition-all duration-500 group-hover:scale-105 ${
                        isImageLoaded(index) ? 'opacity-100' : 'opacity-0'
                      }`}
                      loading="lazy"
                      decoding="async"
                      onLoad={() => handleImageLoad(index)}
                      onError={(e) => {
                        console.log(`❌ Image failed to load: ${project.image}`);
                        e.currentTarget.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384"><rect width="384" height="384" fill="%23f3f4f6"/><text x="192" y="192" text-anchor="middle" dy="0.3em" font-family="sans-serif" font-size="18" fill="%236b7280">${project.title}</text></svg>`;
                        handleImageLoad(index);
                      }}
                      style={{
                        aspectRatio: '1 / 1',
                        objectFit: 'cover'
                      }}
                    />
                  ) : (
                    <div className="w-full h-96 bg-gray-100 flex items-center justify-center rounded-lg">
                      <span className="text-gray-500 font-light text-xl">{project.title}</span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="mb-6">
                  <h3 className="text-2xl font-medium text-black mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light text-base">
                    {project.description}
                  </p>
                </div>
                
                {/* Tech Stack */}
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

                {/* Project Links - Now with click prevention */}
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={(e) => handleLinkClick(e, project.github)}
                    className="p-3 text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-all duration-300"
                    title="View GitHub Repository"
                  >
                    <Github size={20} />
                  </button>
                  {project.live && (
                    <button
                      onClick={(e) => handleLinkClick(e, project.live)}
                      className="p-3 text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-all duration-300"
                      title="View Live Project"
                    >
                      <ExternalLink size={20} />
                    </button>
                  )}
                </div>

                {/* Visual indicator for clickability */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/10 backdrop-blur-sm rounded-full p-2">
                    <ExternalLink size={16} className="text-black/60" />
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