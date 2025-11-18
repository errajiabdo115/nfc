'use client'

interface Project {
  id: string
  title: string
  category: string
  tags: string[]
  image: string
}

const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    category: 'Full-Stack',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: '/ecommerce-platform.jpg',
  },
  {
    id: '2',
    title: 'Mobile App Design',
    category: 'Mobile',
    tags: ['React Native', 'UI/UX'],
    image: '/mobile-app-interface.jpg',
  },
  {
    id: '3',
    title: 'Backend API System',
    category: 'Backend',
    tags: ['TypeScript', 'PostgreSQL', 'GraphQL'],
    image: '/backend-architecture-diagram.jpg',
  },
  {
    id: '4',
    title: 'Dashboard UI Kit',
    category: 'Design',
    tags: ['Figma', 'Design System'],
    image: '/dashboard-interface.jpg',
  },
  {
    id: '5',
    title: 'Social Platform',
    category: 'Full-Stack',
    tags: ['Next.js', 'Supabase', 'Tailwind'],
    image: '/social-networking-app.jpg',
  },
  {
    id: '6',
    title: 'AI Chatbot Interface',
    category: 'Frontend',
    tags: ['React', 'OpenAI', 'Streaming'],
    image: '/ai-chatbot-interface.jpg',
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
            <div
              key={project.id}
              className="group relative bg-surface rounded-xl overflow-hidden border-2 border-border card-hover cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden bg-black/50">
                <img
                  src={project.image || "/placeholder.svg"}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
