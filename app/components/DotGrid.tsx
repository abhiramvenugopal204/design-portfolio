"use client";

import { usePathname } from "next/navigation";

export default function DotGrid() {
  const pathname = usePathname();

  // Hide the dot grid on case study pages
  if (pathname === "/simplita" || pathname === "/onetac" || pathname === "/chapter1") {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: `radial-gradient(#e5e7eb 1.5px, transparent 1.5px)`,
        backgroundSize: '32px 32px'
      }}
    />
  );
}
