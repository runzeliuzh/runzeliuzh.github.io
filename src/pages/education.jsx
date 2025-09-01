import React from "react";
import { Link } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';

const courses = [
  {
    category: "Master's in Computer Science",
    period: "2021-2025",
    institution: "University of Zurich",
    gpa: "Overall GPA: 5.6/6.0 (Summa Cum Laude)",
    majorCourses: [
      { name: 'Deep Learning', grade: '6.0/6.0', credits: '6 ECTS' },
      { name: 'Systems for Data Science', grade: '5.75/6.0', credits: '6 ECTS' },
      { name: 'Statistical Foundations for Finance', grade: '5.75/6.0', credits: '6 ECTS' },
      { name: 'Human Computer Interaction in AI', grade: '5.5/6.0', credits: '6 ECTS' },
      { name: 'Blockchain and Crypto Economics', grade: '5.25/6.0', credits: '6 ECTS' },
      { name: 'Fundamentals of Software Systems', grade: '5.25/6.0', credits: '6 ECTS' },
      { name: 'IT Security', grade: '5.0/6.0', credits: '3 ECTS' },
      { name: 'Effective Software Testing', grade: '6.0/6.0', credits: '6 ECTS' },
      { name: 'Essentials in Text and Speech Processing', grade: '6.0/6.0', credits: '3 ECTS' },
    ],
    additionalCourses: [
      'IT Security (L)',
      'Software Engineering Lab',
      'Software Construction',
      'Database Systems',
      'Informatics I & II',
      'Requirements Engineering',
      'Fundamentals of Data Science',
      'Fundamentals of People-Oriented Computing'
    ]
  }
];

const onlineCertifications = [
  {
    name: "AI Engineer for Data Scientists Associate",
    issuer: "DataCamp",
    date: "Aug 2025",
    expires: "Aug 2027",
    credentialId: "AEDS0018263733244",
    link: "https://www.datacamp.com/certificate/AEDS0018263733244",
    status: "Active"
  },
  {
    name: "AI Engineer for Developers Associate", 
    issuer: "DataCamp",
    date: "Aug 2025",
    expires: "Aug 2027",
    credentialId: "AIEDA0012156121046",
    link: "https://www.datacamp.com/certificate/AIEDA0012156121046",
    status: "Active"
  }
];

const realOnlineCourses = [
  {
    name: "Working with Llama 3",
    provider: "DataCamp",
    year: "2025",
    description: "Llama LLM implementation, response refinement, conversation history, and structured output generation.",
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/bbfd6a9abe8e8eedb7e89541ccdba72919e895da"
  },
  {
    name: "Developing LLM Applications with LangChain",
    provider: "DataCamp", 
    year: "2025",
    description: "LangChain ecosystem development, chatbot creation, RAG implementation, and tool/agent integrations.",
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/7d73d393601ffb2bebcd210f3c277ca760115fc0"
  },
  {
    name: "Understanding Prompt Engineering",
    provider: "DataCamp",
    year: "2025", 
    description: "Advanced LLM prompt design and optimization techniques.",
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/0331f763e2a24006014c8649c8b57341a1e09074"
  },
  {
    name: "Intermediate Python",
    provider: "DataCamp",
    year: "2022",
    description: "Advanced Python concepts: data structures, functions, and OOP.",
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/8f3b72d0d46e64f16430adf91ed86819ac0a628e"
  }
];

function UniversityEducation() {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">University Education</h2>
      {courses.map((course, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-blue-800 mb-1">{course.category}</h3>
              <p className="text-gray-600 text-sm">{course.institution} • {course.period}</p>
            </div>
            <span className="bg-yellow-100 px-3 py-1 rounded-full text-sm font-medium text-yellow-800 mt-2 md:mt-0 self-start">
              {course.gpa}
            </span>
          </div>

          {/* Major Courses - Compact Grid */}
          <div className="mb-4">
            <h4 className="text-md font-semibold mb-3 text-gray-800">Key Courses</h4>
            <div className="grid md:grid-cols-3 gap-3">
              {course.majorCourses.map((majorCourse, mcIdx) => (
                <div key={mcIdx} className="bg-gray-50 p-3 rounded border-l-4 border-blue-400">
                  <div className="flex justify-between items-start mb-1">
                    <h5 className="font-medium text-gray-800 text-sm">{majorCourse.name}</h5>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-green-600">{majorCourse.grade}</span>
                    <span className="text-xs text-gray-500">{majorCourse.credits}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Courses - Compact List */}
          <div>
            <h4 className="text-md font-semibold mb-2 text-gray-800">Additional Courses</h4>
            <div className="bg-gray-50 p-3 rounded">
              <div className="grid md:grid-cols-4 gap-x-4 gap-y-1 text-sm text-gray-700">
                {course.additionalCourses.map((additionalCourse, acIdx) => (
                  <span key={acIdx} className="block">{additionalCourse}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Certifications() {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Professional Certifications</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {onlineCertifications.map((cert, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-purple-500">
            <div className="mb-4">
              <h3 className="font-bold text-gray-800 text-lg mb-2">{cert.name}</h3>
              <p className="text-sm text-gray-600 mb-1">{cert.issuer}</p>
              <p className="text-sm text-gray-600 mb-1">Issued: {cert.date} • Expires: {cert.expires}</p>
              <p className="text-xs text-gray-500 mb-3">ID: {cert.credentialId}</p>
              <div className="flex justify-between items-center">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  {cert.status}
                </span>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  View Certificate →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OnlineEducation() {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Online Courses</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {realOnlineCourses.map((course, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-400">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-gray-800 text-lg">{course.name}</h3>
              <span className="text-sm text-gray-500">{course.year}</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">{course.provider}</p>
            <p className="text-sm text-gray-700 mb-4">{course.description}</p>
            <a
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              View Certificate →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Enhanced Navigation */}
        <nav className="mb-8 bg-white rounded-xl shadow-sm border border-gray-100 px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 hover:text-blue-800 font-medium transition-all duration-200 border border-blue-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m0 7h18" />
              </svg>
              Back to Portfolio
            </Link>
            
            {/* Enhanced Personal Branding */}
            <div className="flex items-center gap-4 bg-gray-50 rounded-lg px-4 py-2 border border-gray-200">
              <StaticImage
                src="../images/photo.jpg"
                alt="Runze Li"
                placeholder="blurred"
                width={44}
                height={44}
                className="rounded-full border-2 border-white shadow-sm"
              />
              <div className="text-right">
                <div className="font-semibold text-gray-900 text-sm">Runze Li</div>
                <div className="text-xs text-gray-600">Software Developer</div>
              </div>
            </div>
          </div>
        </nav>
        
        <h1 className="text-4xl font-bold mb-8 text-blue-800 text-center">Education & Learning</h1>
        
        <UniversityEducation />
        <Certifications />
        <OnlineEducation />
        
        <div className="text-center mt-12">
          <Link 
            to="/" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}