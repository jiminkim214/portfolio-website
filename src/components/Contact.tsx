import React from 'react';

const Contact: React.FC = () => {

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities and projects! Feel free to reach out to me through email or on social media!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;