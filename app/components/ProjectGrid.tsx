import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  img: string;
  className?: string;
  href?: string;
}

function ProjectCard({ title, description, img, className, href }: ProjectCardProps) {
  const content = (
    <div className={`relative p-8 bg-brand-yellow w-full flex flex-col gap-8 ${className || ""}`}>
      <Image src="/line1.svg" alt={title} width={400} height={400} className="absolute -top-1.5 left-0 w-full h-fit object-fill" />
      <Image src="/line2.svg" alt={title} width={400} height={400} className="absolute top-0 -left-1.5 w-fit h-full object-fill" />
      <Image src="/line1.svg" alt={title} width={400} height={400} className="absolute -bottom-1.5 right-0 w-full h-fit object-fill" />
      <Image src="/line2.svg" alt={title} width={400} height={400} className="absolute bottom-0 -right-1.5 w-fit h-full object-fill" />

      <Image src="/case.svg" alt="" width={100} height={100} className="block md:hidden absolute -top-2 -right-4 w-fit h-[3em] rotate-25 object-contain pointer-events-none" />

      <div className="z-10 flex flex-col gap-4 relative flex-1">
        <h3 className="text-xl md:text-2xl font-bold leading-tight">
          {title}
        </h3>
        <p className="text-md md:text-lg font-medium opacity-90">
          {description}
        </p>
      </div>

      <div className="relative z-10 w-full mt-auto">
        <Image src={img}
          alt={title}
          width={400}
          height={300}
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );

  if (href) {
    return <Link href={href} className="block w-full h-full">{content}</Link>;
  }

  return content;
}

export default function ProjectGrid() {
  return (
    <section className="overflow-hidden relative z-10 py-12 md:py-16 px-4 lg:px-12 flex flex-col gap-6">
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
          img="/hp1.svg"
          href="/simplita"
          className="md:col-span-2"
        />
        <ProjectCard
          title="Chapter 1 - A career space for young minds"
          description="Owned end-to-end design of a mobile app for life and career coaching, translating student needs into structured guidance, decision-making tools, and scalable experiences."
          img="/hp3.svg"
          href="/chapter1"
          className="md:col-span-2"
        />
        <ProjectCard
          title="OneTac: Reimagining India's Stories"
          description="Igniting the next wave of tourism, art and cultural experiences through a Community-led, decentralised movement."
          img="/hp2.svg"
          href="/onetac"
          className="md:col-span-2"
        />
        <ProjectCard
          title="How this portfolio was crafted"
          description="Crafted as a narrative of my design thinking, this portfolio highlights the journey from problem to product. Each project captures the exploration, decisions, and outcomes."
          img="/hp4.svg"
        />
      </div>
    </section>
  );
}
