'use client'

import { useState } from 'react'

const navItems = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'EDUCATION', href: '#education' },
  { label: 'CERTIFICATIONS', href: '#certifications' },
  { label: 'WORK', href: '#work' },
  { label: 'LANGUAGES', href: '#languages' },
  { label: 'CONTACT', href: '#contact' },
]

export function NavButtons() {
  const [active, setActive] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, label: string) => {
    e.preventDefault()
    setActive(label.toLowerCase())
    
    const href = (e.currentTarget as HTMLAnchorElement).href
    const targetId = href.split('#')[1]
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-lg border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 md:py-4 flex items-center justify-between">
        {/* Logo/Brand */}
        <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-base sm:text-lg md:text-2xl font-bold text-text whitespace-nowrap">
          ABDELKARIM <span className="gradient-text">ERRAJI</span>
        </a>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="md:hidden flex h-11 w-11 items-center justify-center rounded-lg border border-primary/40 text-primary"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
        >
          <span className="text-2xl leading-none" aria-hidden="true">{isMenuOpen ? '×' : '☰'}</span>
        </button>

        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.label)}
              className={`text-sm font-bold tracking-wider transition-colors duration-300 ${
                active === item.label.toLowerCase()
                  ? 'text-primary glow-primary'
                  : 'text-text-muted hover:text-text'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, 'contact')}
          className="hidden lg:block px-6 py-2 bg-secondary hover:bg-secondary/90 text-background rounded-lg font-bold transition-all duration-300 glow-secondary text-sm tracking-wider cursor-pointer"
        >
          CONTACT ME
        </a>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-primary/10 bg-background/95 px-4 py-4 shadow-2xl">
          <div className="grid grid-cols-2 gap-2 max-h-[70vh] overflow-y-auto">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.label)}
                className={`rounded-lg border px-3 py-3 text-center text-xs font-bold tracking-wider ${
                  active === item.label.toLowerCase()
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border text-text-muted'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
