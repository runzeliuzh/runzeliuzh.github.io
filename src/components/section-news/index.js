import React from 'react';
import Section from '../section';

const SectionNews = () => {
  return (
    <Section title="News">
      <div className="space-y-3">

        {/* Newest News */}
        <div className="bg-pink-100 border-l-4 border-pink-400 p-3 rounded-lg shadow-sm">
          <p className="text-pink-800 font-semibold text-base">
            🎉 <strong>August 2025:</strong> Two papers accepted to{' '}
            <a
              href="https://recsys.acm.org/recsys25/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-pink-600"
            >
              RecSys 2025 (ACM)
            </a>
            !
          </p>
          <div className="text-pink-700 mt-2 space-y-1">
            <div className="bg-white bg-opacity-60 p-2 rounded text-sm">
              <p className="font-medium">📄 D-RDW: Diversity-Driven Random Walks for News Recommender Systems</p>
              <a
                href="https://arxiv.org/abs/2508.13035"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-pink-600 text-xs"
              >
                arXiv: 2508.13035
              </a>
            </div>
            <div className="bg-white bg-opacity-60 p-2 rounded text-sm">
              <p className="font-medium">📄 Informfully Recommenders -- Reproducibility Framework</p>
              <a
                href="https://arxiv.org/abs/2508.13019"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-pink-600 text-xs"
              >
                arXiv: 2508.13019
              </a>
            </div>
            <p className="text-xs italic mt-1">
              *ACM publication coming soon! 📚
            </p>
          </div>
        </div>

        {/* Other News */}
        {/* <div className="bg-blue-50 p-2 rounded-md shadow-sm">
          <p className="text-gray-800 text-sm">
            <strong>April 2025:</strong> Graduated from <strong>University of Zurich</strong> with MSc, <em>Summa Cum Laude</em> 🧑‍🎓
          </p>
        </div> */}

        <div className="bg-blue-50 p-2 rounded-md shadow-sm">
          <p className="text-gray-800 text-sm">
            <strong>February 2025:</strong> Joined{' '}
            <a
              href="https://www.ifi.uzh.ch/en/ddis.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600"
            >
              DDIS research group
            </a>{' '}
            as Research Assistant 🚀
          </p>
        </div>
        
      </div>
    </Section>
  );
};

export default SectionNews;
