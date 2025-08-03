import { useState, useEffect } from 'react';
import { dataCache } from '../utils/dataCache';

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dataCache.fetchData('/skills')
      .then(data => {
        setSkills(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading skills:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="flex justify-center items-center h-64"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>;

  return (
    <div className="max-w-6xl mx-auto animate-fade-in-up">
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center animate-slide-in-down">Technical Skills</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.length > 0 ? skills.map((skillCategory, index) => (
          <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out animate-slide-in-up border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{skillCategory.category}</h3>
            <div className="flex flex-wrap gap-3">
              {skillCategory.skills.map(skill => (
                <span key={skill} className="px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium hover:scale-110 transition-transform duration-200 shadow-md">{skill}</span>
              ))}
            </div>
          </div>
        )) : (
          <div className="col-span-full text-center">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">No Skills Available</h3>
              <p className="text-gray-600">Skills information will be displayed here once added.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}