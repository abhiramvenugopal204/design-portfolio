"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeadPop() {
    return (
        <div className="relative h-fit w-full overflow-hidden">
            <Image
                src="/cta.svg"
                alt="cta"
                width={180}
                height={180}
                className="w-full h-full object-cover"
            />
            <motion.div
                initial={{ y: 200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
                className="absolute left-1/2 -bottom-6 sm:-bottom-10 md:-bottom-20 lg:-bottom-32 -translate-x-1/2 z-10"
            >
                <Image
                    src="/head.svg"
                    alt="Avatar Head"
                    width={300}
                    height={300}
                    className="w-32 sm:w-40 md:w-60 lg:w-fit h-fit"
                />
            </motion.div>
        </div>
    )
}