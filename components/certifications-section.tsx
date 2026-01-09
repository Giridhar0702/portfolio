import { Award, Code2 } from "lucide-react"

const certifications = [
  {
    title: "Privacy Security in Online Social Media",
    issuer: "NPTEL",
    icon: Award,
    description: "Comprehensive course covering privacy and security aspects of social media platforms.",
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "LeetCode",
    icon: Code2,
    description: "Solved 200+ problems demonstrating proficiency in DSA and problem-solving skills.",
    highlight: "200+ Problems Solved",
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">04.</span>
          <h2 className="text-3xl font-bold text-foreground">Certifications & Achievements</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="space-y-6">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors flex gap-4"
            >
              <div className="p-3 bg-primary/10 rounded-lg text-primary h-fit">
                <cert.icon size={24} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-semibold text-foreground">{cert.title}</h3>
                  {cert.highlight && (
                    <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs font-medium rounded-full">
                      {cert.highlight}
                    </span>
                  )}
                </div>
                <p className="text-primary text-sm mb-2">{cert.issuer}</p>
                <p className="text-muted-foreground text-sm">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
