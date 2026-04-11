"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  // Parallax transforms for various layers
  const cloud1X = useTransform(mouseXSpring, [-500, 500], [-30, 30]);
  const cloud1Y = useTransform(mouseYSpring, [-500, 500], [-20, 20]);

  const cloud2X = useTransform(mouseXSpring, [-500, 500], [20, -20]);
  const cloud2Y = useTransform(mouseYSpring, [-500, 500], [15, -15]);

  const wind1X = useTransform(mouseXSpring, [-500, 500], [-50, 50]);
  const wind2X = useTransform(mouseXSpring, [-500, 500], [40, -40]);

  const blastX = useTransform(mouseXSpring, [-500, 500], [10, -10]);
  const blastY = useTransform(mouseYSpring, [-500, 500], [10, -10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = clientX - window.innerWidth / 2;
      const y = clientY - window.innerHeight / 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="home" className="relative overflow-hidden md:overflow-visible w-full min-h-screen bg-[radial-gradient(circle,_var(--color-hero-gradient-start)_0%,_var(--color-hero-gradient-end)_100%)]">
      {/* Background Clouds */}
      <motion.div
        style={{ x: cloud1X, y: cloud1Y }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute w-[15rem] xl:w-full bottom-10 md:bottom-30 xl:bottom-40 left-0 select-none pointer-events-none"
      >
        <Image src="/cloud1.svg" alt="Cloud" width={300} height={90} className="animate-pulse" />
      </motion.div>

      <motion.div
        style={{ x: cloud2X, y: cloud2Y }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute bottom-1/4 right-0 select-none pointer-events-none"
      >
        <Image src="/cloud2.svg" alt="Cloud" width={250} height={90} className="animate-pulse" />
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-32 left-4 md:top-28 md:left-16 text-white text-5xl md:text-6xl xl:text-8xl font-serif leading-[1.1] tracking-tight z-20"
      >
        A space for things,<br />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          I&apos;ve been building
        </motion.span>
      </motion.h1>

      {/* Wind/Rain Elements */}
      <motion.div
        style={{ x: wind1X }}
        className="absolute top-1/2 left-[40%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      >
        <Image src="/wind.svg" alt="Wind" width={120} height={50} />
      </motion.div>
      <motion.div
        style={{ x: wind2X }}
        className="absolute top-[65%] left-[15%] md:left-[25%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      >
        <Image src="/wind.svg" alt="Wind" width={70} height={50} />
      </motion.div>
      <motion.div
        style={{ x: wind1X }}
        className="absolute top-[45%] right-[30%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      >
        <Image src="/wind.svg" alt="Wind" width={60} height={50} />
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute hidden md:flex bottom-15 left-16 items-center gap-6 z-20"
      >
        {[
          { src: "/linkIcon.svg", alt: "Link" },
          { src: "/mailIcon.svg", alt: "Mail" },
          { src: "/instaIcon.svg", alt: "Instagram" }
        ].map((icon, i) => (
          <Link key={i} href="#" className="flex items-center justify-center transition-transform hover:-rotate-12 hover:scale-125 duration-300">
            <Image src={icon.src} alt={icon.alt} width={30} height={30} />
          </Link>
        ))}
        <Image src="/Vector.svg" alt="Arrow" width={40} height={40} className="animate-bounce" />
      </motion.div>

      {/* Blast Illustration */}
      <div
        className="absolute top-[35%] md:top-[15%] xl:top-30 w-fit -right-10 md:right-10 z-0"
      >
        <Image src="/blast.svg" alt="Blast" width={230} height={230} />
      </div>

      {/* Character Section (Photo & Hand) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute z-0 -bottom-25 lg:-bottom-[60%] -right-30 md:right-10 w-[30rem] md:w-fit"
      >
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 md:top-1/4 -left-10 md:-left-[25%] z-0 w-[4rem] md:w-[6rem] xl:w-full"
        >
          <Image src="/hand.svg" alt="Hand" width={130} height={130} />
        </motion.div>

        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.2 }}
          className="z-1 absolute -top-8 md:-top-10 right-[30%] md:right-[20%] md:text-brand-yellow text-4xl font-serif -rotate-10 leading-[1.1] tracking-tight"
        >
          <span className="md:hidden">Me</span>
          <span className="hidden md:inline">That&apos;s Me</span>
        </motion.h1>

        <motion.div
          className="md:w-[40rem] lg:w-[30rem] xl:w-full"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
        >
          <Image src="/Frame 1.svg" alt="Team Photo" width={650} height={600} priority />
        </motion.div>
      </motion.div>
    </section>
  );
}
