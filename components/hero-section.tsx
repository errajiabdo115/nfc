'use client'

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
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
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          {/* Handle/Social */}
          <div className="flex items-center gap-2 text-accent font-mono text-sm tracking-wide">
            <span className="text-primary">@</span>ABDO_CODING404
          </div>

          {/* Email */}
          <div className="flex items-center gap-2 text-text-muted font-mono text-sm">
            <span className="text-secondary">✉</span>abdelkarimerraji4@gmail.com
          </div>

          {/* Main Headline */}
          <h1 className="text-7xl md:text-8 font-black leading-tight text-balance">
            <span className="block text-text">WELCOME</span>
            <span className="block gradient-text italic mt-2">TO MY PORTFOLIO</span>
          </h1>

          {/* Description */}
          <div className="space-y-2 pt-4">
            <p className="text-2xl font-bold text-text">
              Innovative IT Engineer,
            </p>
            <p className="text-2xl font-bold text-text">
              Building Smart & Scalable Solutions.
            </p>
          </div>

          <div className="flex gap-4 pt-8">
            <button onClick={() => scrollToSection('about')} className="px-8 py-4 bg-secondary hover:bg-secondary/90 text-background rounded-xl font-bold transition-all duration-300 glow-secondary uppercase tracking-wider text-sm">
              About Me
            </button>
            <button onClick={() => scrollToSection('work')} className="px-8 py-4 bg-accent hover:bg-accent/90 text-background rounded-xl font-bold transition-all duration-300 glow-accent uppercase tracking-wider text-sm">
              My Work
            </button>
          </div>

          {/* Website URL */}
          <p className="text-text-muted font-mono text-sm pt-6">
            www.abdoportfolio404.com
          </p>
        </div>

        {/* Right Side - Neon Rings with Profile Image */}
        <div className="relative h-96 md:h-[600px] flex items-center justify-center">
          
          {/* Large outer neon ring - Purple/Pink */}
          <div className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-primary/30 animate-pulse">
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-secondary border-r-secondary/50 animate-spin" style={{ animationDuration: '8s' }} />
          </div>

          {/* Medium neon ring - Cyan */}
          <div className="absolute w-64 h-64 md:w-72 md:h-72 rounded-full border-3 border-accent/40">
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-accent border-r-primary/50 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }} />
          </div>

          {/* Inner circle with profile image */}
          <div className="absolute w-56 h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border-2 border-secondary/50 overflow-hidden">
            <img
              src="/professional-portrait.png"
              alt="Abdelkarim Erraji"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Small floating project thumbnails around rings */}
          {/* Top Right */}
          <div className="absolute top-0 -right-12 md:-right-20 w-24 h-24 md:w-32 md:h-32 rounded-full border-3 border-accent/60 bg-gradient-to-br from-accent/10 to-secondary/10 flex items-center justify-center float-animation" style={{ animationDelay: '0s' }}>
            <img src="/web-design-concept.png" alt="Project 1" className="w-full h-full object-cover" />
          </div>

          {/* Bottom Left */}
          <div className="absolute bottom-8 -left-12 md:-left-20 w-24 h-24 md:w-32 md:h-32 rounded-full border-3 border-primary/60 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center float-animation" style={{ animationDelay: '2s' }}>
            <img src="/app-development.png" alt="Project 2" className="w-full h-full object-cover" />
          </div>

          {/* Bottom Right Small */}
          <div className="absolute bottom-0 -right-8 md:-right-12 w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-secondary/60 bg-gradient-to-br from-secondary/10 to-primary/10 flex items-center justify-center float-animation" style={{ animationDelay: '1s' }}>
            <img src="/abstract-ui-elements.png" alt="Project 3" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
