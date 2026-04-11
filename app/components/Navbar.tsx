"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Writing", href: "https://www.medium.com" },
  { name: "My Story", href: "/mystory" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Determine the base text color based on the page
  const isWhiteTextPage = pathname === "/" || pathname === "/mystory";
  const textColor = isScrolled ? "text-black" : (isWhiteTextPage ? "text-white" : "text-black");

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      if (homeSection) {
        const threshold = homeSection.offsetHeight - 80;
        setIsScrolled(window.scrollY > threshold);
      } else {
        setIsScrolled(window.scrollY > 50);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-[1px] flex items-center justify-between px-6 lg:px-8 py-4 md:py-6 transition-all duration-300 bg-gradient-to-b from-black/25 to-transparent
          } ${isOpen ? 'bg-transparent shadow-none' : ''}`}
      >
        {/* Logo Section */}
        <div className={`flex items-center gap-3 transition-colors duration-300 ${textColor}`}>
          <Link href="/" className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full border flex items-center justify-center overflow-hidden transition-all hover:scale-105 ${isScrolled ? 'border-black/10 bg-black/5' : (isWhiteTextPage ? 'border-white/20' : 'border-black/20')
            }`}>
            <Image src="/logo.svg" alt="Logo" width={48} height={48} className="object-cover" />
          </Link>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight">Abhishek Portfolio</span>
            <span className={`text-xs hidden md:block opacity-80 tracking-tight`}>Bangalore, IN</span>
            <span className={`text-xs block md:hidden opacity-80 tracking-tight`}>Product Designer</span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            
            // Link color logic
            let linkColor;
            if (isScrolled) {
              linkColor = isActive ? "text-brand-yellow" : "text-black/70 hover:text-black";
            } else {
              if (isWhiteTextPage) {
                linkColor = isActive ? "text-brand-yellow" : "text-white/80 hover:text-white";
              } else {
                linkColor = isActive ? "text-brand-yellow" : "text-black/70 hover:text-black";
              }
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-lg lg:text-xl font-semibold transition-colors duration-300 ${linkColor}`}
              >
                {link.name}
                {isActive && (
                  <div className="absolute inset-0 -z-10 flex items-center justify-center">
                    <Image
                      src="/active.svg"
                      alt="Active"
                      width={80}
                      height={40}
                      className={`w-full h-full object-contain opacity-80`}
                    />
                  </div>
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop Action & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link href="/contact" className={`hidden md:block px-4 text-lg lg:text-xl font-semibold transition-colors underline underline-offset-8 transition-all duration-300 ${isScrolled
              ? 'text-black hover:text-black/70 decoration-brand-yellow'
              : (isWhiteTextPage ? 'text-white hover:text-brand-yellow decoration-brand-yellow/30' : 'text-black hover:text-black/70 decoration-brand-yellow')
            }`}>
            Reach out
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-3 relative z-[10001] rounded-full transition-colors duration-300 ${isScrolled ? 'text-black hover:bg-black/5' : (isWhiteTextPage ? 'text-white hover:bg-white/10' : 'text-black hover:bg-black/10')
              }`}
            aria-label="Toggle Menu"
          >
            {isOpen ? ('') : (
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[10000] md:hidden transition-all duration-500 ease-in-out flex flex-col items-center justify-center bg-brand-green-dark ${isOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"}`}
        style={{ opacity: isOpen ? 1 : 0 }}
      >
        {/* Close Button Inside Overlay */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
          aria-label="Close Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="flex flex-col items-center justify-center gap-10 px-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-4xl font-medium tracking-tight hover:text-brand-yellow transition-colors ${pathname === link.href ? "text-brand-yellow" : "text-white"}`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="text-4xl font-medium text-white border-b-2 border-brand-yellow/50 pb-2 mt-4 hover:border-brand-yellow transition-all"
          >
            Reach out
          </Link>
        </div>
      </div>
    </>
  );
}
