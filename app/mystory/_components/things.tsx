"use client"

import Image from "next/image"
import f1 from "../../../public/mystory/f1.svg"
import f2 from "../../../public/mystory/f2.svg"
import f3 from "../../../public/mystory/f3.svg"
import f4 from "../../../public/mystory/f4.svg"
import f5 from "../../../public/mystory/f5.svg"
import f6 from "../../../public/mystory/f6.svg"
import f7 from "../../../public/mystory/f7.svg"
import f8 from "../../../public/mystory/f8.svg"
import frame from "../../../public/mystory/frame.svg"
import log1 from "../../../public/mystory/log1.svg"
import log2 from "../../../public/mystory/log2.svg"
import m1 from "../../../public/mystory/m1.svg"
import m2 from "../../../public/mystory/m2.svg"
import m3 from "../../../public/mystory/m3.svg"
import m4 from "../../../public/mystory/m4.svg"
import m5 from "../../../public/mystory/m5.svg"
import m6 from "../../../public/mystory/m6.svg"
import m7 from "../../../public/mystory/m7.svg"
import m8 from "../../../public/mystory/m8.svg"
import m9 from "../../../public/mystory/m9.svg"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export default function Things() {
    const email = "abhiramvenugopal204@gmail.com";

    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const [dragWidth, setDragWidth] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const personalImages = [m1, m2, m3, m4, m5, m6, m7, m8, m9];

    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                setDragWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
            }
        };

        // Use a small timeout to ensure DOM has rendered
        const timer = setTimeout(updateWidth, 100);

        window.addEventListener('resize', updateWidth);
        return () => {
            window.removeEventListener('resize', updateWidth);
            clearTimeout(timer);
        }
    }, [personalImages.length]);

    const images = [
        { src: f1, rotate: "-10deg", scale: "1.1" },
        { src: f2, rotate: "5deg", scale: "0.9" },
        { src: f3, rotate: "-4deg", scale: "1.0" },
        { src: f4, rotate: "-12deg", scale: "1.2" },
        { src: f5, rotate: "5deg", scale: "1.0" },
    ];

    const proStuff = [
        {
            img: log1,
            title: "Product Design Lead",
            desc: "simplita ai",
            timeline: "April 2025 -Feb 2026",
        },
        {
            img: log2,
            title: "Design Consultant (Product & Digital Experiences)",
            desc: "Across Early-Stage & Product Teams",
            timeline: "Feb 2026 - Present",
        },
    ]

    const box1 = [
        {
            img: '/mystory/checked.svg',
            content: "Creating design content for instagram (Personal Branding)"
        },
        {
            img: '/mystory/checkbox.svg',
            content: "Finish Atomic Habits ( currently on page 53)"
        },
        {
            img: '/mystory/checkbox.svg',
            content: "Unlearn and relearn the product aspects for design"
        },
        {
            img: '/mystory/checkbox.svg',
            content: "Infuse AI into the workflow"
        }
    ]

    const box2 = [
        {
            img: '/mystory/checked.svg',
            content: "Complete the portfolio"
        },
        {
            img: '/mystory/checkbox.svg',
            content: "Breakdown, learn and apply patterns from Material Design, Human Interface Guidelines, Polaris, and Atlassian Design System in my daily design workflow."
        },
        {
            img: '/mystory/checked.svg',
            content: "Find a hobby (I’m really into tennis now)"
        },
        {
            img: '/mystory/checked.svg',
            content: "Rewatch Forrest Gump"
        }
    ]

    return (
        <>
            {/* section-1: Things that shape how I see the world */}
            <div className="relative -top-28 lg:-top-12 flex flex-col py-10 overflow-hidden w-full">
                <h1 className="px-4 text-xl lg:text-2xl font-semibold z-10">
                    Things that shape how I see the world
                </h1>

                <motion.div
                    animate={{ y: [0, -15, 0], rotate: [-12, -10, -12] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="z-20 absolute top-[22%] md:top-auto md:bottom-[5%] left-[5%] pointer-events-none"
                >
                    <Image src={f6} alt="f6" width={150} height={150} className="w-fit h-14 md:h-auto" />
                </motion.div>
                <motion.div
                    animate={{ y: [0, 10, 0], rotate: [15, 18, 15] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="z-20 absolute top-[40%] md:top-[15%] left-[25%] pointer-events-none"
                >
                    <Image src={f7} alt="f7" width={180} height={180} className="w-fit h-auto" />
                </motion.div>
                <motion.div
                    animate={{ y: [0, -12, 0], rotate: [2, 0, 2] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                    className="z-20 absolute bottom-[2%] lg:bottom-[10%] left-[10%] md:left-auto md:right-[30%] pointer-events-none"
                >
                    <Image src={f8} alt="f8" width={160} height={160} className="w-fit h-14 md:h-auto" />
                </motion.div>

                <div className="py-10 md:py-0 w-full bg-brand-yellow md:bg-transparent flex flex-wrap lg:flex-nowrap justify-center items-center px-4 md:px-10 mt-10 relative z-10">
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8, rotate: img.rotate }}
                            whileInView={{ opacity: 1, scale: 1, rotate: img.rotate }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="transition-all duration-300 hover:scale-110 hover:z-20"
                        >
                            <Image
                                src={img.src}
                                alt={`f${i + 1}`}
                                width={250}
                                height={250}
                                className="w-fit h-auto drop-shadow-md rounded-lg"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* section-2 */}
            <div className="relative -top-12 md:top-auto py-6 flex flex-col gap-4 px-4 overflow-hidden">
                <h1 className="text-xl lg:text-2xl font-semibold font-['Kalam'] z-10">
                    here’s some Professional stuff
                </h1>

                {
                    proStuff.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            className="relative w-full h-fit md:h-[10rem] flex flex-col md:flex-row justify-start items-center"
                        >
                            {/* Top Edge */}
                            <div className="absolute -top-0.5 left-0 w-full h-2 overflow-hidden z-30">
                                <Image src="/mystory/lineLong.svg" alt="line" fill className="object-contain" />
                            </div>
                            {/* Bottom Edge */}
                            <div className="absolute -bottom-0.5 left-0 w-full h-2 overflow-hidden z-30">
                                <Image src="/mystory/lineLong.svg" alt="line" fill className="object-contain" />
                            </div>
                            {/* Left Edge */}
                            <div className="absolute top-0 left-0 w-1 h-full overflow-hidden z-30">
                                <Image src="/mystory/line.svg" alt="line" fill className="object-cover" />
                            </div>
                            {/* Right Edge */}
                            <div className="absolute top-0 right-0 w-1 h-full overflow-hidden z-30">
                                <Image src="/mystory/line.svg" alt="line" fill className="object-cover" />
                            </div>

                            <div className="p-4 relative bg-white h-full w-full md:w-[25%]">
                                <Image
                                    src={frame}
                                    alt="frame"
                                    width={80}
                                    height={80}
                                    className="w-full h-full object-contain"
                                />
                                <Image
                                    src={item.img}
                                    alt="frame"
                                    width={80}
                                    height={80}
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-fit h-fit object-contain"
                                />
                            </div>
                            <div className="relative bg-brand-yellow w-full h-full p-6 flex flex-col justify-center">
                                <div className="absolute top-0 left-0 w-1 h-full overflow-hidden z-30">
                                    <Image src="/mystory/line.svg" alt="line" fill className="object-cover" />
                                </div>
                                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2">
                                    <h2 className="font-semibold text-2xl xl:text-3xl">{item.title}</h2>
                                    {item.timeline && (
                                        <span className="font-normal text-[24px] shrink-0" style={{ fontFamily: 'var(--font-kalam)' }}>
                                            {item.timeline}
                                        </span>
                                    )}
                                </div>
                                <p className="text-lg">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))
                }
            </div>

            {/* section-3 */}
            <div className="relative -top-12 md:top-0 mt-10 flex flex-col gap-6 overflow-hidden">
                <h1 className="px-4 text-xl lg:text-2xl font-semibold font-['Kalam'] z-10">
                    Now here’s some personal stuff
                </h1>

                <div ref={containerRef} className="relative w-full overflow-hidden">
                    <motion.div
                        ref={scrollRef}
                        drag="x"
                        dragConstraints={{ left: -dragWidth, right: 0 }}
                        className="relative w-full h-fit flex items-center flex-nowrap no-scrollbar px-4 md:px-10 pb-10 mt-4 cursor-grab active:cursor-grabbing"
                    >
                        {
                            personalImages.map((item, i) => (
                                <motion.div
                                    key={i}
                                    onClick={() => setSelectedImage(i)}
                                    className="relative flex-shrink-0 h-[18rem] w-[200px] md:w-[300px] lg:w-[350px] -ml-16 md:-ml-20 lg:-ml-42 first:-ml-10 transition-all duration-300 hover:scale-110 hover:z-50 hover:-translate-y-2 cursor-pointer"
                                >
                                    <Image
                                        src={item}
                                        alt={`personal-${i + 1}`}
                                        width={350}
                                        height={350}
                                        className="w-full h-full object-contain drop-shadow-xl pointer-events-none"
                                    />
                                </motion.div>
                            ))
                        }
                    </motion.div>
                </div>
            </div>

            {/* Lightbox Gallery */}
            <AnimatePresence>
                {selectedImage !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center p-4 md:p-10"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="relative w-full max-w-4xl h-[70vh] flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={personalImages[selectedImage]}
                                alt="Gallery view"
                                fill
                                className="object-contain"
                            />

                            {/* Navigation Buttons */}
                            <button
                                className="absolute left-0 md:-left-16 text-white text-4xl p-4 hover:scale-125 transition-transform"
                                onClick={() => setSelectedImage((selectedImage - 1 + personalImages.length) % personalImages.length)}
                            >
                                ←
                            </button>
                            <button
                                className="absolute right-0 md:-right-16 text-white text-4xl p-4 hover:scale-125 transition-transform"
                                onClick={() => setSelectedImage((selectedImage + 1) % personalImages.length)}
                            >
                                →
                            </button>
                        </motion.div>

                        <button
                            className="mt-8 absolute top-4 right-6 lg:right-16 text-white text-xl bg-white/10 px-6 py-2 rounded-full hover:bg-white/20 transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            Close
                        </button>

                        <div className="absolute bottom-10 flex gap-2 overflow-x-auto max-w-full px-4 no-scrollbar">
                            {personalImages.map((img, idx) => (
                                <div
                                    key={idx}
                                    className={`w-12 h-12 relative flex-shrink-0 cursor-pointer border-2 transition-all ${selectedImage === idx ? 'border-brand-yellow scale-110' : 'border-transparent'}`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedImage(idx);
                                    }}
                                >
                                    <Image src={img} alt="thumbnail" fill className="object-cover" />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* section-4 */}
            <div className="relative -top-10 md:top-0 mt-10 overflow-hidden">
                <h1 className="px-4 text-xl lg:text-2xl font-semibold z-10 pb-6">
                    What i’m exploring this month
                </h1>

                <div className="flex flex-col md:flex-row gap-6 items-stretch px-4">
                    {[box1, box2].map((box, idx) => (
                        <div key={idx} className="relative w-full p-4 flex flex-col bg-white shadow-lg shadow-gray-200">
                            {/* Top Edge */}
                            <div className="absolute -top-0.5 left-0 w-full h-1 overflow-hidden z-30">
                                <Image src="/mystory/lineLong.svg" alt="line" fill className="object-cover" />
                            </div>
                            {/* Bottom Edge */}
                            <div className="absolute -bottom-0.5 left-0 w-full h-1 overflow-hidden z-30">
                                <Image src="/mystory/lineLong.svg" alt="line" fill className="object-cover" />
                            </div>
                            {/* Left Edge */}
                            <div className="absolute top-0 left-0 w-1 h-full overflow-hidden z-30">
                                <Image src="/mystory/line.svg" alt="line" fill className="object-cover" />
                            </div>
                            {/* Right Edge */}
                            <div className="absolute top-0 right-0 w-1 h-full overflow-hidden z-30">
                                <Image src="/mystory/line.svg" alt="line" fill className="object-cover" />
                            </div>

                            <div className="border border-gray-600 rounded-lg p-4 flex flex-col justify-center gap-4 flex-grow bg-white/50 backdrop-blur-sm">
                                {box.map((item, i) => {
                                    const isChecked = item.img.includes('checked');
                                    return (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: i * 0.1 }}
                                            className="flex items-center gap-2 font-semibold text-sm md:text-base leading-tight"
                                        >
                                            <div className="flex-shrink-0 w-8 flex justify-center mt-0.5">
                                                <Image
                                                    src={item.img}
                                                    alt={isChecked ? 'checked' : 'checkbox'}
                                                    height={isChecked ? 40 : 20}
                                                    width={isChecked ? 40 : 20}
                                                    className={`object-contain relative ${isChecked ? 'left-0' : '-left-2'}`}
                                                />
                                            </div>
                                            <span className="pt-1.5">{item.content}</span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* section-5 */}
            <div className="relative p-4 mx-4 mt-0 md:mt-14 mb-8 bg-white shadow-lg shadow-gray-200 overflow-hidden">
                {/* Top Edge */}
                <div className="absolute -top-0.5 left-0 w-full h-1 overflow-hidden z-30">
                    <Image src="/mystory/lineLong.svg" alt="line" fill className="object-cover" />
                </div>
                {/* Bottom Edge */}
                <div className="absolute -bottom-0.5 left-0 w-full h-1 overflow-hidden z-30">
                    <Image src="/mystory/lineLong.svg" alt="line" fill className="object-cover" />
                </div>
                {/* Left Edge */}
                <div className="absolute top-0 left-0 w-1 h-full overflow-hidden z-30">
                    <Image src="/mystory/line.svg" alt="line" fill className="object-cover" />
                </div>
                {/* Right Edge */}
                <div className="absolute top-0 right-0 w-1 h-full overflow-hidden z-30">
                    <Image src="/mystory/line.svg" alt="line" fill className="object-cover" />
                </div>

                <div className="relative bg-brand-yellow rounded-2xl lg:rounded-4xl border p-4 text-center flex flex-col gap-2">
                    <div className="z-30 absolute -top-8 right-1/4 translate-x-1/4 w-fit h-30">
                        <Image
                            src="/mystory/cat.svg"
                            alt="cat"
                            height={50}
                            width={50}
                            className="object-contain w-full h-full"
                        />
                    </div>
                    <p className="z-30 text-lg lg:text-xl font-semibold leading-relaxed">
                        Well that’s some part of the stories! <br />
                        Let’s work on some interesting perspectives <br />
                        You can find me at <Link href={`mailto:${email}`} className="underline">{email}</Link>
                    </p>
                </div>
            </div>
        </>
    )
}
