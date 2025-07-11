import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
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
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/certifications">Certifications</Link></li>

          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} Magd Elkayfe. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
