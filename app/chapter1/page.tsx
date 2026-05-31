"use client";

import React from "react";
import { ImageWithLoader as Image, HtmlImgWithLoader } from "../components/ImageWithLoader";
import Dock from "../components/Dock";

const scrollImages = [
  "/scroll/chapter/Onboarding.svg",
  "/scroll/chapter/Onboarding%2014.svg",
  "/scroll/chapter/Onboarding%2015.svg",
  "/scroll/chapter/Onboarding%2017.svg",
  "/scroll/chapter/Onboarding%2018.svg",
  "/scroll/chapter/Onboarding%2019.svg",
  "/scroll/chapter/Onboarding%2020.svg",
  "/scroll/chapter/Onboarding%2021.svg",
  "/scroll/chapter/Explore.svg",
  "/scroll/chapter/Explore-1.svg",
  "/scroll/chapter/Explore-2.svg",
  "/scroll/chapter/Home.svg",
  "/scroll/chapter/Saved.svg",
  "/scroll/chapter/Booking.svg",
  "/scroll/chapter/Upcoming+booking.svg",
  "/scroll/chapter/Interest%20Test.svg",
  "/scroll/chapter/Brain%20Dominance.svg",
  "/scroll/chapter/Brain%20Vibe-01.svg",
  "/scroll/chapter/Career%20Readiness.svg",
  "/scroll/chapter/Career%20World.svg",
  "/scroll/chapter/Learning%20and%20Cognitive%20Readiness-01.svg",
  "/scroll/chapter/Social%20Intelligence.svg",
  "/scroll/chapter/Reports.svg",
  "/scroll/chapter/Left%20Panel.svg",
  "/scroll/chapter/Profile-Settings.svg",
  "/scroll/chapter/Family%20Details.svg",
];

export default function ChapterOnePage() {
  return (
    <div className="min-h-screen bg-brand-yellow text-black relative">
      <div id="introduction">
        {/* Hero Section */}
        <section className="h-screen flex flex-col relative overflow-hidden">
          {/* Center text section */}
          <div className="flex-1 flex items-center justify-center px-6 pt-20 pb-64">
            <p className="text-[20px] md:text-[24px] font-bold text-center max-w-6xl leading-relaxed text-black/90 font-sans">
              A long-term digital growth companion that guides students aged 13–17 from career confusion to<br />
              confident, informed decisions — while actively protecting their mental well-being.
            </p>
          </div>

          {/* Bottom text section */}
          <div className="absolute bottom-8 left-0 w-full flex items-center justify-start gap-6 md:gap-10 whitespace-nowrap overflow-hidden px-6 md:px-12 pointer-events-none">
            <h1 className="text-[100px] md:text-[120px] lg:text-[140px] font-bold font-sans text-black leading-none tracking-tight">
              Chapter 1
            </h1>

            {/* Starburst Icon */}
            <div className="w-16 h-16 md:w-[10vw] md:h-[6vw] flex-shrink-0 flex items-center justify-center">
              <Image src="/sun.svg" alt="Sun Icon" width={105} height={74} className="w-full h-auto" />
            </div>

            <h1 className="text-[100px] md:text-[120px] lg:text-[140px] font-bold font-sans text-black leading-none tracking-tight">
              A career space for young minds
            </h1>
          </div>
        </section>

        {/* Chapter Image Section */}
        <section className="w-full">
          <Image
            src="/chapterimage1.svg"
            alt="Chapter 1 Design Showcase"
            width={1920}
            height={1080}
            className="w-full h-auto block"
            priority
          />
        </section>

        {/* Project Details Section */}
        <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            {/* Left Column (Empty) */}
            <div className="hidden md:block md:col-span-4 lg:col-span-5"></div>

            {/* Right Column (Text Content) */}
            <div className="md:col-span-8 lg:col-span-7 flex flex-col gap-12 font-sans text-black">
              {/* Main Header & Intro */}
              <div className="flex flex-col gap-6">
                <h2 className="text-[28px] md:text-[32px] font-bold leading-tight">
                  Building a More Thoughtful Student Journey
                </h2>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-relaxed tracking-wide text-black/90">
                  <p>
                    Chapter I is a digital growth companion designed for students aged 13–20 navigating academics, identity, and future career decisions. The platform helps students move from confusion and external pressure toward clarity and confidence through personalized guidance, self-discovery, and structured growth journeys. Built around both ambition and emotional well-being, Chapter I combines mentorship, career exploration, and reflective support into a single experience. It aims to help students better understand themselves, make informed decisions, and grow with confidence during some of the most important formative years of their lives.
                  </p>
                </div>
              </div>

              {/* Details (Company, Timeline, Role, Team) */}
              <div className="flex flex-col gap-8 text-[16px] md:text-[18px] leading-relaxed">
                {/* Company */}
                <div className="flex flex-col gap-1">
                  <span className="text-black/40 italic">Company</span>
                  <span className="font-bold">Chapter I</span>
                </div>

                {/* Timeline */}
                <div className="flex flex-col gap-1">
                  <span className="text-black/40 italic">Timeline</span>
                  <span className="font-bold">February 2026 - May 2026 (3 Months)</span>
                </div>

                {/* Role */}
                <div className="flex flex-col gap-1">
                  <span className="text-black/40 italic">Role</span>
                  <span className="font-bold mb-2">Product</span>
                  <p className="text-black/90">
                    Defined the overall product experience and interaction strategy for Chapter I, focusing on creating a platform that feels intuitive, engaging, and trustworthy for younger users. Worked on simplifying complex decision-making journeys into clear, structured experiences that encourage exploration without overwhelming the user. Led the UX direction across core flows, visual systems, and platform structure while ensuring consistency, accessibility, and long-term scalability. The role involved bridging user psychology, product thinking, and interface design to shape a more thoughtful and human-centered digital experience.
                  </p>
                </div>

                {/* Team */}
                <div className="flex flex-col gap-1">
                  <span className="text-black/40 italic mb-2">Team</span>
                  <ul className="flex flex-col gap-1 font-bold">
                    <li>1 Product Designer</li>
                    <li>1 Lead</li>
                    <li>1 Stakeholders</li>
                    <li>1 Content Writer</li>
                    <li>3 Developers</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Overview & Devices Section */}
        <section className="w-full bg-[#FED9D0] py-20 px-6 md:px-12 lg:px-24 text-black">
          <div className="max-w-[1920px] mx-auto flex flex-col gap-16 font-sans">
            {/* Quick Overview Text */}
            <div className="flex flex-col gap-4 max-w-4xl">
              <span className="text-[16px] md:text-[18px] text-[#EE785E] font-normal tracking-wider">
                Quick Overview
              </span>
              <p className="text-[16px] md:text-[18px] leading-relaxed text-[#EE785E] font-normal">
                My goal was to help translate Chapter I's vision into a supportive<br />
                and approachable digital experience — structuring the platform in<br />
                a way that makes growth, career, and decision-making feel clearer,<br />
                less overwhelming, and more accessible for<br />
                students.
              </p>
            </div>

            {/* Infinite Image Scroll Showcase (Right to Left) */}
            <div className="w-full overflow-hidden py-6 pause-hover flex flex-col gap-8 relative select-none">
              {/* Gradient Overlay left and right to fade edges */}
              <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#FED9D0] to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#FED9D0] to-transparent z-10 pointer-events-none" />

              <div className="flex overflow-hidden">
                <div className="animate-marquee flex gap-6 pr-6">
                  {[...scrollImages, ...scrollImages].map((src, i) => (
                    <div key={`scroll-${i}`} className="h-[360px] md:h-[420px] w-auto flex-shrink-0 flex items-center justify-center hover:scale-[1.03] transition-transform duration-300 drop-shadow-md">
                      <HtmlImgWithLoader
                        src={src}
                        alt="Chapter 1 Interface"
                        className="h-full w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      <div id="research-phase">
        {/* Context & Problem Section */}
        <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-[1280px] mx-auto flex flex-col gap-12 font-sans text-black">
            {/* Header */}
            <div className="flex items-start gap-1">
              <h2 className="text-[32px] md:text-[40px] font-bold leading-none tracking-tight">
                Context & Problem
              </h2>
              <span className="text-[14px] font-bold text-[#EE785E] translate-y-1 leading-none">(01)</span>
            </div>

            {/* Understanding the Space */}
            <div className="flex flex-col gap-6">
              <h3 className="text-[22px] md:text-[26px] font-bold leading-tight">
                Understanding the Space
              </h3>
              <div className="flex flex-col gap-4 text-[16px] leading-relaxed text-black/80">
                <p>
                  Students in India are expected to commit to a career direction as early as Class 10 — often at 14 or 15 years old. The standard process: sit a board exam, pick a stream (Science / Commerce / Arts), and implicitly select a career path. Most do so with limited self-knowledge, minimal exposure to the real world of work, and significant pressure from family, peers, and society.
                </p>
                <p>
                  Career guidance products exist, but they're almost entirely built around one-time personality tests. Students complete a questionnaire, receive a PDF report listing three career options, and are expected to act on it. The problem isn't a lack of tools. It's that the tools don't match the reality of how students actually develop self-awareness: gradually, non-linearly, and with a lot of emotional noise in the background.
                </p>
              </div>
            </div>

            {/* Five Interconnected Problems */}
            <div className="flex flex-col gap-8">
              <h3 className="text-[22px] md:text-[26px] font-bold leading-tight">
                Five Interconnected Problems
              </h3>

              <div className="flex flex-col gap-6 items-center w-full">
                {/* Row 1: 3 Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                  {/* Card 1 */}
                  <div className="bg-[#EE785E] rounded-[8px] p-6 flex gap-4 text-white min-h-[180px]">
                    <span className="text-[44px] font-black leading-none select-none">01.</span>
                    <div className="flex flex-col gap-2">
                      <h4 className="font-bold text-[16px] md:text-[17px] leading-tight">Premature Decision-Making</h4>
                      <p className="text-[13px] md:text-[14px] leading-relaxed text-white/90">
                        Students must commit to a stream at 14–15, before they have the life experience to understand their own strengths, interests, or the real nature of different careers.
                      </p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-[#EE785E] rounded-[8px] p-6 flex gap-4 text-white min-h-[180px]">
                    <span className="text-[44px] font-black leading-none select-none">02.</span>
                    <div className="flex flex-col gap-2">
                      <h4 className="font-bold text-[16px] md:text-[17px] leading-tight">One-Time Testing Paradigm</h4>
                      <p className="text-[13px] md:text-[14px] leading-relaxed text-white/90">
                        Existing tools treat career guidance as a single event (a test), not an ongoing developmental process. One report cannot capture how a student evolves across months.
                      </p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-[#EE785E] rounded-[8px] p-6 flex gap-4 text-white min-h-[180px]">
                    <span className="text-[44px] font-black leading-none select-none">03.</span>
                    <div className="flex flex-col gap-2">
                      <h4 className="font-bold text-[16px] md:text-[17px] leading-tight">Emotional Pressure, Zero Support</h4>
                      <p className="text-[13px] md:text-[14px] leading-relaxed text-white/90">
                        The decision-making period is one of the most stressful in a student's life. No existing product monitors or supports mental well-being during this process.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Row 2: 2 Cards Centered */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:max-w-[66%]">
                  {/* Card 4 */}
                  <div className="bg-[#EE785E] rounded-[8px] p-6 flex gap-4 text-white min-h-[180px]">
                    <span className="text-[44px] font-black leading-none select-none">04.</span>
                    <div className="flex flex-col gap-2">
                      <h4 className="font-bold text-[16px] md:text-[17px] leading-tight">Surface-Level Career Information</h4>
                      <p className="text-[13px] md:text-[14px] leading-relaxed text-white/90">
                        Students are told to 'be an engineer' but never shown what an engineer actually does on a Tuesday afternoon. There is a total absence of lived-reality career content.
                      </p>
                    </div>
                  </div>

                  {/* Card 5 */}
                  <div className="bg-[#EE785E] rounded-[8px] p-6 flex gap-4 text-white min-h-[180px]">
                    <span className="text-[44px] font-black leading-none select-none">05.</span>
                    <div className="flex flex-col gap-2">
                      <h4 className="font-bold text-[16px] md:text-[17px] leading-tight">Parent-Student Misalignment</h4>
                      <p className="text-[13px] md:text-[14px] leading-relaxed text-white/90">
                        Parents apply pressure based on social norms, not their child's demonstrated strengths. No product bridges this communication gap constructively.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* The Opportunity */}
            <div className="flex flex-col gap-6">
              <h3 className="text-[22px] md:text-[26px] font-bold leading-tight">
                The Opportunity
              </h3>
              <p className="text-[16px] md:text-[18px] leading-relaxed text-black/80">
                The gap isn't information — students can Google any career. The gap is structured self-discovery over time, emotional support during transitions, and a product that treats career guidance as a journey, not a test.
              </p>
            </div>

            {/* Quote */}
            <div className="w-full flex justify-center py-6 overflow-hidden">
              <p className="text-[16px] font-bold text-center text-black whitespace-nowrap leading-relaxed">
                "Students engage more with exploration and discovery than with evaluation. The product had to feel like a companion, not an examiner."
              </p>
            </div>

          </div>
        </section>

        {/* Design Approach Section */}
        <section className="w-full bg-white py-20 border-t border-black/5">
          <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-8 px-6 md:px-12 lg:px-24 font-sans text-black">
            {/* Header */}
            <div className="flex flex-col items-center gap-4 text-center max-w-none">
              <h2 className="text-[24px] md:text-[28px] font-bold tracking-tight">
                My Design Approach
              </h2>
              <p className="text-[16px] leading-relaxed text-black/80 font-normal">
                <span className="lg:block lg:whitespace-nowrap">
                  My approach focused on simplifying complexity. Since the platform involved multiple engines, automation logic, and system integrations, the goal was to structure the experience in a way that felt
                </span>
                <span className="lg:block lg:whitespace-nowrap">
                  intuitive while still supporting powerful capabilities. I prioritized clarity in workflows, modular system thinking, and scalable design patterns so the product could evolve as the platform grew.
                </span>
              </p>
            </div>
          </div>

          {/* Phase Labels */}
          <div className="max-w-none w-full px-[5%] flex items-center justify-between font-sans text-black mt-12 mb-2 font-normal text-[14px] md:text-[16px] tracking-wider">
            <span>Discovery</span>
            <span>Design</span>
            <span>Delivery</span>
          </div>

          {/* Design Approach SVG Graphic (Stretches edge to edge) */}
          <div className="w-full mt-2 px-0">
            <Image
              src="/chapterdesignapproach.svg"
              alt="My Design Approach"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </section>

        {/* Research & Discovery Section */}
        <section className="w-full bg-[#FED9D0] py-20 px-6 md:px-12 lg:px-24 border-t border-black/5">
          <div className="max-w-[1280px] mx-auto flex flex-col gap-12 font-sans text-black">
            {/* Header */}
            <div className="flex items-start gap-1">
              <h2 className="text-[32px] md:text-[40px] font-bold leading-none tracking-tight">
                Research & Discovery
              </h2>
              <span className="text-[14px] font-bold text-[#EE785E] translate-y-1 leading-none">(02)</span>
            </div>

            {/* Research Methodology */}
            <div className="flex flex-col gap-6">
              <h3 className="text-[22px] md:text-[26px] font-bold leading-tight">
                Research Methodology
              </h3>
              <div className="flex flex-col gap-4 text-[16px] leading-relaxed text-black/80">
                <p>
                  A mixed-method approach across three weeks was employed, combining primary qualitative research with competitive landscape analysis. The goal was to understand not just what students do, but what they feel during the career decision process.
                </p>
                <p className="text-[14px] text-black/60">
                  Five Interconnected Problems
                </p>
              </div>
            </div>

            {/* Research Table Container */}
            <div className="bg-white rounded-[16px] p-6 md:p-10 w-full overflow-x-auto shadow-sm border border-black/5">
              <table className="w-full text-left font-sans text-black border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b-[3px] border-black text-[15px] md:text-[16px] font-bold">
                    <th className="pb-4 w-[8%] font-bold">Sl.No</th>
                    <th className="pb-4 w-[27%] font-bold">Method</th>
                    <th className="pb-4 w-[25%] font-bold">Sample</th>
                    <th className="pb-4 w-[40%] font-bold">Objective</th>
                  </tr>
                </thead>
                <tbody className="text-[14px] md:text-[16px] font-normal leading-relaxed">
                  {/* Row 1 */}
                  <tr className="align-top">
                    <td className="pt-6 font-normal">01</td>
                    <td className="pt-6 font-normal">In-depth student interviews</td>
                    <td className="pt-6 font-normal">20+ students, Class 9–11</td>
                    <td className="pt-6 font-normal">Emotional journey, pain points, vocabulary</td>
                  </tr>
                  {/* Row 1 Sub (6 parents) */}
                  <tr className="align-top">
                    <td></td>
                    <td></td>
                    <td className="pt-2 pb-4 font-normal">6 parents</td>
                    <td></td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="align-top">
                    <td className="pt-4 font-normal">02</td>
                    <td className="pt-4 font-normal">Parent interviews</td>
                    <td></td>
                    <td className="pt-4 font-normal">Expectations, pressure dynamics, communication</td>
                  </tr>
                  {/* Row 2 Sub (4 school counsellors) */}
                  <tr className="align-top">
                    <td></td>
                    <td></td>
                    <td className="pt-2 pb-4 font-normal">4 school counsellors</td>
                    <td></td>
                  </tr>
                  {/* Row 3 */}
                  <tr className="align-top">
                    <td className="pt-4 font-normal">03</td>
                    <td className="pt-4 font-normal">Educator interviews</td>
                    <td></td>
                    <td className="pt-4 font-normal">Institutional perspective, tool limitations</td>
                  </tr>
                  {/* Row 3 Sub (9 products) */}
                  <tr className="align-top">
                    <td></td>
                    <td></td>
                    <td className="pt-2 pb-4 font-normal">9 products</td>
                    <td></td>
                  </tr>
                  {/* Row 4 */}
                  <tr className="align-top">
                    <td className="pt-4 font-normal">04</td>
                    <td className="pt-4 font-normal">Competitive audit</td>
                    <td></td>
                    <td className="pt-4 font-normal">Feature gaps, UX patterns, positioning</td>
                  </tr>
                  {/* Row 4 Sub (4 students, 10 days) */}
                  <tr className="align-top">
                    <td></td>
                    <td></td>
                    <td className="pt-2 pb-4 font-normal">4 students, 10 days</td>
                    <td></td>
                  </tr>
                  {/* Row 5 */}
                  <tr className="align-top">
                    <td className="pt-4 pb-6 font-normal">05</td>
                    <td className="pt-4 pb-6 font-normal">Diary study</td>
                    <td></td>
                    <td className="pt-4 pb-6 font-normal">Daily emotional rhythm and engagement habits</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Key Interview Qoutes */}
            <div className="flex flex-col gap-6 mt-12">
              <h3 className="text-[22px] md:text-[26px] font-bold leading-tight">
                Key Interview Qoutes
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {/* Quote 1 */}
                <div className="bg-white rounded-[16px] p-6 md:p-8 flex items-center justify-center text-center shadow-sm border border-black/5 min-h-[110px]">
                  <p className="text-[15px] md:text-[16px] leading-relaxed text-black/95 font-normal max-w-md">
                    “I took the career test and it said I should be an<br />
                    accountant. I hate maths. I just closed the tab.”
                  </p>
                </div>

                {/* Quote 2 */}
                <div className="bg-white rounded-[16px] p-6 md:p-8 flex items-center justify-center text-center shadow-sm border border-black/5 min-h-[110px]">
                  <p className="text-[15px] md:text-[16px] leading-relaxed text-black/95 font-normal max-w-md">
                    “My parents keep asking about my future plans but I don't<br />
                    even know what I'm good at yet. It stresses me out."
                  </p>
                </div>

                {/* Quote 3 */}
                <div className="bg-white rounded-[16px] p-6 md:p-8 flex items-center justify-center text-center shadow-sm border border-black/5 min-h-[110px]">
                  <p className="text-[15px] md:text-[16px] leading-relaxed text-black/95 font-normal max-w-md">
                    "I wish someone would just show me what different<br />
                    jobs actually look like day-to-day. Not just the name."
                  </p>
                </div>

                {/* Quote 4 */}
                <div className="bg-white rounded-[16px] p-6 md:p-8 flex items-center justify-center text-center shadow-sm border border-black/5 min-h-[110px]">
                  <p className="text-[15px] md:text-[16px] leading-relaxed text-black/95 font-normal max-w-md">
                    "Every career test feels like a trap. Like there's<br />
                    a right answer I'm supposed to give."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Analysis Section */}
        <section className="w-full bg-[#FED9D0] py-20 px-6 md:px-12 lg:px-24 border-t border-black/5">
          <div className="max-w-[1280px] mx-auto flex flex-col gap-12 font-sans text-black">
            {/* Header */}
            <h2 className="text-[32px] md:text-[40px] font-bold leading-none tracking-tight">
              Competitive Analysis
            </h2>

            {/* Table Container Card */}
            <div className="bg-white rounded-[16px] p-6 md:p-10 w-full overflow-x-auto shadow-sm border border-black/5">
              <h3 className="text-[18px] md:text-[20px] font-bold mb-6">
                Competitor Analysis
              </h3>

              <table className="w-full text-left font-sans text-black border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b-[3px] border-black text-[15px] md:text-[16px] font-bold">
                    <th className="pb-4 w-[25%] font-bold">Product</th>
                    <th className="pb-4 w-[30%] font-bold">Core Model</th>
                    <th className="pb-4 w-[20%] font-bold">Well-being Support</th>
                    <th className="pb-4 w-[25%] font-bold">Gap</th>
                  </tr>
                </thead>
                <tbody className="text-[14px] md:text-[16px] font-normal leading-relaxed">
                  {/* Row 1 */}
                  <tr className="align-top">
                    <td className="py-6 font-normal">Benchmark Platform A</td>
                    <td className="py-6 font-normal">Assessment + counsellor match</td>
                    <td className="py-6 font-normal">None</td>
                    <td className="py-6 font-normal">One-time, no longitudinal tracking</td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="align-top">
                    <td className="py-6 font-normal">Benchmark Platform B</td>
                    <td className="py-6 font-normal">Psychometric test + report</td>
                    <td className="py-6 font-normal">None</td>
                    <td className="py-6 font-normal">PDF report, no ongoing engagement</td>
                  </tr>
                  {/* Row 3 */}
                  <tr className="align-top">
                    <td className="py-6 font-normal">Benchmark Platform C</td>
                    <td className="py-6 font-normal">Information portal</td>
                    <td className="py-6 font-normal">None</td>
                    <td className="py-6 font-normal">No personalisation or emotional layer</td>
                  </tr>
                  {/* Row 4 */}
                  <tr className="align-top">
                    <td className="py-6 font-normal">Benchmark Platform D</td>
                    <td className="py-6 font-normal">Career exploration games</td>
                    <td className="py-6 font-normal">Minimal</td>
                    <td className="py-6 font-normal">Not India-contextualised</td>
                  </tr>
                  {/* Row 5 */}
                  <tr className="align-top">
                    <td className="py-6 font-normal">Benchmark Platform D</td>
                    <td className="py-6 font-normal">Mindfulness app</td>
                    <td className="py-6 font-normal">Strong</td>
                    <td className="py-6 font-normal">No career component</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Footer Quote / Conclusion Text */}
            <div className="w-full flex justify-center mt-4">
              <p className="text-[15px] md:text-[16px] font-normal text-center text-black/90 leading-relaxed max-w-4xl">
                No existing product in the Indian market combines ongoing career exploration with emotional well-being support. The competitive whitespace is clear.
              </p>
            </div>
          </div>
        </section>

        {/* What We Learned Section */}
        <section className="w-full bg-[#FED9D0] py-20 px-6 md:px-12 lg:px-24 border-t border-black/5">
          <div className="max-w-[1280px] mx-auto flex flex-col gap-8 font-sans text-black">
            {/* Header */}
            <h2 className="text-[22px] md:text-[26px] font-bold leading-tight">
              What We Learned from Research
            </h2>

            {/* Bullet Points */}
            <ul className="flex flex-col gap-2 text-[16px] leading-relaxed text-black/90 font-semibold">
              <li className="flex items-start gap-3">
                <span className="select-none text-black/70">•</span>
                <span>Students lack vocabulary to describe their own interests; they need structured prompts, not open-ended questions.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="select-none text-black/70">•</span>
                <span>Emotional state directly affects engagement: students disengage from career tasks during exam stress periods.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="select-none text-black/70">•</span>
                <span>Parents want involvement but don't know how to support without pressuring.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="select-none text-black/70">•</span>
                <span>'Day in the life' content is the single most requested format — students want reality, not job titles.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="select-none text-black/70">•</span>
                <span>Short, frequent interactions outperform long assessment sessions for sustained engagement.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="select-none text-black/70">•</span>
                <span>Mascot-based companions significantly reduce perceived judgement in early testing sessions.</span>
              </li>
            </ul>
          </div>
        </section>

      </div>

      <div id="ideate">
        {/* Moodboard & Design Direction Section */}
        <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-24 border-t border-black/5">
          <div className="max-w-[1280px] mx-auto flex flex-col gap-12 font-sans text-black">
            {/* Header */}
            <div className="flex items-start gap-1">
              <h2 className="text-[32px] md:text-[40px] font-bold leading-none tracking-tight">
                Moodboard & Design Direction
              </h2>
              <span className="text-[14px] font-bold text-black translate-y-1 leading-none">(03)</span>
            </div>

            {/* Visual Direction */}
            <div className="flex flex-col gap-6">
              <h3 className="text-[22px] md:text-[26px] font-bold leading-tight">
                Visual Direction
              </h3>
              <div className="flex flex-col gap-4 text-[16px] leading-relaxed text-black/80">
                <p>
                  Before touching Figma, the emotional territory the product needed to occupy was defined. Research showed that career guidance tools feel intimidating so the visual language had to do the opposite: feel warm, curious, approachable, and personal.
                </p>
                <p>
                  Reference products were studied across three categories: consumer wellness apps (for emotional warmth), educational companions (for curiosity-forward tone), and personal finance apps for young adults (for structured trust without formality).
                </p>
              </div>
            </div>

            {/* Four Emotional Territories Explored */}
            <div className="flex flex-col gap-6">
              <h3 className="text-[22px] md:text-[26px] font-bold leading-tight">
                Four Emotional Territories Explored
              </h3>

              <div className="w-full overflow-x-auto">
                <p className="text-[14px] text-black/60 mb-2 font-normal">
                  Competitor Analysis
                </p>
                <table className="w-full text-left font-sans text-black border-collapse min-w-[800px]">
                  <thead>
                    <tr className="border-b-[3px] border-black text-[15px] md:text-[16px] font-bold">
                      <th className="pb-4 w-[25%] font-bold">Territory</th>
                      <th className="pb-4 w-[25%] font-bold">Reference Apps</th>
                      <th className="pb-4 w-[25%] font-bold">Tone</th>
                      <th className="pb-4 w-[25%] font-bold">Decision</th>
                    </tr>
                  </thead>
                  <tbody className="text-[14px] md:text-[16px] font-normal leading-relaxed">
                    {/* Row 1 */}
                    <tr className="align-top">
                      <td className="py-6 font-normal">Warm & Safe</td>
                      <td className="py-6 font-normal">Headspace, Calm</td>
                      <td className="py-6 font-normal">Soft, nurturing, pastel</td>
                      <td className="py-6 font-normal">Too passive for career context</td>
                    </tr>
                    {/* Row 2 */}
                    <tr className="align-top">
                      <td className="py-6 font-normal">Curious & Playful</td>
                      <td className="py-6 font-normal">Duolingo, Khan Academy</td>
                      <td className="py-6 font-normal">Energetic, gamified, bright</td>
                      <td className="py-6 font-normal">Too childish for 13-17 age range</td>
                    </tr>
                    {/* Row 3 */}
                    <tr className="align-top">
                      <td className="py-6 font-normal">Structured Trust</td>
                      <td className="py-6 font-normal">Robinhood, Cleo</td>
                      <td className="py-6 font-normal">Confident, clean, purposeful</td>
                      <td className="py-6 font-normal">Too corporate, lacks warmth</td>
                    </tr>
                    {/* Row 4 */}
                    <tr className="align-top">
                      <td className="py-6 font-normal">Companion Intelligence</td>
                      <td className="py-6 font-normal">Notion, Readwise</td>
                      <td className="py-6 font-normal">Smart, personal, calm confidence</td>
                      <td className="py-6 font-normal">Selected — hit the right balance</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bottom Centered Paragraph in EE785E */}
            <div className="w-full flex justify-center mt-6">
              <p className="text-[15px] md:text-[16px] font-normal text-center text-[#EE785E] leading-relaxed max-w-4xl">
                <span className="lg:block lg:whitespace-nowrap">
                  The 'Companion Intelligence' territory was selected as the foundation: intelligent enough to be trusted,
                </span>
                <span className="lg:block lg:whitespace-nowrap">
                  warm enough to be approachable, and calm enough to reduce rather than add to student anxiety.
                </span>
              </p>
            </div>
          </div>
        </section>

      </div>

      <div id="design-guidelines">
        {/* Branding and Visual Identity Section */}
        <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-24 border-t border-black/5">
          <div className="max-w-[1280px] mx-auto flex flex-col gap-12 font-sans text-black">
            {/* Header */}
            <div className="flex items-start gap-1">
              <h2 className="text-[32px] md:text-[40px] font-bold leading-none tracking-tight">
                Branding and Visual Identity
              </h2>
              <span className="text-[14px] font-bold text-black translate-y-1 leading-none">(04)</span>
            </div>

            {/* Brand System */}
            <div className="flex flex-col gap-6">
              <h3 className="text-[22px] md:text-[26px] font-bold leading-tight">
                Brand System
              </h3>
              <p className="text-[16px] leading-relaxed text-black/80 font-normal">
                The brand needed to communicate curiosity, trustworthiness, and emotional warmth simultaneously. A young student opening this app for the first time should feel: 'this is for me, and it won't judge me.'
              </p>
            </div>

            {/* Colour Palette */}
            <div className="flex flex-col gap-6">
              <h3 className="text-[22px] md:text-[26px] font-bold leading-tight">
                Colour Palette
              </h3>

              <div className="w-full overflow-x-auto">
                <table className="w-full text-left font-sans text-black border-collapse min-w-[800px]">
                  <thead>
                    <tr className="border-b-[3px] border-black text-[15px] md:text-[16px] font-bold">
                      <th className="pb-4 w-[20%] font-bold">Colour</th>
                      <th className="pb-4 w-[15%] font-bold">Hex</th>
                      <th className="pb-4 w-[25%] font-bold">Role</th>
                      <th className="pb-4 w-[40%] font-bold">Rationale</th>
                    </tr>
                  </thead>
                  <tbody className="text-[14px] md:text-[16px] font-normal leading-relaxed">
                    {/* Row 1 */}
                    <tr className="align-top">
                      <td className="py-6 font-normal">Coral Orange</td>
                      <td className="py-6 font-normal">#EE785E</td>
                      <td className="py-6 font-normal">Primary / Brand</td>
                      <td className="py-6 font-normal">Warm and encouraging tone that feels approachable for students while still energetic enough to represent motivation, growth, and progress.</td>
                    </tr>
                    {/* Row 2 */}
                    <tr className="align-top border-t border-black/5">
                      <td className="py-6 font-normal">Soft Peach</td>
                      <td className="py-6 font-normal">#FFF5F3</td>
                      <td className="py-6 font-normal">Secondary Accent</td>
                      <td className="py-6 font-normal">Adds warmth to the interface without overwhelming the UI, helping maintain a friendly tone while supporting the primary color.</td>
                    </tr>
                    {/* Row 3 */}
                    <tr className="align-top border-t border-black/5">
                      <td className="py-6 font-normal">White</td>
                      <td className="py-6 font-normal">#FFFFFF</td>
                      <td className="py-6 font-normal">Background</td>
                      <td className="py-6 font-normal">Keeps the interface clean and breathable, ensuring focus stays on learning modules, tasks, and guidance content.</td>
                    </tr>
                    {/* Row 4 */}
                    <tr className="align-top border-t border-black/5">
                      <td className="py-6 font-normal">Card White</td>
                      <td className="py-6 font-normal">#F6F6F6</td>
                      <td className="py-6 font-normal">Surface / Cards</td>
                      <td className="py-6 font-normal">Creates subtle separation between UI sections while maintaining a soft, low-contrast layout that feels calm and readable.</td>
                    </tr>
                    {/* Row 5 */}
                    <tr className="align-top border-t border-black/5">
                      <td className="py-6 font-normal">Cool Gray</td>
                      <td className="py-6 font-normal">#757575</td>
                      <td className="py-6 font-normal">Sub-Text (Description)</td>
                      <td className="py-6 font-normal">Provides clear hierarchy for supporting text such as descriptions and hints without competing with primary content.</td>
                    </tr>
                    {/* Row 6 */}
                    <tr className="align-top border-t border-black/5">
                      <td className="py-6 font-normal">Soft gray</td>
                      <td className="py-6 font-normal">#E0E0E0</td>
                      <td className="py-6 font-normal">Strokes and Boundaries</td>
                      <td className="py-6 font-normal">Defines component boundaries and structure while remaining visually lightweight and unobtrusive.</td>
                    </tr>
                    {/* Row 7 */}
                    <tr className="align-top border-t border-black/5">
                      <td className="py-6 font-normal">Charcoal - Black ( Blue Undertone)</td>
                      <td className="py-6 font-normal">#292D32</td>
                      <td className="py-6 font-normal">Texts and Icons</td>
                      <td className="py-6 font-normal">Offers strong readability while remaining softer and more comfortable to read than pure black.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex flex-col gap-4 text-[16px] leading-relaxed text-black/80 font-normal mt-6">
                <p>
                  The color system centers around <span className="text-[#EE785E]">Coral Orange (#EE785E)</span> as the primary accent. The tone sits between warmth and energy, creating a sense of encouragement without feeling aggressive or overly competitive. For a career discovery product aimed at students, this balance is important; the interface should feel motivating while still remaining approachable and supportive.
                </p>
                <p>
                  The surrounding palette intentionally leans toward soft neutrals and muted grays, allowing the primary color to guide attention without overwhelming the interface. This helps maintain clarity across learning modules, assessments, and daily guidance tools where readability and calm visual structure are essential.
                </p>
                <p>
                  Bright, highly saturated colors were deliberately avoided to ensure the product does not feel childish for the 13–17 age group, while still maintaining a friendly and emotionally supportive tone. The combination of warm accents and restrained neutrals allows the interface to feel encouraging, modern, and focused on personal growth rather than pressure or performance.
                </p>
              </div>
            </div>

            {/* Typography */}
            <div className="flex flex-col gap-6">
              <h3 className="text-[22px] md:text-[26px] font-bold leading-tight">
                Typography
              </h3>

              <div className="w-full overflow-x-auto">
                <table className="w-full text-left font-sans text-black border-collapse min-w-[800px]">
                  <thead>
                    <tr className="border-b-[3px] border-black text-[15px] md:text-[16px] font-bold">
                      <th className="pb-4 w-[25%] font-bold">Typeface</th>
                      <th className="pb-4 w-[35%] font-bold">Usage</th>
                      <th className="pb-4 w-[40%] font-bold">Rationale</th>
                    </tr>
                  </thead>
                  <tbody className="text-[14px] md:text-[16px] font-normal leading-relaxed">
                    {/* Row 1 */}
                    <tr className="align-top">
                      <td className="py-6 font-normal font-montserrat">Montserrat - regular</td>
                      <td className="py-6 font-normal">Body text, descriptions, supporting information</td>
                      <td className="py-6 font-normal">Highly readable and neutral, making it ideal for longer content such as explanations, guidance text, and informational sections without adding visual fatigue.</td>
                    </tr>
                    {/* Row 2 */}
                    <tr className="align-top border-t border-black/5">
                      <td className="py-6 font-medium font-montserrat">Montserrat - Medium</td>
                      <td className="py-6 font-normal">Section titles, UI labels, navigation, key actions</td>
                      <td className="py-6 font-normal">Provides slightly stronger emphasis while maintaining clarity, helping users quickly scan sections and understand interface hierarchy.</td>
                    </tr>
                    {/* Row 3 */}
                    <tr className="align-top border-t border-black/5">
                      <td className="py-6 font-semibold font-montserrat">Montserrat - semibold</td>
                      <td className="py-6 font-normal">Headings, feature highlights, primary UI emphasis</td>
                      <td className="py-6 font-normal">Creates clear visual hierarchy and confidence in key areas of the interface, guiding attention to important actions and content.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Mascot Design Principles - AIM Section */}
        <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-24 border-t border-black/5">
          <div className="max-w-[1280px] mx-auto flex flex-col gap-12 font-sans text-black">
            {/* Header */}
            <h2 className="text-[32px] md:text-[40px] font-bold leading-none tracking-tight">
              Mascot Design Principles - AIM
            </h2>

            {/* Description Paragraphs */}
            <div className="flex flex-col gap-6 text-[16px] leading-relaxed text-black/80 font-normal">
              <p>
                The mascot — AIM — was developed as a friendly guide that accompanies students through their career exploration journey. The concept evolved through collaborative exploration with the illustrator, focusing on creating a character that feels approachable, expressive, and universally relatable. Rather than functioning as a typical gamified character, AIM acts as a subtle mentor that appears at key moments to guide, encourage, and celebrate progress.
              </p>
              <p>
                The direction focused on keeping the character abstract, gender-neutral, and emotionally expressive, allowing students to interpret it naturally without cultural or identity barriers. Through multiple iterations and visual explorations, the character's shape, movement, and expressions were refined to convey curiosity, encouragement, and celebration — reinforcing the product's goal of making career discovery feel supportive rather than intimidating.
              </p>
            </div>

            {/* Bullet Points */}
            <ul className="flex flex-col gap-4 text-[16px] leading-relaxed text-black/90 font-normal">
              <li className="flex items-start gap-3">
                <span className="select-none text-[#EE785E]">•</span>
                <span>
                  <span className="text-[#EE785E] font-semibold">Abstract, playful design</span> — AIM uses a soft, rounded shape and expressive body language to communicate emotions without relying on complex facial features. This keeps the character universally relatable and easy to interpret across cultures.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="select-none text-[#EE785E]">•</span>
                <span>
                  <span className="text-[#EE785E] font-semibold">Gender-neutral and culturally neutral</span> — The character avoids human traits, ensuring it feels inclusive and approachable for students from diverse backgrounds.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="select-none text-[#EE785E]">•</span>
                <span>
                  <span className="text-[#EE785E] font-semibold">Emotion-based states</span> — AIM communicates through simple expressive poses such as curious (exploration), thinking (decision moments), supportive (guidance prompts), and celebratory (progress or achievements).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="select-none text-[#EE785E]">•</span>
                <span>
                  <span className="text-[#EE785E] font-semibold">Context-driven presence</span> — AIM appears during onboarding, discoveries, achievements, and reflection moments rather than constantly staying on the screen, ensuring the interface remains focused and distraction-free.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="select-none text-[#EE785E]">•</span>
                <span>
                  <span className="text-[#EE785E] font-semibold">Mentor-like conversational tone</span> — AIM communicates in a supportive, friendly voice such as “Hey, I found something interesting based on what you like...” making the interaction feel personal rather than instructional.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="select-none text-[#EE785E]">•</span>
                <span>
                  <span className="text-[#EE785E] font-semibold">Soft motion principles</span> — Movements are designed to feel light and friendly, with smooth transitions and gentle entrances so the character enhances the experience without feeling intrusive.
                </span>
              </li>
            </ul>

          </div>
        </section>

        {/* Information Architecture Section */}
        <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-24 border-t border-black/5">
          <div className="max-w-[1280px] mx-auto flex flex-col gap-12 font-sans text-black">
            {/* Header */}
            <div className="flex items-start gap-1">
              <h2 className="text-[32px] md:text-[40px] font-bold leading-none tracking-tight">
                Information Architecture
              </h2>
              <span className="text-[14px] font-bold text-black translate-y-1 leading-none">(05)</span>
            </div>

            {/* Description */}
            <p className="text-[16px] leading-relaxed text-black/80 font-normal">
              Before designing any screens, the full information architecture was mapped to ensure every feature had a clear home, and that the navigation model matched how students actually think about their day — not how features are categorized internally.
            </p>

            {/* Architecture Image */}
            <div className="w-full mt-6 flex justify-center">
              <Image
                src="/architecture.svg"
                alt="Information Architecture Diagram"
                width={1280}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Feature Prioritisation */}
            <div className="flex flex-col gap-6 mt-6">
              <h3 className="text-[22px] md:text-[26px] font-bold leading-tight">
                Feature Prioritisation
              </h3>
              <h4 className="text-[18px] md:text-[20px] font-bold leading-tight text-black/90">
                MoSCoW Prioritisation
              </h4>
              <p className="text-[16px] leading-relaxed text-black/80 font-normal">
                With a single-quarter timeline and a 0-1 scope, prioritization was critical. <span className="text-[#EE785E]">MoSCoW</span> was used to align with stakeholders on what ships in v1, what's planned for v1.1, and what goes into the future roadmap.
              </p>

              {/* MoSCoW Image */}
              <div className="w-full mt-4 flex justify-center">
                <Image
                  src="/feature.svg"
                  alt="MoSCoW Feature Prioritisation"
                  width={1280}
                  height={500}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Navigation Structure */}
            <div className="flex flex-col gap-6 mt-6">
              <h3 className="text-[22px] md:text-[26px] font-bold leading-tight">
                Navigation Structure — Four Primary Tabs
              </h3>

              <div className="w-full overflow-x-auto">
                <table className="w-full text-left font-sans text-black border-collapse min-w-[800px]">
                  <thead>
                    <tr className="border-b-[3px] border-black text-[15px] md:text-[16px] font-bold">
                      <th className="pb-4 w-[20%] font-bold">Tab</th>
                      <th className="pb-4 w-[20%] font-bold">Icon Concept</th>
                      <th className="pb-4 w-[30%] font-bold">Primary Concept</th>
                      <th className="pb-4 w-[30%] font-bold">Secondary Concept</th>
                    </tr>
                  </thead>
                  <tbody className="text-[14px] md:text-[16px] font-normal leading-relaxed">
                    {/* Row 1 */}
                    <tr className="align-top">
                      <td className="py-6 font-normal">Home</td>
                      <td className="py-6 font-normal">House</td>
                      <td className="py-6 font-normal">The main dashboard where students receive personalized prompts, test cards, and daily activities tailored to their class and interests.</td>
                      <td className="py-6 font-normal">Encourages daily engagement through features like the Pomodoro timer, mood check-ins, and a flash card that reveals a new career insight each day.</td>
                    </tr>
                    {/* Row 2 */}
                    <tr className="align-top border-t border-black/5">
                      <td className="py-6 font-normal">Explore</td>
                      <td className="py-6 font-normal">compass</td>
                      <td className="py-6 font-normal">A structured space where students can browse subject-wise learning resources and materials relevant to their academic level.</td>
                      <td className="py-6 font-normal">Helps students quickly access curated resources across subjects without overwhelming them with unnecessary options.</td>
                    </tr>
                    {/* Row 3 */}
                    <tr className="align-top border-t border-black/5">
                      <td className="py-6 font-normal">Consultation booking</td>
                      <td className="py-6 font-normal">Conversation bubble</td>
                      <td className="py-6 font-normal">Allows students to schedule guidance sessions with mentors or counselors for career-related support.</td>
                      <td className="py-6 font-normal">Provides a human layer of assurance alongside the app's digital guidance and assessments.</td>
                    </tr>
                    {/* Row 4 */}
                    <tr className="align-top border-t border-black/5">
                      <td className="py-6 font-normal">Reports</td>
                      <td className="py-6 font-normal">Progress document</td>
                      <td className="py-6 font-normal">Displays structured reports based on completed tests, interests, and behavioral patterns.</td>
                      <td className="py-6 font-normal">Helps students and parents understand strengths, weaknesses, and possible career directions.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-[16px] leading-relaxed text-black/80 font-normal mt-2">
                Early exploration used a hamburger navigation. Two rounds of feedback revealed students found it 'hidden' and stopped exploring secondary features. Switching to a persistent bottom tab bar (4 items max) increased feature discoverability significantly in the next round of feedback sessions.
              </p>
            </div>

            {/* Navigation Decision Rationale */}
            <div className="flex flex-col gap-6 mt-6">
              <h3 className="text-[22px] md:text-[26px] font-bold leading-tight">
                Navigation Decision Rationale
              </h3>

              <div className="w-full overflow-x-auto">
                <table className="w-full text-left font-sans text-black border-collapse min-w-[800px]">
                  <thead>
                    <tr className="border-b-[3px] border-black text-[15px] md:text-[16px] font-bold">
                      <th className="pb-4 w-[30%] font-bold">Option Tested</th>
                      <th className="pb-4 w-[35%] font-bold">User Feedback</th>
                      <th className="pb-4 w-[35%] font-bold">Decision</th>
                    </tr>
                  </thead>
                  <tbody className="text-[14px] md:text-[16px] font-normal leading-relaxed">
                    {/* Row 1 */}
                    <tr className="align-top">
                      <td className="py-6 font-normal">Hamburger menu</td>
                      <td className="py-6 font-normal">'Hidden', I forgot those features existed</td>
                      <td className="py-6 font-normal">Rejected — hides secondary content</td>
                    </tr>
                    {/* Row 2 */}
                    <tr className="align-top border-t border-black/5">
                      <td className="py-6 font-normal">5-tab bottom bar</td>
                      <td className="py-6 font-normal">Too many options, felt overwhelming</td>
                      <td className="py-6 font-normal">Rejected — cognitive overload for younger users</td>
                    </tr>
                    {/* Row 3 */}
                    <tr className="align-top border-t border-black/5">
                      <td className="py-6 font-normal">4-tab bottom bar</td>
                      <td className="py-6 font-normal">'Easy to understand, I know where everything is'</td>
                      <td className="py-6 font-normal">Selected — optimal balance of reach and clarity</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Parent Dashboard */}
            <div className="flex flex-col gap-6 mt-6">
              <h3 className="text-[22px] md:text-[26px] font-bold leading-tight">
                Parent Dashboard — Separate Architecture
              </h3>
              <p className="text-[16px] leading-relaxed text-black/80 font-normal">
                Parents access a separate, distinct view — not a parent-mode toggle on the student account. This is an intentional architectural decision: students should feel their app is truly theirs, not monitored by a parent-accessible account sharing the same interface.
              </p>
            </div>


          </div>
        </section>

      </div>

      <div id="final-design">
        {/* Chapter Image 2 Section */}
        <section className="w-full">
          <Image
            src="/chapterimage2.svg"
            alt="Chapter Image 2"
            width={1920}
            height={1080}
            className="w-full h-auto block"
          />
        </section>

        {/* Design System Section */}
        <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-24 border-t border-black/5">
          <div className="max-w-[1280px] mx-auto flex flex-col gap-12 font-sans text-black">
            {/* Header */}
            <div className="flex flex-col gap-2">
              <h2 className="text-[32px] md:text-[40px] font-bold leading-none tracking-tight">
                Design System
              </h2>
              <h3 className="text-[18px] md:text-[20px] font-bold leading-tight text-black/90 mt-2">
                Component Library & Design System
              </h3>
              <p className="text-[16px] leading-relaxed text-black/80 font-normal mt-2">
                A component library was built in Figma alongside the screen designs — not after. Working this way meant every design decision immediately became a reusable component, and handoff documentation was generated progressively rather than as a last-minute sprint.
              </p>
            </div>

            {/* Design System Table */}
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left font-sans text-black border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b-[3px] border-black text-[15px] md:text-[16px] font-bold">
                    <th className="pb-4 w-[20%] font-bold">Category</th>
                    <th className="pb-4 w-[45%] font-bold">Components</th>
                    <th className="pb-4 w-[35%] font-bold">Notes</th>
                  </tr>
                </thead>
                <tbody className="text-[14px] md:text-[16px] font-normal leading-relaxed">
                  {/* Row 1 */}
                  <tr className="align-top">
                    <td className="py-6 font-normal">Foundations</td>
                    <td className="py-6 font-normal">Colour tokens, Typography scale, Spacing scale, Elevation, Iconography</td>
                    <td className="py-6 font-normal">Token-based; all values reference design tokens not raw values</td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="align-top border-t border-black/5">
                    <td className="py-6 font-normal">Navigation</td>
                    <td className="py-6 font-normal">Bottom tab bar, App bar, Back navigation, Tab indicator</td>
                    <td className="py-6 font-normal">All states: default, active, disabled</td>
                  </tr>
                  {/* Row 3 */}
                  <tr className="align-top border-t border-black/5">
                    <td className="py-6 font-normal">Cards</td>
                    <td className="py-6 font-normal">Activity card, Career card, Mood card, Achievement card, Insight card</td>
                    <td className="py-6 font-normal">Expandable, skeleton loading states included</td>
                  </tr>
                  {/* Row 4 */}
                  <tr className="align-top border-t border-black/5">
                    <td className="py-6 font-normal">Inputs</td>
                    <td className="py-6 font-normal">Text field, Emoji selector, Tag selector, Card sort, Slider</td>
                    <td className="py-6 font-normal">All validation states, error messages</td>
                  </tr>
                  {/* Row 5 */}
                  <tr className="align-top border-t border-black/5">
                    <td className="py-6 font-normal">Feedback</td>
                    <td className="py-6 font-normal">Toast notifications, Progress bar, Streak counter, Achievement Success / warning / error / info variants badge</td>
                    <td className="py-6 font-normal"></td>
                  </tr>
                  {/* Row 6 */}
                  <tr className="align-top border-t border-black/5">
                    <td className="py-6 font-normal">Feedback</td>
                    <td className="py-6 font-normal">4 emotional states × 3 sizes</td>
                    <td className="py-6 font-normal">Lottie specs and static PNG fallbacks</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Impact & Results Section */}
        <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-24 border-t border-black/5">
          <div className="max-w-[1280px] mx-auto flex flex-col gap-10 font-sans text-black">

            {/* Header */}
            <div className="flex flex-col gap-2">
              <h2 className="text-[32px] md:text-[40px] font-bold leading-none tracking-tight">
                Impact & Results
              </h2>
              <h3 className="text-[18px] md:text-[20px] font-bold leading-tight text-black/90 mt-2">
                Outcomes & Impact
              </h3>
              <p className="text-[16px] leading-relaxed text-black/80 font-normal mt-2">
                This is an ongoing project wrapping in March 2026. The metrics below reflect design outcomes, usability testing results, and concept validation signals — not post-launch analytics. These are the indicators measurable as a designer at the handoff stage.
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="w-full flex flex-col overflow-hidden">

              {/* Row 1 */}
              <div className="grid grid-cols-[1fr_2.5fr]">
                <div className="bg-[#EE785E] flex items-center justify-center py-10 px-6">
                  <span className="text-[48px] md:text-[60px] font-bold text-white leading-none">94%</span>
                </div>
                <div className="bg-[#FED9D0] flex flex-col justify-center py-10 px-8 gap-2">
                  <span className="text-[20px] md:text-[22px] font-bold text-black leading-snug">Onboarding Completion Rate</span>
                  <span className="text-[14px] md:text-[16px] font-normal text-black/70">Onboarding Completion Rate</span>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-[1fr_2.5fr]">
                <div className="bg-[#EE785E] flex items-center justify-center py-10 px-6 border-t border-white/20">
                  <span className="text-[48px] md:text-[60px] font-bold text-white leading-none">100%</span>
                </div>
                <div className="bg-[#FED9D0] flex flex-col justify-center py-10 px-8 gap-2 border-t border-[#EE785E]/20">
                  <span className="text-[20px] md:text-[22px] font-bold text-black leading-snug">Onboarding Completion Rate</span>
                  <span className="text-[14px] md:text-[16px] font-normal text-black/70">Onboarding Completion Rate</span>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-[1fr_2.5fr]">
                <div className="bg-[#EE785E] flex items-center justify-center py-10 px-6 border-t border-white/20">
                  <span className="text-[40px] md:text-[52px] font-bold text-white leading-none">&lt; 3 min</span>
                </div>
                <div className="bg-[#FED9D0] flex flex-col justify-center py-10 px-8 gap-2 border-t border-[#EE785E]/20">
                  <span className="text-[20px] md:text-[22px] font-bold text-black leading-snug">Onboarding Completion Rate</span>
                  <span className="text-[14px] md:text-[16px] font-normal text-black/70">Onboarding Completion Rate</span>
                </div>
              </div>

              {/* Row 4 */}
              <div className="grid grid-cols-[1fr_2.5fr]">
                <div className="bg-[#EE785E] flex items-center justify-center py-10 px-6 border-t border-white/20">
                  <span className="text-[48px] md:text-[60px] font-bold text-white leading-none">88%</span>
                </div>
                <div className="bg-[#FED9D0] flex flex-col justify-center py-10 px-8 gap-2 border-t border-[#EE785E]/20">
                  <span className="text-[20px] md:text-[22px] font-bold text-black leading-snug">Onboarding Completion Rate</span>
                  <span className="text-[14px] md:text-[16px] font-normal text-black/70">Onboarding Completion Rate</span>
                </div>
              </div>

              {/* Row 5 */}
              <div className="grid grid-cols-[1fr_2.5fr]">
                <div className="bg-[#EE785E] flex items-center justify-center py-10 px-6 border-t border-white/20">
                  <span className="text-[48px] md:text-[60px] font-bold text-white leading-none">3%</span>
                </div>
                <div className="bg-[#FED9D0] flex flex-col justify-center py-10 px-8 gap-2 border-t border-[#EE785E]/20">
                  <span className="text-[20px] md:text-[22px] font-bold text-black leading-snug">Onboarding Completion Rate</span>
                  <span className="text-[14px] md:text-[16px] font-normal text-black/70">Onboarding Completion Rate</span>
                </div>
              </div>

              {/* Row 6 */}
              <div className="grid grid-cols-[1fr_2.5fr]">
                <div className="bg-[#EE785E] flex items-center justify-center py-10 px-6 border-t border-white/20">
                  <span className="text-[48px] md:text-[60px] font-bold text-white leading-none">91%</span>
                </div>
                <div className="bg-[#FED9D0] flex flex-col justify-center py-10 px-8 gap-2 border-t border-[#EE785E]/20">
                  <span className="text-[20px] md:text-[22px] font-bold text-black leading-snug">Onboarding Completion Rate</span>
                  <span className="text-[14px] md:text-[16px] font-normal text-black/70">Onboarding Completion Rate</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Final Outcomes & Reflections Section */}
        <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-24 border-t border-black/5">
          <div className="max-w-[1280px] mx-auto flex flex-col gap-10 font-sans text-black">

            {/* Header */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[32px] md:text-[40px] font-bold leading-none tracking-tight">
                Final Outcomes & Reflections
              </h2>
              <p className="text-[16px] leading-relaxed text-black/80 font-normal">
                This is an ongoing project wrapping in March 2026. The metrics below reflect design outcomes, usability testing results, and concept validation signals — not post-launch analytics. These are the indicators measurable as a designer at the handoff stage.
              </p>
            </div>

            {/* Box 1 — What I Learned */}
            <div className="w-full bg-[#FED9D0] rounded-none px-8 md:px-12 py-10 flex flex-col gap-8">
              <span className="text-[20px] md:text-[22px] font-bold text-[#EE785E]">What I Learned</span>

              {/* Item 1 */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[18px] md:text-[20px] font-bold text-[#422A18]">Emotional design is structural, not decorative</h3>
                <p className="text-[15px] md:text-[16px] font-normal text-[#422A18] leading-relaxed">
                  The most important design decisions weren't colours or icons — they were architectural: keeping parent and student access separate, making mood check-in voluntary, holding results until all modules were complete. Each of these decisions protected the emotional safety of the experience.
                </p>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[18px] md:text-[20px] font-bold text-[#422A18]">Speed of onboarding is trust-building</h3>
                <p className="text-[15px] md:text-[16px] font-normal text-[#422A18] leading-relaxed">
                  Every extra question in onboarding was a micro-moment of doubt. Removing 8 questions didn't reduce product quality — it dramatically increased the number of students who reached the actual product.
                </p>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[18px] md:text-[20px] font-bold text-[#422A18]">The hardest decisions were about removal</h3>
                <p className="text-[15px] md:text-[16px] font-normal text-[#422A18] leading-relaxed">
                  Several ideas that improved engagement on paper — instant feedback, visible progress, more choices — were deliberately excluded because they introduced pressure.
                </p>
              </div>

              {/* Item 4 */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[18px] md:text-[20px] font-bold text-[#422A18]">Fewer exploration paths led to faster commitment</h3>
                <p className="text-[15px] md:text-[16px] font-normal text-[#422A18] leading-relaxed">
                  Limiting choices in the explore section reduced hesitation — users moved forward instead of comparing options endlessly.
                </p>
              </div>
            </div>

            {/* Box 2 — Outcomes & Impact */}
            <div className="w-full bg-[#FED9D0] rounded-none px-8 md:px-12 py-10 flex flex-col gap-8">
              <span className="text-[20px] md:text-[22px] font-bold text-[#EE785E]">Outcomes & Impact</span>

              {/* Item 1 */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[18px] md:text-[20px] font-bold text-[#422A18]">First-time users required less recovery</h3>
                <p className="text-[15px] md:text-[16px] font-normal text-[#422A18] leading-relaxed">
                  Fewer users restarted or abandoned flows due to confusion — indicating the structure was self-explanatory without external help.
                </p>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[18px] md:text-[20px] font-bold text-[#422A18]">34% drop in mid-flow abandonment</h3>
                <p className="text-[15px] md:text-[16px] font-normal text-[#422A18] leading-relaxed">
                  Restructuring the experience into a guided sequence shifted drop-offs to the entry stage instead of inside critical reflection moments.
                </p>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[18px] md:text-[20px] font-bold text-[#422A18]">Session behavior became less erratic</h3>
                <p className="text-[15px] md:text-[16px] font-normal text-[#422A18] leading-relaxed">
                  Session lengths stabilized across users instead of showing sharp drop-offs or spikes, pointing to a more controlled and understandable experience.
                </p>
              </div>

              {/* Item 4 */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[18px] md:text-[20px] font-bold text-[#422A18]">Exploration-to-action conversion improved</h3>
                <p className="text-[15px] md:text-[16px] font-normal text-[#422A18] leading-relaxed">
                  More users moved from browsing options to actually starting a module, reducing passive usage within the app.
                </p>
              </div>

              {/* Item 5 */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[18px] md:text-[20px] font-bold text-[#422A18]">Feature usage became more evenly distributed</h3>
                <p className="text-[15px] md:text-[16px] font-normal text-[#422A18] leading-relaxed">
                  Instead of one dominant feature, users engaged with multiple parts of the system, showing that the experience worked as a whole rather than in fragments.
                </p>
              </div>
            </div>

          </div>
        </section>
      </div>
      <Dock viewProjectUrl="/projects" showWebsiteDrafts={false} />
    </div>
  );
}
