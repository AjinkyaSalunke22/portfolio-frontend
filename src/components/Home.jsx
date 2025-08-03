import { TypingAnimation } from "../TypingAnimation";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 animate-fade-in-up">
      <div className="md:w-1/2 text-center md:text-left animate-slide-in-left">
        <div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900">
            I Am
          </h1>
          <TypingAnimation />
        </div>
        <p className="mt-6 text-lg text-gray-700 max-w-xl mx-auto md:mx-0">
          Computer Engineering graduate with hands-on experience in full-stack development, cloud technologies, and AI integration. Specialized in building scalable enterprise applications using modern web technologies and passionate about translating innovative ideas into digital realities.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="https://1drv.ms/f/c/efa83f8fe079dc8e/Eo7ceeCPP6gggO-FPQAAAAAB-rNxTlUtbihfKu-vJowDWw?e=S3TK3y" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 text-center">
            Download my CV
          </a>
          <a href="tel:+917620910603" className="w-full sm:w-auto px-8 py-3 bg-gray-100 text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-105 text-center">
            Contact Me
          </a>
        </div>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center animate-slide-in-right">
        <div className="relative w-64 h-80 sm:w-80 sm:h-96 rounded-t-full rounded-b-full overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out group">
          <img
            src="/profile.jpg"
            alt="Ajinkya Salunke"
            className="w-full h-full object-contain group-hover:blur-sm transition-all duration-300"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg font-semibold text-lg">
              Ajinkya's AI Avatar
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}