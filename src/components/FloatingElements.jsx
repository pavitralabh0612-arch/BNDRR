import React, { useEffect, useState } from 'react';

export const FloatingElements = () => {
  const [hearts, setHearts] = useState([]);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate floating hearts
    const initialHearts = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 18 + 10,
      duration: Math.random() * 12 + 8,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.4 + 0.2,
      symbol: i % 4 === 0 ? '🐒' : i % 3 === 0 ? '✨' : '💙'
    }));
    setHearts(initialHearts);

    // Generate starry sky
    const initialStars = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 4,
    }));
    setStars(initialStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Stars twinkling */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-sky-300 rounded-full star-twinkle opacity-60"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            boxShadow: '0 0 8px rgba(125, 211, 252, 0.8)'
          }}
        />
      ))}

      {/* Floating Hearts & Monkeys */}
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute animate-float-slow select-none transition-all"
          style={{
            left: `${h.left}%`,
            bottom: '-50px',
            fontSize: `${h.size}px`,
            opacity: h.opacity,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))'
          }}
        >
          {h.symbol}
        </div>
      ))}

      {/* Ambient Radial Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
    </div>
  );
};
