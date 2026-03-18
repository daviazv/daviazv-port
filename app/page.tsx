import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsPreviewSection } from "@/components/sections/projects-preview-section";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6">
        <HeroSection />
        <SkillsSection />
        <ProjectsPreviewSection />
      </main>
      <div className="mx-auto w-full max-w-3xl px-6">
        <Footer />
      </div>
    </div>
  );
}
