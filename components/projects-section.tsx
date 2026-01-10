import Link from "next/link"
import { ExternalLink, Github, Folder } from "lucide-react"

const projects = [
  {
    title: "Accounting Software",
    description:
      "Full-stack accounting platform for managing invoices, expenses, and financial records. Implements real-world business logic with structured data handling, clean UI, and modular components.",
    techStack: ["React", "Node.js", "PostgreSQL", "REST API"],
    features: [
      "Invoice & expense management",
      "Financial record tracking",
      "Clean, modular architecture",
      "Production-ready deployment",
    ],
    github: "https://github.com/Giridhar0702/Accounting_software/",
    live: "https://quantifi-pro-93445.lovable.app/",
  },
  {
    title: "Energy Monitoring System",
    description:
      "Web-based system to monitor and visualize energy consumption patterns. Features interactive dashboards showing usage insights with responsive design and performance-focused implementation.",
    techStack: ["React", "Chart.js", "REST API", "CSS3"],
    features: [
      "Real-time energy monitoring",
      "Interactive data visualization",
      "Usage pattern analysis",
      "Responsive dashboard design",
    ],
    github: "https://github.com/Giridhar0702/Energy-Monitoring-System",
    live: "https://energy-monitoring-system-ruby.vercel.app/",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">03.</span>
          <h2 className="text-3xl font-bold text-foreground">Projects</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all group hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Folder size={24} />
                </div>
                <div className="flex gap-3">
                  <Link
                    href={project.github}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <Github size={20} />
                  </Link>
                  <Link
                    href={project.live}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Live demo of ${project.title}`}
                  >
                    <ExternalLink size={20} />
                  </Link>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

              <ul className="space-y-2 mb-6">
                {project.features.map((feature) => (
                  <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-mono rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
