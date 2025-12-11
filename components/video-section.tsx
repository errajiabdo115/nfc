'use client'

import { useState, useRef } from 'react'

interface LanguageModule {
  id: string
  language: string
  flag: string
  videoBg: string
  videoSrc?: string
  description: string
}

const languages: LanguageModule[] = [
  {
    id: '1',
    language: 'French',
    flag: '🇫🇷',
    videoBg: '/france-professional-video-background.jpg',
    description: 'Bonjour! Welcome to my portfolio. I\'m a full-stack developer with expertise in modern web technologies.',
  },
  {
    id: '2',
    language: 'English',
    flag: '🇬🇧',
    videoBg: '/uk-professional-speaking-video.jpg',
    description: 'Hi! I\'m Abdelkarim Erraji, an innovative IT engineer building smart and scalable solutions.',
  },
  {
    id: '3',
    language: 'Arabic',
    flag: '🇸🇦',
    videoBg: '/middle-east-professional-video.jpg',
    description: 'مرحبا بكم! أنا مهندس تكنولوجيا معلومات متخصص في تطوير تطبيقات ويب حديثة.',
  },
  {
    id: '4',
    language: 'German',
    flag: '🇩🇪',
    videoBg: '/germany-professional-video.mp4',
    videoSrc: '/germany-professional-video.mp4',
    description: 'Hallo! Ich bin Abdelkarim Erraji, ein innovativer IT-Ingenieur, der intelligente und skalierbare Lösungen entwickelt.',
  },
]

export function VideoSection() {
  const [activeLanguage, setActiveLanguage] = useState('1')
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const activeModule = languages.find((lang) => lang.id === activeLanguage)

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  const handleVideoEnded = () => {
    setIsPlaying(false)
  }

  const handleLanguageChange = (langId: string) => {
    setActiveLanguage(langId)
    setIsPlaying(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <section id="languages" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-balance">
            Speaking <span className="gradient-text">Multiple Languages</span>
          </h2>
          <p className="text-text-muted text-lg">
            Watch me communicate fluently in different languages
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Language Modules */}
          <div className="lg:col-span-1 space-y-4">
            {languages.map((lang, index) => (
              <button
                key={lang.id}
                onClick={() => handleLanguageChange(lang.id)}
                className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-300 ${
                  activeLanguage === lang.id
                    ? 'bg-primary/10 border-primary'
                    : 'bg-surface border-border hover:border-primary/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{lang.flag}</span>
                    <div>
                      <h3 className="text-lg font-bold text-text">{lang.language}</h3>
                      <p className="text-xs text-text-muted">Module {index + 1}</p>
                    </div>
                  </div>
                  <div className={`text-2xl transition-transform ${activeLanguage === lang.id ? 'rotate-90' : ''}`}>
                    {'›'}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right Side - Video Player */}
          {activeModule && (
            <div className="lg:col-span-2 space-y-6">
              {/* Video Container */}
              <div className="relative overflow-hidden rounded-xl border-2 border-primary/30 bg-surface">
                <div className="aspect-video relative">
                  {activeModule.videoSrc ? (
                    <>
                      <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        poster={activeModule.videoBg}
                        onEnded={handleVideoEnded}
                        controls={isPlaying}
                      >
                        <source src={activeModule.videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      {!isPlaying && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <button 
                            onClick={handlePlayVideo}
                            className="w-24 h-24 bg-primary/80 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl"
                          >
                            <svg className="w-10 h-10 text-background fill-current ml-1" viewBox="0 0 24 24">
                              <path d="M5 3v18l15-9z" />
                            </svg>
                          </button>
                        </div>
                      )}
                    </>
                  ) : (
                    <div
                      className="w-full h-full bg-cover bg-center relative"
                      style={{ backgroundImage: `url('${activeModule.videoBg}')` }}
                    >
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="w-24 h-24 bg-gray-600/80 rounded-full flex items-center justify-center mb-4 mx-auto">
                            <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
                              <path d="M5 3v18l15-9z" />
                            </svg>
                          </div>
                          <p className="text-sm opacity-80">Video not available</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Video Description */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-text">
                  {activeModule.language} Introduction
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {activeModule.description}
                </p>
                <div className="flex gap-4 pt-4">
                  {activeModule.videoSrc ? (
                    <button 
                      onClick={handlePlayVideo}
                      className="px-6 py-2 bg-primary hover:bg-primary/90 text-background rounded-lg font-bold transition-all duration-300"
                    >
                      {isPlaying ? 'Pause Video' : 'Play Video'}
                    </button>
                  ) : (
                    <button 
                      disabled
                      className="px-6 py-2 bg-gray-400 text-gray-600 rounded-lg font-bold cursor-not-allowed"
                    >
                      Video Not Available
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
