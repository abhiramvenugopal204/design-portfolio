"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useParams } from "next/navigation";

import { PROJECTS } from "../data";

export default function ProjectPage() {
    const params = useParams();
    const slug = params?.slug as string;
    const project = PROJECTS.find(p => p.slug === slug) || PROJECTS[0];

    if (!project) return <div>Project not found</div>;

    return (
        <main className="min-h-screen bg-white selection:bg-brand-yellow/30">
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative w-full h-screen flex flex-col items-center justify-center px-4 md:px-12 overflow-hidden"
                style={{ backgroundColor: project.heroBg }}
            >
                <div className="max-w-4xl text-center mb-16">
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-2xl lg:text-3xl font-sans italic leading-relaxed text-black/80"
                    >
                        {project.subtitle}
                    </motion.p>
                </div>

                <div className="absolute left-0 bottom-0 w-full z-10 overflow-hidden whitespace-nowrap">
                    <motion.div
                        animate={{
                            x: [0, "-50%"]
                        }}
                        transition={{
                            duration: 20,
                            ease: "linear",
                            repeat: Infinity
                        }}
                        className="flex items-center gap-12 md:gap-24 w-fit"
                    >
                        {/* Loop through all projects in the marquee */}
                        {PROJECTS.map((p) => (
                            <div key={p.slug} className="flex items-center gap-12 md:gap-24 flex-shrink-0 px-6">
                                <h1 className="text-[12vw] md:text-[8rem] lg:text-[10rem] font-sans font-black leading-none tracking-tight">
                                    {p.title.split(" —— ")[0]}
                                </h1>

                                <div className="flex-shrink-0">
                                    <Image
                                        src="/blast.svg"
                                        alt="sparkle"
                                        width={120}
                                        height={120}
                                        className="w-16 h-16 md:w-32 md:h-32 invert grayscale brightness-0"
                                    />
                                </div>

                                <h2 className="text-[10vw] md:text-[7rem] lg:text-[8.5rem] leading-none tracking-tight text-black/95">
                                    {p.title.split(" —— ")[1]}
                                </h2>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>
        </main>
    );
}