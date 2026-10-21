import React, { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Smile, ArrowDown } from 'lucide-react';
import { config } from '../../config/surpriseConfig';

export const SectionPlayfulGame = () => {
  const [hasWon, setHasWon] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ top: '0px', left: '0px' });
  const [isDodged, setIsDodged] = useState(false);
  const [dodgeCount, setDodgeCount] = useState(0);
  const containerRef = useRef(null);

  // Dodging function for NO button
  const handleDodge = () => {
    if (!containerRef.current) return;
    const container = containerRef.current.getBoundingClientRect();
    const btnWidth = 120;
    const btnHeight = 50;

    // Calculate random position inside container boundaries
    const maxLeft = container.width - btnWidth - 40;
    const maxTop = container.height - btnHeight - 40;

    const randomLeft = Math.max(20, Math.floor(Math.random() * maxLeft));
    const randomTop = Math.max(20, Math.floor(Math.random() * maxTop));

    setNoButtonPos({
      top: `${randomTop}px`,
      left: `${randomLeft}px`
    });
    setIsDodged(true);
    setDodgeCount((prev) => prev + 1);
  };

  // YES Button Celebration
  const handleYes = () => {
    setHasWon(true);

    // Trigger canvas confetti burst
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#3b82f6', '#60a5fa', '#f43f5e', '#38bdf8', '#fbbf24']
    });

    // Secondary burst
    setTimeout(() => {
      confetti({
        particleCount: 60,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 60,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });
    }, 250);
  };

  const getDodgeMessage = () => {
    const msgs = config.game.dodgeMessages;
    return msgs[dodgeCount % msgs.length];
  };

  return (
    <section id="game" className="relative min-h-[75vh] flex flex-col items-center justify-center p-6 text-center z-10 py-16">
      <div 
        ref={containerRef}
        className="max-w-2xl w-full glass-panel rounded-3xl p-8 md:p-12 border border-electric-500/30 blue-glow relative min-h-[420px] flex flex-col items-center justify-center overflow-hidden"
      >
        {!hasWon ? (
          <>
            {/* Header prompt */}
            <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/30 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold text-pink-400 mb-4">
              <Sparkles className="w-4 h-4" />
              <span>A Quick Quiz for Bndrr</span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-slate-300 mb-2 font-sans">
              {config.game.question}
            </h3>

            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight font-sans blue-text-glow">
              {config.game.subQuestion}
            </h2>

            {/* Dodge Toast Message */}
            {isDodged && (
              <div className="absolute top-6 bg-amber-500/20 text-amber-300 border border-amber-500/40 px-3 py-1 rounded-full text-xs font-mono animate-bounce">
                {getDodgeMessage()}
              </div>
            )}

            {/* Buttons Area */}
            <div className="flex flex-wrap items-center justify-center gap-6 w-full mt-4 min-h-[80px]">
              {/* YES Button */}
              <button
                onClick={handleYes}
                className="bg-gradient-to-r from-electric-500 to-cyan-500 hover:from-electric-400 hover:to-cyan-400 text-white font-extrabold text-lg md:text-xl px-10 py-4 rounded-2xl shadow-xl shadow-electric-500/30 transform hover:scale-110 active:scale-95 transition-all duration-200 flex items-center gap-2"
              >
                <Heart className="w-6 h-6 fill-white" />
                {config.game.yesButtonText}
              </button>

              {/* Dodging NO Button */}
              <button
                onMouseEnter={handleDodge}
                onTouchStart={handleDodge}
                onClick={handleDodge}
                className={`bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-base md:text-lg px-8 py-3.5 rounded-2xl border border-slate-700 transition-all duration-200 select-none ${
                  isDodged ? 'absolute shadow-2xl z-30' : ''
                }`}
                style={
                  isDodged
                    ? { top: noButtonPos.top, left: noButtonPos.left }
                    : {}
                }
              >
                {config.game.noButtonText}
              </button>
            </div>
          </>
        ) : (
          /* WIN CELEBRATION STATE */
          <div className="flex flex-col items-center animate-fadeIn">
            <div className="w-20 h-20 rounded-full bg-pink-500/20 border border-pink-500/40 flex items-center justify-center text-4xl mb-4 animate-bounce">
              😌❤️
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3 blue-text-glow font-sans">
              {config.game.successMessage}
            </h2>

            <p className="font-handwritten text-2xl md:text-3xl text-sky-300 mb-6">
              {config.game.successSubtext}
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 animate-pulse">
              <span>Scroll down to continue</span>
              <ArrowDown className="w-4 h-4 text-electric-400" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
