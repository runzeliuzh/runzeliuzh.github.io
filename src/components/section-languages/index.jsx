import React from 'react';
import Section from '../section';

const SectionLanguages = ({ languages }) => {
  if (!languages || !languages.length) return null;

  return (
    <Section title="Languages">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {languages.map((language, index) => (
          <div key={language.name} className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-3 border-l-4 border-green-400 h-fit">
            <h3 className="font-bold text-base text-gray-900 mb-2 flex items-center">
              {/* <span className="text-green-600 mr-2 text-lg">
                {getLanguageIcon(language.name)}
              </span> */}
              <span className="text-sm leading-tight">{language.name}</span>
            </h3>
            <p className="text-gray-700 leading-relaxed text-xs">
              {language.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

// Helper function to get appropriate icons for different languages
const getLanguageIcon = (languageName) => {
  const iconMap = {
    'English': '🇬🇧',
    'Chinese Mandarin': '🇨🇳',
    'Cantonese': '🇭🇰',
  };
  
  return iconMap[languageName] || '🌍';
};

export default SectionLanguages;
