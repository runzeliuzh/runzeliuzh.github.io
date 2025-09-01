module.exports = {
  // No pathPrefix needed for user GitHub Pages (runzeliuzh.github.io)
  siteMetadata: {
    siteUrl: `https://runzeliuzh.github.io`,
    name: 'Runze Li',
    title: `Runze Li | Software Developer`,
    description: `Through weakness comes learning; through challenge comes growth.`,
    author: `@runzeliuzh`,
    github: `https://github.com/runzeliuzh`,
    linkedin: `https://www.linkedin.com/in/runze-li-a8b42b154`,
    about: `I am a <strong>Computer Science graduate from the University of Zurich</strong> (MSc, awarded <em>Summa Cum Laude</em>) with expertise in machine learning and software development. I have <strong>published research papers accepted at ACM RecSys 2025</strong> on recommendation systems and diversity algorithms.

My research experience spans <strong>3D computer graphics and virtual try-on systems</strong> from my MPhil at Hong Kong PolyU to <strong>recommendation systems, NLP,</strong> and LLM applications with RAG. I enjoy working on both research projects and practical software development.

I am passionate about applying AI to help solve real-world problems, making them more efficient, reliable, and impactful.`,

    projects: [
      {
        name: 'AI Fashion Assistant',
        description: `A fashion chatbot powered by Retrieval-Augmented Generation (RAG) and Large Language Models. The application integrates fashion knowledge base to provide fashion advice and outfit recommendations through conversational AI.`,
        link: 'https://github.com/runzeliuzh/ai-fashion-assistant',
        demoLink: 'https://llm-rag-fashion.vercel.app',
        publication: null,
      },
      {
        name: 'Diversity-Driven News Recommender System',
        description: `Contributed to Informfully Recommenders and proposed a novel diversity-driven random walks (D-RDW) recommendation model. The algorithm can also be applied to e-commerce traffic allocation and exposure control systems.`,
        keyContributions: [
          'Authored the D-RDW model for my Master\'s thesis, utilizing a Normalized Target Distribution (NTD) mechanism to dynamically control multi-dimensional item distributions and enhance recommendation diversity.',
          'Validated model efficacy where the lightweight D-RDW algorithm achieved competitive performance while reducing energy consumption by an order of magnitude compared to baseline models.',
          'Built open-source news text feature augmentation pipelines for NLP tasks (named entity extraction, classification, tokenization, transformers, sentiment analysis).',
          'Implemented re-ranking methods and extended the Cornac framework for recommender systems.',
          'Contributed to the open-source Informfully recommendation system development and research publications.'
        ],
        link: 'https://github.com/Informfully',
        publication: [
          'D-RDW: Diversity-Driven Random Walks for News Recommender Systems [RecSys 2025] - https://arxiv.org/abs/2508.13035',
          'Informfully Recommenders: Reproducibility Framework for Diversity-aware Intra-session Recommendations [RecSys 2025] - https://arxiv.org/abs/2508.13019'
        ],
      },
      {
        name: 'Virtual Clothing Simulation and Fashion Applications',
        description: `Comprehensive research project conducted during MPhil study and professional work in Hong Kong, focusing on computer-aided fashion design, virtual clothing simulation, and automatic human modeling techniques. `,
         keyContributions: [
          // 'Identified critical fashion industry pain points: lengthy product development cycles, high return rates in e-commerce, and limited personalization in virtual fitting systems.',
          'Developed an Intelligent Virtual Fitting system that automatically fits clothing patterns on customized 3D human body models.',
          'Created algorithms for automatic pattern preprocessing and prepositioning, reducing garment simulation setup time from hours to minutes.',
          'Implemented garment simulation methods combining Finite Element Method (FEM) and real-time rendering techniques for optimal web-based performance.',
          'Integrated human body model representation techniques that accurately capture individual shape characteristics, moving beyond standard mannequins to personalized avatars.',
          // 'Gained understanding of streamlining fashion supply chain processes: enabling manufacturers to accelerate time-to-market upstream and helping retailers reduce product returns downstream.'
        ],
        
        link: null,
        publication: [
          'Intelligent clothing size and fit recommendations based on human model customisation technology - https://ira.lib.polyu.edu.hk/handle/10397/102245',
          'Fashion recommendations using text mining and multiple content attributes - https://ira.lib.polyu.edu.hk/handle/10397/102244',
          'Describing clothing in human images : a parsing-pose integrated approach - https://ira.lib.polyu.edu.hk/handle/10397/102769',
        ],
      },
      {
        name: 'Drawing & Guessing: Interactive Web Game',
        description: `Full-stack software development project where I led a team of five to design and develop an interactive web application. Users draw selected words while others attempt to guess them in real-time. Managed agile development using GitHub, contributed to both front-end (React) and back-end (Spring Boot), and deployed the application on Google Cloud with CI/CD pipelines.`,
        link: 'https://github.com/sopra-fs23-group-19/sopra-fs23-group-19-server',
        publication: null,
      },
      {
        name: 'Chinese News Classification System',
        description: `Machine learning system for automatically categorizing Chinese news articles using classical ML algorithms. Demonstrates end-to-end NLP pipeline development with Chinese text processing, model training, and performance evaluation across multiple algorithms.`,
        link: 'https://github.com/runzeliuzh/NLP_Project',
        publication: null,
      },
       {
        name: 'BlockChain Analysis and Comparison',
        description: `Learn and analyze several blockchain platforms, e.g., Binance Smart Chain,
examining aspects such as governance and accessibility, consensus model & incentive, cryptocurrencies, supply
policy, tokenization, and the data storage in the block.`,
        link: '',
        publication: null,
      },
    ],

    experience: [
      {
        name: 'Research Assistant at DDIS, University of Zurich',
        description: `Supported research in news recommender systems. Responsibilities included software development, running experiments, and contributing to research publications on diversity-aware recommendation algorithms.`,
        link: 'https://www.ifi.uzh.ch/en/ddis.html',
        period: 'Feb 2025 – May 2025',
        location: 'Zurich, Switzerland',
        skills: ['Python', 'Recommender Systems', 'Software Integration', 'Research', 'Git/GitHub']
      },
      {
        name: 'Research Associate at Laboratory for Artificial Intelligence in Design (AiDLab)',
        description: 'Worked on computer graphics algorithms for fashion design workflows. Contributed to AI-driven design tools and computational fashion applications.',
        link: 'https://www.aidlab.hk/en/',
        period: 'Nov 2020 – Apr 2021',
        location: 'Hong Kong',
        skills: ['Computer Graphics', 'AI in Design', 'Fashion Technology', 'Algorithm Optimization']
      },
      {
        name: 'Research Intern - Computer-Aided Fashion Intelligence Research Group',
        description: `Worked with <a href="https://facultyprofiles.hkust.edu.hk/profiles.php?profile=pik-yin-mok-tracymok" target="_blank" rel="noopener noreferrer">Prof. Tracy Mok</a> on fashion technology research. Contributed to virtual fitting systems and 3D human modeling projects.`,
        link: 'https://www.cafilab.com',
        period: 'May 2019 – Oct 2020',
        location: 'Hong Kong',
        skills: ['3D Graphics', 'Virtual Try-on', 'Computer Vision', 'Fashion Tech', 'OpenGL', 'C++'],
        achievements: [
          'Developed novel algorithms for realistic cloth simulation',
          'Implemented virtual fitting systems with real-time rendering'
        ]
      },
    ],

    skills: [
      {
        name: 'Programming Languages',
        description: 'Python, JavaScript, Java, C++, C, OpenGL, SQL, HTML5/CSS',
      },
      {
        name: 'Web Development & Full-Stack Systems',
        description: 'React, Node.js, Spring Boot, RESTful APIs',
      },
      {
        name: 'Data Science & Machine Learning',
        description: 'Deep Learning (PyTorch, TensorFlow), Classical ML (Scikit-learn), NLP, CV, Data Analysis (Pandas, NumPy)',
      },
      {
        name: 'LLM & Generative AI',
        description: 'RAG Systems, Vector Databases (Chroma), LangChain, OpenAI API, Prompt Engineering, Conversational AI, Information Retrieval',
      },
      {
        name: 'Databases & Data Management',
        description: 'PostgreSQL, MySQL, Vector Databases, ETL Pipelines',
      },
      {
        name: 'Cloud & DevOps',
        description: 'Google Cloud Platform, Docker, CI/CD (GitHub Actions), Git, Linux/Unix Systems',
      },
      {
        name: 'Specialized Domains',
        description: 'Computer Graphics, Virtual Try-on Systems, Recommender Systems',
      },
      {
        name: 'Blockchain & Web3 Foundations',
        description: 'Consensus Mechanisms, Crypto-economics, DeFi Concepts, Smart Contract Basics',
      },
      {
        name: 'Research & Academic Tools',
        description: 'Academic Writing, Data Visualization, Statistical Analysis, Research Methodology, Literature Review',
      },
    ],

    languages: [
      {
        name: 'English',
        description: 'Proficient Professional (IELTS 7.0, 2014 National English Competition for College Students Third Prize - China)',
      },
      {
        name: 'Chinese Mandarin',
        description: 'Native',
      },
      {
        name: 'Cantonese',
        description: 'Basic',
      },
    ],
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/content/blog`,
    //     name: `blog`,
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map((edge) => ({
                ...edge.node.frontmatter,
                description: edge.node.excerpt,
                date: edge.node.frontmatter.date,
                url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                custom_elements: [{ 'content:encoded': edge.node.html }],
              })),
            query: `
              {
                allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Your Site's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
  ],
};

// module.exports = {
//   siteMetadata: {
//     siteUrl: `https://monumental-chimera-b1ace3.netlify.app/`,
//     name: 'Runze Li',
//     title: `Runze Li | Software Developer`,
//     description: `Through weakness comes learning; through challenge comes growth.`,
//     author: `@rzli`,
//     github: `https://github.com/runzeliuzh`,
//     linkedin: `https://www.linkedin.com/in/runze-li-a8b42b154`,
//     about: `I am a recent graduate in software systems with hands-on experience in full-stack development and a solid foundation in data science. With practical experience in applying algorithms to solve real-world challenges, I am passionate about developing innovative software solutions and contributing to impactful projects.`,

//     projects: [
//       {
//         name: 'Informfully',
//         description: `I contributed to Informfully by developing diversity metrics and recommendation algorithms for diversified news delivery. I also worked on re-ranking methods, extended the Cornac framework, and participated in open-source recommender system development.`,
//         link: 'https://github.com/Informfully',
//         publication: 'To be added soon.',
//       },
//       {
//         name: 'Virtual Clothing Simulation and Fashion Applications',
//         description: `During my MPhil study, I worked on virtual clothing simulation, fashion recommendation, and automatic clothing classification using 2D images.`,
//         link: '', // <-- this avoids undefined issues
//         publication: [
//           'Virtual Clothing Simulation and fitting: https://theses.lib.polyu.edu.hk/handle/200/10002',
//           'Virtual Try-on: https://ira.lib.polyu.edu.hk/handle/10397/102245',
//           'Fashion Recommendation: https://ira.lib.polyu.edu.hk/handle/10397/102244',
//           '2D Clothing Classification: https://ira.lib.polyu.edu.hk/handle/10397/102769',
//         ],
//       },
//       {
//         name: 'Drawing & Guessing: Online Game',
//         description: `Led a team of five to design and develop an interactive web app where users draw selected words and others guess them. Managed agile development using GitHub, contributed to both front-end (React) and back-end (Spring Boot), and deployed the app on Google Cloud with CI/CD pipelines.`,
//         link: 'https://github.com/sopra-fs23-group-19/sopra-fs23-group-19-server',
//       },
//     ],

//     experience: [
//       {
//         name: 'Research Assistant at DDIS, University of Zurich',
//         description: `Worked on software integration and maintenance across multiple repositories for recommender systems. Responsibilities included internal collaboration, code management, and contribution to scientific publications.`,
//         link: 'https://www.ifi.uzh.ch/en/ddis.html',
//       },
//       {
//         name: 'Research Associate at Laboratory for Artificial Intelligence in Design (AiDLab https://www.aidlab.hk/en/), Hong Kong',
//         description: ', November 2020 - April 2021',
//         // link: 'https://github.com/RyanFitzgerald/devfolio',
//       },
//       {
//         name: 'Research Intern',
//         description: 'Worked with Prof. Tracy Mok (HKUST Computer Aided Fashion Intelliegnce Research Group), May 2019 - October 2020.
        
//         Designed and implemented intelligent systems for fashion applications, enabling virtual clothing try-on simulations on personalized 3D human models and real-time garment rendering for enhanced realism and user experience.',
//         // link: 'https://github.com/RyanFitzgerald/devfolio',
//       },
//     ],

//     skills: [
//       {
//         name: 'Languages & Frameworks',
//         description: 'JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on Rails, PHP',
//       },
//       {
//         name: 'Databases',
//         description: 'MongoDB, PostgreSQL, MySQL',
//       },
//       {
//         name: 'Other',
//         description: 'Docker, AWS, CI/CD, Microservices, API design, Agile/Scrum',
//       },
//     ],
//   },

//   plugins: [
//     `gatsby-plugin-react-helmet`,
//     `gatsby-plugin-image`,
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `images`,
//         path: `${__dirname}/src/images`,
//       },
//     },
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         path: `${__dirname}/content/blog`,
//         name: `blog`,
//       },
//     },
//     {
//       resolve: `gatsby-transformer-remark`,
//       options: {
//         plugins: [
//           {
//             resolve: `gatsby-remark-images`,
//             options: {
//               maxWidth: 590,
//               wrapperStyle: `margin: 0 0 30px;`,
//             },
//           },
//           {
//             resolve: `gatsby-remark-responsive-iframe`,
//             options: {
//               wrapperStyle: `margin-bottom: 1.0725rem`,
//             },
//           },
//           `gatsby-remark-prismjs`,
//           `gatsby-remark-copy-linked-files`,
//           `gatsby-remark-smartypants`,
//         ],
//       },
//     },
//     {
//       resolve: `gatsby-plugin-sharp`,
//       options: {
//         defaults: {
//           formats: [`auto`, `webp`],
//           placeholder: `dominantColor`,
//           quality: 80,
//         },
//       },
//     },
//     `gatsby-transformer-sharp`,
//     `gatsby-plugin-postcss`,
//     {
//       resolve: `gatsby-plugin-feed`,
//       options: {
//         query: `
//           {
//             site {
//               siteMetadata {
//                 title
//                 description
//                 siteUrl
//                 site_url: siteUrl
//               }
//             }
//           }
//         `,
//         feeds: [
//           {
//             serialize: ({ query: { site, allMarkdownRemark } }) =>
//               allMarkdownRemark.edges.map((edge) => ({
//                 ...edge.node.frontmatter,
//                 description: edge.node.excerpt,
//                 date: edge.node.frontmatter.date,
//                 url: site.siteMetadata.siteUrl + edge.node.fields.slug,
//                 guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
//                 custom_elements: [{ 'content:encoded': edge.node.html }],
//               })),
//             query: `
//               {
//                 allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
//                   edges {
//                     node {
//                       excerpt
//                       html
//                       fields { slug }
//                       frontmatter {
//                         title
//                         date
//                       }
//                     }
//                   }
//                 }
//               }
//             `,
//             output: '/rss.xml',
//             title: "Your Site's RSS Feed",
//           },
//         ],
//       },
//     },
//     {
//       resolve: `gatsby-plugin-google-analytics`,
//       options: {
//         trackingId: `ADD YOUR TRACKING ID HERE`,
//       },
//     },
//     // Optional manifest plugin
//     // {
//     //   resolve: `gatsby-plugin-manifest`,
//     //   options: {
//     //     name: `devfolio`,
//     //     short_name: `devfolio`,
//     //     start_url: `/`,
//     //     background_color: `#663399`,
//     //     theme_color: `#663399`,
//     //     display: `minimal-ui`,
//     //     icon: `src/images/icon.png`,
//     //   },
//     // },
//   ],
// };



// module.exports = {
//   siteMetadata: {
//     // Site URL for when it goes live
//     siteUrl: `https://monumental-chimera-b1ace3.netlify.app/`,
//     // Your Name
//     name: 'Runze Li',
//     // Main Site Title
//     title: `Runze Li | Software Developer`,
//     // Description that goes under your name in main bio
//     // description: `Learning through weakness, and seeing challenges as opportunities for growth.`,
//     description: `Through weakness comes learning; through challenge comes growth.`,
//     // Optional: Twitter account handle
//     author: `@rzli`,
//     // Optional: Github account URL
//     github: `https://github.com/runzeliuzh`,
//     // Optional: LinkedIn account URL
//     linkedin: `https://www.linkedin.com/in/runze-li-a8b42b154`,
//     // Content of the About Me section
//     about: `I am a recent graduate in software systems with hands-on experience in full-stack development and a solid foundation in data science. With practical experience in applying algorithms to solve real-world challenges, I am passionate about developing innovative software solutions and contributing to impactful projects.`,
//     // Optional: List your projects, they must have `name` and `description`. `link` is optional.
//     projects: [
//       {
//         name: 'Informfully',
//         description:
//           'I joined the Informfully project, and worked to develop diversity metrics, and diversity recommendation algorithms to provide \
//       users with diversified news recommendtaions, develop re-ranking methods. Extend the Cornac framework. I have experience with the whole recommendation,
//       provide open soruce ',
//         link: 'https://github.com/Informfully',
//         publication: 
//         to be added soon. 
//       },
  
//       {
//         name: 'Virtual Clothing Simulation and fashion application',
//         description:
//           'During my MPhil Study, I worked to develop diversity metrics, and diversity recommendation algorithms.',
//         // link: 'https://github.com/Informfully',
//         publication:

//         Virtual Clothing Simulation and fitting on customized human models: https://theses.lib.polyu.edu.hk/handle/200/10002
//         https://ira.lib.polyu.edu.hk/handle/10397/102245, 

//        fashion recommendation https://ira.lib.polyu.edu.hk/handle/10397/102244,\
//        automatic clothing classificatoon in 2D images https://ira.lib.polyu.edu.hk/handle/10397/102769, 
//       },


//           {
//         name: 'Drawing & Guessing: Online Game',
//         description:
// Led a team of five to design and develop an interactive web application, *Drawing and Guessing*, where users draw selected words, and others guess based on the drawings.  
//     \par $\star$ Managed project milestones in an agile environment, including setting timelines, assigning tasks, and tracking progress using GitHub.  
//     \par $\star$ Contributed to full-stack development, including database design, RESTful API creation, and building a responsive game application using Java (Spring Boot) for the back-end and JavaScript (React) for the front-end.  
//     \par $\star$ Automated deployment to Google Cloud with GitHub Actions and managed version control with Git.  ,
//         link: 'https://github.com/sopra-fs23-group-19/sopra-fs23-group-19-server',
//       },
//       // {
//       //   name: 'Virtual ',
//       //   description:
//       //     'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
//       //   link: 'https://github.com/RyanFitzgerald/devfolio',
//       // },
//     ],
//     // Optional: List your experience, they must have `name` and `description`. `link` is optional.
//     experience: [

//      {
//         name: 'Research Assistant at DDIS, University of Zurich',
//         description: 'The responsibility of this position focuses on maintaining and integrating code from multiple repositories.
// Appropriate software development skills for code management are required. Collaboration is limited to groupinternal work for building recommender systems and writing scientific publications',
//       },
//       {
//         name: 'Research Associate ',
//         description: 'Full-Stack Developer, December 2017 - February 2020',
//         link: 'https://github.com/RyanFitzgerald/devfolio',
//       },
//       {
//         name: 'Hooli',
//         description: 'Full-Stack Developer, May 2015 - December 2017',
//         link: 'https://github.com/RyanFitzgerald/devfolio',
//       },
//     ],
//     // Optional: List your skills, they must have `name` and `description`.
//     skills: [
//       {
//         name: 'Languages & Frameworks',
//         description:
//           'JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on Rails, PHP',
//       },
//       {
//         name: 'Databases',
//         description: 'MongoDB, PostreSQL, MySQL',
//       },
//       {
//         name: 'Other',
//         description:
//           'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
//       },
//     ],
//   },
//   plugins: [
//     `gatsby-plugin-react-helmet`,
//     `gatsby-plugin-image`,
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `images`,
//         path: `${__dirname}/src/images`,
//       },
//     },
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         path: `${__dirname}/content/blog`,
//         name: `blog`,
//       },
//     },
//     {
//       resolve: `gatsby-transformer-remark`,
//       options: {
//         plugins: [
//           {
//             resolve: `gatsby-remark-images`,
//             options: {
//               maxWidth: 590,
//               wrapperStyle: `margin: 0 0 30px;`,
//             },
//           },
//           {
//             resolve: `gatsby-remark-responsive-iframe`,
//             options: {
//               wrapperStyle: `margin-bottom: 1.0725rem`,
//             },
//           },
//           `gatsby-remark-prismjs`,
//           `gatsby-remark-copy-linked-files`,
//           `gatsby-remark-smartypants`,
//         ],
//       },
//     },
//     {
//       resolve: `gatsby-plugin-sharp`,
//       options: {
//         defaults: {
//           formats: [`auto`, `webp`],
//           placeholder: `dominantColor`,
//           quality: 80,
//         },
//       },
//     },
//     `gatsby-transformer-sharp`,
//     `gatsby-plugin-postcss`,
//     {
//       resolve: `gatsby-plugin-feed`,
//       options: {
//         query: `
//           {
//             site {
//               siteMetadata {
//                 title
//                 description
//                 siteUrl
//                 site_url: siteUrl
//               }
//             }
//           }
//         `,
//         feeds: [
//           {
//             serialize: ({ query: { site, allMarkdownRemark } }) => {
//               return allMarkdownRemark.edges.map((edge) => {
//                 return Object.assign({}, edge.node.frontmatter, {
//                   description: edge.node.excerpt,
//                   date: edge.node.frontmatter.date,
//                   url: site.siteMetadata.siteUrl + edge.node.fields.slug,
//                   guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
//                   custom_elements: [{ 'content:encoded': edge.node.html }],
//                 });
//               });
//             },
//             query: `
//               {
//                 allMarkdownRemark(
//                   sort: { frontmatter: { date: DESC } }
//                 ) {
//                   edges {
//                     node {
//                       excerpt
//                       html
//                       fields { slug }
//                       frontmatter {
//                         title
//                         date
//                       }
//                     }
//                   }
//                 }
//               }
//             `,
//             output: '/rss.xml',
//             title: "Your Site's RSS Feed",
//           },
//         ],
//       },
//     },
//     {
//       resolve: `gatsby-plugin-google-analytics`,
//       options: {
//         trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
//       },
//     },
//     // {
//     //   resolve: `gatsby-plugin-manifest`,
//     //   options: {
//     //     name: `devfolio`,
//     //     short_name: `devfolio`,
//     //     start_url: `/`,
//     //     background_color: `#663399`,
//     //     theme_color: `#663399`, // This color appears on mobile
//     //     display: `minimal-ui`,
//     //     // icon: `src/images/icon.png`,
//     //   },
//     // },
//   ],
// };
