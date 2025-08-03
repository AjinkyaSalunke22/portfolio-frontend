import { useState, useEffect } from 'react';

export default function Experience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/experience')
      .then(response => response.json())
      .then(data => setExperiences(data))
      .catch(error => console.error('Error loading experience:', error));
  }, []);

  return (
    <div className="max-w-4xl mx-auto animate-fade-in-up">
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center animate-slide-in-down">Professional Experience</h2>
      <div className="space-y-8 animate-slide-in-up">
        {experiences.length > 0 ? experiences.map((exp, index) => (
          <div key={index} className={`bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-8 border-l-4 ${index === 0 ? 'border-blue-500' : 'border-green-500'} hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out border border-gray-100`}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{exp.designation}</h3>
                <p className={`${index === 0 ? 'text-blue-600' : 'text-green-600'} font-medium`}>{exp.company}</p>
                <p className="text-gray-600">{exp.location}</p>
              </div>
              <span className="text-gray-500 text-sm">{exp.from} – {exp.to}</span>
            </div>
            <ul className="space-y-2 text-gray-700">
              {exp.contributions.map((contribution, idx) => (
                <li key={idx}>• {contribution}</li>
              ))}
            </ul>
          </div>
        )) : (
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-8 border-l-4 border-gray-300 border border-gray-100">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Experience Available</h3>
              <p className="text-gray-600 mb-4">Professional experience will be displayed here once added.</p>
              <div className="text-left">
                <h4 className="font-medium text-gray-700">Sample Position</h4>
                <p className="text-gray-500">Company Name</p>
                <p className="text-gray-500">Location</p>
                <p className="text-gray-400 text-sm mt-2">Duration will appear here</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}