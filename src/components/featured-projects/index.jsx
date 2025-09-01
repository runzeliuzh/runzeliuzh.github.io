import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Section from '../section';

const FeaturedProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          projects {
            name
            description
            keyContributions
            link
            demoLink
            publication
          }
        }
      }
    }
  `);

  const projects = data.site.siteMetadata.projects;

  // Define which projects to feature (top 3)
  const featuredProjects = projects.slice(0, 3);
  const otherProjects = projects.slice(3);

  // Create mapping for project links
  const projectRoutes = {
    // 'Diversity-Driven News Recommender System': '/projects/informfully',

  };

  // Map project names to their time periods
  const projectPeriods = {
    'AI Fashion Assistant': 'Jul 2025 – Aug 2025',
    'Diversity-Driven News Recommender System': 'Apr 2023 – June 2025',
    'Virtual Clothing Simulation and Fashion Applications': 'Sep 2016 – Apr 2021',
    'Drawing & Guessing: Interactive Web Game': 'Mar 2023 – May 2023',
    'Chinese News Classification System': 'Sep 2022',
    'Blockchain Transaction Analysis and Visualization': 'Sep 2023 – Dec 2023'
  };

  return (
    <Section title="Featured Projects">
      {/* Featured Projects - Full Detail */}
      <div className="space-y-4 mb-8">
        {featuredProjects.map((project, idx) => {
          const projectRoute = projectRoutes[project.name];
          const projectPeriod = projectPeriods[project.name];
          
          return (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 pb-1 text-lg">{project.name}</h3>
                    {projectPeriod && (
                      <span className="text-sm text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded">
                        {projectPeriod}
                      </span>
                    )}
                  </div>
                  <p className="mb-3 text-gray-600 font-light leading-relaxed">{project.description}</p>
                  
                  {project.keyContributions && (
                    <div className="mb-3">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Contributions:</h4>
                      <ul className="space-y-1">
                        {project.keyContributions.map((contribution, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-700">
                            <span className="text-blue-600 mr-2 mt-1 flex-shrink-0">•</span>
                            <span>{contribution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {project.publication && (
                    <div className="mt-3">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Publications & Research:</h4>
                      {Array.isArray(project.publication) ? (
                        <ul className="space-y-1">
                          {project.publication.map((pub, i) => {
                            const urlMatch = pub.match(/(https?:\/\/[^\s]+)/);
                            if (urlMatch) {
                              const url = urlMatch[0];
                              const text = pub.replace(url, '').replace(' - ', '').trim();
                              return (
                                <li key={i} className="flex items-start">
                                  <span className="text-green-600 mr-2 mt-1 flex-shrink-0">📄</span>
                                  <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-blue-700 underline hover:text-blue-900 transition-colors"
                                  >
                                    {text || 'View Publication'}
                                  </a>
                                </li>
                              );
                            } else {
                              return (
                                <li key={i} className="flex items-start">
                                  <span className="text-green-600 mr-2 mt-1 flex-shrink-0">📄</span>
                                  <span className="text-sm text-gray-600">{pub}</span>
                                </li>
                              );
                            }
                          })}
                        </ul>
                      ) : (
                        <p className="text-sm text-blue-700">{project.publication}</p>
                      )}
                    </div>
                  )}
                </div>
                
                {/* {projectRoute && (
                  <Link
                    to={projectRoute}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex-shrink-0 ml-4"
                  >
                    View Details
                  </Link>
                )} */}
              </div>
              
              <div className="flex flex-wrap gap-2 mt-2 pt-2 border-t border-gray-200">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-3 py-1 rounded text-xs font-medium flex items-center hover:bg-green-700 transition-colors"
                  >
                    <span className="mr-1">🚀</span>
                    Try Live Demo
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-xs font-medium flex items-center"
                  >
                    <span className="mr-1">🔗</span>
                    View Source
                  </a>
                )}
                {projectRoute && (
                  <Link
                    to={projectRoute}
                    className="text-blue-600 hover:text-blue-800 text-xs font-medium flex items-center"
                  >
                    <span className="mr-1">📖</span>
                    Read More
                  </Link>
                )}
                {project.publication && Array.isArray(project.publication) && project.publication.length > 0 && (
                  <span className="text-green-600 text-xs font-medium flex items-center">
                    <span className="mr-1">📄</span>
                    {project.publication.length} Publication{project.publication.length > 1 ? 's' : ''}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Other Projects - Compact Thumbnail View */}
      {otherProjects.length > 0 && (
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-800">More Projects</h3>
            <Link
              to="/projects"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
            >
              View All Projects <span className="ml-1">→</span>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {otherProjects.map((project, idx) => {
              const projectRoute = projectRoutes[project.name];
              return (
                <div
                  key={idx}
                  className="bg-white rounded-md p-3 border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all"
                >
                  <h4 className="font-medium text-gray-900 text-sm mb-1 leading-tight">
                    {project.name}
                  </h4>
                  <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                    {project.description.substring(0, 80)}...
                  </p>
                  <div className="flex items-center space-x-2">
                    {/* {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-700 text-xs"
                      >
                        Source
                      </a>
                    )} */}
                     {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-xs font-medium flex items-center"
                  >
                    <span className="mr-1">🔗</span>
                    View Source
                  </a>
                )}
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* <div className="mt-4 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              <span>View All {projects.length} Projects</span>
              <span className="ml-2">→</span>
            </Link>
          </div> */}
        </div>
      )}
    </Section>
  );
};

export default FeaturedProjects;
