'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * ChalkWipe Component
 * Features a hand-drawn chalk swirl and lines with a reversible "undraw" animation.
 * The "REVERSE" state now erases the lines from the START towards the end.
 */
export default function ChalkWipe() {
  const [isWiped, setIsWiped] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setHasLoaded(true);
  }, []);

  // Shared transition settings for a cohesive "chalky" feel
  const transition = {
    duration: 1.5,
    ease: [0.4, 0, 0.2, 1] as const,
  };

  // Animation variants for the paths
  // Draw: starts from 0 length and grows to 1.
  // Reverse: keeps length at 1 but slides offset to 1, OR shrinks length towards the end.
  // To erase from the start: pathOffset 0 -> 1 AND pathLength 1 -> 0.
  const pathVariants = {
    drawn: { 
      pathLength: 1, 
      pathOffset: 0, 
      opacity: 0.9,
    },
    hidden: { 
      pathLength: 0, 
      pathOffset: 0, 
      opacity: 0,
    },
    erased: { 
      pathLength: 0, 
      pathOffset: 1, 
      opacity: 0,
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center bg-zinc-950 p-20 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.6)] border border-white/5 group">
      {/* Interaction Overlay */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="flex bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-full p-1.5 shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500">
          <button
            onClick={() => setIsWiped(false)}
            className={`px-5 py-1.5 text-[11px] font-black tracking-widest rounded-full transition-all duration-300 ${!isWiped ? 'bg-white text-black shadow-inner' : 'text-zinc-500 hover:text-white'}`}
          >
            DRAW
          </button>
          <button
            onClick={() => setIsWiped(true)}
            className={`px-5 py-1.5 text-[11px] font-black tracking-widest rounded-full transition-all duration-300 ${isWiped ? 'bg-white text-black shadow-inner' : 'text-zinc-500 hover:text-white'}`}
          >
            REVERSE
          </button>
        </div>
      </div>

      <svg
        width="400"
        height="300"
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-lg filter drop-shadow-[0_0_20px_rgba(255,255,255,0.05)]"
      >
        <defs>
          <filter id="chalk-grain" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="1.5" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
            <feMorphology operator="dilate" radius="0.4" />
          </filter>
        </defs>

        <g filter="url(#chalk-grain)">
          {/* Swirl Path - Erases from START on Reverse */}
          <motion.path
            initial="hidden"
            animate={hasLoaded ? (isWiped ? 'erased' : 'drawn') : 'hidden'}
            variants={pathVariants}
            transition={{ ...transition, duration: 2 }}
            d="M200 150 
               c 5 -5, 15 -5, 20 5
               s -10 25, -30 20
               s -40 -40, -10 -70
               s 80 -10, 100 50
               s -20 110, -100 110
               s -160 -100, -80 -180"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Line 1 - Erases from START on Reverse */}
          <motion.path
            initial="hidden"
            animate={hasLoaded ? (isWiped ? 'erased' : 'drawn') : 'hidden'}
            variants={pathVariants}
            transition={{ ...transition, delay: isWiped ? 0.3 : 1 }}
            d="M120 220 L 280 225"
            stroke="white"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Line 2 - Erases from START on Reverse */}
          <motion.path
            initial="hidden"
            animate={hasLoaded ? (isWiped ? 'erased' : 'drawn') : 'hidden'}
            variants={pathVariants}
            transition={{ ...transition, delay: isWiped ? 0 : 1.3 }}
            d="M100 250 L 320 255"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
      </svg>

      <motion.div 
        animate={{ opacity: isWiped ? 0.3 : 1 }}
        className="mt-12 flex flex-col items-center gap-2 pointer-events-none"
      >
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <span className="text-zinc-600 font-mono text-[8px] tracking-[0.5em] uppercase">
          Opposite Trace Engine
        </span>
      </motion.div>
    </div>
  );
}
