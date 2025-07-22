import React from 'react';

const About: React.FC = () => {
    const skills = [
        'JavaScript', 'TypeScript', 'React', 'None.js', 'Python', 'Java','Next.js', 'Express', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'
    ];
    return(
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Current Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
    )
}
export default About;