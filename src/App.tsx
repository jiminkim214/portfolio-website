import { useState } from 'react';
import WelcomeAnimation from './components/WelcomeAnimation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Publications from './components/Publication';
import Contact from './components/Contact';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showMain, setShowMain] = useState(false);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
    setTimeout(() => {
      setShowMain(true);
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      {showWelcome && <WelcomeAnimation onComplete = {handleWelcomeComplete} />}
      <div className={`transition-all duration-1000 ${
        showMain ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}>
        <Hero />
        <About /> 
        <Projects />
        <Publications />
        <Contact />
      </div>
    </div>
  );
}

export default App;