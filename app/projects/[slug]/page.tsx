"use client";
/* kalam font */
import { motion } from "framer-motion";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";
import HeadPop from "../../components/headPop";
import Dock from "../../components/Dock";

import { PROJECTS } from "../data";

export default function ProjectPage() {
    const params = useParams();
    const slug = params?.slug as string;
    const project = PROJECTS.find(p => p.slug === slug) || PROJECTS[0];

    if (!project) return <div>Project not found</div>;

    return (
        <main className="min-h-screen bg-white selection:bg-brand-yellow/30">
            {project.slug !== "chapter-1-mobile" && project.slug !== "onetac" && project.slug !== "remora" && (
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="relative w-full h-screen flex flex-col items-center justify-center px-4 md:px-12 overflow-hidden"
                    style={{ backgroundColor: project.heroBg }}
                >
                    <div className="max-w-4xl text-center mb-16">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-2xl lg:text-3xl font-sans italic leading-relaxed text-black/80"
                        >
                            {project.subtitle}
                        </motion.p>
                    </div>

                    <div className="absolute left-0 bottom-0 w-full z-10 overflow-hidden whitespace-nowrap">
                        <motion.div
                            animate={{
                                x: [0, "-50%"]
                            }}
                            transition={{
                                duration: 20,
                                ease: "linear",
                                repeat: Infinity
                            }}
                            className="flex items-center gap-12 md:gap-24 w-fit"
                        >
                            {/* Loop through all projects in the marquee */}
                            {PROJECTS.map((p) => (
                                <div key={p.slug} className="flex items-center gap-12 md:gap-24 flex-shrink-0 px-6">
                                    <h1 className="text-[12vw] md:text-[8rem] lg:text-[10rem] font-sans font-black leading-none tracking-tight">
                                        {p.title.split(" —— ")[0]}
                                    </h1>

                                    <div className="flex-shrink-0">
                                        <Image
                                            src="/blast.svg"
                                            alt="sparkle"
                                            width={120}
                                            height={120}
                                            className="w-16 h-16 md:w-32 md:h-32 invert grayscale brightness-0"
                                        />
                                    </div>

                                    <h2 className="text-[10vw] md:text-[7rem] lg:text-[8.5rem] leading-none tracking-tight text-black/95">
                                        {p.title.split(" —— ")[1]}
                                    </h2>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </motion.section>
            )}

            {project.slug === "chapter-1-mobile" && (
                <section className="w-full leading-none flex flex-col">
                    <div className="flex-1 min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto w-full bg-white text-black">
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
                    </div>
                    <Image 
                        src="/project/chapter1.svg" 
                        alt="Chapter 1 Mobile App Details" 
                        width={1920} 
                        height={1080} 
                        className="w-full h-auto"
                    />
                    <Image 
                        src="/project/chapter2.svg" 
                        alt="Chapter 1 Mobile App Details Part 2" 
                        width={1920} 
                        height={1080} 
                        className="w-full h-auto"
                    />
                    
                    <div className="w-full bg-white px-6 md:px-12 lg:px-24 py-16 text-black max-w-5xl mx-auto" style={{ fontFamily: 'var(--font-kalam)' }}>
                        <div className="flex flex-col gap-8 text-lg md:text-xl lg:text-2xl leading-relaxed">
                            <div>
                                <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-3">Project type</h3>
                                <p>Digital growth platform / Student guidance experience / Vision-led product design</p>
                            </div>

                            <div>
                                <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-3">Category</h3>
                                <p>Product design, UI/UX design, web design, responsive design, digital experience design</p>
                            </div>

                            <div>
                                <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-3">Tools</h3>
                                <p>Figma, Illustrator, Claude, Stitch, Antigravity, Adobe Creative Suite</p>
                            </div>

                            <div>
                                <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-3">Deliverables</h3>
                                <ul className="list-disc list-outside pl-6 space-y-2">
                                    <li>Platform experience design</li>
                                    <li>Student onboarding flows</li>
                                    <li>Career exploration journeys</li>
                                    <li>Growth and reflection systems</li>
                                    <li>Responsive layouts</li>
                                    <li>Information architecture</li>
                                    <li>Content structure and storytelling</li>
                                    <li>Reusable UI components</li>
                                    <li>Design system foundation</li>
                                    <li>Product and UX direction</li>
                                </ul>
                            </div>

                            <p className="mt-2">
                                The experience was designed with a calm and approachable visual language focused on clarity, emotional comfort, and structured guidance — helping students navigate growth and future decisions in a way that feels supportive and easy to engage with.
                            </p>

                            <div className="mt-4">
                                <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-3">About OneTAC</h3>
                                <p>
                                    Chapter 1 is a digital growth companion designed for students aged 13-17 navigating academics, identity, and future career decisions. The platform helps students explore interests, build confidence, and make informed decisions through structured guidance and self-discovery.
                                </p>
                                <p className="mt-4">
                                    Built around both growth and emotional well-being, the experience aims to make career exploration feel less overwhelming and more approachable during formative years.
                                </p>
                            </div>

                            <div className="mt-4">
                                <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-3">Key project goals</h3>
                                <ul className="list-disc list-outside pl-6 space-y-2">
                                    <li>Simplify career and growth exploration</li>
                                    <li>Create a supportive and approachable experience</li>
                                    <li>Reduce overwhelm through structured UX</li>
                                    <li>Encourage confidence and self-discovery</li>
                                    <li>Build engaging long-term user journeys</li>
                                    <li>Design scalable and accessible systems</li>
                                    <li>Balance guidance with emotional well-being</li>
                                    <li>Create clarity through thoughtful product design</li>
                                </ul>
                            </div>

                            <p className="mt-2">
                                The overall experience was shaped to feel calm, structured, and human-centered — creating a platform that supports students through growth, reflection, and future decision-making.
                            </p>
                        </div>
                    </div>

                    <Image 
                        src="/project/chapter3.svg" 
                        alt="Chapter 1 Mobile App Details Part 3" 
                        width={1920} 
                        height={1080} 
                        className="w-full h-auto"
                    />
                    <Image 
                        src="/project/chapter4.svg" 
                        alt="Chapter 1 Mobile App Details Part 4" 
                        width={1920} 
                        height={1080} 
                        className="w-full h-auto"
                    />
                    <HeadPop />
                </section>
            )}

            {project.slug === "onetac" && (
                <section className="w-full leading-none flex flex-col">
                    <div className="flex-1 min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto w-full bg-white text-black">
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
                            OneTAC
                          </h1>
                          
                          <p className="text-[24px] font-normal leading-relaxed text-black/90">
                            A pan India digital grid connecting tourism, arts, and culture, unlocking a 70M job ecosystem contributing just 1.77% to GDP, while bringing visibility to the 98% of artisans still offline.
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
                          <div className="grid grid-cols-2 gap-y-10 gap-x-8 mt-12" style={{ fontFamily: 'var(--font-kalam)' }}>
                            <div>
                              <h3 className="text-gray-400 italic text-[16px] mb-1">My Role</h3>
                              <p className="font-semibold text-[16px]" style={{ fontStyle: 'normal' }}>UI/UX Designer</p>
                            </div>
                            <div>
                              <h3 className="text-gray-400 italic text-[16px] mb-1">Team</h3>
                              <p className="font-semibold text-[16px] leading-snug" style={{ fontStyle: 'normal' }}>
                                1 Product Designer,<br />
                                2 Developers, 1 Lead Manager,<br />
                                2 Content writers,<br />
                                5+ Stakeholders
                              </p>
                            </div>
                            <div>
                              <h3 className="text-gray-400 italic text-[16px] mb-1">Industry</h3>
                              <p className="font-semibold text-[16px] leading-snug" style={{ fontStyle: 'normal' }}>TourismTech & Digital Public Infrastructure</p>
                            </div>
                            <div>
                              <h3 className="text-gray-400 italic text-[16px] mb-1">Timeline</h3>
                              <p className="font-semibold text-[16px] leading-snug" style={{ fontStyle: 'normal' }}>January 2025 - February 2025</p>
                            </div>
                          </div>
                        </div>

                        {/* Right Column */}
                        <div className="w-full relative flex justify-center items-start lg:sticky lg:top-32">
                          <Image 
                            src="/project/onetac0.svg" 
                            alt="Project Showcase" 
                            width={900} 
                            height={800} 
                            className="w-full h-auto object-contain"
                            priority
                          />
                        </div>
                      </div>

                      {/* Bottom Grid Info */}
                      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 mt-16 w-full" style={{ fontFamily: 'var(--font-kalam)' }}>
                        {/* Left column info */}
                        <div className="flex flex-col gap-10">
                          <div>
                            <h3 className="text-gray-400 italic text-[16px] mb-2">Challenge</h3>
                            <ul className="list-disc list-outside pl-5 space-y-2 font-semibold text-[16px] leading-relaxed" style={{ fontStyle: 'normal' }}>
                              <li>Explaining a complex decentralized tourism ecosystem clearly</li>
                              <li>Balancing multiple stakeholder needs within one platform narrative</li>
                              <li>Making infrastructure-heavy concepts accessible to non-technical users</li>
                              <li>Structuring large-scale ecosystem information without overwhelming users</li>
                              <li>Translating policy, culture, and technology into a unified experience</li>
                            </ul>
                          </div>
                          <div>
                            <h3 className="text-gray-400 italic text-[16px] mb-2">Impact</h3>
                            <ul className="list-disc list-outside pl-5 space-y-2 font-semibold text-[16px] leading-relaxed" style={{ fontStyle: 'normal' }}>
                              <li>Enabled exposure to 3000+ startup ecosystem participants</li>
                              <li>Supported communication across 5+ stakeholder groups</li>
                              <li>Helped position OneTAC within India&apos;s $3T+ tourism ecosystem</li>
                              <li>Established the platform as a central ecosystem communication layer</li>
                              <li>Improved understanding of practitioner onboarding and participation flows</li>
                            </ul>
                          </div>
                        </div>

                        {/* Right column info */}
                        <div className="flex flex-col gap-10">
                          <div>
                            <h3 className="text-gray-400 italic text-[16px] mb-2">Solution</h3>
                            <ul className="list-disc list-outside pl-5 space-y-2 font-semibold text-[16px] leading-relaxed" style={{ fontStyle: 'normal' }}>
                              <li>Designed a clear ecosystem-driven information architecture</li>
                              <li>Simplified complex infrastructure through visual storytelling</li>
                              <li>Built structured flows for discovery, onboarding, and participation</li>
                              <li>Created a scalable digital narrative for multiple stakeholder groups</li>
                              <li>Developed early practitioner app concepts to validate ecosystem usability</li>
                            </ul>
                          </div>
                          <div>
                            <h3 className="text-gray-400 italic text-[16px] mb-2">Learnings</h3>
                            <ul className="list-disc list-outside pl-5 space-y-2 font-semibold text-[16px] leading-relaxed" style={{ fontStyle: 'normal' }}>
                              <li>Ecosystem products require clarity across diverse user groups</li>
                              <li>Strong information architecture simplifies complex public systems</li>
                              <li>Storytelling plays a critical role in infrastructure adoption</li>
                              <li>Early prototypes help align stakeholders faster</li>
                              <li>Designing for ecosystems means designing beyond individual users</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="introduction">
                      <Image 
                          src="/project/onetac1.svg" 
                          alt="OneTac Case Study Details" 
                          width={1920} 
                          height={1080} 
                          className="w-full h-auto"
                          priority
                      />
                      <Image 
                          src="/project/onetac2.svg" 
                          alt="OneTac Case Study Details Part 2" 
                          width={1920} 
                          height={1080} 
                          className="w-full h-auto"
                      />
                      
                      <div className="w-full bg-white px-6 md:px-12 lg:px-24 py-16 max-w-5xl mx-auto" style={{ fontFamily: 'var(--font-kalam)', color: 'black', fontStyle: 'normal' }}>
                          <div className="flex flex-col gap-8 text-lg md:text-xl lg:text-2xl leading-relaxed">
                              <div>
                                  <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-3">Project type</h3>
                                  <p>Platform website / Vision-led digital experience / Ecosystem presentation</p>
                              </div>

                              <div>
                                  <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-3">Category</h3>
                                  <p>Web design, UI/UX design, responsive design, digital product design,</p>
                              </div>

                              <div>
                                  <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-3">Tools</h3>
                                  <p>Figma, Framer</p>
                              </div>

                              <div>
                                  <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-3">Deliverables</h3>
                                  <ul className="flex flex-col gap-2 pl-4">
                                      <li className="flex gap-3">
                                          <span>·</span>
                                          <span>Homepage design</span>
                                      </li>
                                      <li className="flex gap-3">
                                          <span>·</span>
                                          <span>Vision and ecosystem sections</span>
                                      </li>
                                      <li className="flex gap-3">
                                          <span>·</span>
                                          <span>Platform overview pages</span>
                                      </li>
                                      <li className="flex gap-3">
                                          <span>·</span>
                                          <span>Responsive layouts</span>
                                      </li>
                                      <li className="flex gap-3">
                                          <span>·</span>
                                          <span>Content structure and storytelling</span>
                                      </li>
                                      <li className="flex gap-3">
                                          <span>·</span>
                                          <span>Reusable UI components</span>
                                      </li>
                                      <li className="flex gap-3">
                                          <span>·</span>
                                          <span>Design system foundation</span>
                                      </li>
                                      <li className="flex gap-3">
                                          <span>·</span>
                                          <span>Design direction</span>
                                      </li>
                                  </ul>
                              </div>

                              <p className="mt-2" style={{ color: '#7F3907' }}>
                                  The experience was designed with a clean and modern visual language focused on clarity, accessibility, and structured storytelling — helping communicate a large-scale vision in a way that feels approachable and easy to understand.
                              </p>

                              <div className="mt-4">
                                  <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-3">About OneTAC</h3>
                                  <p>
                                      OneTAC is building a pan-India digital grid that connects tourism, arts, and culture into a unified ecosystem — aiming to create a more accessible, visible, and economically connected future for India’s TAC sector.
                                  </p>
                                  <p className="mt-4">
                                      The platform highlights the untapped potential within India’s tourism and artisan economy, while creating pathways for discovery, visibility, and participation at scale.
                                  </p>
                              </div>

                              <div className="mt-4">
                                  <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-3">Key project goals</h3>
                                  <ul className="flex flex-col gap-2 pl-4">
                                      <li className="flex gap-3">
                                          <span>·</span>
                                          <span>Communicate the vision with clarity</span>
                                      </li>
                                      <li className="flex gap-3">
                                          <span>·</span>
                                          <span>Create trust through structured design</span>
                                      </li>
                                      <li className="flex gap-3">
                                          <span>·</span>
                                          <span>Simplify complex information flows</span>
                                      </li>
                                      <li className="flex gap-3">
                                          <span>·</span>
                                          <span>Build an accessible and scalable experience</span>
                                      </li>
                                      <li className="flex gap-3">
                                          <span>·</span>
                                          <span>Support engagement through intuitive UX</span>
                                      </li>
                                      <li className="flex gap-3">
                                          <span>·</span>
                                          <span>Create a strong digital foundation for future growth</span>
                                      </li>
                                  </ul>
                              </div>

                              <p className="mt-2" style={{ color: '#7F3907' }}>
                                  The overall experience was shaped to balance storytelling, usability, and structure — creating a platform that feels informative, refined, and future-focused.
                              </p>
                          </div>
                      </div>
                    </div>
                    
                    <div id="research-phase">
                      <Image 
                          src="/project/onetac3.svg" 
                          alt="OneTac Case Study Details Part 3" 
                          width={1920} 
                          height={1080} 
                          className="w-full h-auto"
                      />
                      <Image 
                          src="/project/onetac4.svg" 
                          alt="OneTac Case Study Details Part 4" 
                          width={1920} 
                          height={1080} 
                          className="w-full h-auto"
                      />
                    </div>
                    
                    <div id="ideate">
                      <Image 
                          src="/project/onetac5.svg" 
                          alt="OneTac Case Study Details Part 5" 
                          width={1920} 
                          height={1080} 
                          className="w-full h-auto"
                      />
                    </div>
                    
                    <div id="design-guidelines">
                      <Image 
                          src="/project/onetac6.svg" 
                          alt="OneTac Case Study Details Part 6" 
                          width={1920} 
                          height={1080} 
                          className="w-full h-auto"
                      />
                    </div>
                    
                    <div id="final-design">
                      <Image 
                          src="/project/onetac7.svg" 
                          alt="OneTac Case Study Details Part 7" 
                          width={1920} 
                          height={1080} 
                          className="w-full h-auto"
                      />
                    </div>
                    
                    <div id="website-drafts">
                      <Image 
                          src="/project/onetac8.svg" 
                          alt="OneTac Case Study Details Part 8" 
                          width={1920} 
                          height={1080} 
                          className="w-full h-auto"
                      />
                      <Image 
                          src="/project/onetac9.svg" 
                          alt="OneTac Case Study Details Part 9" 
                          width={1920} 
                          height={1080} 
                          className="w-full h-auto"
                      />
                    </div>
                    <Dock viewProjectUrl="#" />
                    <HeadPop />
                </section>
            )}

            {project.slug === "remora" && (
                <section className="w-full leading-none flex flex-col">
                    <div className="flex-1 min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto w-full bg-white text-black">
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
                            Remora
                          </h1>
                          
                          <p className="text-[24px] font-normal leading-relaxed text-black/90">
                            A pregnancy care and support guide offering clear, practical information on care, insurance, and well being, while connecting users to local resources and services for timely support.
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
                          <div className="grid grid-cols-2 gap-y-10 gap-x-8 mt-12" style={{ fontFamily: 'var(--font-kalam)' }}>
                            <div>
                              <h3 className="text-gray-400 italic text-[16px] mb-1">My Role</h3>
                              <p className="font-semibold text-[16px]" style={{ fontStyle: 'normal' }}>UI/UX Designer</p>
                            </div>
                            <div>
                              <h3 className="text-gray-400 italic text-[16px] mb-1">Team</h3>
                              <p className="font-semibold text-[16px] leading-snug" style={{ fontStyle: 'normal' }}>
                                1 Product Designer, 1 Developers,<br />
                                1 Lead Manager
                              </p>
                            </div>
                            <div>
                              <h3 className="text-gray-400 italic text-[16px] mb-1">Industry</h3>
                              <p className="font-semibold text-[16px] leading-snug" style={{ fontStyle: 'normal' }}>
                                Digital Prenatal Care &<br />
                                Healthcare Navigation Platform
                              </p>
                            </div>
                            <div>
                              <h3 className="text-gray-400 italic text-[16px] mb-1">Timeline</h3>
                              <p className="font-semibold text-[16px] leading-snug" style={{ fontStyle: 'normal' }}>April 2026 - May 2026</p>
                            </div>
                          </div>
                        </div>

                        {/* Right Column */}
                        <div className="w-full relative flex justify-center items-start lg:sticky lg:top-32">
                          <Image 
                            src="/project/remora0.svg" 
                            alt="Project Showcase" 
                            width={900} 
                            height={800} 
                            className="w-full h-auto object-contain"
                            priority
                          />
                        </div>
                      </div>

                      {/* Bottom Grid Info */}
                      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 mt-16 w-full" style={{ fontFamily: 'var(--font-kalam)' }}>
                        {/* Left column info */}
                        <div className="flex flex-col gap-10">
                          <div>
                            <h3 className="text-gray-400 italic text-[16px] mb-2">Challenge</h3>
                            <ul className="list-disc list-outside pl-5 space-y-2 font-semibold text-[16px] leading-relaxed" style={{ fontStyle: 'normal' }}>
                              <li>Presenting large amounts of sensitive information within a single-page experience</li>
                              <li>Preventing users from feeling overwhelmed during vulnerable moments</li>
                              <li>Structuring healthcare, insurance, and support resources clearly</li>
                              <li>Balancing emotional comfort with informational depth</li>
                              <li>Maintaining readability and accessibility across dense content sections</li>
                            </ul>
                          </div>
                          <div>
                            <h3 className="text-gray-400 italic text-[16px] mb-2">Impact</h3>
                            <ul className="list-disc list-outside pl-5 space-y-2 font-semibold text-[16px] leading-relaxed" style={{ fontStyle: 'normal' }}>
                              <li>Improved clarity and discoverability of support resources</li>
                              <li>Reduced friction in accessing healthcare-related information</li>
                              <li>Created a more approachable and emotionally supportive experience</li>
                              <li>Enabled users to navigate complex topics more confidently</li>
                              <li>Delivered a centralized resource guide aligned with client requirements</li>
                            </ul>
                          </div>
                        </div>

                        {/* Right column info */}
                        <div className="flex flex-col gap-10">
                          <div>
                            <h3 className="text-gray-400 italic text-[16px] mb-2">Solution</h3>
                            <ul className="list-disc list-outside pl-5 space-y-2 font-semibold text-[16px] leading-relaxed" style={{ fontStyle: 'normal' }}>
                              <li>Designed a calm, accessibility-focused single-page experience</li>
                              <li>Structured information into clear, scannable content sections</li>
                              <li>Simplified navigation through guided visual hierarchy</li>
                              <li>Created readable layouts optimized for mobile and web accessibility</li>
                              <li>Unified care resources, support guidance, and services into one seamless flow</li>
                            </ul>
                          </div>
                          <div>
                            <h3 className="text-gray-400 italic text-[16px] mb-2">Learnings</h3>
                            <ul className="list-disc list-outside pl-5 space-y-2 font-semibold text-[16px] leading-relaxed" style={{ fontStyle: 'normal' }}>
                              <li>Information-heavy experiences require strong content hierarchy</li>
                              <li>Emotional comfort is critical in healthcare-related interfaces</li>
                              <li>Single-page experiences demand careful pacing and readability</li>
                              <li>Accessibility decisions directly improve trust and usability</li>
                              <li>Simplifying navigation can reduce stress during sensitive journeys</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="introduction">
                      <Image 
                          src="/project/remora1.svg" 
                          alt="Remora Case Study Details" 
                          width={1920} 
                          height={1080} 
                          className="w-full h-auto"
                      />
                      <Image 
                          src="/project/remora2.svg" 
                          alt="Remora Case Study Details Part 2" 
                          width={1920} 
                          height={1080} 
                          className="w-full h-auto"
                      />
                      
                      <div className="w-full bg-white px-6 md:px-12 lg:px-24 py-16 max-w-5xl mx-auto" style={{ fontFamily: 'var(--font-kalam)', color: 'black', fontStyle: 'normal' }}>
                          <div className="flex flex-col gap-8 text-lg md:text-xl lg:text-2xl leading-relaxed">
                              <div>
                                  <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-3">Project type</h3>
                                  <p>Healthcare support platform / Resource accessibility experience / Community-focused digital design</p>
                              </div>

                              <div>
                                  <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-3">Category</h3>
                                  <p>UI/UX design, web design, responsive design, accessibility-focused design, digital experience design</p>
                              </div>

                              <div>
                                  <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-3">Tools</h3>
                                  <p>Figma, Framer</p>
                              </div>

                              <div>
                                  <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-3">Deliverables</h3>
                                  <ul className="flex flex-col gap-2">
                                      <li className="flex gap-3">
                                          <span>·</span>
                                          <span>Homepage design</span>
                                      </li>
                                      <li className="flex gap-3">
                                          <span>·</span>
                                          <span>Resource guide experience</span>
                                      </li>
                                      <li className="flex gap-3">
                                          <span>·</span>
                                          <span>Information architecture</span>
                                      </li>
                                      <li className="flex gap-3">
                                          <span>·</span>
                                          <span>Responsive layouts</span>
                                      </li>
                                      <li className="flex gap-3">
                                          <span>·</span>
                                          <span>Accessibility-focused UX</span>
                                      </li>
                                      <li className="flex gap-3">
                                          <span>·</span>
                                          <span>Content structure and readability</span>
                                      </li>
                                      <li className="flex gap-3">
                                          <span>·</span>
                                          <span>Reusable UI components</span>
                                      </li>
                                      <li className="flex gap-3">
                                          <span>·</span>
                                          <span>Visual design direction</span>
                                      </li>
                                      <li className="flex gap-3">
                                          <span>·</span>
                                          <span>Support-focused interaction design</span>
                                      </li>
                                  </ul>
                              </div>

                              <p className="mt-2" style={{ color: '#A0A9FF' }}>
                                  The experience was designed with a soft and approachable visual language focused on clarity, accessibility, and emotional comfort. Built around a seamless single-page structure, the platform brings together resources, guidance, and support information into one accessible flow — reducing friction and making sensitive information easier to navigate during vulnerable moments.
                              </p>

                              <div className="mt-4">
                                  <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-3">About OneTAC</h3>
                                  <p>
                                      Remora is a digital support and resource platform designed to help individuals access clear, practical guidance related to pregnancy care and support services. The experience focuses on making healthcare-related information feel calmer, more approachable, and easier to understand through thoughtful structure, readability, and accessible UX.
                                  </p>
                              </div>

                              <div className="mt-4">
                                  <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-3">Key project goals</h3>
                                  <ul className="flex flex-col gap-2">
                                      <li className="flex gap-3">
                                          <span>·</span>
                                          <span>Simplify access to support resources</span>
                                      </li>
                                      <li className="flex gap-3">
                                          <span>·</span>
                                          <span>Create a calm and approachable experience</span>
                                      </li>
                                      <li className="flex gap-3">
                                          <span>·</span>
                                          <span>Improve readability and information clarity</span>
                                      </li>
                                      <li className="flex gap-3">
                                          <span>·</span>
                                          <span>Reduce overwhelm through structured UX</span>
                                      </li>
                                      <li className="flex gap-3">
                                          <span>·</span>
                                          <span>Design accessible and inclusive interfaces</span>
                                      </li>
                                      <li className="flex gap-3">
                                          <span>·</span>
                                          <span>Support users through sensitive journeys</span>
                                      </li>
                                      <li className="flex gap-3">
                                          <span>·</span>
                                          <span>Build trust through thoughtful design</span>
                                      </li>
                                      <li className="flex gap-3">
                                          <span>·</span>
                                          <span>Create seamless mobile-friendly experiences</span>
                                      </li>
                                  </ul>
                              </div>

                              <p className="mt-2" style={{ color: '#A0A9FF' }}>
                                  The overall experience was shaped to feel gentle, informative, and human-centered — creating a platform that supports users with clarity, care, and accessibility throughout their journey.
                              </p>
                          </div>
                      </div>
                    </div>
                    
                    <div id="research-phase">
                      <Image 
                          src="/project/remora3.svg" 
                          alt="Remora Case Study Details Part 3" 
                          width={1920} 
                          height={1080} 
                          className="w-full h-auto"
                      />
                    </div>
                    
                    <div id="ideate">
                      <Image 
                          src="/project/remora4.svg" 
                          alt="Remora Case Study Details Part 4" 
                          width={1920} 
                          height={1080} 
                          className="w-full h-auto"
                      />
                    </div>
                    
                    <div id="design-guidelines" />
                    <div id="final-design" />
                    <div id="website-drafts" />
                    
                    <Dock viewProjectUrl="#" />
                    <HeadPop />
                </section>
            )}
        </main>
    );
}