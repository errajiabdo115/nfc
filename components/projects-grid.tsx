'use client'

import { assetUrl } from '@/lib/assets'

interface Project {
  id: string
  title: string
  category: string
  tags: string[]
  image: string
  repoUrl: string
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Art E-Commerce Website',
    category: 'Full-Stack',
    tags: ['React', 'Next.js', 'Supabase'],
    image: '/ecommerce-platform.jpg',
    repoUrl: 'https://github.com/Abdo115-6/e-commerce-website-art',
  },
  {
    id: '2',
    title: 'GAC-4 Java Web Application',
    category: 'Full-Stack',
    tags: ['Java', 'Spring Boot', 'Thymeleaf', 'SQL'],
    image: '/web-design-project-thumbnail.jpg',
    repoUrl: 'https://github.com/Abdo115-6/GAC-4',
  },
  {
    id: '3',
    title: 'Hotel Booking System',
    category: 'Backend',
    tags: ['Django', 'SQLite', 'SQL'],
    image: '/backend-architecture-diagram.jpg',
    repoUrl: 'https://github.com/Abdo115-6/javafx-project-hotelbooking',
  },
  {
    id: '4',
    title: 'Stock Management Mobile App',
    category: 'Mobile',
    tags: ['Mobile', 'Sage X3 ERP', 'Stock'],
    image: '/mobile-app-interface.jpg',
    repoUrl: 'https://github.com/Abdo115-6/appmobile',
  },
  {
    id: '5',
    title: 'Payment Invoice CRUD',
    category: 'Full-Stack',
    tags: ['Angular', 'Spring Boot', 'REST API'],
    image: '/dashboard-interface.jpg',
    repoUrl: 'https://github.com/Abdo115-6/rentcar-system',
  },
  {
    id: '6',
    title: 'Sage X3 Data Integration',
    category: 'Backend',
    tags: ['Java', 'Sage X3 ERP', 'API'],
    image: '/backend-architecture-diagram.jpg',
    repoUrl: 'https://github.com/Abdo115-6/appmobile',
  },
]

export function ProjectsGrid() {
  return (
    <section id="work" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-balance">
            My <span className="gradient-text">Work & Projects</span>
          </h2>
          <p className="text-text-muted text-lg">
            Web, mobile, and backend development showcasing technical excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="group relative block bg-surface rounded-xl overflow-hidden border-2 border-border card-hover cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden bg-black/50">
                <img
                  src={assetUrl(project.image || '/placeholder.svg')}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-mono border border-primary/50">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-all duration-300">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs text-text-muted font-mono">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-secondary/0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
