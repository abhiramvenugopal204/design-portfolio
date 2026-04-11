import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  className?: string;
}

function ProjectCard({ title, description, className }: ProjectCardProps) {
  return (
    <div className={`relative p-6 bg-brand-yellow w-full h-full flex flex-col items-center justify-end ${className}`}>
      <Image src="/line1.svg" alt={title} width={400} height={400} className="absolute -top-1.5 left-0 w-full h-fit object-fill" />
      <Image src="/line2.svg" alt={title} width={400} height={400} className="absolute top-0 -left-1.5 w-fit h-full object-fill" />
      <Image src="/line1.svg" alt={title} width={400} height={400} className="absolute -bottom-1.5 right-0 w-full h-fit object-fill" />
      <Image src="/line2.svg" alt={title} width={400} height={400} className="absolute bottom-0 -right-1.5 w-fit h-full object-fill" />

    <Image src="/case.svg" alt={title} width={400} height={400} className="block md:hidden absolute -top-2 -right-4 w-fit h-[3em] rotate-25 object-fill" />

      <div className="z-10 flex flex-col gap-4 relative ">
        <h3 className="text-xl md:text-2xl font-bold">
          {title}
        </h3>
        <p className="text-md md:text-lg font-medium">
          {description}
        </p>
        <div className="relative bg-white w-full h-40 md:h-52">
          <Image src="/line3.svg" alt={title} width={400} height={400} className="absolute -top-1 left-0 w-full h-fit object-fill" />
          <Image src="/line4.svg" alt={title} width={400} height={400} className="absolute top-0 -left-1 w-fit h-full object-fill" />
          <Image src="/line3.svg" alt={title} width={400} height={400} className="absolute -bottom-1 right-0 w-full h-fit object-fill" />
          <Image src="/line4.svg" alt={title} width={400} height={400} className="absolute bottom-0 -right-1 w-fit h-full object-fill" />
        </div>
      </div>
    </div>
  );
}

export default function ProjectGrid() {
  return (
    <section className="relative z-10 py-12 md:py-16 px-4 lg:px-12 flex flex-col gap-6">
      <div className="flex justify-between items-center z-10">
        <h2 className="text-2xl font-bold">
          From crafting experiences to solving problems
        </h2>
        <Link href="/projects" className="hidden md:block">
          <Image
            src="/viewAll.svg"
            alt="View All"
            width={80}
            height={40}
            className="w-full h-14 cursor-pointer hover:opacity-80 transition-all"
          />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 md:gap-x-6 gap-y-4 md:gap-y-6">
        <ProjectCard
          title="Building zero to one @simplita.ai"
          description="Helping shape Simplita from idea to product — defining the UX, core workflows, and the first usable version of the platform."
        />
        <ProjectCard
          title="Chapter 1 - A career space for young minds"
          description="Owned end-to-end design of a mobile app for life and career coaching, translating student needs into structured guidance, decision-making tools, and scalable experiences."
        />
        <ProjectCard
          title="OneTac: Reimagining India's Stories"
          description="Igniting the next wave of tourism, art and cultural experiences through a Community-led, decentralised movement."
        />
        <ProjectCard
          title="How this portfolio was crafted"
          description="Crafted as a narrative of my design thinking, this portfolio highlights the journey from problem to product. Each project captures the exploration, decisions, and outcomes."
        />
      </div>
    </section>
  );
}
