import { HeroSection } from '@/components/hero-section'
import { NavButtons } from '@/components/nav-buttons'
import { AboutMeSection } from '@/components/about-me-section'
import { VideoSection } from '@/components/video-section'
import { ProjectsGrid } from '@/components/projects-grid'
import { CTASection } from '@/components/cta-section'
import { FloatingElements } from '@/components/floating-elements'

export default function Home() {
  return (
    <main className="relative">
      <FloatingElements />
      <NavButtons />
      <section id="home">
        <HeroSection />
      </section>
      <AboutMeSection />
      <section id="languages">
        <VideoSection />
      </section>
      <section id="work">
        <ProjectsGrid />
      </section>
      <section id="contact">
        <CTASection />
      </section>
      
      {/* Footer */}
      <footer className="bg-surface/50 border-t border-border py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-text-muted">
          <p>© 2025 Abdelkarim Erraji. Designed & built with precision.</p>
        </div>
      </footer>
    </main>
  )
}
