import React from 'react';
import { ExternalLink, FileText, Calendar, Users, Tag } from 'lucide-react';

const Publications: React.FC = () => {
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
      link: 'https://example.com/publication2',
      status: 'Accepted',
      doi: '10.1000/conference.2024.002'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published':
        return 'bg-green-100 text-green-800';
      case 'Accepted':
        return 'bg-blue-100 text-blue-800';
      case 'Under Review':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="publications" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-4 tracking-tight">
            Publications
          </h2>
          <div className="w-16 h-0.5 bg-black mx-auto opacity-20 mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Academic contributions and research publications in technology, design, and digital innovation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {publications.map((publication, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:border-gray-200"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-normal text-black mb-2 group-hover:text-gray-700 transition-colors duration-300 leading-tight">
                        {publication.title}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <Users size={14} />
                          <span>{publication.authors.join(', ')}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{publication.year}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FileText size={14} />
                          <span>{publication.type}</span>
                        </div>
                      </div>

                      <p className="text-gray-800 font-medium mb-4">
                        {publication.journal}
                      </p>
                    </div>

                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(publication.status)}`}>
                      {publication.status}
                    </span>
                  </div>

                  {/* Keywords section */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Tag size={14} className="text-gray-500" />
                      <span className="text-sm font-medium text-gray-700">Keywords:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {publication.keywords.map((keyword, keywordIndex) => (
                        <span
                          key={keywordIndex}
                          className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-xs border border-gray-200 hover:bg-gray-100 transition-colors duration-200"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    {publication.doi !== 'Pending' && (
                      <span className="text-xs text-gray-500">
                        DOI: {publication.doi}
                      </span>
                    )}
                    
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm text-black border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                    >
                      <ExternalLink size={14} />
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