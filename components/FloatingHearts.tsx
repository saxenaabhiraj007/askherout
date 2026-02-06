
import React from 'react';

interface FloatingHeartsProps {
  count: number;
}

const FloatingHearts: React.FC<FloatingHeartsProps> = ({ count }) => {
  const hearts = Array.from({ length: count });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((_, i) => {
        const size = Math.random() * 20 + 10;
        const left = Math.random() * 100;
        const duration = Math.random() * 10 + 5;
        const delay = Math.random() * 10;

        return (
          <div
            key={i}
            className="heart-particle"
            style={{
              left: `${left}%`,
              bottom: '-50px',
              fontSize: `${size}px`,
              animationDuration: `${duration}s`,
              animationDelay: `-${delay}s`,
            }}
          >
            ❤️
          </div>
        );
      })}
    </div>
  );
};

export default FloatingHearts;
