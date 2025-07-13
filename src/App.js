import React from 'react';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';

import Contact from './components/Contact';
import HackerBackground from './components/HackerTransition';
import './components/HackerTransition.css';

function App() {


  // Removed transitionTrigger effect as it is no longer used

  return (
    <div className="portfolio-app">
      <HackerBackground />
      <nav className="navbar">
        <div className="logo">My CyberSecurity Portfolio</div>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <main>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="certifications"><Certifications /></section>
        <section id="contact"><Contact /></section>
      </main>
      <footer className="footer">
        &copy; {new Date().getFullYear()} Magd Elkayfe. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
