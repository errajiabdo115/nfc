import { HeroSection } from '@/components/hero-section'
import { NavButtons } from '@/components/nav-buttons'
import { VideoSection } from '@/components/video-section'
import { ProjectsGrid } from '@/components/projects-grid'
import { UIDesigns } from '@/components/ui-designs'
import { CTASection } from '@/components/cta-section'
import { FloatingElements } from '@/components/floating-elements'

export default function Home() {
  return (
    <main className="relative">
      <FloatingElements />
      <NavButtons />
      <HeroSection />
      <VideoSection />
      <ProjectsGrid />
      <UIDesigns />
      <CTASection />
      
      {/* Footer */}
      <footer className="bg-surface/50 border-t border-border py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-text-muted">
          <p>© 2025 Abdelkarim Erraji. Designed & built with precision.</p>
        </div>
      </footer>
    </main>
  )
}
