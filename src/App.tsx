import React, { useState } from 'react';
import WelcomeAnimation from './components/WelcomeAnimation';
import About from './components/About';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Publications from './components/Publication';


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
    <div className = "min-h-screen bg-black text-white overflow-x-hidden">
      {showWelcome && <WelcomeAnimation onComplete = {handleWelcomeComplete} />}
      <div className={`transition-all duration-1000 ${
        showMain ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}>
        <Navigation />
        <Hero />
        <About /> 
        <Projects />
        <Publications />
        <Contact />

      </div>
    // </div>
  );
}

export default App;