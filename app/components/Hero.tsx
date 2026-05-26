"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import styles from "./Hero.module.css";

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
    <section id="home" className={styles.hero}>
      {/* Background Clouds */}
      <motion.div
        style={{ x: cloud1X, y: cloud1Y }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className={styles.cloud1}
      >
        <Image src="/cloud1.svg" alt="Cloud" width={300} height={90} className={`w-full h-fit ${styles.animatePulse}`} />
      </motion.div>

      <motion.div
        style={{ x: cloud2X, y: cloud2Y }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className={styles.cloud2}
      >
        <Image src="/cloud2.svg" alt="Cloud" width={250} height={90} className={`w-full h-fit ${styles.animatePulse}`} />
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={styles.mainHeading}
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
        className={styles.wind1}
      >
        <Image src="/wind.svg" alt="Wind" width={120} height={50} />
      </motion.div>
      <motion.div
        style={{ x: wind2X }}
        className={styles.wind2}
      >
        <Image src="/wind.svg" alt="Wind" width={70} height={50} />
      </motion.div>
      <motion.div
        style={{ x: wind1X }}
        className={styles.wind3}
      >
        <Image src="/wind.svg" alt="Wind" width={60} height={50} />
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className={styles.socialLinks}
      >
        {[
          { src: "/linkIcon.svg", alt: "LinkedIn", href: "https://www.linkedin.com/in/abhiramvgp/" },
          { src: "/mailIcon.svg", alt: "Mail", href: "mailto:abhiramvenugopal204@gmail.com" },
          { src: "/dribbleIcon.svg", alt: "Instagram", href: "https://dribbble.com/abhiramvgp" }
        ].map((icon, i) => (
          <Link key={i} href={icon.href || "#"} target="_blank" rel="noopener noreferrer" className={styles.socialLinkItem}>
            <Image src={icon.src} alt={icon.alt} width={30} height={30} />
          </Link>
        ))}
        <Image src="/Vector.svg" alt="Arrow" width={40} height={40} className={styles.animateBounce} />
      </motion.div>

      {/* Blast Illustration */}
      <div
        className={styles.blastContainer}
      >
        <Image src="/blast.svg" alt="Blast" width={230} height={230} className="w-full h-fit"/>
      </div>

      {/* Character Section (Photo & Hand) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className={styles.characterSection}
      >
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className={styles.handContainer}
        >
          <Image src="/hand.svg" alt="Hand" width={130} height={130} />
        </motion.div>

        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.2 }}
          className={styles.meLabel}
        >
          <span className={styles.meLabelMobile}>Me</span>
          <span className={styles.meLabelDesktop}>That&apos;s Me</span>
        </motion.h1>

        <motion.div
          className={styles.photoContainer}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
        >
          <Image src="/Frame 1.svg" alt="Team Photo" width={650} height={600} priority className="w-fit h-fit" />
        </motion.div>
      </motion.div>

      <Image 
        src="/greenLine.svg"
        alt="green Line"
        width={280}
        height={400}
        className="w-full h-fit absolute -bottom-[1px] md:-bottom-2.5 left-0 z-0"
      />
    </section>

  );
}
