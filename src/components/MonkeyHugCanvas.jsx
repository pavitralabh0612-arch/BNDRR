import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { config } from '../config/surpriseConfig';

export const MonkeyHugCanvas = () => {
  return (
    <div className="relative flex flex-col items-center justify-center py-8">
      {/* Glow Aura behind monkeys */}
      <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-glow" />

      {/* Main Vector SVG Illustration of 2 Hugging Monkeys */}
      <div className="relative z-10 w-72 h-72 md:w-96 md:h-96 transform hover:scale-105 transition-transform duration-500 cursor-pointer">
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full drop-shadow-[0_15px_35px_rgba(59,130,246,0.35)]"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="monkeyBoy" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </linearGradient>

            <linearGradient id="monkeyGirl" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0369a1" />
            </linearGradient>

            <linearGradient id="furWarm" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#c49a6c" />
              <stop offset="100%" stopColor="#8c5a2b" />
            </linearGradient>

            <linearGradient id="furWarm2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#92400e" />
            </linearGradient>

            <linearGradient id="faceSkin" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef3c7" />
              <stop offset="100%" stopColor="#fde68a" />
            </linearGradient>

            <linearGradient id="heartGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>

          {/* Floating Hearts Around Monkeys */}
          <g className="animate-pulse">
            <path d="M 200 40 Q 185 20, 170 40 Q 155 60, 200 100 Q 245 60, 230 40 Q 215 20, 200 40 Z" fill="url(#heartGlow)" opacity="0.9" />
            <path d="M 120 90 Q 110 75, 95 90 Q 80 105, 120 135 Q 160 105, 145 90 Q 130 75, 120 90 Z" fill="#60a5fa" opacity="0.7" transform="scale(0.6) translate(80, 20)" />
            <path d="M 280 90 Q 270 75, 255 90 Q 240 105, 280 135 Q 320 105, 305 90 Q 290 75, 280 90 Z" fill="#ec4899" opacity="0.8" transform="scale(0.7) translate(140, 20)" />
          </g>

          {/* MONKEY 1 (MADHAV / BNDRR) - LEFT SIDE */}
          <g id="monkey-bndrr" className="animate-float-slow">
            {/* Tail */}
            <path d="M 110 270 Q 60 280, 50 230 Q 40 180, 80 190" fill="none" stroke="url(#furWarm)" strokeWidth="16" strokeLinecap="round" />

            {/* Left Ear */}
            <circle cx="115" cy="170" r="32" fill="url(#furWarm)" />
            <circle cx="115" cy="170" r="20" fill="url(#faceSkin)" />

            {/* Body */}
            <path d="M 130 200 C 110 240, 110 310, 180 320 C 220 320, 220 250, 180 200 Z" fill="url(#furWarm)" />

            {/* Head */}
            <circle cx="170" cy="170" r="55" fill="url(#furWarm)" />
            {/* Face Mask */}
            <path d="M 140 160 Q 170 135, 200 160 Q 205 195, 170 200 Q 135 195, 140 160 Z" fill="url(#faceSkin)" />

            {/* Eyes (Happy Closed Curves) */}
            <path d="M 152 165 Q 160 157, 168 165" fill="none" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
            <path d="M 175 165 Q 183 157, 191 165" fill="none" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />

            {/* Nose & Smile */}
            <ellipse cx="171.5" cy="175" rx="5" ry="3" fill="#8c5a2b" />
            <path d="M 164 182 Q 171.5 190, 179 182" fill="none" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />

            {/* Blush */}
            <ellipse cx="147" cy="176" rx="7" ry="4" fill="#f43f5e" opacity="0.5" />

            {/* Tiny CR Crown on Bndrr */}
            <path d="M 155 118 L 163 128 L 170 115 L 178 128 L 185 118 L 183 133 L 157 133 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
            <circle cx="170" cy="112" r="3" fill="#ef4444" />
          </g>

          {/* MONKEY 2 (PAVITRA / BHONDU BNDR) - RIGHT SIDE (HUGGING CLOSELY) */}
          <g id="monkey-bhondu" className="animate-float-slow" style={{ animationDelay: '0.5s' }}>
            {/* Tail */}
            <path d="M 290 270 Q 340 280, 350 230 Q 360 180, 320 190" fill="none" stroke="url(#furWarm2)" strokeWidth="16" strokeLinecap="round" />

            {/* Right Ear */}
            <circle cx="285" cy="170" r="32" fill="url(#furWarm2)" />
            <circle cx="285" cy="170" r="20" fill="url(#faceSkin)" />

            {/* Body */}
            <path d="M 270 200 C 290 240, 290 310, 220 320 C 180 320, 180 250, 220 200 Z" fill="url(#furWarm2)" />

            {/* Head */}
            <circle cx="230" cy="170" r="55" fill="url(#furWarm2)" />
            {/* Face Mask */}
            <path d="M 200 160 Q 230 135, 260 160 Q 265 195, 230 200 Q 195 195, 200 160 Z" fill="url(#faceSkin)" />

            {/* Eyes (Cute Happy Arcs) */}
            <path d="M 210 165 Q 218 157, 226 165" fill="none" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
            <path d="M 233 165 Q 241 157, 249 165" fill="none" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />

            {/* Nose & Smile */}
            <ellipse cx="229.5" cy="175" rx="5" ry="3" fill="#92400e" />
            <path d="M 222 182 Q 229.5 190, 237 182" fill="none" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />

            {/* Blush */}
            <ellipse cx="252" cy="176" rx="7" ry="4" fill="#f43f5e" opacity="0.6" />

            {/* Bow Ribbon for Bhondu Bndr */}
            <g transform="translate(250, 125)">
              <path d="M-10,-5 L0,0 L-10,5 Z" fill="#ec4899" />
              <path d="M10,-5 L0,0 L10,5 Z" fill="#ec4899" />
              <circle cx="0" cy="0" r="4" fill="#f43f5e" />
            </g>
          </g>

          {/* HUGGING ARMS (Interlocked in a tight hug) */}
          <g id="hug-arms">
            {/* Left Monkey's Arm wrapped around Right Monkey */}
            <path
              d="M 145 220 Q 200 240, 250 225"
              fill="none"
              stroke="url(#furWarm)"
              strokeWidth="22"
              strokeLinecap="round"
            />
            {/* Hand Paw */}
            <circle cx="250" cy="225" r="13" fill="url(#faceSkin)" />

            {/* Right Monkey's Arm wrapped around Left Monkey */}
            <path
              d="M 255 220 Q 200 245, 150 225"
              fill="none"
              stroke="url(#furWarm2)"
              strokeWidth="20"
              strokeLinecap="round"
            />
            {/* Hand Paw */}
            <circle cx="150" cy="225" r="12" fill="url(#faceSkin)" />
          </g>

          {/* Glowing Big Heart in Center Hug */}
          <g transform="translate(200, 240) scale(0.6)" className="animate-pulse">
            <path
              d="M 0 -20 Q -25 -50, -50 -20 Q -75 10, 0 60 Q 75 10, 50 -20 Q 25 -50, 0 -20 Z"
              fill="url(#heartGlow)"
              filter="drop-shadow(0 0 12px rgba(244, 63, 94, 0.8))"
            />
          </g>
        </svg>
      </div>

      {/* Cute Labels */}
      <div className="flex items-center gap-6 mt-4 z-10 font-handwritten text-xl text-sky-300">
        <span className="flex items-center gap-1 bg-midnight-900/80 px-3 py-1 rounded-full border border-electric-500/30">
          👑 {config.finalSurprise.monkeyDetails.leftMonkeyName}
        </span>
        <span className="text-pink-400 font-bold text-2xl">❤️</span>
        <span className="flex items-center gap-1 bg-midnight-900/80 px-3 py-1 rounded-full border border-pink-500/30">
          🎀 {config.finalSurprise.monkeyDetails.rightMonkeyName}
        </span>
      </div>
    </div>
  );
};
