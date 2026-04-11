"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Position for the eraser mask
    // We update these relative to the container
    const maskX = useMotionValue(0);
    const maskY = useMotionValue(0);

    // Initial position for the drag card
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        // Default position for the card
        maskX.set(window.innerWidth * 0.8);
        maskY.set(window.innerHeight * 0.3);
    }, [maskX, maskY]);

    const handleDrag = (event: any, info: any) => {
        maskX.set(info.point.x);
        maskY.set(info.point.y);
    };

    // Smoothly update the mask position
    const maskImage = useTransform(
        [maskX, maskY],
        ([x, y]) => `radial-gradient(circle 120px at ${x}px ${y}px, transparent 0%, black 100%)`
    );

    if (!isMounted) return <div className="min-h-screen bg-brand-yellow" />;

    return (
        <main 
            ref={containerRef}
            className="relative min-h-screen w-full bg-brand-yellow overflow-hidden flex flex-col"
        >
            {/* 1. Base Background (Yellow) */}
            <div className="absolute inset-0 z-0">
                <Image 
                    src="/yellowBg.svg" 
                    alt="background" 
                    fill 
                    className="object-cover opacity-50"
                />
            </div>

            {/* 2. Content Layer (Always visible) */}
            <div className="relative z-10 flex flex-col items-start p-10 md:p-20 pointer-events-none">
                <motion.h1 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-2xl md:text-3xl font-sans italic font-bold mb-8 text-black/90 pointer-events-auto"
                >
                    You can reach out to me via
                </motion.h1>

                <div className="flex gap-6 pointer-events-auto">
                    {/* Gmail Card */}
                    <Link 
                        href="mailto:hello@abhishekdesign.com"
                        className="bg-white p-4 rounded-xl shadow-lg hover:scale-105 transition-transform group"
                    >
                        <Image src="/mailIcon.svg" alt="Gmail" width={48} height={48} className="w-10 h-10 md:w-12 md:h-12" />
                    </Link>

                    {/* LinkedIn Card */}
                    <Link 
                        href="https://linkedin.com"
                        target="_blank"
                        className="bg-white p-4 rounded-xl shadow-lg hover:scale-105 transition-transform group"
                    >
                        <Image src="/linkIcon.svg" alt="LinkedIn" width={48} height={48} className="w-10 h-10 md:w-12 md:h-12" />
                    </Link>
                </div>
            </div>

            {/* 3. Illustration (Anchored at bottom) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl z-10 px-4 pointer-events-none">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 2 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <Image 
                        src="/deskJob.svg" 
                        alt="Work" 
                        width={1200} 
                        height={800} 
                        className="w-full h-auto object-contain"
                    />
                </motion.div>
            </div>

            {/* 4. Noise Layer (Masked by eraser) */}
            <motion.div 
                className="absolute inset-0 z-20 pointer-events-none mix-blend-multiply opacity-40 bg-zinc-600"
                style={{ 
                    maskImage,
                    WebkitMaskImage: maskImage,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />

            {/* 5. Draggable Eraser Card */}
            <motion.div
                drag
                dragConstraints={containerRef}
                onDrag={handleDrag}
                whileDrag={{ scale: 0.95, cursor: "grabbing" }}
                animate={{ 
                    y: [0, -10, 0],
                }}
                transition={{ 
                    y: { 
                        repeat: Infinity, 
                        duration: 3, 
                        ease: "easeInOut" 
                    } 
                }}
                style={{ x: maskX, y: maskY, left: -80, top: -40 }} // Center on 10rem (160px) width and 5rem (80px) approx height
                className="absolute z-30 cursor-grab"
            >
                <div className="relative group">
                    <Image 
                        src="/drag.svg" 
                        alt="Drag me" 
                        width={140} 
                        height={80} 
                        className="w-32 md:w-40 h-auto drop-shadow-xl group-hover:scale-110 transition-transform"
                    />
                    {/* Shadow effect */}
                    <div className="absolute inset-0 bg-black/10 blur-xl -z-10 translate-y-2 scale-90" />
                </div>
            </motion.div>

            {/* 6. Hand asset for extra polish if needed */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute top-1/4 right-1/4 z-0 pointer-events-none opacity-20"
            >
                <Image src="/wind.svg" alt="wind" width={200} height={200} />
            </motion.div>

        </main>
    );
}