import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { RoadmapTimeline } from "@/components/sections/RoadmapTimeline";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ResumeSection />
      <RoadmapTimeline />
      <ContactSection />
    </>
  );
}
