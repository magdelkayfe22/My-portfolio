import React from 'react';
import './Certifications.css';

const Certifications = () => (
  <section className="certifications-section">
    <h2>Certifications</h2>
    <div className="cert-badges">
      <div className="cert-badge">
        <img src={require('../assets/cisco_logo.png')} alt="Cisco Logo" className="cert-logo" />
        <span>Intro to Cybersecurity</span>
        <a href={`${process.env.PUBLIC_URL}/cisco.png`} target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/cisco.png`} alt="Cisco Intro to Cybersecurity Certificate" className="cert-img cert-img-large" />
        </a>
      </div>
      <div className="cert-badge">
        <img src={require('../assets/google.png')} alt="Google Logo" className="cert-logo google-logo-fix" style={{ maxWidth: '120px', height: 'auto', display: 'block', margin: '0 auto' }} />
        {/* Google certificate coming soon! */}
        <span>Google Cybersecurity Certification (in progress)</span>
      </div>
    </div>
  </section>
);

export default Certifications;
