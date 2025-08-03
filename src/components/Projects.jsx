import { useState, useEffect } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error loading projects:', error));
  }, []);

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