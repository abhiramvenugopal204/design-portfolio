"use client";

import { useState } from "react";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  className?: string;
}

function TestimonialCard({ name, role, content, className }: TestimonialCardProps) {
  return (
    <div className={`relative p-6 flex flex-col h-[24rem] md:h-[20rem] ${className}`}>
      <Image src="/paper.svg" alt="Background" fill className="z-0 absolute top-0 left-0 w-full h-full object-cover opacity-90" />
      <Image src="/line5.svg" alt="Background" width={200} height={200} className="absolute -top-1.25 left-0 w-full h-fit object-cover pointer-events-none" />
      <Image src="/line6.svg" alt="Background" width={200} height={200} className="absolute top-0 -left-1.25 w-fit h-full object-cover pointer-events-none" />
      <Image src="/line5.svg" alt="Background" width={200} height={200} className="absolute -bottom-1.25 right-0 w-full h-fit object-cover pointer-events-none" />
      <Image src="/line6.svg" alt="Background" width={200} height={200} className="absolute -bottom-0 -right-1.25 w-fit h-full object-cover pointer-events-none" />

      <div className="z-10 flex flex-col h-full">
        <div className="flex-grow">
          <p className="text-lg md:text-xl font-medium italic text-gray-800 leading-relaxed mb-6">
            {content}
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold text-gray-900 leading-tight">{name}</h4>
          <p className="text-sm font-medium text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    { 
      name: "Nithin Balachandran", 
      role: "Technical Product Manager - IBM", 
      content: "",
      avatar: "/logo.svg"
    },
    { 
      name: "Joyel Nelson", 
      role: "Cinematographer", 
      content: "",
      avatar: "/logo.svg"
    },
    { 
      name: "Akshaya Rajesh", 
      role: "Founder - Algonots", 
      content: "",
      avatar: "/logo.svg"
    },
    { 
      name: "Devaprasad S", 
      role: "Developer", 
      content: "",
      avatar: "/logo.svg"
    },
    { 
      name: "Saravana Pradeep", 
      role: "Founder - WOWSQL | Ex-Simplita", 
      content: "",
      avatar: "/logo.svg"
    },
    { 
      name: "Ajith Vaisakh", 
      role: "Cinematographer", 
      content: "",
      avatar: "/logo.svg"
    },
    { 
      name: "Subradeepan", 
      role: "Product Designer", 
      content: "",
      avatar: "/logo.svg"
    },
    { 
      name: "Remya Girija", 
      role: "Founder - Chapter 1", 
      content: "",
      avatar: "/logo.svg"
    },
  ];

  return (
    <section className="relative z-10 py-12 md:py-26 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          I asked them to give their pov
        </h2>
        <p className="text-gray-500 text-sm mb-12 italic">
          ( no i didn’t bribe them :) )
        </p>

        {/* Mobile View: Active Card + Grid of Avatars */}
        <div className="md:hidden flex flex-col items-center">
          <TestimonialCard 
            {...testimonials[activeIndex]} 
            className="w-full mb-8"
          />
          
          <div className="grid grid-cols-4 gap-3 w-full max-w-sm px-4">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`relative w-14 h-14 rounded-full overflow-hidden border-2 transition-all duration-300 transform ${
                  activeIndex === i ? "border-brand-yellow scale-110 shadow-md" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image 
                  src={t.avatar} 
                  alt={t.name} 
                  fill 
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Desktop View: Grid of Cards */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
