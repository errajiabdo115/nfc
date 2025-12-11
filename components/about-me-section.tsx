'use client'

export function AboutMeSection() {
  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/Abdelkarim_Erraji_CV.pdf'
    link.download = 'Abdelkarim_Erraji_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="about" className="relative py-24 px-6">
      {/* Background Elements */}
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-balance">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="bg-surface border-2 border-border rounded-2xl p-8 md:p-12 space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-text">Hi, I'm Abdelkarim Erraji</h3>
            <p className="text-text-muted text-lg leading-relaxed">
              I'm an innovative IT engineer and full-stack developer based in Morocco, passionate about building smart and scalable solutions. 
              With expertise in modern web technologies, I specialize in creating high-performance applications that solve real-world problems.
            </p>
            <p className="text-text-muted text-lg leading-relaxed">
              Throughout my career, I've worked on diverse projects spanning web development, mobile applications, and backend systems. 
              I believe in continuous learning and staying at the forefront of technology trends. When I'm not coding, I enjoy exploring new programming paradigms 
              and contributing to the open-source community.
            </p>
            <p className="text-text-muted text-lg leading-relaxed">
              My multilingual abilities (French, English, Arabic, and German) enable me to collaborate effectively with international teams and clients. 
              I'm always excited to work on challenging projects that push the boundaries of what's possible.
            </p>
          </div>

          {/* CV Download Button */}
          <div className="pt-6 border-t border-border">
            <button
              onClick={handleDownloadCV}
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-background rounded-xl font-bold transition-all duration-300 hover:shadow-xl glow-primary"
            >
              Download My CV
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-border">
            <div className="text-center">
              <p className="text-3xl font-bold gradient-text">4+</p>
              <p className="text-text-muted">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold gradient-text">30+</p>
              <p className="text-text-muted">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold gradient-text">4</p>
              <p className="text-text-muted">Languages Fluent</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
