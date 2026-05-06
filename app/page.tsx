import Hero from "./components/Hero";
import ProjectGrid from "./components/ProjectGrid";
import InsightSection from "./components/InsightSection";
import Testimonials from "./components/Testimonials";
import HeadPop from "./components/headPop";
import Highlight from "./components/highLight";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-brand-yellow selection:text-brand-green">
      <Hero />
      <ProjectGrid />
      <Highlight />
      <InsightSection />
      <Testimonials />
      <HeadPop />
    </main>
  );
}


