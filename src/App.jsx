import React, { useState } from 'react';
import { FloatingElements } from './components/FloatingElements';
import { AudioPlayer } from './components/AudioPlayer';
import { SectionOpening } from './components/sections/1_Opening';
import { SectionIntro } from './components/sections/2_Intro';
import { SectionBeginning } from './components/sections/3_Beginning';
import { SectionGallery } from './components/sections/4_Gallery';
import { SectionReasons } from './components/sections/5_Reasons';
import { SectionPlayfulGame } from './components/sections/6_PlayfulGame';
import { SectionTimeline } from './components/sections/7_Timeline';
import { SectionLoveLetter } from './components/sections/8_LoveLetter';
import { SectionMusic } from './components/sections/9_MusicSection';
import { SectionFinalSurprise } from './components/sections/10_FinalSurprise';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);

  const handleStartSurprise = () => {
    setIsOpened(true);
    setTimeout(() => {
      document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen relative text-slate-100 font-sans selection:bg-electric-500 selection:text-white overflow-x-hidden">
      {/* Background Starry & Floating Particles */}
      <FloatingElements />

      {/* Floating Audio Controls */}
      <AudioPlayer />

      {/* MAIN STORY SECTIONS */}
      <main className="relative z-10 space-y-8 md:space-y-16">
        {/* 1. Opening Screen */}
        <SectionOpening onStart={handleStartSurprise} />

        {/* Sections revealed when opened or scrolled */}
        {isOpened && (
          <div className="animate-fadeIn space-y-16 md:space-y-24">
            {/* 2. Boyfriend's Day Intro */}
            <SectionIntro />

            {/* 3. Classroom CR Beginning */}
            <SectionBeginning />

            {/* 4. 30 Photo Memory Gallery */}
            <SectionGallery />

            {/* 5. Reasons You're My Bndrr */}
            <SectionReasons />

            {/* 6. Playful Dodging Game */}
            <SectionPlayfulGame />

            {/* 7. Memory Timeline */}
            <SectionTimeline />

            {/* 8. Handwritten Love Letter */}
            <SectionLoveLetter />

            {/* 9. Music / Sound */}
            <SectionMusic />

            {/* 10. Final Hugging Monkeys Surprise */}
            <SectionFinalSurprise />
          </div>
        )}
      </main>
    </div>
  );
}
