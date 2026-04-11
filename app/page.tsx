import Hero from "./components/Hero";
import ProjectGrid from "./components/ProjectGrid";
import InsightSection from "./components/InsightSection";
import Testimonials from "./components/Testimonials";
import HeadPop from "./components/headPop";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-brand-yellow selection:text-brand-green">
      <Hero />
      <ProjectGrid />
      <InsightSection />
      <Testimonials />
      <HeadPop />
    </main>
  );
}


