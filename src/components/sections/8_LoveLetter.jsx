import React from 'react';
import { Mail, Heart, Sparkles } from 'lucide-react';
import { config } from '../../config/surpriseConfig';

export const SectionLoveLetter = () => {
  return (
    <section id="letter" className="relative min-h-screen py-16 px-4 md:px-8 z-10">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex p-3 rounded-2xl bg-electric-500/10 border border-electric-500/30 text-electric-400 mb-3">
            <Mail className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2 tracking-tight blue-text-glow">
            {config.letter.heading}
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-handwritten text-xl">
            A love letter written specifically for Madhav
          </p>
        </div>

        {/* Paper / Parchment Love Letter Card */}
        <div className="relative bg-gradient-to-b from-slate-900 via-midnight-900 to-slate-950 p-8 md:p-12 rounded-3xl border border-electric-500/30 polaroid-shadow relative overflow-hidden">
          {/* Subtle Paper Lines Effect */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Letter Stamp */}
          <div className="absolute top-6 right-6 border-2 border-dashed border-electric-500/40 p-2 rounded-xl text-center bg-electric-500/5 rotate-6">
            <span className="block text-[10px] font-mono text-electric-400 uppercase tracking-widest">POSTAGE</span>
            <span className="text-xl">🐒❤️</span>
          </div>

          {/* Salutation */}
          <h3 className="font-handwritten text-3xl md:text-4xl text-sky-300 mb-6 font-bold">
            {config.letter.salutation}
          </h3>

          {/* Body Text */}
          <div className="font-handwritten text-xl md:text-2xl text-slate-200 leading-relaxed whitespace-pre-line mb-8 tracking-wide">
            {config.letter.bodyText}
          </div>

          {/* Closing Signature */}
          <div className="pt-6 border-t border-slate-800/80 text-right">
            <p className="font-handwritten text-xl text-slate-400">
              {config.letter.closing}
            </p>
            <p className="font-handwritten text-3xl text-pink-400 font-bold mt-1">
              {config.letter.signature}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
