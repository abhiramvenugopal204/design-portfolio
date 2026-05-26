"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import { PROJECTS } from "./data";

export default function Projects() {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 15vh", "end 15vh"]
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        let newIndex = Math.floor(latest * PROJECTS.length);
        if (newIndex < 0) newIndex = 0;
        if (newIndex >= PROJECTS.length) newIndex = PROJECTS.length - 1;

        if (newIndex !== activeIndex) {
            setActiveIndex(newIndex);
        }
    });

    return (
        <div className="pt-32 px-4">
            <div className="text-center flex items-center flex-col gap-6 py-20">
                <h1 className="text-6xl md:text-7xl xl:text-8xl font-serif leading-tight">
                    <span className="relative">
                        P
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{
                                duration: 1,
                                ease: "easeOut"
                            }}
                            className="absolute -top-10 md:-top-12 xl:-top-16 -left-5 md:-left-6 xl:-left-8 w-full h-full"
                        >
                            <Image
                                src='/f1.svg'
                                width={100}
                                height={100}
                                alt="flower"
                                className="w-full h-full object-contain"
                            />
                        </motion.div>
                    </span>
                    rojects I {" "}
                    <span className="relative">
                        W
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.2,
                                ease: "easeOut"
                            }}
                            className="hidden md:block absolute -top-8 xl:-top-12 -right-8.5 xl:-right-12 w-full h-full"
                        >
                            <Image
                                src='/f2.svg'
                                width={100}
                                height={100}
                                alt="flower"
                                className="w-full h-full object-contain"
                            />
                        </motion.div>
                    </span>
                    orked O
                    <span className="relative">
                        n
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.4,
                                ease: "easeOut"
                            }}
                            className="absolute -top-6 xl:-top-8 -right-4 xl:-right-6 w-full h-full"
                        >
                            <Image
                                src='/f3.svg'
                                width={100}
                                height={100}
                                alt="flower"
                                className="w-full h-full object-contain"
                            />
                        </motion.div>
                    </span>
                </h1>
                <p className="text-brand-yellow font-semibold md:text-xl">
                    Each one tells a chapter of my journey
                </p>
            </div>

            {/* The ref is placed on this relative container */}
            <div ref={containerRef} className="px-4 my-20 relative flex flex-col lg:flex-row justify-between lg:gap-12 max-w-[1400px] mx-auto items-start">

                {/* LEFT SIDE: Sticky Nav List */}
                <div className="hidden lg:flex w-[250px] xl:w-[300px] flex-col sticky top-[20vh] h-fit gap-y-4 z-10 shrink-0">
                    {PROJECTS.map((project, index) => (
                        <button
                            key={project.id}
                            onClick={() => {
                                const container = containerRef.current;
                                if (container) {
                                    const rect = container.getBoundingClientRect();
                                    const scrollY = window.scrollY + rect.top;
                                    const itemHeight = rect.height / PROJECTS.length;
                                    window.scrollTo({ top: scrollY + (itemHeight * index) + 5, behavior: 'smooth' });
                                }
                            }}
                            className={`group flex items-start gap-4 text-left transition-all duration-300 cursor-pointer ${activeIndex === index
                                ? "scale-105 opacity-100"
                                : "opacity-40 hover:opacity-70 hover:translate-x-2"
                                }`}
                        >
                            <span className="text-xs md:text-sm font-medium italic mt-1">{project.id}</span>
                            <h3 className={`text-xl md:text-2xl font-bold font-sans italic leading-tight ${activeIndex === index ? "text-black" : "text-gray-500"
                                }`}>
                                {project.name}
                            </h3>
                        </button>
                    ))}

                    {/* Active Project Tags */}
                    {PROJECTS[activeIndex] && (
                        <div className="mt-12 flex gap-3 w-max">
                            {PROJECTS[activeIndex].tags.map(tag => (
                                <span
                                    key={tag}
                                    className="px-4 py-2 border border-gray-200 rounded-xl text-[15px] bg-white text-black font-serif italic shadow-[0_2px_8px_rgba(0,0,0,0.08)] shrink-0 whitespace-nowrap"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                {/* MIDDLE: Stacked Image Cards */}
                <div className="flex-1 w-full max-w-[600px] mx-auto flex flex-col pb-32">
                    {PROJECTS.map((project, index) => (
                        <div
                            key={project.id}
                            className="sticky w-full bg-transparent flex flex-col lg:h-[70vh] min-h-[500px] overflow-hidden"
                            style={{
                                top: '15vh'
                            }}
                        >
                            {/* Card Content Wrapper */}
                            <div className={`flex-1 flex flex-col w-full h-full transition-opacity duration-500 ${activeIndex === index ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                                {/* Card Image */}
                                <div className="flex-1 w-full relative flex items-center justify-center p-8 lg:p-12">
                                    <div className="relative w-full h-full max-w-[500px] flex items-center justify-center">
                                        <Image
                                            src={project.image}
                                            alt={project.name}
                                            width={600}
                                            height={600}
                                            className="w-full h-[90%] object-contain"
                                        />
                                    </div>
                                </div>

                                {/* MOBILE ONLY INFO (Hidden on Desktop) */}
                                <div className="lg:hidden p-8 flex flex-col items-center text-center">
                                    <Link
                                        href={`/projects/${project.slug}`}
                                        className="mb-8 relative group shrink-0"
                                    >
                                        <Image
                                            src="/viewAll2.svg"
                                            alt="Visit Site"
                                            width={100}
                                            height={100}
                                            className="w-24 h-24 transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </Link>
                                    <p className="text-xl font-sans italic text-gray-800">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* RIGHT SIDE: Sticky Info & Button for Desktop */}
                <div className="hidden lg:flex w-[250px] xl:w-[300px] flex-col sticky top-[20vh] h-fit z-10 shrink-0 items-end mt-12">
                    {PROJECTS[activeIndex] && (
                        <motion.div
                            key={PROJECTS[activeIndex].id}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col items-end w-full text-right"
                        >
                            <Link
                                href={`/projects/${PROJECTS[activeIndex].slug}`}
                                className="mb-16 relative group shrink-0"
                            >
                                <Image
                                    src="/viewAll2.svg"
                                    alt="Visit Site"
                                    width={120}
                                    height={120}
                                    className="w-28 h-28 xl:w-32 xl:h-32 transition-transform duration-300 group-hover:scale-110"
                                />
                            </Link>

                            <p className="text-xl xl:text-[22px] font-sans italic leading-relaxed text-gray-800">
                                {PROJECTS[activeIndex].description}
                            </p>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}