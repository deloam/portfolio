// Navbar.js
import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { ReactComponent as Logo } from '../assets/images/logo.svg';
import {ReactComponent as CyclistImage} from '../assets/images/cyclist.svg';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const overlayRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !overlayRef.current.contains(event.target) &&
      !toggleButtonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  // Fechar o menu quando um item for clicado
  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={scrollToTop}>
        <Logo className='logo-svg' />
      </div>
      <button className="menu-toggle" onClick={toggleMenu} ref={toggleButtonRef}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className={`overlay ${isOpen ? 'active' : ''}`} ref={overlayRef}></div>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`} ref={menuRef}>
        <li><a href="#biography" onClick={handleMenuItemClick}>Biografia</a></li>
        <li><a href="#skills" onClick={handleMenuItemClick}>Habilidades</a></li>
        <li><a href="#projects" onClick={handleMenuItemClick}>Projetos</a></li>
        <li><a href="#contact" onClick={handleMenuItemClick}>Contato</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
