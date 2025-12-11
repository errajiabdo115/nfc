'use client'

import { useState } from 'react'

export function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    files: [] as File[],
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : []
    setFormData((prev) => ({ ...prev, files }))
  }
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  setSubmitStatus('idle')

  try {
    // Convert files to Base64 only if files exist
    const filesBase64: { name: string; data: string }[] = []

   
if (formData.files.length > 0) {
  for (const file of formData.files) {
    // file is inferred as File
    const base64 = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result!.toString())
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
    filesBase64.push({ name: file.name, data: base64 })
  }
}
    const response = await fetch('/api/send-contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        files: filesBase64, // always send array (can be empty)
      }),
    })

    if (response.ok) {
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '', files: [] })
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } else {
      setSubmitStatus('error')
    }
  } catch (error) {
    console.log('[v0] Form submission error:', error)
    setSubmitStatus('error')
  } finally {
    setIsSubmitting(false)
  }
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
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300">
              ✓ Message sent successfully! I'll get back to you soon.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300">
              ✗ Error sending message. Please try again.
            </div>
          )}

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
              <label className="block text-sm font-medium mb-2">Your Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+212 661-252-184"
                className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-all duration-300 text-text"
              />
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

            <div>
              <label className="block text-sm font-medium mb-2">Upload Files (Images, PDF, Video, or Screenshots)</label>
              <div className="relative">
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  accept=".pdf,.png,.jpg,.jpeg,.gif,.mp4,.webm,.mov,.txt,.doc,.docx"
                  className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-all duration-300 text-text file:bg-primary file:text-background file:border-0 file:rounded-md file:px-4 file:py-2 file:mr-4 file:cursor-pointer"
                />
              </div>
              {formData.files.length > 0 && (
                <div className="mt-3 space-y-2">
                  {formData.files.map((file, index) => (
                    <div key={index} className="text-sm text-text-muted">
                      📎 {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-primary to-secondary text-background rounded-xl font-bold transition-all duration-300 hover:shadow-xl glow-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-border grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-mono text-accent mb-2">EMAIL</h3>
              <p className="text-text hover:text-primary transition-all duration-300 cursor-pointer">
                abdelkarimerraji4@gmail.com
              </p>
            </div>
            <div>
              <h3 className="text-sm font-mono text-accent mb-2">SOCIAL</h3>
              <div className="flex gap-4">
                <a href="https://github.com/Abdo115-6" className="text-text hover:text-primary transition-all duration-300">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/abdelkarim-erraji-650a0b35b/" className="text-text hover:text-primary transition-all duration-300">
                  LinkedIn
                </a>
               
              </div>
            </div>
            <div>
              <h3 className="text-sm font-mono text-accent mb-2">LOCATION</h3>
              <p className="text-text">Morocco</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
