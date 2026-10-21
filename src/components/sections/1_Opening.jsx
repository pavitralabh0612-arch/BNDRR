import React from 'react';
import { Heart, Sparkles, ChevronDown } from 'lucide-react';
import { config } from '../../config/surpriseConfig';

export const SectionOpening = ({ onStart }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center p-6 text-center z-10">
      {/* Glow Backdrop */}
      <div className="absolute w-80 h-80 bg-blue-600/20 rounded-full blur-3xl -z-10 animate-pulse-glow" />

      {/* Opening Glass Card */}
      <div className="max-w-md w-full glass-panel rounded-3xl p-8 md:p-10 border border-electric-500/30 blue-glow flex flex-col items-center transform hover:scale-[1.01] transition-transform duration-500">
        {/* Animated Monkey Avatar Badge */}
        <div className="relative mb-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-electric-500 to-cyan-400 p-1 shadow-lg shadow-electric-500/30 animate-float-slow">
            <div className="w-full h-full rounded-full bg-midnight-950 flex items-center justify-center text-4xl border border-white/10">
              🐒
            </div>
          </div>
          <span className="absolute -bottom-1 -right-1 bg-pink-500 text-white p-1.5 rounded-full text-xs shadow-md">
            ❤️
          </span>
        </div>

        {/* Greetings */}
        <h2 className="text-sm font-semibold tracking-widest text-electric-400 uppercase mb-2 flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-cyan-300" />
          A Secret Delivery
        </h2>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 font-sans tracking-tight">
          {config.opening.greeting}
        </h1>

        <p className="font-handwritten text-2xl md:text-3xl text-sky-200 mb-4">
          {config.opening.subtext}
        </p>

        <div className="inline-block bg-blue-950/80 border border-blue-500/30 px-4 py-1.5 rounded-full mb-8">
          <p className="text-xs text-slate-300 font-medium flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400" />
            {config.opening.fromText}
          </p>
        </div>

        {/* Interactive Reveal Button */}
        <button
          onClick={onStart}
          className="w-full relative group overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-electric-500 to-cyan-500 p-px shadow-xl hover:shadow-electric-500/40 transition-all duration-300 active:scale-95"
        >
          <div className="w-full bg-midnight-950/90 group-hover:bg-transparent text-white py-4 px-6 rounded-[15px] font-semibold text-lg flex items-center justify-center gap-2 transition-colors duration-300">
            <span>{config.opening.buttonText}</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </div>
        </button>
      </div>
    </section>
  );
};
