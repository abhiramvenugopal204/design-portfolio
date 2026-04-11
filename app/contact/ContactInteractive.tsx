"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function ContactInteractive() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isMounted, setIsMounted] = useState(false);

    // Coordinate the eraser and card position
    const cardX = useMotionValue(0);
    const cardY = useMotionValue(0);

    useEffect(() => {
        setIsMounted(true);

        // Initial position (center-right)
        cardX.set(window.innerWidth * 0.7);
        cardY.set(window.innerHeight * 0.3);

        const initCanvas = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            
            // Get actual container dimensions
            const rect = canvas.parentElement?.getBoundingClientRect();
            if (!rect) return;

            canvas.width = rect.width;
            canvas.height = rect.height;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            // Fill with high-frequency noise
            const imageData = ctx.createImageData(canvas.width, canvas.height);
            const data = imageData.data;
            for (let i = 0; i < data.length; i += 4) {
                data[i] = 80;     // Lighter R
                data[i + 1] = 80; // Lighter G
                data[i + 2] = 80; // Lighter B
                data[i + 3] = Math.random() * 50; // Much lower opacity range
            }
            ctx.putImageData(imageData, 0, 0);
        };

        const handleResize = () => {
            initCanvas();
        };

        // Small delay to ensure layout is ready
        const timeout = setTimeout(initCanvas, 100);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            clearTimeout(timeout);
        };
    }, [cardX, cardY]);

    // Handle the actual erasing logic on the canvas
    const handleDrag = (event: any, info: any) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const rect = canvas.getBoundingClientRect();
        const x = info.point.x - rect.left;
        const y = info.point.y - rect.top;

        ctx.globalCompositeOperation = "destination-out";
        ctx.beginPath();
        // A nice wide eraser brush
        ctx.arc(x, y, 70, 0, Math.PI * 2);
        ctx.fill();
    };

    if (!isMounted) {
        return <div className="min-h-screen bg-brand-yellow" />;
    }

    return (
        <div ref={containerRef} className="h-screen p-4 pt-30">
            <div className="h-full border border-brand-green rounded-3xl p-5">
                <div className="h-full bg-brand-yellow relative rounded-3xl border border-black overflow-hidden">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl z-10 px-4 pointer-events-none">
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 1 }}
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

                    <div className="relative z-[40] flex flex-col gap-4 items-start p-10 pointer-events-none">
                        <motion.h1
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-2xl md:text-3xl font-bold pointer-events-auto"
                        >
                            You can reach out to me via
                        </motion.h1>

                        <div className="flex items-center gap-6 pointer-events-auto">
                            <Link
                                href="mailto:abhiramvenugopal204@gmail.com"
                                className="hover:scale-105 active:scale-95 transition-all group"
                            >
                                <Image src="/mail1.svg" alt="Gmail" width={48} height={48} className="w-fit h-20" />
                            </Link>

                            <Link
                                href="https://www.linkedin.com"
                                target="_blank"
                                className="hover:scale-105 active:scale-95 transition-all group"
                            >
                                <Image src="/mail2.svg" alt="LinkedIn" width={48} height={48} className="w-fit h-14" />
                            </Link>
                        </div>
                    </div>

                    <canvas
                        ref={canvasRef}
                        className="absolute inset-0 z-20 pointer-events-none mix-blend-multiply opacity-60"
                    />

                    <motion.div
                        drag
                        dragMomentum={false}
                        onDrag={handleDrag}
                        whileDrag={{ scale: 0.85, cursor: "grabbing" }}
                        style={{
                            x: cardX,
                            y: cardY,
                            left: 0,
                            top: 0,
                            translateX: "-50%",
                            translateY: "-50%"
                        }}
                        className="absolute z-[50] cursor-grab p-10"
                    >
                        <div className="relative group pointer-events-auto">
                            <Image
                                src="/drag.svg"
                                alt="Drag me"
                                width={200}
                                height={100}
                                className="w-40 h-auto group-hover:scale-105 transition-transform"
                                draggable={false}
                            />
                            {/* Visual Pulse */}
                            <motion.div
                                animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.4, 0.1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="absolute inset-0 bg-brand-yellow blur-3xl z-50 rounded-full"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
