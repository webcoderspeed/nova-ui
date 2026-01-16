import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { InstallationSection } from "@/components/installation-section"
import { ComponentShowcase } from "@/components/component-showcase"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CommunitySection } from "@/components/community-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <InstallationSection />
        <ComponentShowcase />
        <TestimonialsSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  )
}
