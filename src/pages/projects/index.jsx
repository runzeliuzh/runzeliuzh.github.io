import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const ProjectsIndexPage = () => {
  const projects = [
    {
      id: 1,
      title: 'AI Fashion Assistant',
      subtitle: 'RAG and LLM-Powered Fashion ChatBot leveraging Retrieval-Augmented Generation (RAG) to provide styling advice and outfit recommendations.',
      detailedDescription: [
        'Implemented RAG architecture with vector databases for fashion knowledge retrieval and semantic search',
        'Integrated Large Language Models for natural conversation generation',
        'Developed responsive React frontend with real-time chat interface and product integration',
        'Deployed backend using FastAPI with RESTful architecture'
      ],
      technologies: ['Python', 'FastAPI', 'LLM', 'RAG', 'Vector DB', 'React', 'RESTful API'],
      status: 'Live Demo Available',
      statusColor: 'bg-green-100 text-green-800',
      links: {
        github: 'https://github.com/runzeliuzh/llm-rag-fashion-agent',
        demo: 'https://llm-rag-fashion-agent.vercel.app/'
      },
      achievements: [
        'Deployed AI chatbot'
      ],
      color: 'blue'
    },
    {
      id: 2,
      title: 'Diversity-Driven News Recommender System',
      subtitle: 'Contributed to Diversity-Driven news recommendation research and Informfully Recommenders development.',
      detailedDescription: [
        'Developed a light-weight D-RDW (Diversity-driven Random Walk) recommendation model using Normalized Target Distribution (NTD) for dynamic multi-dimensional distribution control',
        'Developed re-ranking methods for increasing recommendation diversity',
        'Built open-source news text feature augmentation pipelines for NLP tasks (named entity extraction, classification, tokenization, transformers, sentiment analysis)'

      ],
      technologies: ['Python', 'Tensorflow', 'Pytorch', 'Machine Learning', 'NLP','Information Retrieval'],
      status: 'Published Research',
      statusColor: 'bg-blue-100 text-blue-800',
      links: {
        github: 'https://github.com/Informfully/Recommenders'
      },
      achievements: [
        'Published in ACM RecSys 2025',
        'Informfully Recommenders: Open-source framework developed'
      ],
      color: 'purple'
    },
    {
      id: 3,
      title: 'Virtual Clothing Simulation & Fashion Applications',
      subtitle: 'MPhil research project in Hong Kong focusing on computer-aided fashion design and virtual garment fitting systems',
      detailedDescription: [
        'Developed an Intelligent Virtual Fitting system that automatically fits clothing patterns on customized 3D human body models',
        'Created algorithms for automatic pattern preprocessing and prepositioning, reducing setup time from hours to minutes',
        'Implemented garment simulation combining Finite Element Method (FEM) with real-time rendering for web-based performance',
        'Integrated personalized human body modeling techniques moving beyond standard mannequins to individual avatars'
      ],
      technologies: ['Computer Graphics', 'Finite Element Method (FEM)', '3D Modeling', 'Virtual Reality', 'Fashion Technology', 'Human Body Modeling', 'Real-time Rendering'],
      status: 'MPhil Research Project',
      statusColor: 'bg-purple-100 text-purple-800',
      links: {},
      achievements: [
        'Achieved virtual try-on efficiency improvement: reduced garment simulation setup from hours to minutes',
        'Gained insights into streamlining fashion supply chain from manufacturing to retail'
      ],
      color: 'orange'
    },
    {
      id: 4,
      title: 'Drawing & Guessing: Interactive Web Game',
      subtitle: 'Lab Course Project - Real-time multiplayer drawing and guessing game with collaborative gameplay and modern web technologies.',
      detailedDescription: [
        'Led team of 5 developers using Agile methodology and GitHub workflows',
        'Built responsive React frontend with HTML5 Canvas for drawing',
        'Developed RESTful API with Spring Boot and JPA for game management'
      ],
      technologies: ['React', 'Spring Boot',  'HTML5 Canvas', 'JPA', 'REST API'],
      status: 'Production Deployed',
      statusColor: 'bg-purple-100 text-purple-800',
      links: {
        github: 'https://github.com/sopra-fs23-group-19'
      },
      achievements: [
        'Team leadership: Coordinated 5-person development team',
        'Deployed a game application supporting multiple players'
      ],
      color: 'red'
    },
    {
      id: 5,
      title: 'Chinese News Classification System',
      subtitle: 'Course Project - Machine learning approaches for automated classification of Chinese news articles.',
      detailedDescription: [
        'Implemented and compared multiple classification approaches: Naive Bayes, SVM, Logistic Regression',
        'Developed Chinese text preprocessing pipeline including segmentation, stopword removal, and feature extraction',
        'Selected dataset and conducted experiments to evaluate classification accuracy'
      ],
      technologies: ['Python', 'Scikit-learn', 'NLTK', 'Jieba', 'Chinese Text Processing', 'TF-IDF', 'Supervised Machine Learning'],
      status: 'Completed Project',
      statusColor: 'bg-green-100 text-green-800',
      links: {
        github: 'https://github.com/runzeliuzh/NLP_Project'
      },
      achievements: [
        'Implemented efficient Chinese text preprocessing pipeline',
        'Achieved over 80% accuracy in news classification task'
      ],
      color: 'green'
    },
    {
      id: 6,
      title: 'Blockchain Platforms Analysis & Comparison',
      subtitle: 'A systematic analysis and comparison of major blockchain platforms, examining their consensus mechanisms, governance models, and technical architectures as part of a collaborative course project.',
      detailedDescription: [
        'Analyzed multiple blockchain platforms including Ethereum, Bitcoin, Binance Smart Chain, and emerging protocols',
        'Compared consensus mechanisms (Proof of Work, Proof of Stake, Delegated Proof of Stake) and their trade-offs',
        'Evaluated governance structures, tokenomics, and decentralization levels across different platforms',
        'Investigated scalability solutions, smart contract capabilities, and ecosystem development'
      ],
      technologies: ['Blockchain Analysis', 'Ethereum', 'Bitcoin', 'Binance Smart Chain', 'Smart Contracts', 'Consensus Algorithms', 'Tokenomics'],
      status: 'Completed Project',
      statusColor: 'bg-gray-100 text-gray-800',
      links: {},
      achievements: [
        'Conducted comprehensive analysis of 5+ major blockchain platforms including technical architecture comparison',
        'Gained hands-on experience with Web3.js and Solidity smart contract development'
      ],
      color: 'gray'
    }
  ];

  const getCardColor = (color) => {
    switch (color) {
      case 'blue': return 'border-blue-200 hover:border-blue-400 bg-blue-50';
      case 'green': return 'border-green-200 hover:border-green-400 bg-green-50';
      case 'purple': return 'border-purple-200 hover:border-purple-400 bg-purple-50';
      case 'orange': return 'border-orange-200 hover:border-orange-400 bg-orange-50';
      case 'red': return 'border-red-200 hover:border-red-400 bg-red-50';
      case 'gray': return 'border-gray-200 hover:border-gray-400 bg-gray-50';
      default: return 'border-gray-200 hover:border-gray-400 bg-gray-50';
    }
  };

  return (
    <Layout>
      <SEO title="Complete Portfolio - Runze Li" />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Enhanced Navigation */}
        <nav className="mb-8 bg-white rounded-xl shadow-sm border border-gray-100 px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 hover:text-blue-800 font-medium transition-all duration-200 border border-blue-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m0 7h18" />
              </svg>
              Back to Portfolio
            </Link>
            
            {/* Enhanced Personal Branding */}
            <div className="flex items-center gap-4 bg-gray-50 rounded-lg px-4 py-2 border border-gray-200">
              <StaticImage
                src="../../images/photo.jpg"
                alt="Runze Li"
                placeholder="blurred"
                width={44}
                height={44}
                className="rounded-full border-2 border-white shadow-sm"
              />
              <div className="text-right">
                <div className="font-semibold text-gray-900 text-sm">Runze Li</div>
                <div className="text-xs text-gray-600">Software Developer</div>
              </div>
            </div>
          </div>
        </nav>

        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
             Projects
          </h1>
          {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Technical projects spanning AI/ML, full-stack development, 
            research publications, and open-source contributions.
          </p> */}
        </header>

        {/* Enhanced Quick Navigation */}
        <div id="quick-navigation" className="mb-10 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 shadow-sm">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 rounded-lg p-2 mr-3">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-gray-900">Quick Navigation</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-800 text-sm mb-3 flex items-center">
                <span className="bg-purple-100 text-purple-600 rounded p-1 mr-2 text-xs">🔬</span>
                Specialized Research
              </h3>
              <div className="space-y-2">
                <a href="#project-2" className="block text-blue-600 hover:text-blue-800 text-sm py-1 px-2 rounded hover:bg-blue-50 transition-colors">→ Recommender System</a>
                <a href="#project-3" className="block text-blue-600 hover:text-blue-800 text-sm py-1 px-2 rounded hover:bg-blue-50 transition-colors">→ Virtual Clothing Simulation</a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-800 text-sm mb-3 flex items-center">
                <span className="bg-green-100 text-green-600 rounded p-1 mr-2 text-xs">💻</span>
                Full-Stack Applications
              </h3>
              <div className="space-y-2">
                <a href="#project-1" className="block text-blue-600 hover:text-blue-800 text-sm py-1 px-2 rounded hover:bg-blue-50 transition-colors">→ AI Fashion Assistant</a>
                <a href="#project-4" className="block text-blue-600 hover:text-blue-800 text-sm py-1 px-2 rounded hover:bg-blue-50 transition-colors">→ Drawing & Guessing Game</a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-800 text-sm mb-3 flex items-center">
                <span className="bg-orange-100 text-orange-600 rounded p-1 mr-2 text-xs">📘</span>
                Course Projects
              </h3>
              <div className="space-y-2">
                <a href="#project-5" className="block text-blue-600 hover:text-blue-800 text-sm py-1 px-2 rounded hover:bg-blue-50 transition-colors">→ Chinese News Classification</a>
                <a href="#project-6" className="block text-blue-600 hover:text-blue-800 text-sm py-1 px-2 rounded hover:bg-blue-50 transition-colors">→ Blockchain Analysis</a>
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-10">
          {projects.map((project, index) => (
            <div key={project.id} id={`project-${project.id}`} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              {/* Project Header */}
              <div className={`${getCardColor(project.color)} px-6 py-5 border-b border-gray-200`}>
                {/* Enhanced Back to Navigation Link */}
                <div className="mb-4">
                  <a 
                    href="#quick-navigation"
                    className="inline-flex items-center px-3 py-2 bg-white bg-opacity-90 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-opacity-100 hover:text-blue-600 hover:border-blue-300 hover:shadow-sm transition-all duration-200 backdrop-blur-sm"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                    </svg>
                    Back to Navigation
                  </a>
                </div>
                
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{project.title}</h2>
                    <h3 className="text-base md:text-lg text-gray-700 mb-3">{project.subtitle}</h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${project.statusColor}`}>
                      {project.status}
                    </span>
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex flex-wrap gap-2 mt-4 lg:mt-0">
                    {project.links.github && (
                      <a 
                        href={project.links.github}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-gray-900 text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                      >
                        📂 GitHub
                      </a>
                    )}
                    {project.links.demo && (
                      <a 
                        href={project.links.demo}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                      >
                        🚀 Live Demo
                      </a>
                    )}
                    {project.links.paper && (
                      <a 
                        href={project.links.paper}
                        className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                      >
                        📄 Publication
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="px-6 py-5">
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Main Description */}
                  <div className="lg:col-span-2 space-y-5">
                    {/* Add demo image for AI Fashion Assistant */}
                    {project.id === 1 && (
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Application Demo</h4>
                        <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                          <StaticImage
                            src="../../images/ai-fashion-assistant.jpg"
                            alt="AI Fashion Assistant Demo Screenshot"
                            placeholder="blurred"
                            layout="constrained"
                            width={700}
                            className="rounded-lg shadow-md mx-auto"
                          />
                          <p className="text-sm text-gray-600 mt-2 text-center">
                             Fashion chatbot interface
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Add demo image for Drawing & Guessing Game */}
                    {project.id === 4 && (
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Application Demo</h4>
                        <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                          <StaticImage
                            src="../../images/drawing-guessing-demo.png"
                            alt="Drawing & Guessing Game Demo Screenshot"
                            placeholder="blurred"
                            layout="constrained"
                            width={700}
                            className="rounded-lg shadow-md mx-auto"
                          />
                          <p className="text-sm text-gray-600 mt-2 text-center">
                            Real-time multiplayer drawing and guessing gameplay interface
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Add framework image for Diversity-Driven News Recommender */}
                    {project.id === 2 && (
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Framework Architecture</h4>
                        <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                          <StaticImage
                            src="../../images/framework_extension_v4.2.png"
                            alt="Informfully Recommenders Framework Architecture"
                            placeholder="blurred"
                            layout="constrained"
                            width={650}
                            className="rounded-lg shadow-md mx-auto"
                          />
                          <p className="text-xs text-gray-500 mt-1 text-center italic">
                            Source: Informfully Recommenders -- Reproducibility Framework for Diversity-aware Intra-session Recommendations. ACM RecSys 2025
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Add methodology image for Chinese News Classification */}
                    {project.id === 5 && (
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Classification Methodology</h4>
                        <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                          <StaticImage
                            src="../../images/Intro.png"
                            alt="Chinese News Classification Methodology Overview"
                            placeholder="blurred"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-md mx-auto"
                          />
                          <p className="text-sm text-gray-600 mt-2 text-center">
                            Comparative analysis of machine learning approaches for Chinese text classification
                          </p>
                        </div>
                      </div>
                    )}

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Implementation Overview</h4>
                      <ul className="space-y-2">
                        {project.detailedDescription.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1 flex-shrink-0">•</span>
                            <span className="text-gray-700 text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Key Achievements</h4>
                      <ul className="space-y-2">
                        {project.achievements && project.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-500 mr-2 mt-1 flex-shrink-0">✓</span>
                            <span className="text-gray-700 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-5">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Summary */}
        {/* <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technology Stack Overview</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <h3 className="font-semibold text-gray-800 mb-2">AI & ML</h3>
              <p className="text-sm text-gray-600">Python, PyTorch, TensorFlow, OpenAI API, RAG, Computer Vision</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-800 mb-2">Frontend</h3>
              <p className="text-sm text-gray-600">React, JavaScript, HTML5 Canvas, Responsive Design</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-800 mb-2">Backend</h3>
              <p className="text-sm text-gray-600">Spring Boot, FastAPI, REST APIs</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-800 mb-2">Data & Infrastructure</h3>
              <p className="text-sm text-gray-600">PostgreSQL, Docker, Vector Databases, Microservices</p>
            </div>
          </div>
        </div> */}

        {/* Enhanced Contact CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Interested in Collaborating?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Let's connect and discuss potential opportunities or projects
          </p>
              
          <div className="flex justify-center mb-6">
            <a 
              href="mailto:lirunze2526@gmail.com"
              className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium shadow-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get In Touch
            </a>
          </div>
          
          {/* Enhanced back link */}
          <div className="pt-4 border-t border-blue-200">
            <Link 
              to="/" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m0 7h18" />
              </svg>
              Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsIndexPage;
