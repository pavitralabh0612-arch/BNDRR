import React, { useState } from 'react';
import { Music, Volume2, VolumeX, ExternalLink } from 'lucide-react';
import { config } from '../config/surpriseConfig';

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed top-4 right-4 z-40">
      <button
        onClick={() => setShowModal(!showModal)}
        className="glass-panel hover:bg-electric-500/20 text-sky-300 hover:text-white px-3.5 py-2 rounded-full flex items-center gap-2 border border-electric-500/40 text-xs md:text-sm font-medium transition-all shadow-lg hover:shadow-electric-500/20 group"
      >
        <Music className={`w-4 h-4 text-electric-400 group-hover:rotate-12 transition-transform ${isPlaying ? 'animate-spin' : ''}`} />
        <span className="hidden sm:inline">Music 🎧</span>
        <span className="w-2 h-2 rounded-full bg-electric-400 animate-ping" />
      </button>

      {/* Floating Music Quick Popover */}
      {showModal && (
        <div className="absolute right-0 mt-3 w-80 glass-panel p-4 rounded-2xl border border-electric-500/30 shadow-2xl z-50 animate-fadeIn">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
              <Music className="w-4 h-4 text-electric-400" />
              {config.music.heading}
            </h4>
            <button
              onClick={() => setShowModal(false)}
              className="text-xs text-slate-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          <p className="text-xs text-slate-400 mb-3">
            {config.music.subheading}
          </p>

          {/* Spotify iframe or Link */}
          {config.music.spotifyEmbedUrl ? (
            <iframe
              src={config.music.spotifyEmbedUrl}
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Embed"
              className="rounded-xl shadow-inner border border-slate-800"
            ></iframe>
          ) : (
            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-center">
              <p className="text-xs text-slate-300 font-medium">{config.music.songTitle}</p>
              <p className="text-[11px] text-slate-500">{config.music.artist}</p>
              <a
                href={config.music.youtubeLink}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-xs text-electric-400 hover:text-sky-300 underline"
              >
                Open in YouTube <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
