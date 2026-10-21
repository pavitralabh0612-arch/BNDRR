import React from 'react';
import { Calendar, Sparkles, Heart } from 'lucide-react';
import { config } from '../../config/surpriseConfig';

export const SectionTimeline = () => {
  return (
    <section id="timeline" className="relative min-h-screen py-16 px-4 md:px-8 z-10">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <div className="inline-flex p-3 rounded-2xl bg-electric-500/10 border border-electric-500/30 text-electric-400 mb-3">
            <Calendar className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3 tracking-tight blue-text-glow">
            Our Relationship Timeline ⏳
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-sm md:text-base">
            From classroom attendance to building a lifetime of memories together.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative border-l-2 border-electric-500/30 ml-4 md:ml-32 space-y-12">
          {config.timeline.map((item, idx) => (
            <div key={idx} className="relative pl-8 md:pl-10 group">
              {/* Timeline Dot Icon */}
              <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-midnight-950 border-2 border-electric-400 flex items-center justify-center text-xs text-electric-300 shadow-lg group-hover:scale-125 group-hover:bg-electric-500 group-hover:text-white transition-all duration-300">
                ❤️
              </div>

              {/* Date Badge on Desktop Left */}
              <div className="hidden md:block absolute -left-32 top-1.5 w-24 text-right">
                <span className="text-xs font-mono text-cyan-300 bg-electric-500/10 px-2.5 py-1 rounded-full border border-electric-500/30">
                  {item.date}
                </span>
              </div>

              {/* Card Content */}
              <div className="glass-card p-6 rounded-3xl border border-electric-500/20 group-hover:border-electric-400/50 transition-all duration-300 relative">
                {/* Mobile Date Badge */}
                <div className="md:hidden mb-2">
                  <span className="text-xs font-mono text-cyan-300 bg-electric-500/10 px-2.5 py-1 rounded-full border border-electric-500/30">
                    {item.date}
                  </span>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white font-sans group-hover:text-electric-300 transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs font-semibold text-pink-400 bg-pink-500/10 px-3 py-1 rounded-full border border-pink-500/20">
                    {item.badge}
                  </span>
                </div>

                <p className="text-slate-300 text-sm md:text-base leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
