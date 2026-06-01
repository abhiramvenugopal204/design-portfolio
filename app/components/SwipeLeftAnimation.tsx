"use client";

import React from "react";
import { motion } from "framer-motion";

interface SwipeLeftAnimationProps {
  size?: number;
  className?: string;
}

// Hand Bezier vertices & tangents from the Lottie JSON
const i_hand = [
  [0, 0], [0, 0], [-1.959, 0], [0, -1.96], [0, 0], [0, 0], [-1.425, -1.299], 
  [0, 0], [0, -2.175], [0, 0], [4.552, 0], [0, 0], [1.594, 2.113], [0, 0], 
  [-1.386, 1.386], [-1.386, -1.385], [0, 0]
];
const o_hand = [
  [0, 0], [0, -1.96], [1.961, 0], [0, 0], [0, 0], [1.929, 0], [0, 0], 
  [1.606, 1.465], [0, 0], [0, 4.551], [0, 0], [-2.647, 0], [0, 0], 
  [-1.386, -1.386], [1.386, -1.385], [0, 0], [0, 0]
];

// Frame 10 (Rest)
const v_hand_10 = [
  [-7.02, 8.663], [-7.02, -18.467], [-3.458, -22.031], [0.107, -18.467], 
  [0.107, -3.592], [8.277, -3.592], [13.488, -1.574], [15.967, 0.686], 
  [18.49, 6.4], [18.49, 13.792], [10.249, 22.031], [-3.12, 22.031], 
  [-9.855, 18.676], [-17.104, 9.066], [-17.104, 4.027], [-12.064, 4.027], 
  [-7.324, 8.412]
];

// Frame 17 (Bending/Pressed State)
const v_hand_17 = [
  [-7.02, 8.662], [-7.037, -14.808], [-3.474, -18.372], [0.09, -14.808], 
  [0.107, -3.592], [8.277, -3.592], [13.488, -1.574], [15.967, 0.687], 
  [18.49, 6.4], [18.49, 13.792], [10.249, 22.031], [-3.12, 22.031], 
  [-9.855, 18.676], [-16.138, 10.569], [-16.138, 5.529], [-11.098, 5.529], 
  [-7.325, 8.413]
];

// Frame 26 (Swipe left extreme)
const v_hand_26 = [
  [-7.02, 8.662], [-9.663, -14.563], [-6.1, -18.127], [-2.536, -14.563], 
  [0.107, -3.592], [8.277, -3.592], [13.488, -1.574], [15.967, 0.687], 
  [18.49, 6.4], [18.49, 13.792], [10.249, 22.031], [-3.12, 22.031], 
  [-9.855, 18.676], [-16.138, 10.569], [-16.138, 5.529], [-11.098, 5.529], 
  [-7.324, 8.412]
];

// Helper to generate SVG Bezier path string
function buildPath(v: number[][], i: number[][], o: number[][]): string {
  if (!v || v.length === 0) return "";
  let d = `M ${v[0][0]} ${v[0][1]}`;
  for (let idx = 0; idx < v.length - 1; idx++) {
    const next = idx + 1;
    const cp1x = v[idx][0] + o[idx][0];
    const cp1y = v[idx][1] + o[idx][1];
    const cp2x = v[next][0] + i[next][0];
    const cp2y = v[next][1] + i[next][1];
    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${v[next][0]} ${v[next][1]}`;
  }
  return d;
}

const path10 = buildPath(v_hand_10, i_hand, o_hand);
const path17 = buildPath(v_hand_17, i_hand, o_hand);
const path26 = buildPath(v_hand_26, i_hand, o_hand);

// Arrowhead keyframes
const arrowhead_18 = "M 0.006 -2.71 L 0.001 2.685 L -0.006 -2.71";
const arrowhead_22 = "M -5.37 -2.685 L 0.001 2.685 L 5.37 -2.685";

export default function SwipeLeftAnimation({ size = 124, className = "" }: SwipeLeftAnimationProps) {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative flex items-center justify-center select-none ${className}`}
    >
      <svg
        viewBox="0 0 124 124"
        width="100%"
        height="100%"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Arrow Shaft (Layer 2) */}
        <g transform="translate(52.25, 34.781) rotate(90)">
          <g transform="translate(-10.369, -16.966)">
            <motion.path
              d="M 10.37 1 L 10.37 28.932"
              stroke="#70C1FE"
              strokeWidth={2}
              animate={{
                pathLength: [0, 0, 1, 1, 1, 0],
                opacity: [0, 0, 1, 1, 0, 0]
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
                times: [0, 10/60, 20/60, 50/60, 57/60, 1.0]
              }}
            />
          </g>
        </g>

        {/* Arrowhead (Layer 1) */}
        <g transform="translate(52.25, 34.781) rotate(90)">
          <g transform="translate(-10.369, -16.966)">
            <motion.path
              stroke="#70C1FE"
              strokeWidth={2}
              animate={{
                d: [arrowhead_18, arrowhead_18, arrowhead_22, arrowhead_22, arrowhead_22, arrowhead_18],
                opacity: [0, 0, 1, 1, 0, 0]
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
                times: [0, 18/60, 22/60, 50/60, 57/60, 1.0]
              }}
            />
          </g>
        </g>

        {/* Hand (Layer 3) */}
        <motion.g
          animate={{
            x: [65.327, 65.327, 77.577, 54.202, 65.327, 65.327],
            y: [85.1, 85.1, 85.1, 85.1, 85.1, 85.1],
            rotate: [0, 0, 10.769, -4.231, 0, 0]
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            times: [0, 4/60, 15/60, 27/60, 39/60, 1.0]
          }}
        >
          <g transform="translate(-26.739, -44.532)">
            <motion.path
              stroke="#474A57"
              strokeWidth={2}
              fill="rgba(71, 74, 87, 0.1)"
              animate={{
                d: [path10, path10, path17, path26, path10, path10]
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
                times: [0, 10/60, 17/60, 26/60, 39/60, 1.0]
              }}
            />
          </g>
        </motion.g>
      </svg>
    </div>
  );
}
