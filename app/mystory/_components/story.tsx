"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import bg from "../../../public/mystory/bg.svg";
import clip from "../../../public/mystory/clip.svg";
import me2 from "../../../public/mystory/me2.svg"
import card from "../../../public/mystory/card.svg"
import q1 from "../../../public/mystory/q1.svg"
import q2 from "../../../public/mystory/q2.svg"
import circle from "../../../public/mystory/circle.svg"
import me from "../../../public/mystory/me.svg"
import ticket from "../../../public/mystory/ticket.svg"
import l1 from "../../../public/mystory/I1.svg"
import l2 from "../../../public/mystory/I2.svg"
import l3 from "../../../public/mystory/I3.svg"
import l4 from "../../../public/mystory/I4.svg"
import c1 from "../../../public/mystory/c1.svg"
import c2 from "../../../public/mystory/c2.svg"
import c11 from "../../../public/mystory/c11.svg"
import c22 from "../../../public/mystory/c22.svg"
import styles from "./story.module.css"

const data = [
    {
        icon: l1,
        chat: c1
    },
    {
        icon: l2,
        chat: c11
    },
    {
        icon: l3,
        chat: c2
    },
    {
        icon: l4,
        chat: c22
    }
]

function StoryIconItem({ item, index, total }: { item: any, index: number, total: number }) {
    const [isHovered, setIsHovered] = useState(false);

    // Refined alignment to prevent overlapping neighbors
    let alignmentClass = "left-1/2 -translate-x-1/2";
    if (index === 0) alignmentClass = "left-0";
    if (index === 1) alignmentClass = "left-3 md:left-[20%]";
    if (index === 2) alignmentClass = "";
    if (index === total - 1) alignmentClass = "-right-8 md:-right-20";

    return (
        <div
            className="relative flex flex-col items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute bottom-full ${alignmentClass} mb-2 z-50 pointer-events-none w-max max-w-[240px] md:max-w-[320px]`}
                    >
                        <div className="relative">
                            <Image
                                src={item.chat}
                                width={380}
                                height={120}
                                alt="chat"
                                className="object-contain drop-shadow-md"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                whileHover={{ scale: 1.08 }}
                className={`${styles.icon} relative flex items-center justify-center cursor-pointer`}
            >
                <Image
                    src={item.icon}
                    width={64}
                    height={64}
                    alt="icon"
                    className="object-contain w-full h-full"
                />
            </motion.div>
        </div>
    );
}

export function Story() {
    return (
        <div className="relative -top-[8rem] w-full px-6">
            <div className="relative flex flex-col lg:flex-row justify-center gap-2">
                <div className={styles.clip}>
                    <Image
                        src={clip}
                        width={64}
                        height={64}
                        alt="Clip"
                        className="object-contain w-[24px] xs:w-[28px] md:w-[40px] lg:w-fit rotate-90 lg:rotate-0"
                    />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="pb-6 md:pb-0 flex items-center w-full relative rounded-b-lg rounded-t-xl xl:rounded-l-2xl xl:rounded-r-lg border border-yellow-400 bg-[#FFFBEB] shadow-[-20px_20px_50px_rgba(0,0,0,0.05)]"
                >
                    <div className="absolute inset-0 overflow-hidden rounded-b-lg rounded-t-xl xl:rounded-l-2xl xl:rounded-r-lg pointer-events-none">
                        <Image
                            src={bg}
                            alt="Story Background"
                            width={100}
                            height={100}
                            className="absolute inset-0 object-cover w-full h-full"
                        />
                    </div>
                    <div className="relative z-20 p-4 flex flex-col items-end gap-4 h-fit">
                        <p className="font-semibold md:text-xl 2xl:text-2xl w-full text-left">Something worth building? I’m in.</p>
                        <div className="w-fit h-fit lg:h-[18rem] xl:h-full">
                            <Image
                                src={me2}
                                width={64}
                                height={64}
                                alt="Story Background"
                                className="object-contain relative -top-4 w-fit h-full -rotate-10"
                            />
                        </div>
                        <p className="text-[#494949] w-full text-left lg:pr-6 leading-relaxed tracking-wide text-md 2xl:text-xl">
                            <span className="text-2xl md:text-3xl xl:text-4xl">hey!!!</span> <br />
                            <span className="text-2xl md:text-3xl xl:text-4xl">I’m Abhiram.</span> I’ve always noticed when things feel off. Why something takes an extra step, or why something simple isn’t. I didn’t have a name for it, I just couldn’t ignore it. That pulled me into designing digital experiences, focusing on structure, flow, and what makes sense. From there, I learned under some amazing people in product, and it led to side gigs, consulting for brands, and eventually becoming a lead product designer. It’s been quite a journey so far, and I’m just getting started. <br /><br />
                            Whether you’re looking to <b className="text-brand-yellow">hire</b>, <b className="text-brand-yellow">network</b>, or just wondering why there’s so much <b className="text-brand-yellow">yellow</b> here, I’m always happy to connect.
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="pt-2 md:pt-0 pb-8 md:pb-0 w-full relative rounded-b-xl rounded-t-lg xl:rounded-r-2xl xl:rounded-l-lg border border-yellow-400 bg-[#FFFBEB] shadow-[20px_20px_50px_rgba(0,0,0,0.05)]"
                >
                    <div className="absolute inset-0 overflow-hidden rounded-b-xl rounded-t-lg xl:rounded-r-2xl xl:rounded-l-lg pointer-events-none">
                        <Image
                            src={bg}
                            alt="Story Background"
                            width={100}
                            height={100}
                            className="absolute inset-0 object-cover w-full h-full"
                        />
                    </div>
                    <div className="relative z-20 flex gap-8 flex-col justify-center w-full h-full px-4 md:px-6 xl:pl-14 py-6">
                        <div className="flex flex-col lg:flex-row gap-4 item-center justify-center">
                            <Image
                                src={card}
                                alt="card"
                                width={64}
                                height={64}
                                className="flex-1 w-fit h-fit lg:w-1/2"
                            />
                            <div className="relative flex flex justify-center items-center">
                                <Image
                                    src={q1}
                                    width={64}
                                    height={64}
                                    alt="question"
                                    className="absolute -left-4 -top-4 w-8 h-8 xl:w-16 xl:h-16"
                                />
                                <p className="text-center xl:w-[70%] leading-relaxed text-lg xl:text-xl  mx-auto">
                                    From looking through artworks to crafting them, always close to tech, now building with it.
                                    Somewhere in between, I found design. Been all in ever since.
                                </p>
                                <Image
                                    src={q2}
                                    width={64}
                                    height={64}
                                    alt="question"
                                    className="absolute w-10 h-10 xl:w-16 xl:h-16 -bottom-2 -right-2 lg:-right-4"
                                />
                            </div>
                        </div>
                        <div>
                            <p className="w-full text-right leading-relaxed xl:text-3xl text-2xl font-semibold mx-auto">
                                That’s me {" "}
                                <span className="relative">
                                    <Image
                                        src={circle}
                                        width={64}
                                        height={64}
                                        alt="circle"
                                        className="absolute inset-0 z-1 object-contain w-full h-full"
                                    />
                                    IRL
                                </span>
                            </p>
                            <Image
                                src={me}
                                width={100}
                                height={100}
                                alt="me"
                                className="w-full h-fit"
                            />
                        </div>
                        <div
                            className="relative z-30 md:top-6 lg:top-2 flex flex-col lg:flex-row gap-4 md:gap-6 items-center justify-between"
                        >
                            <div className="flex gap-2 md:px-2 justify-between w-full flex-1">
                                {data.map((item, index) => (
                                    <StoryIconItem key={index} index={index} total={data.length} item={item} />
                                ))}
                            </div>

                            <motion.div
                                whileHover={{ rotate: 1, scale: 1.02 }}
                                className="hidden lg:block relative flex-[0.5] h-fit flex items-center justify-center"
                            >
                                <Image
                                    src={ticket}
                                    width={240}
                                    height={120}
                                    alt="ticket"
                                    className="object-contain w-full h-full"
                                />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="block lg:hidden w-[60%] md:w-[40%] mx-auto relative -top-10 flex-[0.5] h-fit flex items-center justify-center pointer-events-none">
                <Image
                    src={ticket}
                    width={240}
                    height={120}
                    alt="ticket"
                    className="object-contain w-full h-full"
                />
            </div>
        </div >
    );
}