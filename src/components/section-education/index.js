import React from 'react';
import { Link } from 'gatsby';
import Section from '../section';
import SummaryItem from '../summary-item';

const SectionEducation = () => {
  const education = [
    {
      degree: 'MSc Computer Science, University of Zurich',
      time: 'Sep 2021 – April 2025',
      major: 'Major: Software Systems, Minor: Data Science',
      honors: 'Awarded Summa Cum Laude',
      thesis:
        'Item Diversity in News Recommender Systems – Implementation and Comparison of Models and Re-ranking Approaches',
      thesisLink: 'https://seafile.ifi.uzh.ch/f/dad6a96a49634716adc1',
      supervisors:
        'Supervisors: Prof. Abraham Bernstein, Dr. Oana Inel, Dr. Lucien Heitz',
      supervisorLinks: [
        { name: 'Prof. Abraham Bernstein', url: 'https://www.ifi.uzh.ch/en/ddis/people/bernstein.html' },
        { name: 'Dr. Oana Inel', url: 'https://www.ifi.uzh.ch/en/ddis/people/inel.html' },
        { name: 'Dr. Lucien Heitz', url: 'https://www.ifi.uzh.ch/en/ddis/people/heitz.html' }
      ],
    },
    {
      degree: 'MPhil (Research), The Hong Kong Polytechnic University',
      time: 'Aug 2016 – Apr 2019',
      major: 'Research Focus: Computer Graphics  ×  Fashion Design (Interdisciplinary)',
      extra:
        'Specialized in virtual clothing simulation for customized user avatars, integrating computer vision and computer graphics techniques. Developed a system for realistic garment fitting and rendering on personalized 3D human models.',
      thesis:
        'Automatic Preposition for an Integrated Virtual Fitting Solution Using Human Model Customisation Technology',
      thesisLink: 'https://theses.lib.polyu.edu.hk/handle/200/10002',
      supervisors: 'Supervisor: Prof. Tracy Mok',
      supervisorLinks: [
        { name: 'Prof. Tracy Mok', url: 'https://facultyprofiles.hkust.edu.hk/profiles.php?profile=tracy-pik-yin-mok-tracymok' }
      ],
    },
    {
      degree:
        'B.Eng., University of Electronic Science and Technology of China (电子科技大学)',
      time: 'Sep 2012 – Jul 2016',
      major: 'Major: Communications Engineering',
      extra:
        'Focused on communication systems, signal processing, and wireless communications technologies.',
    },
  ];

  return (
    <Section title="Education">
      {education.map((edu) => (
        <div key={edu.degree} className="mb-4">
          <h3 className="font-bold text-lg">{edu.degree}</h3>
          <p className="text-sm text-gray-500 mb-1">{edu.time}</p>
          {edu.honors && (
            <p className="text-sm font-semibold text-green-700 bg-green-50 inline-block px-2 py-1 rounded mb-2">
              🏆 {edu.honors}
            </p>
          )}
          {edu.major && <p className="text-sm mb-1">{edu.major}</p>}
          {edu.extra && <p className="text-sm mb-2 text-gray-600">{edu.extra}</p>}
          {edu.thesis && (
            <p className="text-sm mb-1">
              <strong>Thesis:</strong>{' '}
              {edu.thesisLink ? (
                <a
                  href={edu.thesisLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  <em>{edu.thesis}</em>
                </a>
              ) : (
                <em>{edu.thesis}</em>
              )}
            </p>
          )}
          {edu.supervisors && (
            <p className="text-sm text-gray-600">
              <strong>Supervisors:</strong>{' '}
              {edu.supervisorLinks ? (
                <>
                  {edu.supervisorLinks.map((supervisor, index) => (
                    <span key={supervisor.name}>
                      <a
                        href={supervisor.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        {supervisor.name}
                      </a>
                      {index < edu.supervisorLinks.length - 1 && ', '}
                    </span>
                  ))}
                </>
              ) : (
                edu.supervisors.replace('Supervisors: ', '').replace('Supervisor: ', '')
              )}
            </p>
          )}
        </div>
      ))}
      
      <div className="mt-6 text-center">
        <Link
          to="/education"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          <span className="mr-2">📚</span>
          View More Details on Courses
        </Link>
      </div>
    </Section>
  );
};

export default SectionEducation;
