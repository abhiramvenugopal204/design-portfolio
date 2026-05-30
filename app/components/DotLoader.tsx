"use client";

import React from "react";

interface DotLoaderProps {
  size?: number; // Size of the container in px (default 256)
  className?: string;
}

export default function DotLoader({ size = 256, className = "" }: DotLoaderProps) {
  // Scaling factors based on the original 256x256 coordinate system
  const scale = size / 256;
  const dotSize = 25.3 * scale;
  const bounceHeight = 40 * scale;
  
  // X coordinates for the 5 dots in the 256px wide design
  const dotPositions = [48.6, 88.6, 128.59, 168.6, 208.6];
  
  // Colors for the 5 dots
  const colors = [
    "#E53935", // Red
    "#1E88E5", // Blue
    "#43A047", // Green
    "#FDD835", // Yellow
    "#FB8C00", // Orange
  ];

  return (
    <div
      className={`relative flex items-center justify-center select-none ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      {/* Inject custom CSS keyframes dynamically so the component is completely self-contained */}
      <style>{`
        @keyframes bodymovin-bounce {
          0% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0.333, 0, 0.667, 1);
          }
          25% {
            transform: translateY(var(--bounce-dist));
            animation-timing-function: cubic-bezier(0.333, 0, 0.667, 1);
          }
          50%, 100% {
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="relative w-full h-full">
        {colors.map((color, index) => {
          // Absolute X position scaled to container size
          // Original design places dot centers at their respective positions
          const xPos = dotPositions[index] * scale - dotSize / 2;
          // Original Y position is at 128 (center of 256px height)
          const yPos = 128 * scale - dotSize / 2;
          // Delay is staggered by 5 frames out of 30fps (approx 0.167s per dot step)
          const delay = index * 0.167;

          return (
            <div
              key={index}
              className="absolute rounded-full"
              style={{
                width: `${dotSize}px`,
                height: `${dotSize}px`,
                backgroundColor: color,
                left: `${xPos}px`,
                top: `${yPos}px`,
                animation: "bodymovin-bounce 1.334s infinite",
                animationDelay: `${delay}s`,
                // Pass custom bounce height via CSS variable to keyframe animation
                ["--bounce-dist" as any]: `-${bounceHeight}px`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
