"use client";

import { motion } from "framer-motion";
import { Story } from "./_components/story";
import Things from "./_components/things";

export default function Mystory() {
    return (
        <>
            <section id="home" className="px-4 flex justify-center relative overflow-hidden md:overflow-visible w-full  bg-[radial-gradient(circle,_var(--color-hero-gradient-start)_0%,_var(--color-hero-gradient-end)_100%)]">
                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="py-50 text-white text-4xl md:text-6xl xl:text-8xl font-serif leading-[1.1] tracking-tight z-20"
                >
                    Meet the designer!!!
                </motion.h1>
            </section>
            < Story />
            <Things />
        </>
    );
}