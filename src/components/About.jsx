import { useState, useEffect } from 'react';
import { dataCache } from '../utils/dataCache';

export default function About() {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dataCache.fetchData('/about')
      .then(data => {
        setAboutData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading about data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="flex justify-center items-center h-64"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>;

  return (
    <div className="max-w-4xl mx-auto animate-fade-in-up">
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center animate-slide-in-down">About Me</h2>
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-8 mb-8 animate-slide-in-left hover:shadow-2xl transition-all duration-300 border border-gray-100">
        <p className="text-lg text-gray-700 leading-relaxed">
          {aboutData.aboutMe || 'No about information available.'}
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 animate-slide-in-up">
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900">{aboutData.education?.degree || 'No degree info'}</h4>
              <p className="text-gray-600">{aboutData.education?.college || 'No college info'}</p>
              <p className="text-gray-500 text-sm">{aboutData.education?.from || ''} – {aboutData.education?.to || ''}</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Achievements</h3>
          <ul className="space-y-2 text-gray-700">
            {(aboutData.achievements || []).map((achievement, index) => (
              <li key={index}>• {achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}