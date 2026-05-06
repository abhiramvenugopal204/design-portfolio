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