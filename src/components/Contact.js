import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target[0].value,
      email: e.target[1].value,
      message: e.target[2].value,
    };
    const res = await fetch('https://formspree.io/f/mzzgnrlq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (res.ok) {
      setStatus('Message sent!');
      e.target.reset();
    } else {
      setStatus('Something went wrong. Try again.');
    }
  };

  return (
    <section className="contact-section">
      <h2>Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required />
        <button type="submit">Send</button>
      </form>
      {status && <p className="contact-status">{status}</p>}

    </section>
  );
};

export default Contact;
