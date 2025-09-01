import React from 'react';
import Section from '../section';

const SectionSkills = ({ skills }) => {
  if (!skills || !skills.length) return null;

  return (
    <Section title="Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {skills.map((skill, index) => (
          <div key={skill.name} className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-400 h-fit">
            <h3 className="font-bold text-base text-gray-900 mb-2 flex items-center">
              <span className="text-blue-600 mr-2 text-lg">
                {getSkillIcon(skill.name)}
              </span>
              <span className="text-sm leading-tight">{skill.name}</span>
            </h3>
            <p className="text-gray-700 leading-relaxed text-xs">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

// Helper function to get appropriate icons for different skill categories
const getSkillIcon = (skillName) => {
  const iconMap = {
    'Programming Languages': '💻',
    'Web Development & Full-Stack Systems': '🌐',
    'Data Science & Machine Learning': '🤖',
    'LLM & Generative AI': '🧠',
    'Databases & Data Management': '🗄️',
    'Cloud & DevOps': '☁️',
    'Specialized Domains': '🎯',
    'Blockchain & Web3 Foundations': '⛓️',
    'Research & Academic Tools': '📊',
  };
  
  return iconMap[skillName] || '🔧';
};

export default SectionSkills;
