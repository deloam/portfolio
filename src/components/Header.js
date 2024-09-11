import React, { useState, useEffect } from 'react';
import './Header.css'; // Adicione o CSS para a estilização

const words = ['Desenvolvimento', 'GameDev', 'Banco de Dados', 'Mobile'];

const Header = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150); // Velocidade de digitação

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const handleTyping = () => {
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, prev.length - 1));
        setTypingSpeed(100); // Velocidade ao apagar
      } else {
        setDisplayedText((prev) => currentWord.slice(0, prev.length + 1));
        setTypingSpeed(150); // Velocidade ao digitar
      }

      if (!isDeleting && displayedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000); // Pausa antes de apagar
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length); // Próxima palavra
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, currentWordIndex, typingSpeed]);

  return (
    <header className="header">
      <h1 className="typing-text">
        {displayedText}
        <span className="cursor">|</span>
      </h1>
    </header>
  );
};

export default Header;
