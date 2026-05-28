"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeadPop() {
    return (
        <div className="overflow-hidden">
            <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: false, amount: 0.1 }}
                className="relative h-fit w-full"
            >
                <Image
                    src="/cta.svg"
                    alt="cta"
                    width={1200}
                    height={400}
                    className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 pb-12 md:pb-20 z-20" style={{ fontFamily: 'var(--font-kalam)' }}>
                    <h2 className="text-white mb-2 md:mb-4 tracking-wide max-w-3xl px-4 leading-normal">
                        <span className="text-[28px] md:text-[45px] font-bold">Let’s work </span>
                        <span className="text-[16px] md:text-[23px] font-bold">on some interesting perspectives</span>
                    </h2>
                    <p className="text-white text-xs md:text-lg lg:text-xl opacity-95">
                        You can find me at{" "}
                        <a href="mailto:abhiramvenugopal204@gmail.com" className="underline hover:text-brand-yellow transition-colors">
                            abhiramvenugopal204@gmail.com
                        </a>
                    </p>
                </div>
                <motion.div
                    variants={{
                        initial: { y: 60, opacity: 0 },
                        animate: { y: 0, opacity: 1 }
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
                    className="absolute left-1/2 -bottom-10 lg:-bottom-30 -translate-x-1/2 z-10"
                >
                    <Image
                        src="/head.svg"
                        alt="Avatar Head"
                        width={300}
                        height={300}
                        className="w-32 md:w-48 lg:w-fit h-fit"
                    />
                </motion.div>
            </motion.div>
        </div>
    )
}