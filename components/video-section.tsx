'use client'

import { useState, useRef, useEffect } from 'react'
import { assetUrl } from '@/lib/assets'

interface LanguageModule {
  id: string
  language: string
  flag: string
  videoSrc: string
  description: string
}

const languages: LanguageModule[] = [
  {
    id: '1',
    language: 'French',
    flag: '🇫🇷',
    videoSrc: assetUrl('/videos/french-intro.mp4'),
    description: 'Bonjour ! Je suis Abdelkarim Erraji, ingénieur informatique spécialisé dans le développement de solutions web modernes et évolutives.',
  },
  {
    id: '2',
    language: 'English',
    flag: '🇬🇧',
    videoSrc: assetUrl('/videos/english-intro.mp4'),
    description: 'Hi! I\'m Abdelkarim Erraji, an innovative IT engineer building smart and scalable solutions.',
  },
  {
    id: '3',
    language: 'Arabic',
    flag: '🇸🇦',
    videoSrc: assetUrl('/videos/arabic-intro.mp4'),
    description: 'مرحبا! أنا عبد الكريم الراجي، مهندس تكنولوجيا المعلومات المتخصص في بناء حلول ذكية وقابلة للتوسع.',
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
      } else {
        videoRef.current.play()
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

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)

    video.addEventListener('play', onPlay)
    video.addEventListener('pause', onPause)

    return () => {
      video.removeEventListener('play', onPlay)
      video.removeEventListener('pause', onPause)
    }
  }, [activeLanguage])

  return (
    <section id="languages" className="relative py-24 px-6">
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-balance">
            <span className="gradient-text">Multilingual</span> Professional
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Arabic native, with professional working proficiency in English and French
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            {languages.map((lang) => (
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
                      <p className="text-xs text-text-muted">
                        {lang.language === 'French' ? 'Français' :
                         lang.language === 'Arabic' ? 'العربية' :
                         lang.language === 'German' ? 'Deutsch' : 'English'}
                      </p>
                    </div>
                  </div>
                  <div className={`text-2xl text-primary transition-transform ${activeLanguage === lang.id ? 'rotate-90' : ''}`}>
                    {'›'}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {activeModule && (
            <div className="lg:col-span-2 space-y-6">
              <div className="relative overflow-hidden rounded-xl border-2 border-primary/30 bg-surface">
                <div className="aspect-video relative">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    onEnded={handleVideoEnded}
                    playsInline
                    preload="metadata"
                  >
                    <source src={activeModule.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {!isPlaying && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center">
                      <button
                        onClick={handlePlayVideo}
                        className="w-20 h-20 bg-primary/90 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl"
                        aria-label={`Play ${activeModule.language} introduction`}
                      >
                        <svg className="w-8 h-8 text-background fill-current ml-1" viewBox="0 0 24 24">
                          <path d="M5 3v18l15-9z" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-text">
                  {activeModule.language} Introduction
                </h3>
                <p className="text-text-muted leading-relaxed text-lg">
                  {activeModule.description}
                </p>
                <div className="flex gap-4 pt-4">
                  <button
                    onClick={handlePlayVideo}
                    className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-background rounded-xl font-bold transition-all duration-300 hover:shadow-xl glow-primary"
                  >
                    {isPlaying ? 'Pause Video' : 'Play Introduction'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
