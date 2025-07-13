import React from 'react';
import './About.css';
import headshot from '../assets/headshot.jpg';
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';

const About = () => (
  <section className="about-section">
    <figure>
      <img src={headshot} alt="Default user headshot" className="about-headshot" />
      <figcaption>Magd Elkayfe</figcaption>

    </figure>
    <div className="about-bio">
      <h2>About Me</h2>
      <p>
      I have an academic focus in a dual program for AS and BS studying Computer Science and Information Security, Aspiring cybersecurity and tech professional -- Gaining hands on experience with Python, C++, and object-oriented programming through coursework, LeetCode practice, and personal projects. Actively building cybersecurity skills by participating in TryHackMe challenges and attending hackathons to explore real-world applications and collaborate on self-driven projects. Motivated to grow as a developer while strengthening my understanding of systems, security, and problem-solving in practical settings.
      </p>
      <div className="about-links" style={{ display: 'flex', gap: '1.2em', margin: '1em 0' }}>
        <a href="https://github.com/magdelkayfe22" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub profile" className="about-icon-btn" style={{ width: '38px', height: '38px' }} />
        </a>
        <a href="https://linkedin.com/in/magd-elkayfe" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn profile" className="about-icon-btn" style={{ width: '38px', height: '38px' }} />
        </a>
      </div>
      <a href={`${process.env.PUBLIC_URL}/My_Resume_1.pdf`} target="_blank" rel="noopener noreferrer" className="resume-view-btn">
        View My Resume (PDF)
      </a>
    </div>
  </section>
);

export default About;
