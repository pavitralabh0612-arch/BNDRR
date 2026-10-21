import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Gift } from 'lucide-react';
import { config } from '../../config/surpriseConfig';
import { MonkeyHugCanvas } from '../MonkeyHugCanvas';

export const SectionFinalSurprise = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenFinal = () => {
    setIsOpen(true);

    // Big finale confetti burst!
    const count = 200;
    const defaults = {
      origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ['#3b82f6', '#f43f5e']
    });
    fire(0.2, {
      spread: 60,
      colors: ['#38bdf8', '#fbbf24']
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      colors: ['#ffffff', '#60a5fa']
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  return (
    <section id="finale" className="relative min-h-screen py-20 px-4 md:px-8 z-10 flex flex-col items-center justify-center text-center">
      <div className="max-w-3xl w-full">
        {!isOpen ? (
          /* PRE-SURPRISE STATE */
          <div className="glass-panel p-10 md:p-14 rounded-3xl border border-electric-500/30 blue-glow flex flex-col items-center transform hover:scale-[1.01] transition-transform duration-500">
            <div className="w-20 h-20 rounded-full bg-electric-500/20 border border-electric-500/40 flex items-center justify-center text-4xl mb-6 animate-pulse">
              🎁
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight blue-text-glow font-sans">
              {config.finalSurprise.preTitle}
            </h2>

            <p className="text-slate-300 text-base md:text-lg mb-8 max-w-md font-sans">
              One last surprise waiting just for you, Bndrr... Are you ready?
            </p>

            <button
              onClick={handleOpenFinal}
              className="bg-gradient-to-r from-electric-500 via-blue-600 to-cyan-500 hover:from-electric-400 hover:to-cyan-400 text-white font-extrabold text-lg md:text-xl px-10 py-4 rounded-2xl shadow-xl shadow-electric-500/40 transform hover:scale-110 active:scale-95 transition-all duration-300 flex items-center gap-3"
            >
              <Gift className="w-6 h-6" />
              {config.finalSurprise.buttonText}
            </button>
          </div>
        ) : (
          /* REVEALED FINALE STATE (THE HUGGING MONKEYS & EMOTIONAL HIGHLIGHT) */
          <div className="glass-panel p-8 md:p-12 rounded-3xl border border-electric-500/40 blue-glow animate-fadeIn flex flex-col items-center">
            {/* Two Hugging Monkeys Illustration */}
            <MonkeyHugCanvas />

            {/* Final Romantic Messages */}
            <div className="mt-8 space-y-4">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight blue-text-glow font-sans">
                {config.finalSurprise.title}
              </h1>

              <p className="font-handwritten text-3xl md:text-5xl text-sky-300 font-bold tracking-wide">
                {config.finalSurprise.subMessage}
              </p>
            </div>

            {/* Footer Tag */}
            <div className="mt-12 pt-6 border-t border-slate-800 text-xs text-slate-400 font-mono flex items-center justify-center gap-2">
              <span>Made with ❤️ by Pavitra for Madhav</span>
              <span>•</span>
              <span>Boyfriend's Day Edition</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
