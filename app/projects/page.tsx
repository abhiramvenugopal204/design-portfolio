"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { PROJECTS } from "./data";

export default function Projects() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const activeProject = PROJECTS[selectedIndex];

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

            <div className="px-4 my-12 flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between lg:min-h-screen">
                <div className="flex flex-col flex-1 h-fit lg:justify-between gap-y-3">
                    {PROJECTS.map((project, index) => (
                        <button
                            key={project.id}
                            onClick={() => setSelectedIndex(index)}
                            className={`group flex items-start gap-4 text-left transition-all duration-300 cursor-pointer ${selectedIndex === index
                                ? "scale-105 opacity-100"
                                : "opacity-40 hover:opacity-70 hover:translate-x-2"
                                }`}
                        >
                            <span className="text-xs md:text-sm font-medium italic mt-1">{project.id}</span>
                            <h3 className={`text-xl md:text-2xl font-bold font-sans italic leading-tight ${selectedIndex === index ? "text-black" : "text-gray-500"
                                }`}>
                                {project.name}
                            </h3>
                        </button>
                    ))}

                    {/* Tags at the bottom of sidebar on desktop */}
                    <div className="hidden lg:flex flex-wrap gap-3 mt-16">
                        {activeProject.tags.map(tag => (
                            <span
                                key={tag}
                                className="px-5 py-2 border border-black/20 rounded-xl text-sm font-medium italic bg-white/50 shadow-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="hidden flex-1 xl:block w-full h-fit max-w-lg flex items-center justify-center">
                    <Image
                        src={activeProject.image}
                        alt={activeProject.name}
                        width={600}
                        height={600}
                        className="w-full h-auto drop-shadow-2xl animate-in zoom-in-95 duration-500"
                    />
                </div>

                <div className="flex flex-1 flex-col gap-8 h-fit text-right items-end justify-between">
                    <Link
                        href={`/projects/${activeProject.slug}`}
                        className="relative z-10 w-fit group"
                    >
                        <Image
                            src="/viewAll2.svg"
                            alt="Visit Site"
                            width={120}
                            height={120}
                            className="w-auto h-auto transition-transform group-hover:scale-110"
                        />
                    </Link>

                    <p className="mt-2 lg:mt-30 text-xl md:text-2xl font-sans italic leading-relaxed text-gray-800 lg:max-w-md animate-in fade-in slide-in-from-right-4 duration-500">
                        {activeProject.description}
                    </p>

                    {/* Tags for mobile view */}
                    <div className="flex lg:hidden flex-wrap justify-center gap-3 mt-4">
                        {activeProject.tags.map(tag => (
                            <span
                                key={tag}
                                className="px-4 py-1.5 border border-black/20 rounded-lg text-sm font-medium italic"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
