import React, { useState, useEffect, useRef } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    <section id="contact" ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-light text-black mb-4 tracking-tight">
            Contact
          </h2>
          <div className="w-16 h-0.5 bg-black mx-auto opacity-20 mb-6"></div>
          <p className="text-xl text-gray-600 font-light">
            Let's connect and create something amazing together.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto text-center">
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>

            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/jiminkim214"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-600 hover:text-black transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/jiminkim214"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-600 hover:text-black transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:jiminkim214@gmail.com"
                className="p-3 text-gray-600 hover:text-black transition-colors duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;