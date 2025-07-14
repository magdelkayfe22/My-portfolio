import React, { useMemo } from 'react';
import './HackerTransition.css';

const NUM_COLUMNS = 32;
const NUM_DIGITS = 28;

// Animated background of binary rain for a hacker vibe.
const HackerBackground = () => {
  // Each column is a unique stream of 0s and 1s, generated once for a lively effect.
  const columns = useMemo(() => (
    Array.from({ length: NUM_COLUMNS }, (_, colIdx) => {
      const digits = Array.from({ length: NUM_DIGITS }, () => (Math.random() > 0.5 ? '1' : '0')).join('');
      const delay = (colIdx * 0.18).toFixed(2); // Stagger columns for a wave-like animation.
      const duration = (5.5 + Math.random() * 2.5).toFixed(2); // Each column scrolls at a slightly different speed.
      return (
        <div
          key={colIdx}
          className="matrix-bg-col"
          style={{ animationDelay: `${delay}s`, animationDuration: `${duration}s` }}
        >
          {digits.split('').map((digit, i) => (
            <span key={i}>{digit}</span>
          ))}
        </div>
      );
    })
  ), []);

  return (
    <div className="matrix-bg-overlay">
      {columns}
    </div>
  );
};

export default HackerBackground;
