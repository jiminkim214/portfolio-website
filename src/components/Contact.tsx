import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-4 tracking-tight">
            Contact
          </h2>
          <div className="w-16 h-0.5 bg-black mx-auto opacity-20 mb-6"></div>
          <p className="text-xl text-gray-600 font-light">
            I'm always open to discussing new opportunities and projects. 
            Feel free to reach out through email or connect on social media.
          </p>
        </div>
        
        <div className="text-center">
          <a
            href="mailto:jiminkim214@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 text-black border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;