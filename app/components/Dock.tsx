"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface DockProps {
  viewProjectUrl?: string;
  showWebsiteDrafts?: boolean;
}

const NAV_ITEMS = [
  { label: "Introduction", target: "introduction" },
  { label: "Research Phase", target: "research-phase" },
  { label: "Ideate", target: "ideate" },
  { label: "Design Guidelines", target: "design-guidelines" },
  { label: "Final Design", target: "final-design" },
  { label: "Website drafts", target: "website-drafts" },
];

export default function Dock({ viewProjectUrl = "#", showWebsiteDrafts = true }: DockProps) {
  const [activeSection, setActiveSection] = useState<string>("introduction");
  const items = showWebsiteDrafts ? NAV_ITEMS : NAV_ITEMS.filter(item => item.target !== "website-drafts");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const item of items) {
        const element = document.getElementById(item.target);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.target);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const handleScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[90%] md:max-w-fit px-2">
      <div 
        className="bg-white/80 backdrop-blur-md border border-gray-200/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] rounded-full py-2.5 px-4 md:px-6 flex items-center justify-between gap-6 md:gap-8 overflow-x-auto no-scrollbar scroll-smooth"
        style={{ fontFamily: 'var(--font-kalam)' }}
      >
        <div className="flex items-center gap-1 md:gap-3 flex-shrink-0">
          {items.map((item) => {
            const isActive = activeSection === item.target;
            return (
              <button
                key={item.target}
                onClick={() => handleScrollTo(item.target)}
                className={`relative px-3 py-1.5 text-[14px] md:text-[16px] font-normal transition-colors duration-300 whitespace-nowrap focus:outline-none ${
                  isActive ? "text-white" : "text-black hover:text-[#0B4A34]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-bubble"
                    className="absolute inset-0 bg-brand-yellow rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={isActive ? "font-bold" : ""}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex-shrink-0 border-l border-gray-200/60 pl-4 md:pl-6">
          <a
            href={viewProjectUrl}
            className="inline-block bg-[#0B4A34] text-white hover:bg-[#073324] px-4 md:px-5 py-1.5 md:py-2 rounded-full text-[14px] md:text-[16px] font-bold transition-all duration-300 transform hover:scale-105 shadow-md active:scale-95 whitespace-nowrap"
          >
            View project
          </a>
        </div>
      </div>
    </div>
  );
}
