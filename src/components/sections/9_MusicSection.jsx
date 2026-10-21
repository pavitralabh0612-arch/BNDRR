import React from 'react';
import { Disc, Play, ExternalLink, Music } from 'lucide-react';
import { config } from '../../config/surpriseConfig';

export const SectionMusic = () => {
  return (
    <section id="music" className="relative min-h-[60vh] py-16 px-4 md:px-8 z-10 flex items-center justify-center">
      <div className="max-w-2xl w-full glass-panel p-8 md:p-10 rounded-3xl border border-electric-500/30 text-center blue-glow">
        <div className="inline-flex p-3 rounded-2xl bg-electric-500/10 border border-electric-500/30 text-electric-400 mb-4 animate-spin" style={{ animationDuration: '10s' }}>
          <Disc className="w-8 h-8" />
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight blue-text-glow font-sans">
          {config.music.heading}
        </h2>

        <p className="text-slate-400 text-sm md:text-base mb-6 font-sans max-w-md mx-auto">
          {config.music.subheading}
        </p>

        {/* Spotify Embed or Card */}
        {config.music.spotifyEmbedUrl ? (
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-electric-500/30 max-w-md mx-auto">
            <iframe
              src={config.music.spotifyEmbedUrl}
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Dedicated Player"
            ></iframe>
          </div>
        ) : (
          <div className="glass-card max-w-md mx-auto p-6 rounded-2xl border border-electric-500/20 flex flex-col items-center">
            <Music className="w-10 h-10 text-electric-400 mb-3 animate-pulse" />
            <h3 className="text-lg font-bold text-white mb-1">{config.music.songTitle}</h3>
            <p className="text-xs text-slate-400 mb-4">{config.music.artist}</p>
            
            <a
              href={config.music.youtubeLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-electric-500 to-cyan-500 hover:from-electric-400 hover:to-cyan-400 text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-all shadow-md hover:scale-105"
            >
              <Play className="w-4 h-4 fill-white" />
              Listen to Song <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
