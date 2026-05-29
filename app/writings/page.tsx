"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const WRITINGS = [
  {
    title: "The 'why' that explains the rythm of a product",
    readTime: "4 min read",
    link: "https://medium.com/@abhiramvenugopal204/the-rhythm-problem-in-modern-product-design-aa9d3223e8db",
  },
  {
    title: "Optimisation and development handover, a devil's deal with heavens blessing",
    readTime: "3min read",
    link: "https://medium.com/@abhiramvenugopal204",
  },
  {
    title: "user experience over business ideals",
    readTime: "3min read",
    link: "https://medium.com/@abhiramvenugopal204",
  },
  {
    title: "feedback handling and turnarounds",
    readTime: "3min read",
    link: "https://medium.com/@abhiramvenugopal204",
  },
];

export default function Writings() {
  return (
    <div className="pt-32 px-4 min-h-screen bg-transparent relative z-10">
      {/* Hero Section */}
      <div className="text-center flex items-center flex-col gap-6 py-20">
        <h1 className="text-6xl md:text-7xl xl:text-8xl font-serif leading-tight">
          <span className="relative">
            D
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className="absolute -top-10 md:-top-12 xl:-top-16 -left-5 md:-left-6 xl:-left-8 w-full h-full"
            >
              <Image
                src="/f1.svg"
                width={100}
                height={100}
                alt="flower"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </span>
          esigner's Note
          <span className="relative">

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 1,
                delay: 0.4,
                ease: "easeOut",
              }}
              className="absolute -top-6 xl:-top-8 -right-4 xl:-right-6 w-full h-full"
            >
              <Image
                src="/f3.svg"
                width={100}
                height={100}
                alt="flower"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </span>
        </h1>
        <p className="text-brand-yellow font-semibold md:text-xl" style={{ fontFamily: "var(--font-kalam)" }}>
          (things I write when I’m thinking)
        </p>
      </div>

      {/* Writings List Section */}
      <div className="max-w-[1200px] mx-auto pb-32 flex flex-col gap-10 md:gap-14 px-4 md:px-12">
        {WRITINGS.map((writing, idx) => (
          <Link
            key={idx}
            href={writing.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between cursor-pointer pb-6 border-b border-black/5 last:border-0"
          >
            <div className="flex flex-col gap-2 transition-all duration-300 group-hover:translate-x-2">
              <h3 className="text-xl md:text-2xl font-semibold leading-snug text-black/90" style={{ fontFamily: "var(--font-kalam)" }}>
                {writing.title}
              </h3>
              <span className="text-gray-400 italic text-sm md:text-base font-normal" style={{ fontFamily: "var(--font-kalam)" }}>
                {writing.readTime}
              </span>
            </div>
            <div className="shrink-0 transition-transform duration-300 group-hover:translate-x-2">
              <Image
                src="/arrow.svg"
                alt="Arrow"
                width={80}
                height={80}
                className="w-14 h-14 md:w-20 md:h-20"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
