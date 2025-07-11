import React, { useMemo } from 'react';
import './HackerTransition.css';

const NUM_COLUMNS = 32;
const NUM_DIGITS = 28;

// Always-on animated background of 1s and 0s
const HackerBackground = () => {
  // Generate columns of random 0s and 1s, memoized so they don't change every render
  const columns = useMemo(() => (
    Array.from({ length: NUM_COLUMNS }, (_, colIdx) => {
      const digits = Array.from({ length: NUM_DIGITS }, () => (Math.random() > 0.5 ? '1' : '0')).join('');
      const delay = (colIdx * 0.18).toFixed(2); // stagger for wave effect
      const duration = (5.5 + Math.random() * 2.5).toFixed(2); // randomize speed for each column
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
