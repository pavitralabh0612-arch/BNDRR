import React from 'react';
import { X, ChevronLeft, ChevronRight, Heart } from 'lucide-react';

export const LightboxModal = ({ photo, onClose, onPrev, onNext, totalPhotos, currentIndex }) => {
  if (!photo) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-midnight-950/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full glass-panel rounded-2xl overflow-hidden p-6 border border-electric-500/30 polaroid-shadow"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header controls */}
        <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
          <div className="flex items-center space-x-2">
            <span className="bg-electric-500/20 text-electric-400 font-mono text-xs px-2.5 py-1 rounded-full border border-electric-500/30">
              {photo.id}
            </span>
            <span className="text-slate-400 text-xs font-mono">
              ({currentIndex + 1} of {totalPhotos})
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800/60 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Image Container */}
        <div className="relative group flex items-center justify-center bg-black/40 rounded-xl overflow-hidden max-h-[65vh]">
          <img
            src={photo.photoUrl}
            alt={photo.caption || photo.title}
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80";
            }}
            className="object-contain max-h-[65vh] w-auto rounded-lg transition-transform duration-300"
          />

          {/* Nav arrows */}
          <button
            onClick={onPrev}
            className="absolute left-3 p-3 rounded-full bg-midnight-950/70 text-white hover:bg-electric-500 transition-all transform hover:scale-110 border border-white/10"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={onNext}
            className="absolute right-3 p-3 rounded-full bg-midnight-950/70 text-white hover:bg-electric-500 transition-all transform hover:scale-110 border border-white/10"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Caption Footer */}
        <div className="mt-4 flex flex-col items-center text-center">
          <p className="font-handwritten text-2xl md:text-3xl text-sky-300 flex items-center gap-2">
            <Heart className="w-5 h-5 text-sky-400 fill-sky-400/30 animate-pulse" />
            {photo.caption || "Special Memory ❤️"}
          </p>
          <span className="text-xs text-slate-500 mt-1">
            Tap anywhere outside or press Esc to close
          </span>
        </div>
      </div>
    </div>
  );
};
