"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const WRITINGS = [
  {
    id: "01",
    title: "The 'why' that explain the cycles of a product",
    subtitle: "Real world experience with products and markets",
    date: "May 2026",
    readTime: "5 min read",
    link: "https://medium.com/@abhiramvenugopal204",
  },
  {
    id: "02",
    title: "Intuition and omnipresent behavior, a case study with honest honesty",
    subtitle: "Experience with user behavior and business goals",
    date: "April 2026",
    readTime: "8 min read",
    link: "https://medium.com/@abhiramvenugopal204",
  },
  {
    id: "03",
    title: "User experience over business goals",
    subtitle: "Real world value over raw profits",
    date: "March 2026",
    readTime: "6 min read",
    link: "https://medium.com/@abhiramvenugopal204",
  },
  {
    id: "04",
    title: "Personal branding and frameworks",
    subtitle: "Synthesising my experience",
    date: "February 2026",
    readTime: "4 min read",
    link: "https://medium.com/@abhiramvenugopal204",
  },
];

export default function Writings() {
  return (
    <div className="pt-32 px-4 min-h-screen bg-white">
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
          esigners Note
          <span className="relative">
            e
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
      <div className="max-w-[1000px] mx-auto pb-32 flex flex-col gap-8">
        {WRITINGS.map((writing, idx) => (
          <motion.div
            key={writing.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Link
              href={writing.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-brand-yellow/30 transition-all duration-300 overflow-hidden block"
            >
              {/* Left Edge Hand-drawn line effect on hover */}
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-yellow scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300" />
              
              <div className="flex gap-4 md:gap-6 items-start flex-1">
                <span className="text-sm md:text-base font-medium italic text-brand-yellow font-serif">
                  {writing.id}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl md:text-2xl font-bold font-sans text-gray-900 group-hover:text-brand-yellow transition-colors duration-300">
                    {writing.title}
                  </h3>
                  <p className="text-gray-500 font-medium text-sm md:text-base">
                    {writing.subtitle}
                  </p>
                  <div className="flex gap-4 text-xs font-semibold text-gray-400 mt-2 uppercase tracking-wider">
                    <span>{writing.date}</span>
                    <span>•</span>
                    <span>{writing.readTime}</span>
                  </div>
                </div>
              </div>

              <div className="self-end md:self-center shrink-0">
                <Image
                  src="/arrow.svg"
                  alt="Arrow"
                  width={48}
                  height={48}
                  className="transform group-hover:translate-x-2 transition-transform duration-300"
                />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
