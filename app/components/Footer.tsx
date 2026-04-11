"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Footer() {
  const pathname = usePathname();

  // Hide footer on contact page
  if (pathname === "/contact") return null;

  return (
    <footer>
      <div className="px-6 sm:px-10 md:px-12 pt-8 md:pt-20 pb-4 md:pb-8 font-bold text-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 items-start">

          <div className="flex flex-col gap-6">
            <p className="">
              Like what you see? <br /> Just drop in a Hello!
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/resume.pdf" className="relative group">
                <p className="flex items-center gap-2 px-6 py-3 md:px-4 md:py-2 text-sm md:text-base">
                  VIEW MY RESUME
                  <Image src="/arrow.svg" alt="Arrow" width={15} height={15} />
                </p>
                <Image
                  src="/active2.svg"
                  alt="Resume"
                  width={300}
                  height={70}
                  className="absolute -left-2 -top-1 w-[calc(100%+16px)] h-[calc(100%+8px)] object-stretch -z-10"
                />
              </Link>
              <Link href="mailto:hello@abhishekdesign.com" className="flex items-center gap-2 text-sm md:text-base hover:text-brand-yellow transition-colors">
                Drop an email
                <Image src="/arrow.svg" alt="Arrow" width={15} height={15} />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="text-brand-yellow font-black uppercase tracking-widest">Navigation</h5>
            <div className="flex flex-col gap-2">
              <Link href="/" className="hover: transition-all">Home</Link>
              <Link href="/projects" className="hover: transition-all">Projects</Link>
              <Link href="/writing" className="hover: transition-all">Writing</Link>
            </div>
          </div>

          <div className="flex flex-col gap-4 relative">
            <h5 suppressHydrationWarning className="text-brand-yellow font-black uppercase tracking-widest">India - {new Date().toLocaleTimeString('en-In', { hour: 'numeric', minute: 'numeric', hour12: true, timeZone: 'Asia/Kolkata' })}</h5>
            <div className="flex flex-col gap-2">
              <Link href="#" className="hover: transition-all">Dribbble</Link>
              <Link href="#" className="hover: transition-all">Instagram</Link>
              <Link href="#" className="hover: transition-all">LinkedIn</Link>
            </div>
          </div>
        </div>

        {/* Key Stack Prop */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center md:justify-end mt-12 md:mt-0 select-none pointer-events-none"
        >
          <Image
            src="/keys.svg"
            alt="Social Stack"
            width={250}
            height={250}
            className="w-48 md:w-60 lg:w-[250px] opacity-80 md:opacity-100"
          />
        </motion.div>

        {/* Bottom Credits */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 text-center md:text-left text-sm md:text-base">
          <p className="max-w-[300px] md:max-w-none">
            © Designed with a human focus, powered by good tools and a lot of coffee.
          </p>
          <Link href="mailto:abhiramvenugopal204@gmail.com" className="hover:text-brand-yellow transition-colors">
            abhiramvenugopal204@gmail.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
