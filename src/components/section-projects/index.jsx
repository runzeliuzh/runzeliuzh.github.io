import React from 'react';
import { Link } from 'gatsby';
import Section from '../section';
import SummaryItem from '../summary-item';

const SectionProjects = ({ projects }) => {
  if (!projects || !projects.length) return null;

  return (
    <Section title="Projects">
      {projects
        .filter((project) => project && project.name)
        .map((project) => {
          const renderDescription = () => {
            // Function to render text with clickable URLs and special terms
            const renderTextWithLinks = (text) => {
              // Handle special case for Informfully
              if (project.informfullyLink && text.includes('Informfully')) {
                const parts = text.split('Informfully');
                return parts.map((part, index) => {
                  if (index === parts.length - 1) return part; // Last part, no Informfully after it
                  return (
                    <React.Fragment key={index}>
                      {part}
                      <a
                        href={project.informfullyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Informfully
                      </a>
                    </React.Fragment>
                  );
                });
              }

              // Handle regular URLs
              const urlRegex = /(https?:\/\/[^\s\)]+)/g;
              const parts = text.split(urlRegex);
              
              return parts.map((part, index) => {
                if (urlRegex.test(part)) {
                  return (
                    <a
                      key={index}
                      href={part}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-blue-600 hover:text-blue-800"
                    >
                      {part}
                    </a>
                  );
                }
                return part;
              });
            };

            return (
              <>
                <p>{renderTextWithLinks(project.description)}</p>
                {project.publication && (
                  <div className="mt-2">
                    <p className="font-semibold">Publications:</p>
                    <ul className="list-disc list-inside text-sm">
                      {Array.isArray(project.publication) ? (
                        project.publication.map((pub, index) => {
                          const match = pub.match(/(https?:\/\/[^\s]+)/);
                          const link = match ? match[0] : null;
                          const label = link ? pub.replace(link, '').trim() : pub;

                          return (
                            <li key={index}>
                              {link ? (
                                <a
                                  href={link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="underline text-blue-600 hover:text-blue-800"
                                >
                                  {label || link}
                                </a>
                              ) : (
                                <span>{label}</span>
                              )}
                            </li>
                          );
                        })
                      ) : (
                        <li>{project.publication}</li>
                      )}
                    </ul>
                  </div>
                )}
                {(project.link || project.demoLink) && (
                  <div className="mt-3 flex gap-2 flex-wrap">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1.5 bg-gray-800 text-white text-sm font-medium rounded-md hover:bg-gray-700 transition-colors"
                      >
                        <span className="mr-1">📂</span>
                        View Code
                      </a>
                    )}
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target={project.demoLink.startsWith('http') ? "_blank" : "_self"}
                        rel={project.demoLink.startsWith('http') ? "noopener noreferrer" : ""}
                        className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
                      >
                        <span className="mr-1">🔗</span>
                        {project.demoLink.startsWith('http') ? 'Live Demo' : 'View Details'}
                      </a>
                    )}
                  </div>
                )}
              </>
            );
          };          const actionButton = project.demoLink ? (
            <Link
              to={project.demoLink}
              className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              <span className="mr-1">👁️</span>
              View Details
            </Link>
          ) : null;

          return (
            <SummaryItem
              key={project.name}
              name={project.name}
              description={renderDescription()}
              link={false}
              actionButton={actionButton}
            />
          );
        })}
    </Section>
  );
};

export default SectionProjects;
