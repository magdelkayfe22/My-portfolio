import React, { useState } from 'react';
import './Projects.css';
import Hangman from './Hangman';
import './Hangman.css';

import hangmanImg from '../assets/hangman.png';

const Projects = () => {
  const [showHangman, setShowHangman] = useState(false);
  return (
    <section className="projects-section">
      <h2>Projects & Fundamentals</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Enter PythonLand</h3>
          <p>This is my experience with Python that I learned in school and on my own with mini small projects to help me develop my skills. - <a href="https://github.com/magdelkayfe22/PythonLand">On GitHub</a></p>
        </div>
        <div className="project-card">
          <h3>C++_WorkShop</h3>
          <p>C++ is tricky! but with the fundamental lessons I worked on I developed a better understanding of the language. - <a href="https://github.com/magdelkayfe22/Cpp">On GitHub</a></p>
        </div>
        <div className="project-card">
          <img src={hangmanImg} alt="Hangman drawing" className="project-image" style={{ display: 'block', margin: '0 auto 1rem', maxWidth: '180px', width: '100%' }} />
          <h3>Hangman Game</h3>
          <p>This is the Classic Hangman game built in Python language and changed to React for a more interactive experience. Try to guess the word before the man is fully drawn! <a href="https://github.com/magdelkayfe22/PythonLand/blob/main/PersonalProjects/hangman.py" target="_blank" rel="noopener noreferrer">(View Python code)</a></p>
          <button className={`play-hangman-btn cyber-toggle-btn${showHangman ? ' active' : ''}`} onClick={() => setShowHangman(v => !v)}>
  <span className="hangman-btn-icon" aria-hidden="true">{showHangman ? '✖' : '▶'}</span>
  {showHangman ? 'Hide Hangman' : 'Play Hangman'}
</button>
        </div>
        <div className="project-card">
          <h3>New Project</h3>
          <p>Coming soon</p>
        </div>
        <div className="project-card">
          <h3>New Project</h3>
          <p>Coming soon</p>
        </div>
      </div>
      {showHangman && <Hangman />}
    </section>
  );
};

export default Projects;
