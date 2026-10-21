import React from 'react';
import { Heart, Sparkles, Star, Award } from 'lucide-react';
import { config } from '../../config/surpriseConfig';

export const SectionIntro = () => {
  return (
    <section id="intro" className="relative min-h-[70vh] flex flex-col items-center justify-center p-6 text-center z-10 py-16">
      <div className="max-w-3xl w-full flex flex-col items-center">
        {/* Floating Badge */}
        <div className="inline-flex items-center gap-2 bg-electric-500/10 border border-electric-500/30 px-4 py-2 rounded-full text-xs md:text-sm font-medium text-cyan-300 mb-6 backdrop-blur-md">
          <Award className="w-4 h-4 text-amber-400" />
          <span>{config.intro.badge}</span>
        </div>

        {/* Big Romantic Heading */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight blue-text-glow">
          {config.intro.title}
        </h2>

        {/* Subtitle Card */}
        <div className="glass-card max-w-xl p-6 md:p-8 rounded-2xl border border-electric-500/20 relative">
          <p className="text-lg md:text-xl text-slate-200 font-sans leading-relaxed">
            "{config.intro.subtitle}"
          </p>

          <div className="mt-4 flex items-center justify-center gap-2 text-sky-400 font-handwritten text-2xl">
            <span>Scroll down to see our story</span>
            <Sparkles className="w-5 h-5 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
          </div>

          {/* Decorative Corner Doodles */}
          <span className="absolute -top-3 -left-3 text-2xl animate-bounce">🎈</span>
          <span className="absolute -bottom-3 -right-3 text-2xl animate-pulse">💙</span>
        </div>
      </div>
    </section>
  );
};
