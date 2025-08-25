import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Calendar, Users, Tag } from 'lucide-react';

const Publications: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const publications = [
    {
      title: 'Advancing Quantitative Trading Strategies Using Fine-Tuned Open-Source Large Language Models: A Hybrid Approach with Numerical and Textual Data Integration Using RAG and LoRA Techniques',
      authors: ['Jimin Kim', 'Seth H. Huang', 'Ka Lok Kellogg Wong'],
      journal: 'Springer',
      year: 'AUG 2025',
      type: 'Research Paper',
      keywords: [
        'Large Language Models (LLMs)',
        'Quantitative Trading Strategies',
        'Retrieval-Augmented Generation (RAG)',
        'Low-Rank Adaptation (LoRA)',
        'Hybrid Trading Models'
      ],
      link: 'https://link.springer.com/chapter/10.1007/978-981-96-5833-6_3',
      status: 'Published',
      doi: 'https://doi.org/10.1007/978-981-96-5833-6_3'
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Accepted':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Under Review':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="publications" ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
            Publications
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-8"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {publications.map((publication, index) => (
            <div
              key={index}
              className={`group relative bg-white border border-gray-100 rounded-3xl p-10 hover:border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col gap-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1 pr-4">
                      <h3 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                        {publication.title}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <Users size={16} className="text-gray-400" />
                          <span className="font-medium">{publication.authors.join(', ')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-gray-400" />
                          <span>{publication.year}</span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <p className="text-lg text-gray-800 font-medium mb-2">
                          {publication.journal}
                        </p>
                        {publication.doi !== 'Pending' && (
                          <p className="text-sm text-gray-500">
                            DOI: {publication.doi}
                          </p>
                        )}
                      </div>
                    </div>

                    <span className={`px-4 py-2 rounded-full text-sm font-medium border ${getStatusColor(publication.status)}`}>
                      {publication.status}
                    </span>
                  </div>

                  {/* Keywords section */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Tag size={16} className="text-gray-500" />
                      <span className="text-sm font-medium text-gray-700">Research Keywords</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {publication.keywords.map((keyword, keywordIndex) => (
                        <span
                          key={keywordIndex}
                          className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-full text-sm border border-gray-200 hover:from-blue-50 hover:to-blue-100 hover:border-blue-200 hover:text-blue-700 transition-all duration-300 cursor-default"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>

                <div className="flex items-center lg:items-start justify-center lg:justify-end">
                  <a
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                    <ExternalLink size={16} className="group-hover/link:rotate-45 transition-transform duration-300" />
                    <span>View Publication</span>
                  </a>
                </div>
                </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;