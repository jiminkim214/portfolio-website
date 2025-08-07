import React, { useState, useEffect, useRef } from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: 'JavaScript', level: 90, color: 'bg-yellow-400' },
    { name: 'TypeScript', level: 85, color: 'bg-blue-500' },
    { name: 'React', level: 90, color: 'bg-cyan-400' },
    { name: 'Node.js', level: 80, color: 'bg-green-500' },
    { name: 'Python', level: 85, color: 'bg-blue-600' },
    { name: 'Java', level: 75, color: 'bg-red-500' },
    { name: 'Next.js', level: 80, color: 'bg-gray-800' },
    { name: 'PostgreSQL', level: 75, color: 'bg-blue-700' },
    { name: 'AWS', level: 70, color: 'bg-orange-500' },
    { name: 'Docker', level: 70, color: 'bg-blue-400' }
  ];

  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Building end-to-end solutions with modern web technologies'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user experiences'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Ensuring fast, scalable, and efficient applications'
    }
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
    <section id="about" ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-20 max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
            About Me
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            I'm passionate about creating innovative digital solutions that make a difference. 
            With a focus on clean code, beautiful design, and exceptional user experiences, 
            I bring ideas to life through technology.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className={`group p-8 bg-white border border-gray-100 rounded-2xl hover:border-gray-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <highlight.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                {highlight.title}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h3 className="text-3xl font-light text-gray-900 mb-12 text-center">Technologies & Skills</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <span className={`text-sm text-gray-500 transition-opacity duration-300 ${
                    hoveredSkill === skill.name ? 'opacity-100' : 'opacity-0'
                  }`}>
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;