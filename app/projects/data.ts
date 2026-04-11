export interface Project {
  id: string;
  name: string;
  slug: string;
  description: string;
  tags: string[];
  image: string;
  
  // Detail page data
  title: string;
  subtitle: string;
  heroBg: string;
  role: string;
  duration: string;
  year: string;
  context: {
    problem: string;
    opportunity: string;
    solution: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: "01",
    name: "Chapter 1-Mobile App",
    slug: "chapter-1-mobile",
    description: "A long-term digital growth companion that guides students aged 13–17 from career confusion to confident, informed decisions — while actively protecting their mental well-being.",
    tags: ["3 Months", "Product Design", "Branding"],
    image: "/test.svg",
    title: "Onetac —— Explore India with us",
    subtitle: "Igniting India's tourism wave through a decentralized platform that connects travelers with authentic local storytellers.",
    heroBg: "#FFD11D",
    role: "Product Designer",
    duration: "3 Months",
    year: "2024",
    context: {
      problem: "Travelers in India often struggle to find authentic, off-the-beaten-path experiences, while local storytellers lack a platform to monetize their cultural knowledge.",
      opportunity: "A web3-enabled platform that incentivizes local communities to share their heritage while providing travelers with verified, immersive tours.",
      solution: "A mobile-first marketplace where storytellers create 'chapters' of Indian history, bookable via a secure, transparent payment system."
    }
  },
  {
    id: "02",
    name: "Chapter 1-Admin Dashboard",
    slug: "chapter-1-admin",
    description: "A centralized admin dashboard that unifies student insights, consulting workflows, and appointment scheduling—enabling teams to track progress, manage sessions, and deliver timely, informed support with clarity and ease.",
    tags: ["1 Month", "Product Design", "Branding"],
    image: "/test.svg",
    title: "Chapter 1 Admin —— Unified Insight",
    subtitle: "Empowering educational consultants with data-driven workflows to guide students more effectively.",
    heroBg: "#E8F5E9",
    role: "Lead Designer",
    duration: "1 Month",
    year: "2024",
    context: {
      problem: "Educational consultants were overwhelmed by fragmented student data across multiple spreadsheets and tools.",
      opportunity: "A unified dashboard to centralize student history, session notes, and career trajectory mapping.",
      solution: "A comprehensive CRM-style dashboard with intuitive visualization of student progress and automated scheduling."
    }
  },
  {
    id: "03",
    name: "Simplita",
    slug: "simplita",
    description: "A simplified financial wellness platform designed to help young adults manage their money with confidence and ease.",
    tags: ["10 Months", "Product Design", "Branding"],
    image: "/test.svg",
    title: "Simplita —— Finance for all",
    subtitle: "Reimagining personal finance through a lens of simplicity, accessibility, and emotional well-being.",
    heroBg: "#F0F4FF",
    role: "Product Designer",
    duration: "10 Months",
    year: "2023",
    context: {
      problem: "Most finance apps are cluttered with jargon and complex charts that intimidate non-expert users.",
      opportunity: "Create a 'calm' finance app that focuses on essential actions and positive reinforcement.",
      solution: "A minimalist interface with conversational AI assistants and automated savings 'pots' designed for psychological ease."
    }
  },
  {
    id: "04",
    name: "OneTAC",
    slug: "onetac",
    description: "A tactical collaboration tool for fast-moving product teams to bridge the gap between design and development.",
    tags: ["2 Weeks", "Product Design", "Branding"],
    image: "/test.svg",
    title: "OneTAC —— Bridge the Gap",
    subtitle: "Streamlining the handoff process through automated documentation and shared component state tracking.",
    heroBg: "#d63232ff",
    role: "Product Designer",
    duration: "2 Weeks",
    year: "2024",
    context: {
      problem: "Static design handoffs often lead to communication breakdowns and inconsistent implementations.",
      opportunity: "A living handoff tool that translates design tokens directly into actionable dev tickets.",
      solution: "A real-time synchronization layer between Figma and GitHub that automates asset export and documentation."
    }
  },
  {
    id: "05",
    name: "QSEVerse",
    slug: "qseverse",
    description: "An immersive Metaverse experience designed for educational institutions to host interactive virtual events.",
    tags: ["2 Weeks", "Product Design", "Branding"],
    image: "/test.svg",
    title: "QSEVerse —— Virtual Campus",
    subtitle: "Breaking the barriers of physical distance through an immersive, browser-based 3D campus experience.",
    heroBg: "#6200EE",
    role: "UX/UI Designer",
    duration: "2 Weeks",
    year: "2023",
    context: {
      problem: "Remote learning lacks the social and spatial cues that make physical campuses engaging for students.",
      opportunity: "Leverage WebGL and spatial audio to recreate the 'serendipity' of campus life in the browser.",
      solution: "A high-fidelity 3D environment where students can navigate via avatars and join spontaneous study groups."
    }
  },
  {
    id: "06",
    name: "Remora",
    slug: "remora",
    description: "An AI-powered research assistant that helps students and researchers organize their findings and generate insights.",
    tags: ["1 Month", "Product Design", "Branding"],
    image: "/test.svg",
    title: "Remora —— Smart Research",
    subtitle: "Turning fragmented notes into structured knowledge through advanced AI-assisted synthesis.",
    heroBg: "#5eda40ff",
    role: "Founding Designer",
    duration: "1 Month",
    year: "2023",
    context: {
      problem: "Researchers spend 40% of their time organizing citations and notes rather than synthesizing new ideas.",
      opportunity: "An 'attached' research assistant that lives in your browser and contextually organizes findings.",
      solution: "A browser extension and web app that uses LLMs to tag, link, and summarize research materials in real-time."
    }
  },
  {
    id: "07",
    name: "Thestylesanctuary",
    slug: "thestylesanctuary",
    description: "A curated fashion marketplace that connects conscious consumers with ethical, mid-scale boutique brands.",
    tags: ["1 Month", "Product Design", "Branding"],
    image: "/test.svg",
    title: "TSS —— Conscious Fashion",
    subtitle: "Creating a sanctuary for ethical fashion discovery, where every purchase tells a story of sustainability.",
    heroBg: "#FFF8F0",
    role: "Lead Designer",
    duration: "1 Month",
    year: "2024",
    context: {
      problem: "Ethical fashion is often hard to find and lacks the high-end shopping experience of luxury brands.",
      opportunity: "A curated, 'sanctuary' styled marketplace that elevates sustainable brands through premium storytelling.",
      solution: "An immersive e-commerce platform with deep brand stories and transparency metrics front-and-center."
    }
  },
  {
    id: "08",
    name: "Joyel's portfolio",
    slug: "joyel-portfolio",
    description: "A high-fidelity, interactive portfolio built for a multidisciplinary creative director.",
    tags: ["1 Month", "Product Design", "Branding"],
    image: "/test.svg",
    title: "Joyel —— Creative Portfolio",
    subtitle: "Showcasing a decade of creative leadership through a dynamic, motion-led digital experience.",
    heroBg: "#64b4f6ff",
    role: "Interaction Designer",
    duration: "1 Month",
    year: "2024",
    context: {
      problem: "Traditional portfolios feel static and fail to capture the energy of motion-based creative work.",
      opportunity: "Build a canvas-first portfolio that uses scroll-driven animations as the primary storytelling tool.",
      solution: "A Next.js site leveraging Framer Motion and custom shaders to create a tactile, interactive showcase."
    }
  },
  {
    id: "09",
    name: "Ajith's Portfolio",
    slug: "ajith-portfolio",
    description: "A minimalist, typography-driven portfolio for a product designer focused on accessibility.",
    tags: ["2 Weeks", "Product Design", "Branding"],
    image: "/test.svg",
    title: "Ajith —— Product Portfolio",
    subtitle: "Prioritizing accessibility and clarity in digital storytelling for inclusive product design.",
    heroBg: "#f3ff4dff",
    role: "Product Designer",
    duration: "2 Weeks",
    year: "2024",
    context: {
      problem: "A11y-focused portfolios often compromise on visual design, leading to uninspired layouts.",
      opportunity: "Prove that accessibility and highnd aesthetics can coexist through bold typography and clean grids.",
      solution: "A strictly accessible (WCAG AAA) portfolio with high-contrast modes and screen-reader optimized case studies."
    }
  }
];
