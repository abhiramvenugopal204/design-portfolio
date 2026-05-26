import Image from "next/image";
import Link from "next/link";

export default function ProjectPage() {
  return (
    <main className="flex-1 min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto w-full">
      <Link 
        href="/projects" 
        className="text-gray-700 hover:text-black transition-colors italic text-[16px] font-normal mb-8 inline-block"
      >
        Back to projects
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <h1 className="text-[24px] font-bold tracking-wide">
            Chapter 1-Mobile App
          </h1>
          
          <p className="text-[24px] font-normal leading-relaxed text-black/90">
            A long-term digital growth companion that guides students aged 13-17 from career confusion to confident, informed decisions — while actively protecting their mental well-being.
          </p>

          <Link href="#" className="relative w-fit mt-4 group block">
            <Image 
              src="/viewAll23.svg" 
              alt="Visit Site" 
              width={180}
              height={70}
              className="w-auto h-auto group-hover:scale-105 transition-transform origin-left"
            />
          </Link>

          {/* Top Grid Info */}
          <div className="grid grid-cols-2 gap-y-10 gap-x-8 mt-12">
            <div>
              <h3 className="text-gray-400 italic text-[16px] mb-1">My Role</h3>
              <p className="font-semibold text-[16px]">Product Designer</p>
            </div>
            <div>
              <h3 className="text-gray-400 italic text-[16px] mb-1">Team</h3>
              <p className="font-semibold text-[16px] leading-snug">1 Product Designer, 3 Developers, 1 Lead Manager</p>
            </div>
            <div>
              <h3 className="text-gray-400 italic text-[16px] mb-1">Industry</h3>
              <p className="font-semibold text-[16px]">Ed-Tech</p>
            </div>
            <div>
              <h3 className="text-gray-400 italic text-[16px] mb-1">Timeline</h3>
              <p className="font-semibold text-[16px] leading-snug">January 2026 - April 2026</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full relative flex justify-center items-start lg:sticky lg:top-32">
          <Image 
            src="/projectpageimage.svg" 
            alt="Project Showcase" 
            width={900} 
            height={800} 
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>

      {/* Bottom Grid Info */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 mt-16 w-full">
        {/* Left column info */}
        <div className="flex flex-col gap-10">
          <div>
            <h3 className="text-gray-400 italic text-[16px] mb-1">Challenge</h3>
            <p className="font-semibold text-[16px]">UI/UX Designer</p>
          </div>
          <div>
            <h3 className="text-gray-400 italic text-[16px] mb-1">Impact</h3>
            <p className="font-semibold text-[16px]">Ed-Tech</p>
          </div>
        </div>

        {/* Right column info */}
        <div className="flex flex-col gap-10">
          <div>
            <h3 className="text-gray-400 italic text-[16px] mb-1">Solution</h3>
            <p className="font-semibold text-[16px] leading-snug">1 Product Designer, 3 Developers, 1 Lead Manager</p>
          </div>
          <div>
            <h3 className="text-gray-400 italic text-[16px] mb-1">Learnings</h3>
            <p className="font-semibold text-[16px] leading-snug">January 2026 - April 2026</p>
          </div>
        </div>
      </div>
    </main>
  );
}
