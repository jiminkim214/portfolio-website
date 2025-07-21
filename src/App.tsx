import React, { use, useState } from 'react';
import WelcomeAnimation from './components/WelcomeAnimation';




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
      <div className = {`transition-all-duration-1000 ${showMain ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
      </div>
    </div>
  );
}

export default App;