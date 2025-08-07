import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #3b82f6 0%, transparent 50%)`,
          transition: 'background 0.3s ease',
        }}
      />
      
      <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
        <div className={`transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              JK
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extralight text-gray-900 mb-6 leading-tight tracking-tight">
            Jimin Kim
          </h1>
          
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-8"></div>
          
          <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-light">
            Software Engineer
          </p>
          <p className="text-lg text-gray-500 mb-12 font-light">
            Crafting digital experiences • Based in Ithaca, NY
          </p>
          
          <div className="flex justify-center space-x-4 mb-16">
            {[
              { icon: Github, href: "https://github.com/jiminkim214", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/jiminkim214", label: "LinkedIn" },
              { icon: Mail, href: "mailto:jiminkim214@gmail.com", label: "Email" }
            ].map(({ icon: Icon, href, label }, index) => (
              <a
                key={index}
                href={href}
                target={href.startsWith('mailto:') ? undefined : "_blank"}
                rel={href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                className="group relative p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                aria-label={label}
              >
                <Icon size={24} className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {label}
                </span>
              </a>
            ))}
          </div>
          
          <button
            onClick={scrollToAbout}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            <span>Explore my work</span>
            <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;