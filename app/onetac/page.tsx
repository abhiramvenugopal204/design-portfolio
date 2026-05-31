"use client";

import React from "react";
import { ImageWithLoader as Image } from "../components/ImageWithLoader";
import Dock from "../components/Dock";

export default function OneTacPage() {
  return (
    <div className="min-h-screen bg-brand-yellow">
      <div id="introduction">
        {/* Hero Section */}
      <section className="min-h-screen flex flex-col relative overflow-hidden">
        {/* Center text section */}
        <div className="flex-1 flex items-center justify-center px-4 pt-32 pb-40">
          <p className="text-[20px] md:text-[24px] font-bold font-kalam text-center max-w-4xl leading-relaxed text-brand-black">
            A decentralized digital infrastructure for India's tourism, arts, and culture ecosystem,
            connecting travelers with authentic local experiences through open protocols.
          </p>
        </div>

        {/* Bottom text section */}
        <div className="absolute bottom-8 left-0 w-full flex items-center justify-center gap-6 md:gap-10 whitespace-nowrap overflow-hidden px-4 pointer-events-none">
          <h1 className="text-[100px] md:text-[140px] font-bold font-kalam text-brand-black leading-none tracking-tight">
            Onetac
          </h1>

          {/* Starburst Icon */}
          <div className="w-16 h-16 md:w-[10vw] md:h-[6vw] flex-shrink-0 flex items-center justify-center">
            <Image src="/sun.svg" alt="Sun Icon" width={105} height={74} className="w-full h-auto" />
          </div>

          <h1 className="text-[100px] md:text-[140px] font-bold font-kalam text-brand-black leading-none tracking-tight">
            Explore India
          </h1>
        </div>
      </section>

      {/* Media Section */}
      <section className="w-full flex flex-col md:flex-row bg-[#faedf0]">
        {/* Left: Video Placeholder */}
        <div className="w-full md:w-1/2 aspect-video md:aspect-auto md:min-h-[80vh] flex items-center justify-center bg-[#b8e4e4] relative overflow-hidden">
          <div className="text-center p-8 z-10">
            <div className="w-16 h-16 mx-auto mb-4 bg-black/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-black/60 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-xl font-bold font-sans text-brand-black/60">Video Placeholder</p>
            <p className="text-sm font-sans text-brand-black/50 mt-2">Video will be placed here</p>
          </div>
        </div>

        {/* Right: OneTac Hero Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12 lg:p-24 bg-[#faeee5]">
          <Image
            src="/onetacHero.svg"
            alt="OneTac Hero Interface"
            width={1200}
            height={900}
            className="w-full h-auto object-contain rounded-xl shadow-2xl"
          />
        </div>
      </section>

      {/* Project Details Section */}
      <section className="w-full bg-[#FAF9F6] py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Left Column (Empty) */}
          <div className="hidden md:block md:col-span-4 lg:col-span-5"></div>

          {/* Right Column (Text Content) */}
          <div className="md:col-span-8 lg:col-span-7 flex flex-col gap-12 font-kalam">
            {/* Main Header & Intro */}
            <div className="flex flex-col gap-6">
              <h2 className="text-[28px] md:text-[32px] font-bold text-brand-black leading-tight">
                Designing the Digital Backbone of OneTAC
              </h2>
              <div className="flex flex-col gap-4 text-[16px] md:text-[18px] text-brand-black leading-relaxed tracking-wide">
                <p>
                  OneTAC is a decentralized digital infrastructure designed to power India's tourism, arts, and cultural ecosystem. Built on open protocols and interoperable frameworks, the platform connects travelers with authentic local experiences—ranging from heritage walks and artisan workshops to cultural performances—making them easily discoverable and bookable across multiple digital platforms.
                </p>
                <p>
                  The initiative aims to unlock the vast but fragmented tourism economy by creating an open, scalable network where communities, startups, and institutions can participate equally. By combining discoverability, trust, identity systems, payments, and data infrastructure into a unified framework, OneTAC enables a more inclusive and sustainable digital backbone for India's cultural and tourism landscape.
                </p>
              </div>
            </div>

            {/* Metadata (Company, Timeline) */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-1">
                <span className="text-[16px] text-black/40 italic tracking-wider">Company</span>
                <span className="text-[18px] md:text-[20px] font-bold text-brand-black">OneTac</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[16px] text-black/40 italic tracking-wider">Timeline</span>
                <span className="text-[18px] md:text-[20px] font-bold text-brand-black">January 2025 (2 weeks sprint)</span>
              </div>
            </div>

            {/* Role & Contributions */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-[16px] text-black/40 italic tracking-wider">Role</span>
                <span className="text-[18px] md:text-[20px] font-bold text-brand-black mb-2">UI/UX Designer</span>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] text-brand-black leading-relaxed tracking-wide">
                  <p>
                    Owned the product design of the OneTAC website, translating a complex decentralized tourism infrastructure into a clear and accessible digital experience. Led the structuring of the platform's information architecture, visual hierarchy, and storytelling to communicate the ecosystem, opportunities, and infrastructure layers to diverse stakeholders including travelers, startups, partners, and policymakers.
                  </p>
                  <p>
                    Alongside the website, contributed to iterating the first prototype of the Practitioner App, refining early flows for practitioner onboarding, experience listing, and participation in the OneTAC network. Collaborated closely with product and engineering teams to evolve initial concepts into a scalable product foundation, helping shape an ecosystem aimed at unlocking cultural experiences across 700+ districts and enabling opportunities within India's growing $3T tourism economy.
                  </p>
                </div>
              </div>
            </div>

            {/* Team */}
            <div className="flex flex-col gap-2">
              <span className="text-[16px] text-black/40 italic tracking-wider mb-2">Team</span>
              <ul className="flex flex-col gap-3 text-[18px] md:text-[20px] font-bold text-brand-black tracking-wide">
                <li>1 UI/UX Designer</li>
                <li>3 Leads</li>
                <li>4 Stakeholders</li>
                <li>1 Content Writer</li>
                <li>3 Developers</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Devices Overview Section */}
      <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1920px] mx-auto flex flex-col gap-8">
          {/* Images Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Box (iMac) */}
            <div className="lg:col-span-8 bg-[#FCECD8] rounded-3xl p-8 md:p-12 lg:p-16 flex items-center justify-center w-full">
              <Image 
                src="/imacplayer.svg" 
                alt="OneTac iMac Overview" 
                width={1200}
                height={900}
                className="w-full h-auto object-contain" 
              />
            </div>

            {/* Right Box (iPhone) */}
            <div className="lg:col-span-4 bg-[#FCECD8] rounded-3xl p-8 md:p-12 lg:p-16 flex items-center justify-center w-full">
              <Image 
                src="/onetaciphone.svg" 
                alt="OneTac iPhone View" 
                width={600}
                height={1200}
                className="w-[70%] md:w-full h-auto object-contain" 
              />
            </div>
          </div>
          
          {/* Text Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 flex flex-col gap-2 font-kalam font-normal text-[16px] text-[#B86835] pl-4 md:pl-8 max-w-3xl">
              <span className="italic tracking-wider">Quick Overview</span>
              <p className="leading-relaxed">
                My goal was to help translate OneTAC's vision into a scalable <br />
                and intuitive digital platform — structuring complex tourism, arts, <br />
                and cultural ecosystems into experiences that feel seamless, <br />
                discoverable, and accessible across diverse user groups.
              </p>
            </div>
          </div>
        </div>
      </section>

      </div>

      <div id="research-phase">
        {/* Problem Section */}
      <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Left Column (Empty) */}
          <div className="hidden md:block md:col-span-4 lg:col-span-5"></div>

          {/* Right Column (Text Content) */}
          <div className="md:col-span-8 lg:col-span-7 flex flex-col gap-16 font-kalam">
            
            {/* What was the problem? */}
            <div className="flex flex-col gap-6">
              <h2 className="text-[28px] md:text-[32px] font-bold text-brand-black leading-tight tracking-wide">
                What was the problem?
              </h2>
              <ul className="flex flex-col gap-6 text-[16px] md:text-[18px] text-brand-black leading-relaxed tracking-wide">
                <li className="flex gap-3">
                  <span>·</span>
                  <span>India's tourism, arts, and cultural experiences are highly fragmented, making it difficult for travelers to discover authentic local offerings beyond mainstream destinations.</span>
                </li>
                <li className="flex gap-3">
                  <span>·</span>
                  <span>Many artists, practitioners, and small cultural businesses lack digital access, limiting their visibility and ability to reach broader audiences.</span>
                </li>
                <li className="flex gap-3">
                  <span>·</span>
                  <span>Existing travel platforms often prioritize commercial tourism products, leaving grassroots cultural experiences underrepresented.</span>
                </li>
                <li className="flex gap-3">
                  <span>·</span>
                  <span>There was no unified digital infrastructure connecting cultural assets, practitioners, and travelers across different platforms and ecosystems.</span>
                </li>
              </ul>
            </div>

            {/* Understanding the Problem */}
            <div className="flex flex-col gap-6">
              <h2 className="text-[28px] md:text-[32px] font-bold text-brand-black leading-tight tracking-wide">
                Understanding the Problem
              </h2>
              <ul className="flex flex-col gap-6 text-[16px] md:text-[18px] text-brand-black leading-relaxed tracking-wide">
                <li className="flex gap-3">
                  <span>·</span>
                  <span>Creating a platform that unifies discovery and access to diverse cultural experiences across India.</span>
                </li>
                <li className="flex gap-3">
                  <span>·</span>
                  <span>Enabling practitioners and local communities to participate digitally, making it easier to list and share their experiences.</span>
                </li>
                <li className="flex gap-3">
                  <span>·</span>
                  <span>Building an open, interoperable ecosystem where multiple platforms and startups can build services on top of shared infrastructure.</span>
                </li>
                <li className="flex gap-3">
                  <span>·</span>
                  <span>Supporting a scalable tourism ecosystem that unlocks opportunities across 700+ districts and emerging cultural destinations.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
      </div>

      <div id="ideate">
        {/* Design Approach Section */}
      <section className="w-full bg-white pb-10 px-6 md:px-8 lg:px-12">
        <div className="max-w-[1920px] mx-auto flex flex-col gap-12 font-kalam">
          {/* Header Text */}
          <div className="flex flex-col gap-4 mx-auto w-full overflow-hidden">
            <span className="text-[16px] md:text-[18px] italic text-brand-black/60 tracking-wider text-center">
              My Design Approach
            </span>
            <div className="flex justify-center w-full">
              <p className="text-[14px] md:text-[17px] xl:text-[18px] text-brand-black leading-relaxed font-normal text-left md:whitespace-nowrap w-fit">
                My approach focused on simplifying complexity. Since the platform involved multiple engines, automation logic, and system integrations, the goal was to structure the experience in a way that felt <br className="hidden md:block" />
                intuitive while still supporting powerful capabilities. I prioritized clarity in workflows, modular system thinking, and scalable design patterns so the product could evolve as the platform grew.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diagram Image Section (Full Width) */}
      <section className="w-full bg-white pb-20 flex flex-col gap-6">
        {/* Phase Labels */}
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center font-kalam italic text-[16px] md:text-[18px] text-brand-black/70 font-semibold">
          <span>Discovery</span>
          <span>Design</span>
          <span>Delivery</span>
        </div>
        {/* Diagram Image */}
        <div className="w-full flex justify-center">
          <Image 
            src="/onetacdesignapproach.svg" 
            alt="OneTac Design Approach Diagram" 
            width={1920} 
            height={1080} 
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      </div>

      <div id="design-guidelines">
        {/* Experience Structure Section */}
      <section className="w-full bg-[#faeee5] py-20 px-6 md:px-12 lg:px-24 text-[#352316]">
        <div className="max-w-[1920px] mx-auto flex flex-col gap-12 font-kalam">
          {/* Header Text */}
          <div className="flex flex-col gap-6 max-w-6xl">
            <span className="text-[16px] md:text-[18px] italic opacity-85 tracking-wider">
              How the Experience Was Structured
            </span>
            <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-relaxed">
              <p>
                After defining the vision and platform goals, the next step was structuring the website so visitors could understand the initiative progressively. Because OneTAC represents a large ecosystem involving tourism, arts, culture, institutions, and practitioners, the website needed to guide users through the story in a clear and logical flow.
              </p>
              <p>
                The structure was designed to move users through five key stages: awareness, understanding, trust, proof, and engagement. Each page plays a specific role in communicating the initiative and encouraging participation in the ecosystem.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="flex flex-col gap-6 w-full mt-4">
            {/* Row 1: 3 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-[#422A18] text-[#faeee5] rounded-2xl p-8 flex flex-col gap-6">
                <h3 className="text-[18px] md:text-[20px] font-bold">Landing Page (Awareness)</h3>
                <ul className="flex flex-col gap-4 text-[14px] md:text-[16px] opacity-90 leading-relaxed">
                  <li className="flex gap-2.5">
                    <span className="flex-shrink-0">·</span>
                    <span>Introduce the vision of OneTAC and the idea of a digital backbone for tourism, arts, and culture</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="flex-shrink-0">·</span>
                    <span>Create awareness and provide a high-level overview of the ecosystem</span>
                  </li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="bg-[#422A18] text-[#faeee5] rounded-2xl p-8 flex flex-col gap-6">
                <h3 className="text-[18px] md:text-[20px] font-bold">About OneTAC (Understanding)</h3>
                <ul className="flex flex-col gap-4 text-[14px] md:text-[16px] opacity-90 leading-relaxed">
                  <li className="flex gap-2.5">
                    <span className="flex-shrink-0">·</span>
                    <span>Explain the concept of decentralized tourism infrastructure and open protocols</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="flex-shrink-0">·</span>
                    <span>Help users understand how the ecosystem and technology layers work</span>
                  </li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="bg-[#422A18] text-[#faeee5] rounded-2xl p-8 flex flex-col gap-6">
                <h3 className="text-[18px] md:text-[20px] font-bold">People & Partnerships (Trust)</h3>
                <ul className="flex flex-col gap-4 text-[14px] md:text-[16px] opacity-90 leading-relaxed">
                  <li className="flex gap-2.5">
                    <span className="flex-shrink-0">·</span>
                    <span>Highlight founding partners, collaborators, and organizations supporting the initiative</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="flex-shrink-0">·</span>
                    <span>Build credibility and showcase ecosystem collaboration</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Row 2: 2 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 4 */}
              <div className="bg-[#422A18] text-[#faeee5] rounded-2xl p-8 flex flex-col gap-6">
                <h3 className="text-[18px] md:text-[20px] font-bold">Impact & Experience (Proof)</h3>
                <ul className="flex flex-col gap-4 text-[14px] md:text-[16px] opacity-90 leading-relaxed">
                  <li className="flex gap-2.5">
                    <span className="flex-shrink-0">·</span>
                    <span>Demonstrate how OneTAC enables opportunities for practitioners, travelers, and startups</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="flex-shrink-0">·</span>
                    <span>Communicate the real-world impact of the platform</span>
                  </li>
                </ul>
              </div>

              {/* Card 5 */}
              <div className="bg-[#422A18] text-[#faeee5] rounded-2xl p-8 flex flex-col gap-6">
                <h3 className="text-[18px] md:text-[20px] font-bold">Engage / Begin Your Journey (Conversion)</h3>
                <ul className="flex flex-col gap-4 text-[14px] md:text-[16px] opacity-90 leading-relaxed">
                  <li className="flex gap-2.5">
                    <span className="flex-shrink-0">·</span>
                    <span>Provide a pathway for practitioners, partners, and stakeholders to connect or participate</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="flex-shrink-0">·</span>
                    <span>Encourage engagement and ecosystem participation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      </div>

      <div id="final-design">
        {/* Showcase Image Section */}
      <section className="w-full bg-white">
        <div className="w-full">
          <Image 
            src="/onetacimage1.svg" 
            alt="OneTac Showcase Image 1" 
            width={1920} 
            height={1080} 
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Showcase Image 2 Section */}
      <section className="w-full bg-white">
        <div className="w-full">
          <Image 
            src="/onetacimage2.svg" 
            alt="OneTac Showcase Image 2" 
            width={1920} 
            height={1080} 
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Showcase Image 3 Section */}
      <section className="w-full bg-white">
        <div className="w-full">
          <Image 
            src="/onetacimage3.svg" 
            alt="OneTac Showcase Image 3" 
            width={1920} 
            height={1080} 
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Showcase Image 4 Section */}
      <section className="w-full bg-white">
        <div className="w-full">
          <Image 
            src="/onetacimage4.svg" 
            alt="OneTac Showcase Image 4" 
            width={1920} 
            height={1080} 
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Showcase Image 5 Section */}
      <section className="w-full bg-white">
        <div className="w-full">
          <Image 
            src="/onetacimage5.svg" 
            alt="OneTac Showcase Image 5" 
            width={1920} 
            height={1080} 
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Final Outcomes & Reflections Section */}
      <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-24 font-kalam text-brand-black">
        <div className="max-w-[1920px] mx-auto flex flex-col gap-12">
          
          {/* Header */}
          <div className="flex flex-col gap-4">
            <h2 className="text-[20px] md:text-[24px] font-bold">Final Outcomes & Reflections</h2>
            <p className="text-[16px] md:text-[18px] leading-relaxed">
              Bringing the product together meant aligning the platform vision, ecosystem structure, and website experience into a clear narrative that guides users from discovery to participation. The work synthesized research, structure, and design decisions into a cohesive product experience, delivered within a focused two-week sprint.
            </p>
          </div>

          {/* Outcomes & Impact Card */}
          <div className="bg-[#faeee5] rounded-2xl p-8 md:p-10 flex flex-col gap-6">
            <h3 className="text-[18px] md:text-[20px] font-bold">Outcomes & Impact</h3>
            <ul className="flex flex-col gap-4 text-[15px] md:text-[16px] leading-relaxed">
              <li className="flex gap-2.5">
                <span className="flex-shrink-0">·</span>
                <span>3000+ startup ecosystem exposure during Startup Mahakumbh, Delhi, creating strong visibility for the OneTAC initiative.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="flex-shrink-0">·</span>
                <span>Addressed 5+ key stakeholder groups including travelers, practitioners, startups, ecosystem partners, and policymakers.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="flex-shrink-0">·</span>
                <span>Communicated the broader ecosystem vision spanning 700+ districts across India's tourism landscape.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="flex-shrink-0">·</span>
                <span>Highlighted opportunities within the $3T+ tourism economy, positioning OneTAC as a digital backbone for the sector.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="flex-shrink-0">·</span>
                <span>Established the website as the central platform for explaining the OneTAC ecosystem and infrastructure layers.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="flex-shrink-0">·</span>
                <span>The prototype of the Practitioner Mobile App further strengthened ecosystem understanding, demonstrating how cultural practitioners could onboard and participate in the network.</span>
              </li>
            </ul>
          </div>

          {/* What I Learned Card */}
          <div className="bg-[#faeee5] rounded-2xl p-8 md:p-10 flex flex-col gap-6">
            <h3 className="text-[18px] md:text-[20px] font-bold">What I learned</h3>
            <ul className="flex flex-col gap-4 text-[15px] md:text-[16px] leading-relaxed">
              <li className="flex gap-2.5">
                <span className="flex-shrink-0">·</span>
                <span>Designing for a multi-stakeholder ecosystem requires balancing different user needs while maintaining a clear narrative across the platform.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="flex-shrink-0">·</span>
                <span>Complex systems like digital public infrastructure must be simplified through strong information architecture and visual storytelling.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="flex-shrink-0">·</span>
                <span>Early prototypes, such as the Practitioner Mobile App, can significantly improve stakeholder understanding of how a platform will function in real-world scenarios.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="flex-shrink-0">·</span>
                <span>Communicating a large-scale initiative requires aligning product thinking, ecosystem storytelling, and strategic positioning.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="flex-shrink-0">·</span>
                <span>Exposure through events and ecosystem platforms highlighted how design can act as a bridge between technology, policy, and community participation.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="flex-shrink-0">·</span>
                <span>The project reinforced the importance of designing not just for users, but for an entire ecosystem of collaborators and partners.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>
      </div>
      <Dock viewProjectUrl="/projects" showWebsiteDrafts={false} />
    </div>
  );
}
