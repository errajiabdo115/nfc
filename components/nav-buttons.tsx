'use client'

import { useState } from 'react'

const navItems = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT ME', href: '#about' },
  { label: 'MY WORK', href: '#work' },
  { label: 'LANGUAGES', href: '#languages' },
  { label: 'CONTACT', href: '#contact' },
]

export function NavButtons() {
  const [active, setActive] = useState('home')

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, label: string) => {
    e.preventDefault()
    setActive(label.toLowerCase())
    
    const href = (e.currentTarget as HTMLAnchorElement).href
    const targetId = href.split('#')[1]
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-lg border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="text-2xl font-bold text-text">
          ABDELKARIM <span className="gradient-text">ERRAJI</span>
        </div>

        <div className="flex items-center gap-8">
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
          className="px-6 py-2 bg-secondary hover:bg-secondary/90 text-background rounded-lg font-bold transition-all duration-300 glow-secondary text-sm tracking-wider cursor-pointer"
        >
          CONTACT ME
        </a>
      </div>
    </nav>
  )
}
