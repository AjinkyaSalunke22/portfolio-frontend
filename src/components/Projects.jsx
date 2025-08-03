import { useState, useEffect } from 'react';
import { dataCache } from '../utils/dataCache';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dataCache.fetchData('/projects')
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading projects:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="flex justify-center items-center h-64"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>;

  return (
    <div className="max-w-6xl mx-auto animate-fade-in-up">
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center animate-slide-in-down">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.length > 0 ? projects.map((project, index) => (
          <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out animate-slide-in-up border border-gray-100">
            <div className="mb-3">
              <h3 className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{project.name}</h3>
            </div>
            <p className="text-blue-600 mb-4 text-sm font-medium">{project.createdAt}</p>
            <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-3 mb-6">
              {project.technologies.map(tech => (
                <span key={tech} className="px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium hover:scale-110 transition-transform duration-200 shadow-md">{tech}</span>
              ))}
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-3 text-lg">Key Contributions:</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                {project.contributions.map((contribution, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">▸</span>
                    <span>{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>
            {(project.liveLink || project.githubLink) && (
              <div className="flex gap-4 mt-4">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                )}
              </div>
            )}
          </div>
        )) : (
          <div className="col-span-full">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-8 border border-gray-100 text-center">
              <h3 className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">No Projects Available</h3>
              <p className="text-gray-600 mb-4">Featured projects will be displayed here once added.</p>
              <div className="text-left max-w-md mx-auto">
                <p className="text-blue-600 text-sm font-medium mb-2">Sample Date</p>
                <p className="text-gray-700 mb-4">Project description will appear here with details about the technologies used and contributions made.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-2 bg-gray-200 text-gray-600 rounded-full text-sm">Tech Stack</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Key Contributions:</h4>
                  <p className="text-sm text-gray-600">Project contributions will be listed here</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}