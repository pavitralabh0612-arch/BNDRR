import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { config } from '../../config/surpriseConfig';

export const SectionReasons = () => {
  return (
    <section id="reasons" className="relative min-h-screen py-16 px-4 md:px-8 z-10">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <div className="inline-flex p-3 rounded-2xl bg-electric-500/10 border border-electric-500/30 text-electric-400 mb-3">
            <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3 tracking-tight blue-text-glow">
            Reasons You're My Bndrr 🐒
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-sm md:text-base">
            Just a few of the endless reasons why you're my absolute favorite human.
          </p>
        </div>

        {/* 8 Interactive Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {config.reasons.map((reason, idx) => (
            <div
              key={idx}
              className="glass-card p-6 md:p-8 rounded-3xl border border-electric-500/20 relative group hover:-translate-y-1 transition-all duration-300 flex items-start gap-5 overflow-hidden"
            >
              {/* Background Number Watermark */}
              <span className="absolute right-4 bottom-2 text-6xl font-extrabold text-slate-800/20 font-mono select-none pointer-events-none group-hover:text-electric-500/10 transition-colors">
                0{idx + 1}
              </span>

              {/* Icon */}
              <div className="text-3xl md:text-4xl p-3.5 rounded-2xl bg-electric-500/10 border border-electric-500/20 shrink-0 group-hover:scale-110 transition-transform">
                {reason.icon || '💙'}
              </div>

              {/* Text */}
              <div className="flex-1 z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-sans group-hover:text-electric-300 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed font-sans">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
