'use client'

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Large chevron shapes */}
      <svg
        className="absolute -left-40 top-1/4 w-96 h-96 opacity-20"
        viewBox="0 0 200 400"
        preserveAspectRatio="none"
      >
        <polygon points="0,50 150,0 150,100 0,150" fill="url(#chevronGradient)" />
        <polygon points="0,200 150,150 150,250 0,300" fill="url(#chevronGradient2)" />
        <defs>
          <linearGradient id="chevronGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(217, 70, 239)" />
            <stop offset="100%" stopColor="rgb(236, 72, 153)" />
          </linearGradient>
          <linearGradient id="chevronGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(6, 182, 212)" />
            <stop offset="100%" stopColor="rgb(217, 70, 239)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Circle 1 - Top Left */}
      <div
        className="absolute w-64 h-64 rounded-full border-2 border-primary/20 top-20 -left-32 float-animation"
        style={{ animationDelay: '0s' }}
      />
      
      {/* Floating Circle 2 - Bottom Right */}
      <div
        className="absolute w-96 h-96 rounded-full border-2 border-secondary/20 bottom-40 -right-48 float-animation"
        style={{ animationDelay: '2s' }}
      />
      
      {/* Floating Circle 3 - Center */}
      <div
        className="absolute w-48 h-48 rounded-full bg-accent/5 top-1/2 left-1/4 float-animation"
        style={{ animationDelay: '1s' }}
      />

      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-overlay opacity-20" />
    </div>
  )
}
