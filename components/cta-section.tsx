'use client'

import { useState } from 'react'

export function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thanks for reaching out! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 -left-64 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-64 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-balance">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and create something amazing. Reach out anytime!
          </p>
        </div>

        <div className="bg-surface border-2 border-border rounded-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Abdelkarim"
                  className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-all duration-300 text-text"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-all duration-300 text-text"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={6}
                className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-all duration-300 text-text resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-primary to-secondary text-background rounded-xl font-bold transition-all duration-300 hover:shadow-xl glow-primary"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-border grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-mono text-accent mb-2">EMAIL</h3>
              <p className="text-text hover:text-primary transition-all duration-300 cursor-pointer">
                abdelkarim@example.com
              </p>
            </div>
            <div>
              <h3 className="text-sm font-mono text-accent mb-2">SOCIAL</h3>
              <div className="flex gap-4">
                <a href="#" className="text-text hover:text-primary transition-all duration-300">
                  GitHub
                </a>
                <a href="#" className="text-text hover:text-primary transition-all duration-300">
                  LinkedIn
                </a>
                <a href="#" className="text-text hover:text-primary transition-all duration-300">
                  Twitter
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-mono text-accent mb-2">LOCATION</h3>
              <p className="text-text">Available Worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
