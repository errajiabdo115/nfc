'use client'

interface VideoCard {
  id: string
  language: string
  title: string
  flag: string
}

const videos: VideoCard[] = [
  { id: '1', language: 'French', title: 'Bonjour! Welcome to my portfolio', flag: '🇫🇷' },
  { id: '2', language: 'English', title: 'Hi! I\'m Abdelkarim, full-stack developer', flag: '🇬🇧' },
  { id: '3', language: 'Arabic', title: 'مرحبا بك في معرض أعمالي', flag: '🇸🇦' },
]

export function VideoSection() {
  return (
    <section id="languages" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-balance">
            Speaking <span className="gradient-text">Multiple Languages</span>
          </h2>
          <p className="text-text-muted text-lg">
            Watch me communicate in different languages - showcasing fluency and cultural understanding
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative bg-surface rounded-xl border-2 border-border overflow-hidden card-hover"
            >
              {/* Video Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                <button className="relative z-10 w-20 h-20 bg-primary/80 hover:bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-background fill-current" viewBox="0 0 24 24">
                    <path d="M5 3v18l15-9z" />
                  </svg>
                </button>
              </div>

              {/* Card Footer */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{video.flag}</span>
                  <span className="text-sm font-mono text-accent">{video.language}</span>
                </div>
                <h3 className="text-lg font-bold text-text-muted group-hover:text-text transition-all duration-300">
                  {video.title}
                </h3>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-secondary/0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
