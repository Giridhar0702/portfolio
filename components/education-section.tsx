import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "B.E. Computer Science and Engineering",
    institution: "Bannari Amman Institute of Technology",
    location: "Tamil Nadu",
    period: "2023 – 2027",
    grade: "CGPA: 7.76",
    current: true,
  },
  {
    degree: "Grade 12",
    institution: "M A M Matric Hr. Sec. School",
    location: "",
    period: "",
    grade: "85.17%",
    current: false,
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">05.</span>
          <h2 className="text-3xl font-bold text-foreground">Education</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="space-y-6">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary h-fit">
                  <GraduationCap size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                    {edu.current && (
                      <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs font-medium rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-primary text-sm mb-1">{edu.institution}</p>
                  {edu.location && <p className="text-muted-foreground text-sm">{edu.location}</p>}
                  <div className="flex flex-wrap gap-4 mt-3">
                    {edu.period && <span className="text-sm text-muted-foreground">{edu.period}</span>}
                    <span className="text-sm font-medium text-foreground">{edu.grade}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
