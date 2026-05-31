"use client";

import React from "react";
import { ImageWithLoader as Image } from "../components/ImageWithLoader";
import ScrollableImageGallery from "../components/ScrollableImageGallery";
import Dock from "../components/Dock";

/* 5 sections
view project */

export default function SimplitaCaseStudy() {
  return (
    <div className="min-h-screen bg-brand-yellow">
      <div id="introduction">
        {/* Hero Section */}
      <section className="min-h-screen flex flex-col relative overflow-hidden">
        {/* Center text section */}
        <div className="flex-1 flex items-center justify-center px-4 pt-32 pb-40">
          <p className="text-[24px] font-bold font-sans italic text-center max-w-6xl leading-relaxed text-brand-black">
            An enterprise AI automation platform that enables businesses to design, automate,<br />
            and deploy complex workflows through a unified visual environment.
          </p>
        </div>

        {/* Bottom text section */}
        <div className="absolute bottom-8 left-0 w-full flex items-center justify-center gap-6 md:gap-10 whitespace-nowrap overflow-hidden px-4 pointer-events-none">
          <h1 className="text-[120px] font-bold font-sans text-brand-black leading-none tracking-tight">
            Simplita.ai
          </h1>

          {/* Starburst Icon */}
          <div className="w-20 h-20 md:w-[12vw] md:h-[8vw] flex-shrink-0 flex items-center justify-center">
            <Image src="/sun.svg" alt="Sun Icon" width={105} height={74} className="w-full h-auto" />
          </div>

          <h1 className="text-[120px] font-bold font-sans text-brand-black leading-none tracking-tight">
            Simplita.ai
          </h1>
        </div>
      </section>

      {/* Media Section */}
      <section className="w-full flex flex-col md:flex-row bg-[#A6F7CD]">
        {/* Left: YouTube Video Embed */}
        <div className="w-full md:w-1/2 aspect-video md:aspect-auto md:min-h-screen bg-black relative">
          <iframe
            className="w-full h-full absolute inset-0"
            src="https://www.youtube.com/embed/67zZ24IpIqo"
            title="Simplita Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* Right: Simplita UI Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12 lg:p-16">
          <Image
            src="/simplitaui.svg"
            alt="Simplita UI Interface"
            width={1200}
            height={900}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Project Details Section */}
      <section className="w-full bg-white flex flex-col md:flex-row px-6 py-16 md:p-16 lg:p-24">
        {/* Left empty space for desktop */}
        <div className="hidden md:block md:w-1/2 lg:w-[45%]"></div>

        {/* Right content */}
        <div className="w-full md:w-1/2 lg:w-[55%] flex flex-col gap-10 font-sans text-brand-black max-w-3xl">
          {/* Main descriptions */}
          <div className="flex flex-col gap-6">
            <h2 className="text-[24px] font-bold">Designing the foundation of Simplita</h2>
            <p className="text-[16px] font-normal leading-relaxed">
              Simplita.ai is an enterprise AI automation platform that enables businesses to design, automate, and deploy
              complex workflows through a unified visual environment. By connecting applications, data, and AI agents, the
              platform helps organizations build scalable automation systems that streamline operations and accelerate
              digital transformation.
            </p>
            <p className="text-[16px] font-normal leading-relaxed">
              Built to support modern enterprise needs, Simplita combines visual workflow design, intelligent automation,
              and full-stack development capabilities into a single platform, allowing teams to create powerful business
              systems with greater flexibility and control.
            </p>
          </div>

          {/* Details Grid or List */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1">
              <h3 className="text-black/40 italic text-[16px] font-normal">Company</h3>
              <p className="text-[16px] font-normal">SIMPLITA AI TECHNOLOGIES PVT LTD</p>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-black/40 italic text-[16px] font-normal">Timeline</h3>
              <p className="text-[16px] font-normal">April 2025 - February 2026</p>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-black/40 italic text-[16px] font-normal">Role</h3>
              <p className="text-[16px] font-normal">Product Designer</p>
              <p className="text-[16px] font-normal leading-relaxed mt-1">
                I led the product design for Simplita—defining the UX, shaping core workflows, and helping bring the first
                usable version of the platform to life. I also worked on building the design system and collaborated closely
                with developers to translate complex automation ideas into clear, usable product experiences.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-black/40 italic text-[16px] font-normal">Team</h3>
              <ul className="flex flex-col gap-1 text-[16px] font-normal">
                <li>1 Product Designer</li>
                <li>2 Ui/UX Designers</li>
                <li>1 Product Manager</li>
                <li>2 Engineering Manager</li>
                <li>4 Tech Leads</li>
                <li>7 Developers</li>
                <li>7 Simplita Automation Engineers (In-app developers)</li>
                <li>4 Digital Marketing staffs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="w-full bg-gradient-to-b from-[#1cdb8b] to-[#76fbc4] flex flex-col pt-16 md:pt-24 min-h-screen relative overflow-hidden">
        {/* Text content */}
        <div className="px-6 md:px-16 lg:px-24 mb-16 flex flex-col gap-4 z-10">
          <h3 className="font-sans italic text-[16px] text-white/90">Quick Overview</h3>
          <p className="font-sans italic text-[16px] font-normal text-white leading-relaxed max-w-4xl">
            My goal was to help translate Simplita&apos;s vision into a clear and<br />
            usable product—structuring the experience so complex automation<br />
            workflows could be designed, understood, and managed through<br />
            an intuitive interface.
          </p>
        </div>

        {/* Scrollable image placeholders */}
        <ScrollableImageGallery />
      </section>
      </div>

      <div id="research-phase">
        {/* Design Approach Section */}
      <section className="w-full bg-white flex flex-col items-center px-6 md:px-16 lg:px-24 py-20">
        <div className="w-full flex flex-col items-center text-center gap-6 mb-16 overflow-hidden">
          <h3 className="font-sans text-[16px] font-normal text-brand-black/70">My Design Approach</h3>
          <p className="font-sans text-[16px] font-normal text-brand-black leading-relaxed whitespace-nowrap">
            My approach focused on simplifying complexity. Since the platform involved multiple engines, automation logic, and system integrations, the goal was to structure the experience in a way that felt<br />
            intuitive while still supporting powerful capabilities. I prioritized clarity in workflows, modular system thinking, and scalable design patterns so the product could evolve as the platform grew.
          </p>
        </div>

        <div className="w-full max-w-[1400px] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div className="w-full aspect-[4/5] md:aspect-square bg-[#F0FAF4] rounded-[32px] flex items-center justify-center p-8 md:p-12 overflow-hidden">
            <Image src="/imac.svg" alt="iMac mockup" width={800} height={800} className="w-full h-auto object-contain drop-shadow-2xl" />
          </div>
          <div className="w-full aspect-[4/5] md:aspect-square bg-[#F0FAF4] rounded-[32px] flex items-center justify-center p-8 md:p-12 overflow-hidden">
            <Image src="/macbook.svg" alt="MacBook mockup" width={800} height={800} className="w-full h-auto object-contain drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="w-full bg-white flex flex-col md:flex-row px-6 py-16 md:px-16 lg:px-24 md:pb-32">
        {/* Left empty space for desktop */}
        <div className="hidden md:block md:w-1/2 lg:w-[45%]"></div>

        {/* Right content */}
        <div className="w-full md:w-1/2 lg:w-[55%] flex flex-col gap-16 font-sans text-brand-black max-w-3xl">
          {/* What was the problem? */}
          <div className="flex flex-col gap-6">
            <h2 className="text-[24px] font-bold">What was the problem?</h2>
            <ul className="flex flex-col gap-6 text-[16px] font-normal">
              <li className="flex gap-2">
                <span>•</span>
                <p className="leading-relaxed">Businesses often manage their operations across multiple disconnected tools, spreadsheets, and manual processes, making workflows fragmented and difficult to scale.</p>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <p className="leading-relaxed">Implementing automation or AI-driven solutions typically requires heavy engineering effort, slowing down experimentation and limiting accessibility for many teams.</p>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <p className="leading-relaxed">Existing automation tools often focus on isolated workflows rather than complete systems, making it difficult for organizations to build scalable, long-term solutions.</p>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <p className="leading-relaxed">Teams lacked a unified environment to design, connect, and deploy workflows, data systems, and AI logic in a structured way.</p>
              </li>
            </ul>
          </div>

          {/* Understanding the Problem */}
          <div className="flex flex-col gap-6">
            <h2 className="text-[24px] font-bold">Understanding the Problem</h2>
            <ul className="flex flex-col gap-6 text-[16px] font-normal">
              <li className="flex gap-2">
                <span>•</span>
                <p className="leading-relaxed">Creating a platform where teams can visually design and manage complex automation workflows without needing to build everything from scratch.</p>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <p className="leading-relaxed">Providing a unified environment that connects workflows, data, integrations, and AI agents into a single system.</p>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <p className="leading-relaxed">Enabling businesses to build scalable automation systems rather than isolated tools, making it easier to evolve workflows as needs grow.</p>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <p className="leading-relaxed">Giving organizations greater control and ownership over their automation infrastructure, ensuring long-term flexibility and adaptability.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* iMac Video Player Section */}
      <section className="w-full bg-gradient-to-b from-[#1cdb8b] to-[#76fbc4] flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 py-16 md:py-32 overflow-hidden">
        <div className="w-full max-w-[1111px] relative flex justify-center items-center">
          {/* The iMac image which includes the background */}
          <Image
            src="/imacplayer.svg"
            alt="iMac Video Player"
            width={1111}
            height={834}
            className="w-full h-auto drop-shadow-2xl relative z-10"
          />

          {/* Video Placeholder (Absolute positioned to align with the iMac screen) */}
          {/* Tweak these top, left, width, and height percentages to perfectly align with the white screen of your SVG */}
          <div
            className="absolute z-20 bg-black/90 flex flex-col items-center justify-center rounded-sm overflow-hidden"
            style={{
              top: '22%',
              left: '26.8%',
              width: '46.4%',
              height: '37.8%'
            }}
          >
            <div className="w-12 h-12 md:w-20 md:h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md cursor-pointer hover:bg-white/20 transition-all hover:scale-105">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Design Approach Timeline Section */}
      <section className="w-full bg-white flex flex-col items-center px-6 md:px-16 lg:px-24 py-20 pb-32">
        <div className="w-full flex flex-col items-center text-center gap-6 mb-16">
          <h3 className="font-sans text-[16px] font-normal text-brand-black">My Design Approach</h3>
          <p className="font-sans text-[16px] font-normal text-brand-black leading-relaxed w-full max-w-[1400px]">
            My approach focused on simplifying complexity. Since the platform involved multiple engines, automation logic, and system integrations, the goal was to structure the experience in a way that felt
            <br className="hidden md:block" />
            intuitive while still supporting powerful capabilities. I prioritized clarity in workflows, modular system thinking, and scalable design patterns so the product could evolve as the platform grew.
          </p>
        </div>

        <div className="w-full max-w-[1400px] flex justify-between items-center mb-4 px-2 md:px-8">
          <span className="font-sans text-[16px] text-brand-black font-normal">Discovery</span>
          <span className="font-sans text-[16px] text-brand-black font-normal">Design</span>
          <span className="font-sans text-[16px] text-brand-black font-normal">Delivery</span>
        </div>

        <div className="w-full max-w-[1400px] flex items-center justify-center">
          <Image src="/designapproach.svg" alt="Design Approach Timeline" width={1400} height={800} className="w-full h-auto object-contain" />
        </div>
      </section>

      {/* Research Phase Section */}
      <section className="w-full bg-[#E1FCEF] flex flex-col items-center px-6 md:px-16 lg:px-24 py-20 lg:py-28">
        {/* Heading */}
        <div className="w-full flex flex-col items-center text-center mb-20 lg:mb-28">
          <h2 className="font-sans text-[24px] font-bold italic text-[#039855] leading-relaxed text-center">
            I moved into a focused research phase, combining desk research with a few user interviews to identify patterns, challenges, <br />
            and opportunities in how teams approach workflow automation.
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="w-full max-w-[1200px] flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24 mb-20 lg:mb-28">
          {/* Left Column */}
          <div className="flex flex-col gap-8 w-full md:w-1/2">
            {/* Stat 1 */}
            <div className="flex items-center gap-4">
              <span className="w-[45%] md:w-[40%] font-sans text-[16px] font-normal text-brand-black leading-tight text-right md:text-left">Teams want simpler automation tools</span>
              <div className="w-[55%] md:w-[60%] flex items-center gap-3">
                <div className="h-10 lg:h-12 bg-[#0A8B45]" style={{ width: '61%' }}></div>
                <span className="font-sans text-[16px] font-normal text-brand-black">61%</span>
              </div>
            </div>
            {/* Stat 2 */}
            <div className="flex items-center gap-4">
              <span className="w-[45%] md:w-[40%] font-sans text-[16px] font-normal text-brand-black leading-tight text-right md:text-left">Visual workflows improve understanding</span>
              <div className="w-[55%] md:w-[60%] flex items-center gap-3">
                <div className="h-10 lg:h-12 bg-[#30E090]" style={{ width: '74%' }}></div>
                <span className="font-sans text-[16px] font-normal text-brand-black">74%</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8 w-full md:w-1/2">
            {/* Stat 3 */}
            <div className="flex items-center gap-4">
              <span className="w-[45%] md:w-[40%] font-sans text-[16px] font-normal text-brand-black leading-tight text-right md:text-left">Fragmented tools slow operations</span>
              <div className="w-[55%] md:w-[60%] flex items-center gap-3">
                <div className="h-10 lg:h-12 bg-[#0A8B45]" style={{ width: '68%' }}></div>
                <span className="font-sans text-[16px] font-normal text-brand-black">68%</span>
              </div>
            </div>
            {/* Stat 4 */}
            <div className="flex items-center gap-4">
              <span className="w-[45%] md:w-[40%] font-sans text-[16px] font-normal text-brand-black leading-tight text-right md:text-left">Faster experimentation is important</span>
              <div className="w-[55%] md:w-[60%] flex items-center gap-3">
                <div className="h-10 lg:h-12 bg-[#30E090]" style={{ width: '57%' }}></div>
                <span className="font-sans text-[16px] font-normal text-brand-black">57%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="w-full flex flex-col items-center text-center gap-3 max-w-5xl">
          <h4 className="font-sans text-[16px] font-normal text-brand-black">Professional Intake</h4>
          <p className="font-sans text-[16px] font-normal text-brand-black leading-relaxed whitespace-nowrap">
            These pointed to a clear need for a platform that simplifies complex automation—bringing workflows, data, and integrations into one scalable, visual system.
          </p>
          <p className="font-sans text-[16px] font-normal text-brand-black mt-16 md:mt-24 whitespace-nowrap text-center">
            Findings emerged from a combination of desk research across industry reports and direct user conversations conducted during the discovery phase.
          </p>
        </div>
      </section>

      {/* People Quotes Section */}
      <section className="w-full bg-white flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 py-16 md:py-24">
        <div className="w-full flex flex-col items-center text-center gap-8 mb-12 px-4">
          <p className="text-[16px] font-normal text-brand-black leading-relaxed w-full max-w-[1400px]" style={{ fontFamily: 'var(--font-kalam)' }}>
            I connected with multiple users from different business and operational backgrounds to understand how they currently manage workflows and automation. These conversations focused on <br className="hidden md:block" />
            identifying challenges with existing tools, understanding how teams structure their processes, and exploring what they expect from a scalable automation platform.
          </p>
          <p className="text-[16px] font-normal text-brand-black" style={{ fontFamily: 'var(--font-kalam)' }}>
            Some of them said:
          </p>
        </div>
        <div className="w-full max-w-[1400px] flex items-center justify-center">
          <Image src="/peoplequotes.svg" alt="User Research Quotes" width={1400} height={800} className="w-full h-auto object-contain" />
        </div>
      </section>

      {/* Insights Section */}
      <section className="w-full bg-[#E1FCEF] flex flex-col items-center px-6 md:px-16 lg:px-24 py-20 lg:py-28">
        <h2 className="text-[32px] font-normal italic text-[#039855] mb-12 lg:mb-16" style={{ fontFamily: 'var(--font-kalam)' }}>
          Insights
        </h2>

        <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1 */}
          <div className="bg-[#04824E] rounded-xl p-8 lg:p-10 flex flex-col items-center gap-8 shadow-sm transform scale-105 origin-top z-10">
            <Image src="/swirl.svg" alt="Swirl Icon" width={80} height={40} className="w-auto h-12" />
            <p className="text-[16px] text-white font-normal text-left w-full leading-relaxed" style={{ fontFamily: 'var(--font-kalam)' }}>
              Workflows should be visual so it&apos;s easier to understand how everything connects.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#04824E] rounded-xl p-8 lg:p-10 flex flex-col items-center gap-8 shadow-sm transform scale-95 origin-top">
            <Image src="/swirl.svg" alt="Swirl Icon" width={80} height={40} className="w-auto h-12" />
            <p className="text-[16px] text-white font-normal text-left w-full leading-relaxed" style={{ fontFamily: 'var(--font-kalam)' }}>
              Managing workflows across multiple tools makes operations harder.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#04824E] rounded-xl p-8 lg:p-10 flex flex-col items-center gap-8 shadow-sm transform scale-105 origin-top z-10">
            <Image src="/swirl.svg" alt="Swirl Icon" width={80} height={40} className="w-auto h-12" />
            <p className="text-[16px] text-white font-normal text-left w-full leading-relaxed" style={{ fontFamily: 'var(--font-kalam)' }}>
              Teams should be able to adjust automation without heavy engineering effort.
            </p>
          </div>
        </div>
      </section>

      {/* User Needs Section */}
      <section className="w-full bg-white flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 py-16 md:py-24">
        <div className="w-full max-w-[1344px] flex flex-col items-start gap-6 mb-12">
          <h2 className="text-[28px] md:text-[32px] font-bold text-brand-black" style={{ fontFamily: 'var(--font-kalam)' }}>
            What are the user needs?
          </h2>
          <ul className="flex flex-col gap-4 text-[16px] text-brand-black leading-relaxed" style={{ fontFamily: 'var(--font-kalam)' }}>
            <li className="flex items-start">
              <span className="mr-2">&middot;</span>
              <span>Businesses often manage their operations across multiple disconnected tools, spreadsheets, and manual processes, making workflows fragmented and difficult to scale.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">&middot;</span>
              <span>Implementing automation or AI-driven solutions typically requires heavy engineering effort, slowing down experimentation and limiting accessibility for many teams.</span>
            </li>
          </ul>
        </div>

        <div className="w-full max-w-[1344px] flex items-center justify-center">
          <Image src="/userneeds.svg" alt="User Needs Grid" width={1344} height={858} className="w-full h-auto object-contain" />
        </div>
      </section>

      </div>

      <div id="ideate">
        {/* Mapping & Prioritizing Section */}
      <section className="w-full bg-white flex justify-center px-6 md:px-16 lg:px-24 py-16 md:py-24">
        <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Empty left column */}
          <div className="hidden lg:block lg:col-span-5"></div>

          {/* Right column content */}
          <div className="w-full flex flex-col items-start gap-8 lg:col-span-7">
            <h2 className="text-[28px] md:text-[32px] font-bold text-brand-black" style={{ fontFamily: 'var(--font-kalam)' }}>
              Mapping &amp; Prioritizing Core Workflows
            </h2>

            <p className="text-[16px] text-brand-black leading-relaxed" style={{ fontFamily: 'var(--font-kalam)' }}>
              To shape the platform effectively, we first mapped the key tasks users needed to accomplish within the system. These workflows were then prioritized based on their importance and frequency, helping define the foundation for the platform&apos;s first functional version.
            </p>

            {/* Table Box */}
            <div className="w-full bg-[#E1FCEF] p-8 flex flex-col gap-6">
              <p className="text-[16px] font-bold text-brand-black" style={{ fontFamily: 'var(--font-kalam)' }}>
                Example of a <span className="text-[#039855] font-normal italic">Tasks-To-Be-Completed</span> for creating an automation workflow
              </p>

              <div className="w-full grid grid-cols-4 gap-4 text-[14px] text-brand-black" style={{ fontFamily: 'var(--font-kalam)' }}>
                {/* Headers */}
                <div className="font-bold">Actor</div>
                <div className="font-bold">Scenario</div>
                <div className="font-bold">Motivation</div>
                <div className="font-bold">Outcome</div>

                {/* Content */}
                <div>Operations Manager</div>
                <div>When I need to automate a repetitive operational process</div>
                <div>I want a clear way to design and connect the workflow steps</div>
                <div>I want a clear way to design and connect the workflow steps</div>
              </div>
            </div>

            <p className="text-[16px] text-brand-black leading-relaxed" style={{ fontFamily: 'var(--font-kalam)' }}>
              Since the product was introducing a new concept to the market, gaining a clear understanding of the space was initially challenging. Through user interviews, diverse perspectives from stakeholders, and continuous exploration of industry practices, gradually built a deeper understanding of the problem space and the opportunities within it.
            </p>
          </div>
        </div>
      </section>

      {/* Competitor Analysis Section */}
      <section className="w-full bg-[#039855] flex flex-col items-center justify-center px-4 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="w-full max-w-[1400px] bg-white rounded-xl md:rounded-2xl p-6 md:p-12 shadow-sm overflow-hidden">
          <h2 className="text-[20px] md:text-[24px] font-bold italic text-brand-black mb-6" style={{ fontFamily: 'var(--font-kalam)' }}>
            Competitor Analysis
          </h2>

          <div className="w-full overflow-x-auto pb-4">
            <table className="w-full text-left border-collapse min-w-[1200px]" style={{ fontFamily: 'var(--font-kalam)' }}>
              <thead>
                <tr className="border-b-2 border-brand-black text-[15px] md:text-[16px] font-bold italic text-brand-black">
                  <th className="pb-4 pr-4 font-bold">Product Name</th>
                  <th className="pb-4 pr-4 font-bold">Platform</th>
                  <th className="pb-4 pr-4 font-bold">Core force</th>
                  <th className="pb-4 pr-4 font-bold">Visual Builder</th>
                  <th className="pb-4 pr-4 font-bold">AI Capabilities</th>
                  <th className="pb-4 pr-4 font-bold">Integrations</th>
                  <th className="pb-4 pr-4 font-bold">Database Handling</th>
                  <th className="pb-4 pr-4 font-bold">Deployment</th>
                  <th className="pb-4 pr-4 font-bold">Collaboration</th>
                </tr>
              </thead>
              <tbody className="text-[14px] md:text-[15px] text-brand-black">
                <tr className="border-b border-transparent">
                  <td className="py-5 pr-4 italic">n8n</td>
                  <td className="py-5 pr-4 italic">Web/Self-hosted</td>
                  <td className="py-5 pr-4 italic">Workflow automation</td>
                  <td className="py-5 pr-4 italic">Node-based workflow builder</td>
                  <td className="py-5 pr-4 italic">Limited AI integrations</td>
                  <td className="py-5 pr-4 italic">Strong API integrations</td>
                  <td className="py-5 pr-4 italic">Basic data handling</td>
                  <td className="py-5 pr-4 italic">Self-host / cloud</td>
                  <td className="py-5 pr-4 italic">Limited</td>
                </tr>
                <tr className="border-b border-transparent">
                  <td className="py-5 pr-4 italic">Make</td>
                  <td className="py-5 pr-4 italic">Web</td>
                  <td className="py-5 pr-4 italic">Automation between apps</td>
                  <td className="py-5 pr-4 italic">Visual workflow automation</td>
                  <td className="py-5 pr-4 italic">Large integration library</td>
                  <td className="py-5 pr-4 italic">Large Integration Library</td>
                  <td className="py-5 pr-4 italic">External data systems</td>
                  <td className="py-5 pr-4 italic">Cloud</td>
                  <td className="py-5 pr-4 italic">Limited</td>
                </tr>
                <tr className="border-b border-transparent">
                  <td className="py-5 pr-4 italic">Zapier</td>
                  <td className="py-5 pr-4 italic">Web</td>
                  <td className="py-5 pr-4 italic">App automation</td>
                  <td className="py-5 pr-4 italic">Simple workflow builder</td>
                  <td className="py-5 pr-4 italic">Large app ecosystem</td>
                  <td className="py-5 pr-4 italic">Large app ecosystem</td>
                  <td className="py-5 pr-4 italic">External storage</td>
                  <td className="py-5 pr-4 italic">Cloud</td>
                  <td className="py-5 pr-4 italic">Limited</td>
                </tr>
                <tr className="border-b border-transparent">
                  <td className="py-5 pr-4 italic">Webflow</td>
                  <td className="py-5 pr-4 italic">Web</td>
                  <td className="py-5 pr-4 italic">Visual website builder</td>
                  <td className="py-5 pr-4 italic">Drag-and-drop UI builder</td>
                  <td className="py-5 pr-4 italic">Integration via APIs</td>
                  <td className="py-5 pr-4 italic">Integrations via APIs</td>
                  <td className="py-5 pr-4 italic">CMS-based data</td>
                  <td className="py-5 pr-4 italic">Cloud</td>
                  <td className="py-5 pr-4 italic">Team Collaboration</td>
                </tr>
                <tr className="border-b border-transparent">
                  <td className="py-5 pr-4 italic">Bubble</td>
                  <td className="py-5 pr-4 italic">Web</td>
                  <td className="py-5 pr-4 italic">No-code app builder</td>
                  <td className="py-5 pr-4 italic">Visual full-stack builder</td>
                  <td className="py-5 pr-4 italic">API integrations</td>
                  <td className="py-5 pr-4 italic">API Integrations</td>
                  <td className="py-5 pr-4 italic">Built-in database</td>
                  <td className="py-5 pr-4 italic">Cloud</td>
                  <td className="py-5 pr-4 italic">Collaborative editing</td>
                </tr>
                <tr>
                  <td className="py-5 pr-4 italic">Retool</td>
                  <td className="py-5 pr-4 italic">Web</td>
                  <td className="py-5 pr-4 italic">Internal tools platform</td>
                  <td className="py-5 pr-4 italic">UI builder + workflow logic</td>
                  <td className="py-5 pr-4 italic">Strong API/database support</td>
                  <td className="py-5 pr-4 italic">Strong API/database support</td>
                  <td className="py-5 pr-4 italic">Native DB Integrations</td>
                  <td className="py-5 pr-4 italic">Cloud / self-host</td>
                  <td className="py-5 pr-4 italic">Team Collaboration</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Product User Journey Section */}
      <section className="w-full bg-white flex flex-col items-center justify-center px-4 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="w-full max-w-[1400px] flex flex-col items-center text-center gap-4 md:gap-6 mb-16">
          <p className="text-[15px] md:text-[16px] text-brand-black italic" style={{ fontFamily: 'var(--font-kalam)' }}>
            Collecting Using Journey
          </p>
          <h2 className="text-[26px] md:text-[32px] font-bold text-brand-black" style={{ fontFamily: 'var(--font-kalam)' }}>
            Structuring user workflows across the platform journey
          </h2>
          <p className="text-[14px] md:text-[16px] text-brand-black italic max-w-[1100px] leading-relaxed" style={{ fontFamily: 'var(--font-kalam)' }}>
            Insights from the research and Tasks-to-be-completed exercises helped identify how users approach automation systems. We grouped these activities into key stages of the product journey, helping us structure the platform experience and define the first MVP features.
          </p>
        </div>

        <div className="w-full max-w-[1400px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-[repeat(7,minmax(0,1fr))] gap-8 lg:gap-4 text-left">
          {/* Card 1 */}
          <div className="flex flex-col items-start gap-2">
            <h3 className="text-[18px] md:text-[20px] font-bold text-brand-black flex items-center gap-1" style={{ fontFamily: 'var(--font-kalam)' }}>
              Discovery <span className="text-[#039855] text-[24px] md:text-[28px] mt-2">*</span>
            </h3>
            <p className="text-[13px] md:text-[14px] text-brand-black leading-relaxed italic" style={{ fontFamily: 'var(--font-kalam)' }}>
              Exploring the platform and understanding how workflows can be visually structured.
            </p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-start gap-2">
            <h3 className="text-[18px] md:text-[20px] font-bold text-brand-black flex items-center gap-1" style={{ fontFamily: 'var(--font-kalam)' }}>
              Setup <span className="text-[#039855] text-[24px] md:text-[28px] mt-2">*</span>
            </h3>
            <p className="text-[13px] md:text-[14px] text-brand-black leading-relaxed italic" style={{ fontFamily: 'var(--font-kalam)' }}>
              Creating projects, configuring environments, connecting APIs, and setting up data sources.
            </p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-start gap-2">
            <h3 className="text-[18px] md:text-[20px] font-bold text-brand-black flex items-center gap-1" style={{ fontFamily: 'var(--font-kalam)' }}>
              Build <span className="text-[#039855] text-[24px] md:text-[28px] mt-2">*</span>
            </h3>
            <p className="text-[13px] md:text-[14px] text-brand-black leading-relaxed italic" style={{ fontFamily: 'var(--font-kalam)' }}>
              Designing workflows, building UI interfaces, defining logic, and structuring automation systems.
            </p>
          </div>
          {/* Card 4 */}
          <div className="flex flex-col items-start gap-2">
            <h3 className="text-[18px] md:text-[20px] font-bold text-brand-black flex items-center gap-1" style={{ fontFamily: 'var(--font-kalam)' }}>
              Connect <span className="text-[#039855] text-[24px] md:text-[28px] mt-2">*</span>
            </h3>
            <p className="text-[13px] md:text-[14px] text-brand-black leading-relaxed italic" style={{ fontFamily: 'var(--font-kalam)' }}>
              Connecting external tools, APIs, AI models, and databases required for the workflow.
            </p>
          </div>
          {/* Card 5 */}
          <div className="flex flex-col items-start gap-2">
            <h3 className="text-[18px] md:text-[20px] font-bold text-brand-black flex items-center gap-1" style={{ fontFamily: 'var(--font-kalam)' }}>
              Deploy <span className="text-[#039855] text-[24px] md:text-[28px] mt-2">*</span>
            </h3>
            <p className="text-[13px] md:text-[14px] text-brand-black leading-relaxed italic" style={{ fontFamily: 'var(--font-kalam)' }}>
              Testing workflows, previewing applications, and deploying systems to local or live environments.
            </p>
          </div>
          {/* Card 6 */}
          <div className="flex flex-col items-start gap-2">
            <h3 className="text-[18px] md:text-[20px] font-bold text-brand-black flex items-center gap-1" style={{ fontFamily: 'var(--font-kalam)' }}>
              Manage <span className="text-[#039855] text-[24px] md:text-[28px] mt-2">*</span>
            </h3>
            <p className="text-[13px] md:text-[14px] text-brand-black leading-relaxed italic" style={{ fontFamily: 'var(--font-kalam)' }}>
              Monitoring workflows, updating automation logic, and maintaining system configurations.
            </p>
          </div>
          {/* Card 7 */}
          <div className="flex flex-col items-start gap-2">
            <h3 className="text-[18px] md:text-[20px] font-bold text-brand-black flex items-center gap-1" style={{ fontFamily: 'var(--font-kalam)' }}>
              Monitor <span className="text-[#039855] text-[24px] md:text-[28px] mt-2">*</span>
            </h3>
            <p className="text-[13px] md:text-[14px] text-brand-black leading-relaxed italic" style={{ fontFamily: 'var(--font-kalam)' }}>
              Tracking workflow performance, identifying issues, and improving automation efficiency.
            </p>
          </div>
        </div>
      </section>
      </div>

      <div id="design-guidelines">
        {/* Structure and streamlining Section */}
      <section className="w-full bg-white flex justify-center px-6 md:px-16 lg:px-24 py-16 md:py-24">
        <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Empty left column */}
          <div className="hidden lg:block lg:col-span-5"></div>

          {/* Right column content */}
          <div className="w-full flex flex-col items-start gap-8 lg:col-span-7">
            <h2 className="text-[28px] md:text-[32px] font-bold text-brand-black" style={{ fontFamily: 'var(--font-kalam)' }}>
              Structure and streamlining the concepts
            </h2>

            <p className="text-[15px] md:text-[16px] text-brand-black leading-relaxed" style={{ fontFamily: 'var(--font-kalam)' }}>
              Organizing ideas and workflows into clear structures to simplify complex automation concepts and ensure the platform remains intuitive and scalable.
            </p>

            {/* Image Box */}
            <div className="w-full flex items-center justify-center mt-2">
              <Image src="/structure.svg" alt="Structure and Streamlining" width={1000} height={1000} className="w-full h-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

      </div>

      <div id="final-design">
        {/* Simplita Image 1 Section */}
      <section className="w-full bg-white py-8 md:py-16">
        <Image src="/simplitaimage1.svg" alt="Simplita Overview" width={1920} height={1000} className="w-full h-auto object-contain" />
      </section>

      {/* Simplita Image 2 Section */}
      <section className="w-full bg-white pb-8 md:pb-16">
        <Image src="/simplitaimage2.svg" alt="Simplita Design Details" width={1920} height={1000} className="w-full h-auto object-contain" />
      </section>

      {/* Simplita Image 3 Section */}
      <section className="w-full bg-white pb-8 md:pb-16">
        <Image src="/simplitaimage3.svg" alt="Simplita More Details" width={1920} height={1000} className="w-full h-auto object-contain" />
      </section>

      {/* Simplita Image 4 Section */}
      <section className="w-full bg-white pb-8 md:pb-16">
        <Image src="/simplitaimage4.svg" alt="Simplita Final Details" width={1920} height={1000} className="w-full h-auto object-contain" />
      </section>

      {/* Simplita Image 5 Section */}
      <section className="w-full bg-white pb-8 md:pb-16">
        <Image src="/simplitaimage5.svg" alt="Simplita Conclusion" width={1920} height={1000} className="w-full h-auto object-contain" />
      </section>

      {/* Simplita Image 6 Section */}
      <section className="w-full bg-white pb-8 md:pb-16">
        <Image src="/simplitaimage6.svg" alt="Simplita Extra Details" width={1920} height={1000} className="w-full h-auto object-contain" />
      </section>

      {/* Bringing the Product Together Section */}
      <section className="w-full bg-white flex flex-col items-center px-4 md:px-10 lg:px-16 py-16 md:py-24" style={{ fontFamily: 'var(--font-kalam)' }}>
        <div className="w-full max-w-[1400px] flex flex-col gap-12">

          {/* Intro Text */}
          <div className="flex flex-col gap-6 px-2">
            <h2 className="text-[26px] md:text-[32px] font-bold text-brand-black">
              Bringing the Product Together
            </h2>
            <p className="text-[15px] md:text-[16px] text-brand-black leading-relaxed">
              Designing Simplita meant translating a complex technical vision into a structured and usable product experience. The process involved continuously refining workflows, simplifying automation logic, and shaping the system so teams could build and manage automation visually rather than relying on fragmented tools or heavy engineering effort.
            </p>
            <p className="text-[15px] md:text-[16px] text-brand-black leading-relaxed">
              User testing and feedback played a key role throughout the process. Each round of feedback helped refine workflows, improve clarity, and optimize how nodes, logic flows, and system interactions were structured. These iterations ensured the platform remained intuitive while still supporting complex enterprise automation.
            </p>
          </div>

          {/* Outcomes & Impact */}
          <div className="bg-[#E1FCEF] rounded-2xl p-8 md:p-12 flex flex-col gap-8">
            <h3 className="text-[22px] md:text-[26px] font-bold text-[#039855]">
              Outcomes &amp; Impact
            </h3>
            <ul className="flex flex-col gap-6 text-[15px] md:text-[16px] text-[#039855] leading-relaxed">
              <li className="flex gap-3">
                <span className="mt-1">&bull;</span>
                <p>Standardized design-to-development handoff across the web app, reducing implementation confusion and back-and-forth between designers and engineers by ~55%.</p>
              </li>
              <li className="flex gap-3">
                <span className="mt-1">&bull;</span>
                <p>Introduced structured design documentation, interaction flows, and component guidelines, improving development clarity and reducing clarification cycles during builds by ~48%.</p>
              </li>
              <li className="flex gap-3">
                <span className="mt-1">&bull;</span>
                <p>Aligned UI patterns and interaction behavior across the platform, helping engineers implement features ~40% faster during development sprints.</p>
              </li>
              <li className="flex gap-3">
                <span className="mt-1">&bull;</span>
                <p>Improved workflow understanding through clearer product flows and visual logic, reducing internal usability friction and improving task comprehension by ~35%.</p>
              </li>
              <li className="flex gap-3">
                <span className="mt-1">&bull;</span>
                <p>Established consistent component usage through the design system, reducing UI inconsistencies across the web app by ~45%.</p>
              </li>
              <li className="flex gap-3">
                <span className="mt-1">&bull;</span>
                <p>Strengthened cross-team communication through clearer design articulation, enabling smoother collaboration between product, design, and engineering teams by ~50%.</p>
              </li>
            </ul>
          </div>

          {/* What I Learned */}
          <div className="bg-[#E1FCEF] rounded-2xl p-8 md:p-12 flex flex-col gap-8">
            <h3 className="text-[22px] md:text-[26px] font-bold text-[#039855]">
              What I Learned
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
              {/* Left Column */}
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <h4 className="text-[16px] md:text-[18px] font-bold text-[#039855]">Good product decisions come from framing the problem correctly</h4>
                  <p className="text-[14px] md:text-[15px] text-[#039855] leading-relaxed">Spending time understanding the real problem space often changes the direction of the solution more than the design itself.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-[16px] md:text-[18px] font-bold text-[#039855]">Early structure saves exponential rework later</h4>
                  <p className="text-[14px] md:text-[15px] text-[#039855] leading-relaxed">Investing time in defining workflows, naming conventions, and interaction patterns early prevents confusion later and helps teams scale the product without constantly redesigning core systems.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-[16px] md:text-[18px] font-bold text-[#039855]">Systems thinking is essential when designing complex products</h4>
                  <p className="text-[14px] md:text-[15px] text-[#039855] leading-relaxed">Working on interconnected workflows reinforced the need to think beyond individual screens and understand how different parts of a system interact and affect each other.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-[16px] md:text-[18px] font-bold text-[#039855]">Enterprise products demand scalability from day one</h4>
                  <p className="text-[14px] md:text-[15px] text-[#039855] leading-relaxed">Building design systems and reusable patterns early helped ensure the platform could evolve without redesigning core structures as features expanded.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-[16px] md:text-[18px] font-bold text-[#039855]">Prioritization determines product clarity</h4>
                  <p className="text-[14px] md:text-[15px] text-[#039855] leading-relaxed">Not every idea or feature deserves to be built. Using frameworks like <span className="font-bold">MoSCoW</span> helped identify what truly matters, while also validating whether some features should exist at all.</p>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <h4 className="text-[16px] md:text-[18px] font-bold text-[#039855]">Design is often about reducing cognitive load, not adding capability</h4>
                  <p className="text-[14px] md:text-[15px] text-[#039855] leading-relaxed">The most meaningful improvements usually come from making things easier to understand rather than making them more powerful.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-[16px] md:text-[18px] font-bold text-[#039855]">Designing for scale changes how you design early features</h4>
                  <p className="text-[14px] md:text-[15px] text-[#039855] leading-relaxed">Early decisions around structure, naming, and interaction patterns matter more than they seem, because they determine how easily the product can expand without breaking its logic.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-[16px] md:text-[18px] font-bold text-[#039855]">User-first thinking must coexist with real-world constraints</h4>
                  <p className="text-[14px] md:text-[15px] text-[#039855] leading-relaxed">While keeping the user at the center is critical, deadlines and product pressures are inevitable. The challenge is making decisions that solve immediate needs without compromising long-term product quality.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-[16px] md:text-[18px] font-bold text-[#039855]">Clear decision-making and strong communication shape product direction</h4>
                  <p className="text-[14px] md:text-[15px] text-[#039855] leading-relaxed">Being able to explain design reasoning, align stakeholders, and prioritize effectively was often as important as the design work itself.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-[16px] md:text-[18px] font-bold text-[#039855]">Collaboration drives better product decisions</h4>
                  <p className="text-[14px] md:text-[15px] text-[#039855] leading-relaxed">Frequent discussions with developers and stakeholders helped refine ideas, uncover constraints early, and ensure the design stayed practical for implementation.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      </div>

      <div id="website-drafts">
        {/* TODO: This section is to be removed or modified later */}
      <section className="w-full">
        <Image src="/scrollablescreen.svg" alt="Scrollable Details" width={1920} height={1000} className="w-full h-auto" />
      </section>

      {/* Simplita Image 7 Section */}
      <section className="w-full">
        <Image src="/simplitaimage7.svg" alt="Simplita Extra Details 7" width={1920} height={1000} className="w-full h-auto" />
      </section>

      {/* Simplita Image 8 Section */}
      <section className="w-full">
        <Image src="/simplitaimage8.svg" alt="Simplita Extra Details 8" width={1920} height={1000} className="w-full h-auto" />
      </section>
      </div>
      <Dock viewProjectUrl="/projects" />
    </div>
  );
}
