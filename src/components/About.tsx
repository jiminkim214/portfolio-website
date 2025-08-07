import React from 'react';

const About: React.FC = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Java',
    'Next.js', 'Express', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-4 tracking-tight">
            About
          </h2>
          <div className="w-16 h-0.5 bg-black mx-auto opacity-20 mb-8"></div>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            I love building things with code and exploring new technologies. 
            Currently focused on creating innovative digital solutions with modern web technologies.
          </p>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-light text-black mb-8">Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors duration-300 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;