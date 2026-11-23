'use client'

const technicalSkills = [
  { category: 'Backend', skills: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'JEE', 'Node.js', 'Python / Django'] },
  { category: 'Frontend & Mobile', skills: ['Angular', 'React', 'Next.js', 'Thymeleaf', 'HTML / CSS / JS', 'Flutter'] },
  { category: 'Databases', skills: ['SQL', 'PL/SQL', 'PostgreSQL', 'Oracle', 'MongoDB', 'Supabase'] },
  { category: 'DevOps & Design', skills: ['Git', 'Docker', 'CI/CD', 'Linux / Unix', 'Sage X3 ERP', 'UML', 'Merise', 'MVC'] },
]

const experience = [
  {
    role: 'Software Engineer Intern',
    company: 'Mall Zellij · Médiouna, Casablanca',
    period: 'Jun — Aug 2026',
    highlights: [
      'Developed a mobile application for item and stock management',
      'Connected the mobile solution to Sage X3 ERP to retrieve item and stock data',
    ],
  },
  {
    role: 'Angular & Java Spring Boot Developer Intern',
    company: 'Business IT Solutions (BITS) · Casablanca',
    period: 'Jul — Aug 2025',
    highlights: [
      'Built a full-stack payment invoice CRUD system with Angular and Spring Boot',
      'Implemented dialogs, unique invoice references, and downloadable invoices',
    ],
  },
]

const education = [
  {
    degree: 'Engineering Degree — Software Engineering',
    school: 'EMSI · Casablanca',
    period: '2024 — 2027 · Final year',
    details: 'Current coursework includes JEE and microservices architecture, DevOps, Flutter, data mining, deep learning, ERP, and IT governance.',
  },
  {
    degree: 'Preparatory Classes — Maths and Physics',
    school: 'EMSI · Casablanca',
    period: '2022 — 2024',
    details: '',
  },
]

import { assetUrl } from '@/lib/assets'

const certifications = [
  'Oracle SQL Proficiency · Oracle',
  'JavaScript Algorithms and Data Structures · freeCodeCamp',
  'Programming for Everybody (Python) · University of Michigan / Coursera',
  'Introduction to OOP (C++) · Coursera',
]

export function AboutMeSection() {
  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = assetUrl('/Abdelkarim_Erraji_CV.pdf')
    link.download = 'Abdelkarim_Erraji_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="about" className="relative py-24 px-6">
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-24">
        {/* Bio */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 text-balance">
              About <span className="gradient-text">Me</span>
            </h2>
          </div>

          <div className="bg-surface border-2 border-border rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-text">Hi, I&apos;m Abdelkarim Erraji</h3>
              <p className="text-text-muted text-lg leading-relaxed">
                I&apos;m a final-year software engineering student at EMSI in Casablanca, focused on full-stack and back-end development with Java and Spring Boot.
                I&apos;m looking for a six-month final-year internship starting in February 2027, with the goal of continuing in a permanent role.
              </p>
              <p className="text-text-muted text-lg leading-relaxed">
                My experience includes Angular and Spring Boot development at BITS, as well as a mobile application connected to Sage X3 ERP at Mall Zellij.
                I&apos;m rigorous, adaptable, eager to learn, and committed to building reliable software with a strong foundation in SQL.
              </p>
            </div>

            <div className="pt-6 border-t border-border mt-6">
              <button
                onClick={handleDownloadCV}
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-background rounded-xl font-bold transition-all duration-300 hover:shadow-xl glow-primary"
              >
                Download CV (PDF)
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-6 border-t border-border mt-6">
              <div className="text-center">
                <p className="text-3xl font-bold gradient-text">5</p>
                <p className="text-text-muted">Months Internship Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold gradient-text">3</p>
                <p className="text-text-muted">Featured Projects</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold gradient-text">3</p>
                <p className="text-text-muted">Languages</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold gradient-text">4</p>
                <p className="text-text-muted">Certifications</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <section id="skills">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 text-balance">
              Technical <span className="gradient-text">Skills</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSkills.map((group) => (
              <div
                key={group.category}
                className="bg-surface border-2 border-border rounded-xl p-6 card-hover hover:border-primary/50"
              >
                <h3 className="text-lg font-bold text-primary mb-4 font-mono tracking-wide">
                  {group.category}
                </h3>
                <div className="space-y-3">
                  {group.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-text-muted">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 text-balance">
              Work <span className="gradient-text">Experience</span>
            </h2>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {experience.map((item) => (
              <div
                key={item.role}
                className="bg-surface border-2 border-border rounded-xl p-8 card-hover hover:border-primary/50"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-text">{item.role}</h3>
                    <p className="text-accent font-mono text-sm">{item.company}</p>
                  </div>
                  <span className="text-text-muted text-sm font-mono whitespace-nowrap">{item.period}</span>
                </div>
                <ul className="space-y-2">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-muted">
                      <span className="text-primary mt-1.5 shrink-0">▹</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 text-balance">
              <span className="gradient-text">Education</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {education.map((item) => (
              <div
                key={item.degree}
                className="bg-surface border-2 border-border rounded-xl p-8 card-hover hover:border-primary/50"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-text">{item.degree}</h3>
                    <p className="text-accent font-mono text-sm">{item.school}</p>
                  </div>
                  <span className="text-text-muted text-sm font-mono whitespace-nowrap">{item.period}</span>
                </div>
                {item.details && <p className="text-text-muted leading-relaxed">{item.details}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 text-balance">
              <span className="gradient-text">Certifications</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {certifications.map((certification) => (
              <div key={certification} className="bg-surface border-2 border-border rounded-xl p-5 text-text-muted">
                <span className="text-primary mr-3">▹</span>{certification}
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}
