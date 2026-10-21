import React, { useState } from 'react';
import { Camera, Heart, Maximize2, Sparkles, Filter } from 'lucide-react';
import { config } from '../../config/surpriseConfig';
import { LightboxModal } from '../LightboxModal';

export const SectionGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(12);

  const handlePhotoClick = (photo, index) => {
    setSelectedPhoto(photo);
    setSelectedIndex(index);
  };

  const handlePrev = () => {
    const prevIndex = (selectedIndex - 1 + config.gallery.length) % config.gallery.length;
    setSelectedIndex(prevIndex);
    setSelectedPhoto(config.gallery[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (selectedIndex + 1) % config.gallery.length;
    setSelectedIndex(nextIndex);
    setSelectedPhoto(config.gallery[nextIndex]);
  };

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + 12, config.gallery.length));
  };

  return (
    <section id="gallery" className="relative min-h-screen py-16 px-4 md:px-8 z-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex p-3 rounded-2xl bg-electric-500/10 border border-electric-500/30 text-electric-400 mb-3">
            <Camera className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3 tracking-tight blue-text-glow">
            Our Memory Vault 📸
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
            Every picture holds a thousand laughs with you, Bndrr. Click any photo to zoom in!
          </p>
          <div className="mt-3 inline-block bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-mono text-sky-300">
            {config.gallery.length} Special Moments Loaded
          </div>
        </div>

        {/* Polaroid Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {config.gallery.slice(0, visibleCount).map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handlePhotoClick(item, idx)}
              className="group relative bg-slate-100 dark:bg-slate-900 rounded-2xl p-4 shadow-xl border border-slate-700/50 hover:border-electric-400/60 transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] cursor-pointer polaroid-shadow"
              style={{
                transform: `rotate(${item.rotate || 0}deg)`,
              }}
            >
              {/* Top Badge (PHOTO_01 .. PHOTO_30) */}
              <div className="absolute top-6 left-6 z-20 bg-midnight-950/80 text-electric-300 font-mono text-[10px] px-2 py-0.5 rounded-full border border-electric-500/30 backdrop-blur-md">
                {item.id}
              </div>

              {/* Zoom Hover Icon */}
              <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-electric-500 text-white p-1.5 rounded-full shadow-lg">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Photo Frame Container */}
              <div className="w-full h-64 md:h-72 rounded-xl overflow-hidden bg-slate-950 relative">
                <img
                  src={item.photoUrl}
                  alt={item.caption || item.title}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80";
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Polaroid Caption */}
              <div className="pt-4 pb-2 text-center">
                <p className="font-handwritten text-2xl md:text-3xl text-slate-800 dark:text-sky-200 group-hover:text-electric-400 transition-colors flex items-center justify-center gap-1.5">
                  <Heart className="w-4 h-4 text-pink-500 fill-pink-500/40 inline-block" />
                  {item.caption || "Us ❤️"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < config.gallery.length && (
          <div className="mt-12 text-center">
            <button
              onClick={showMore}
              className="glass-panel hover:bg-electric-500/20 text-sky-300 hover:text-white px-8 py-3.5 rounded-full border border-electric-500/40 font-semibold text-sm transition-all shadow-lg hover:shadow-electric-500/30"
            >
              Show More Memories ({config.gallery.length - visibleCount} remaining) ✨
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        photo={selectedPhoto}
        currentIndex={selectedIndex}
        totalPhotos={config.gallery.length}
        onClose={() => setSelectedPhoto(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};
