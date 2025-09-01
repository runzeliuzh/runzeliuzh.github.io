import React from 'react';

import Section from '../section';

const SectionExperience = ({ experience }) => {
  if (!experience.length) return null;

  return (
    <Section title="Experience">
      {experience.map((item, index) => (
        <div key={item.name} className="mb-4 bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-200">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900 text-base">
                  {item.link ? (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 transition-colors"
                    >
                      {item.name}
                    </a>
                  ) : (
                    item.name
                  )}
                </h3>
                {item.period && (
                  <span className="text-sm text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded">
                    {item.period}
                  </span>
                )}
              </div>
              {item.location && (
                <p className="text-sm text-gray-600 mb-3 font-light">
                  📍 {item.location}
                </p>
              )}
            </div>
          </div>
          
          <div 
            className="text-gray-600 mb-3 leading-relaxed font-light text-sm"
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
          
          {item.skills && (
            <div className="mb-3">
              <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {item.achievements && (
            <div>
              <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Achievements:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                {item.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1 flex-shrink-0">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </Section>
  );
};

export default SectionExperience;
