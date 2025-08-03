export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
      <h2 className="text-4xl font-bold text-gray-900 mb-8 animate-slide-in-down">Get In Touch</h2>
      <p className="text-lg text-gray-700 mb-8">
        I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mb-8 animate-slide-in-up">
        <a href="mailto:ajinkya.salunke.official@gmail.com" className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out border border-gray-100">
          <div className="text-red-600 mb-2">
            <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.91L12 10.09l9.455-6.269h.909c.904 0 1.636.732 1.636 1.636z"/>
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900">Email</h3>
          <p className="text-gray-600 text-xs break-all">ajinkyasalunkeofficial@gmail.com</p>
        </a>
        <a href="https://www.linkedin.com/in/ajinkyasalunke22" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out border border-gray-100">
          <div className="text-blue-600 mb-2">
            <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900">LinkedIn</h3>
          <p className="text-gray-600 text-sm">Connect with me</p>
        </a>
        <a href="https://github.com/AjinkyaSalunke22" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out border border-gray-100">
          <div className="text-gray-800 mb-2">
            <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900">GitHub</h3>
          <p className="text-gray-600 text-sm">View my projects</p>
        </a>
      </div>
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-8 animate-slide-in-up hover:shadow-2xl transition-all duration-300 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Let's Build Something Amazing Together</h3>
        <p className="text-gray-700 mb-6">
          Whether you have a project in mind, need technical consultation, or want to explore AI-powered solutions, I'd love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:ajinkya.salunke.official@gmail.com" className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
            Send me an email
          </a>
          <a href="tel:+917620910603" className="inline-block px-8 py-3 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition-transform transform hover:scale-105">
            Call me
          </a>
        </div>
      </div>
    </div>
  );
}