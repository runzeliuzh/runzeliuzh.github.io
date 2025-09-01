import React from 'react';

import Section from '../section';

const SectionExperience = ({ experience }) => {
  if (!experience.length) return null;

  return (
    <Section title="Experience">
      {experience.map((item, index) => (
        <div key={item.name} className="mb-6 bg-gray-50 rounded-lg p-4 border-l-4 border-green-500">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-gray-900 mb-1">
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
                <p className="text-sm text-green-700 font-medium mb-1">
                  📅 {item.period}
                </p>
              )}
              {item.location && (
                <p className="text-sm text-gray-600 mb-2">
                  📍 {item.location}
                </p>
              )}
            </div>
          </div>
          
          <div 
            className="text-gray-700 mb-3 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
          
          {item.skills && (
            <div className="mb-3">
              <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Technologies:</h4>
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
              <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Achievements:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                {item.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start">
                    <span className="text-green-600 mr-2 mt-0.5">✓</span>
                    {achievement}
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
