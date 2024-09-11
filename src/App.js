// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Biography from './components/Biography';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <main>
        <Biography />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
