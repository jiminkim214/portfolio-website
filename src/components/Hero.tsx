import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth'})
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-light text-black mb-6 leading-tight tracking-tight">
            Jimin Kim
          </h1>
          <div className="w-16 h-0.5 bg-black mx-auto opacity-20 mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-light">
            Software Engineer
          </p>
          <p className="text-lg text-gray-500 mb-12 font-light">
            Based in Ithaca, NY
          </p>
          
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/jiminkim214"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300"
            >
              <Github size={20} className="text-black" />
            </a>
            <a
              href="https://www.linkedin.com/in/jiminkim214"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300"
            >
              <Linkedin size={20} className="text-black" />
            </a>
            <a
              href="mailto:jiminkim214@gmail.com"
              className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300"
            >
              <Mail size={20} className="text-black" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;