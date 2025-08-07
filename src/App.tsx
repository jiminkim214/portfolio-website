import { useState } from 'react';
import WelcomeAnimation from './components/WelcomeAnimation';
import Hero from './components/Hero';
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
      <div className={`transition-opacity duration-1000 ${
        showMain ? 'opacity-100' : 'opacity-0'
      }`}>
        <Hero />
        <Projects />
        <Publications />
        <Contact />
      </div>
    </div>
  );
}

export default App;