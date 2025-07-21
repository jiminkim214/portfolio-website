import React, { useState, useEffect } from 'react';

interface WelcomeAnimationProps {
  onComplete: () => void;
}

const WelcomeAnimation: React.FC<WelcomeAnimationProps> = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const greetings = [
    'Hello',
    'Ciao',
    'Hola',
    'Bonjour',
    'Hallo',
    'Olá',
    'Привет',
    'こんにちは',
    '안녕하세요',
    'مرحبا'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < greetings.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(onComplete, 800);
        }, 1000);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [currentIndex, greetings.length, onComplete]);

  return (
    <div className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-800 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className="text-center">
        <div className="text-6xl md:text-8xl font-light text-white mb-4 transition-all duration-300">
          {greetings[currentIndex]}
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full opacity-60"></div>
      </div>
    </div>
  );
};

export default WelcomeAnimation;