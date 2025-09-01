import React from 'react';

import Section from '../section';

const SectionAbout = ({ about }) => {
  return (
    <Section title="About Me">
      <div className="mb-6 prose prose-gray max-w-none">
        <div 
          className="text-gray-700 leading-relaxed" 
          dangerouslySetInnerHTML={{ __html: about }}
        />
      </div>
    </Section>
  );
};

export default SectionAbout;
