'use client'

interface ColorPalette {
  name: string
  colors: string[]
}

const palettes: ColorPalette[] = [
  {
    name: 'Neon Dreams',
    colors: ['#d946ef', '#ec4899', '#06b6d4', '#0a0e27'],
  },
  {
    name: 'Ocean Vibes',
    colors: ['#0369a1', '#06b6d4', '#67e8f9', '#f8f8f8'],
  },
  {
    name: 'Sunset Glow',
    colors: ['#ea580c', '#f97316', '#fbbf24', '#1a1f3a'],
  },
]

export function UIDesigns() {
  return (
    <section className="relative py-24 px-6 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-balance">
            Design <span className="gradient-text">Experiments & Palettes</span>
          </h2>
          <p className="text-text-muted text-lg">
            Exploring color systems, typography, and layout experiments
          </p>
        </div>

        {/* Color Palettes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {palettes.map((palette) => (
            <div key={palette.name} className="space-y-4">
              <h3 className="text-xl font-bold">{palette.name}</h3>
              <div className="grid grid-cols-4 gap-3">
                {palette.colors.map((color) => (
                  <div
                    key={color}
                    className="aspect-square rounded-lg border-2 border-border card-hover group cursor-pointer"
                    style={{ backgroundColor: color }}
                  >
                    <div className="opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg transition-all duration-300">
                      <span className="text-xs font-mono text-white">{color}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Layout Experiments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-background border-2 border-border rounded-xl p-8 space-y-4">
            <h3 className="text-xl font-bold">Grid Layout Experiment</h3>
            <div className="grid grid-cols-3 gap-3">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-primary/20 border border-primary/40 rounded hover:bg-primary/40 transition-all duration-300"
                />
              ))}
            </div>
          </div>

          <div className="bg-background border-2 border-border rounded-xl p-8 space-y-4">
            <h3 className="text-xl font-bold">Typography Scales</h3>
            <div className="space-y-3">
              <h1 className="text-3xl font-bold">Heading 1 - Bold Impact</h1>
              <h2 className="text-2xl font-bold">Heading 2 - Strong</h2>
              <p className="text-base text-text-muted">Body text - Regular weight for readability</p>
              <code className="block text-sm font-mono text-accent">CODE: font-sizes scale</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
