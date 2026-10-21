import React, { useState } from 'react';
import { BookOpen, Sparkles, CheckCircle2, ArrowRight, UserCheck } from 'lucide-react';
import { config } from '../../config/surpriseConfig';

export const SectionBeginning = () => {
  const [activeStep, setActiveStep] = useState(config.story.steps.length);

  return (
    <section id="beginning" className="relative min-h-[80vh] flex flex-col items-center justify-center p-6 text-center z-10 py-16">
      <div className="max-w-3xl w-full">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-8">
          <div className="p-3 rounded-2xl bg-electric-500/10 border border-electric-500/30 text-electric-400 mb-3">
            <BookOpen className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2 font-sans tracking-tight">
            {config.story.heading}
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-medium">
            {config.story.subheading}
          </p>
        </div>

        {/* Story Interactive Card Box */}
        <div className="glass-panel p-8 md:p-10 rounded-3xl border border-electric-500/30 relative overflow-hidden blue-glow">
          {/* Background Doodle Watermark */}
          <div className="absolute right-4 top-4 opacity-10 text-8xl pointer-events-none font-handwritten select-none">
            CR 📋
          </div>

          <div className="space-y-6 text-left max-w-xl mx-auto">
            {config.story.steps.map((step, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-4 p-4 rounded-2xl transition-all duration-500 ${
                  idx < activeStep
                    ? 'bg-slate-900/80 border border-electric-500/30 opacity-100 translate-y-0'
                    : 'opacity-30 translate-y-2'
                }`}
              >
                <div className="text-3xl p-2 rounded-xl bg-electric-500/10 border border-electric-500/20 shrink-0">
                  {step.icon}
                </div>
                <div className="flex-1">
                  <p className="text-base md:text-lg text-slate-100 font-sans font-medium leading-relaxed">
                    {step.text}
                  </p>
                  {idx === 1 && (
                    <span className="inline-flex items-center gap-1 text-xs text-amber-400 mt-1 font-mono bg-amber-400/10 px-2 py-0.5 rounded">
                      <UserCheck className="w-3 h-3" /> Class Representative #1
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Classroom Doodle Note */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-handwritten text-xl">
            <span className="text-sky-300">✨ {config.story.doodleText}</span>
            <span className="text-pink-400 flex items-center gap-1 font-sans text-xs">
              CR ➔ MY Bndrr ❤️
            </span>
          </div>
        </div>

        {/* Animated Arrow Prompt */}
        <div className="mt-8 flex flex-col items-center animate-bounce">
          <p className="text-xs text-slate-400 mb-1 font-mono">Check out our memories below</p>
          <ArrowRight className="w-5 h-5 text-electric-400 rotate-90" />
        </div>
      </div>
    </section>
  );
};
