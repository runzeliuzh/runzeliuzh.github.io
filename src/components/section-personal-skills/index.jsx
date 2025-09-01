import React from 'react';
import Section from '../section';

const SectionPersonalSkills = ({ personalSkills }) => {
  if (!personalSkills || !personalSkills.length) return null;

  return (
    <Section title="More About Me">
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-xl p-6 md:p-8 border border-indigo-100 shadow-sm">
        {personalSkills.map((skill, index) => (
          <div key={skill.name} className="prose prose-lg max-w-none">
            <div 
              className="text-gray-700 leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: skill.description.replace(/\n\n/g, '</p><p class="mb-4">') }}
            />
          </div>
        ))}
        
        {/* Fun visual elements */}
        <div className="flex justify-center mt-6 space-x-4 text-2xl">
          <span className="animate-bounce delay-100" title="Ping Pong">🏓</span>
          <span className="animate-bounce delay-200" title="Hiking">🥾</span>
          <span className="animate-bounce delay-300" title="Exploring">🗺️</span>
          <span className="animate-bounce delay-500" title="Coding">💻</span>
        </div>
      </div>
    </Section>
  );
};

export default SectionPersonalSkills;
