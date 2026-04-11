import Image from "next/image";

interface NoteItemProps {
  title: string;
  subtitle: string;
}

function NoteItem({ title, subtitle }: NoteItemProps) {
  return (
    <div className="group flex items-center justify-between cursor-pointer">
      <div className="flex flex-col gap-2">
        <h4 className="text-lg font-bold uppercase tracking-widest transition-all group-hover:translate-x-2">
          {title}
        </h4>
        <p className="text-gray-500 font-medium transition-all group-hover:translate-x-2">
          {subtitle}
        </p>
      </div>
      <Image src="/arrow.svg" alt="Arrow" width={60} height={60} className="" />
    </div>
  );
}

export default function InsightSection() {
  return (
    <section className="relative z-10 py-12 px-4 md:px-8 lg:px-12 flex flex-col gap-12">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">
          DESIGNER&apos;S NOTES
        </h2>
        <p className="w-fit pb-6 text-xl font-semibold border-b border-black/20">
          (things i write when i&apos;m late night thinking)
        </p>

        <div className="flex flex-col gap-8 md:gap-14 mt-10">
          <NoteItem title="The &apos;why&apos; that explain the cycles of a product" subtitle="Real world experience with products and markets" />
          <NoteItem title="Intuition and omnipresent behavior, a case study with honest honesty" subtitle="Experience with user behavior and business goals" />
          <NoteItem title="user experience over business goals" subtitle="real world value over raw profits" />
          <NoteItem title="Personal branding and frameworks" subtitle="Synthesising my experience" />
        </div>
      </div>

      <div className="relative flex flex-col-reverse md:flex-col gap-8">
        <div className="md:absolute right-2 xl:right-30 -top-40 transform -rotate-3 hover:rotate-0 transition-all duration-500">
          <Image src="/cv.svg" alt="Resume Flyer" width={400} height={500} className="xl:w-full h-auto" />
        </div>

        <div>
          <div className="flex items-center gap-16 mt-10">
            <div className="flex items-baseline gap-4">
              <span className="text-4xl md:text-8xl font-serif">8</span>
              <span className="text-3xl font-serif">written</span>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="text-4xl md:text-8xl font-serif">16<sup>+</sup></span>
              <span className="text-3xl font-serif">drafts</span>
            </div>
          </div>
          <p className="mt-6 max-w-md lg:max-w-xl 2xl:max-w-2xl font-serif text-xl md:text-2xl lg:text-3xl">
            from mistakes done and insights gained through practical experiences
          </p>
        </div>
      </div>
    </section>
  );
}
