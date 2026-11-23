'use client'

import { assetUrl } from '@/lib/assets'

export function HeroSection() {
  function scrollToSection(sectionId: string): void {
    if (typeof window === 'undefined') return

    const id = sectionId.startsWith('#') ? sectionId.slice(1) : sectionId
    const target =
      document.getElementById(id) || document.querySelector<HTMLElement>(`[data-section="${id}"]`)

    if (!target) return

    // If you have a fixed header, adjust this offset (in px) so the section isn't hidden.
    const headerOffset = 80
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset

    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-10">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-surface opacity-50" />

      {/* Decorative SVG wave elements */}
      <svg
        className="absolute top-0 right-0 w-full h-96 opacity-30"
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 Q300,0 600,100 T1200,100"
          stroke="url(#gradientWave)"
          strokeWidth="3"
          fill="none"
        />
        <defs>
          <linearGradient id="gradientWave" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(217, 70, 239)" />
            <stop offset="50%" stopColor="rgb(6, 182, 212)" />
            <stop offset="100%" stopColor="rgb(236, 72, 153)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          {/* Role */}
          <div className="flex items-center gap-2 text-accent font-mono text-sm tracking-wide">
            <span className="text-primary">✦</span> FULL-STACK SOFTWARE ENGINEER
          </div>

          {/* NFC-friendly contact card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 rounded-xl border border-border bg-surface/70 p-3 sm:p-4 font-mono text-xs sm:text-sm">
            <a href="tel:+212661252184" className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors">
              <span className="text-accent">☎</span>
              <span>0661252184</span>
            </a>
            <a href="mailto:abdelkarimerraji4@gmail.com" className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors break-all">
              <span className="text-secondary">✉</span>
              <span>abdelkarimerraji4@gmail.com</span>
            </a>
            <a href="https://github.com/Abdo115-6" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors">
              <span className="text-primary">GH</span>
              <span>Abdo115-6</span>
            </a>
            <a href="https://linkedin.com/in/abdelkarim-erraji" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors">
              <span className="text-accent">IN</span>
              <span>abdelkarim-erraji</span>
            </a>
            <span className="sm:col-span-2 text-text-muted">
              <span className="mr-2">📍</span>Casablanca, Morocco · Mobility: Morocco, France, Germany
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black leading-[0.95] text-balance">
            <span className="block text-text">Abdelkarim</span>
            <span className="block gradient-text">Erraji</span>
          </h1>

          {/* Description */}
          <div className="space-y-2 pt-4">
            <p className="text-lg sm:text-2xl font-bold text-text">
              Java / Spring Boot Software Engineer
            </p>
            <p className="text-base sm:text-xl text-text-muted">
              Final-year engineering student seeking a 2027 internship
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 sm:pt-8">
            <a href={assetUrl('/abdelkarim-erraji.vcf')} download="Abdelkarim-Erraji.vcf" className="px-4 sm:px-8 py-3 sm:py-4 text-center bg-primary hover:bg-primary/90 text-background rounded-xl font-bold transition-all duration-300 glow-primary uppercase tracking-wider text-xs sm:text-sm">
              Save Contact
            </a>
            <a href={assetUrl('/Abdelkarim_Erraji_CV.pdf')} download="Abdelkarim_Erraji_CV.pdf" className="px-4 sm:px-8 py-3 sm:py-4 text-center border-2 border-accent text-accent hover:bg-accent/10 rounded-xl font-bold transition-all duration-300 uppercase tracking-wider text-xs sm:text-sm">
              Download CV
            </a>
            <button onClick={() => scrollToSection('about')} className="px-4 sm:px-8 py-3 sm:py-4 bg-secondary hover:bg-secondary/90 text-background rounded-xl font-bold transition-all duration-300 glow-secondary uppercase tracking-wider text-xs sm:text-sm">
              About Me
            </button>
            <button onClick={() => scrollToSection('experience')} className="px-4 sm:px-8 py-3 sm:py-4 bg-accent hover:bg-accent/90 text-background rounded-xl font-bold transition-all duration-300 glow-accent uppercase tracking-wider text-xs sm:text-sm">
              Experience
            </button>
            <button onClick={() => scrollToSection('work')} className="col-span-2 sm:col-span-3 px-4 sm:px-8 py-3 sm:py-4 border-2 border-primary text-primary hover:bg-primary/10 rounded-xl font-bold transition-all duration-300 uppercase tracking-wider text-xs sm:text-sm">
              Projects
            </button>
          </div>
        </div>

        {/* Right Side - Neon Rings with Profile Image */}
        <div className="relative h-72 sm:h-96 md:h-[600px] flex items-center justify-center mt-2 lg:mt-0">
          
          {/* Large outer neon ring - Purple/Pink */}
          <div className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border-4 border-primary/30 animate-pulse">
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-secondary border-r-secondary/50 animate-spin" style={{ animationDuration: '8s' }} />
          </div>

          {/* Medium neon ring - Cyan */}
          <div className="absolute w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full border-3 border-accent/40">
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-accent border-r-primary/50 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }} />
          </div>

          {/* Inner circle with profile image */}
          <div className="absolute w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border-2 border-secondary/50 overflow-hidden">
            <img
              src={assetUrl('/professional-portrait.png')}
              alt="Abdelkarim Erraji"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Small floating project thumbnails around rings */}
          {/* Top Right */}
          <div className="absolute top-0 right-0 sm:-right-12 md:-right-20 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full border-3 border-accent/60 bg-gradient-to-br from-accent/10 to-secondary/10 flex items-center justify-center float-animation" style={{ animationDelay: '0s' }}>
            <img src={assetUrl('/web-design-concept.png')} alt="Project 1" className="w-full h-full object-cover" />
          </div>

          {/* Bottom Left */}
          <div className="absolute bottom-8 left-0 sm:-left-12 md:-left-20 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full border-3 border-primary/60 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center float-animation" style={{ animationDelay: '2s' }}>
            <img src={assetUrl('/app-development.png')} alt="Project 2" className="w-full h-full object-cover" />
          </div>

          {/* Bottom Right Small */}
          <div className="absolute bottom-0 right-2 sm:-right-8 md:-right-12 w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-2 border-secondary/60 bg-gradient-to-br from-secondary/10 to-primary/10 flex items-center justify-center float-animation" style={{ animationDelay: '1s' }}>
            <img src={assetUrl('/abstract-ui-elements.png')} alt="Project 3" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
