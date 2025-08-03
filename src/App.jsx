import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(false);

  const handleSectionChange = (section) => {
    if (section !== activeSection) {
      setIsLoading(true);
      setTimeout(() => {
        setActiveSection(section);
        setIsLoading(false);
      }, 150);
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header 
        activeSection={activeSection}
        setActiveSection={handleSectionChange}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <main className="pt-32 sm:pt-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-500 ease-in-out transform ${
            isLoading 
              ? 'opacity-0 translate-y-4 scale-95' 
              : 'opacity-100 translate-y-0 scale-100'
          }`}>
            {renderSection()}
          </div>
        </div>
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
}