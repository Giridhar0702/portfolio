import { Code, Database, Globe, Cpu, GitBranch, Sparkles } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["C", "Python", "Java", "SQL"],
  },
  {
    title: "Core CS",
    icon: Cpu,
    skills: ["Data Structures & Algorithms", "OOP", "DBMS", "Problem Solving"],
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: ["HTML5", "CSS3", "JavaScript", "React", "REST APIs"],
  },
  {
    title: "AI/ML",
    icon: Sparkles,
    skills: ["Machine Learning Basics", "NLP", "Prompt Engineering"],
  },
  {
    title: "Tools & Platforms",
    icon: GitBranch,
    skills: ["Git", "GitHub", "Vercel", "Supabase", "Figma"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [ "MySQL", "Supabase", "Database Design"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">02.</span>
          <h2 className="text-3xl font-bold text-foreground">Technical Skills</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                  <category.icon size={20} />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
                    {skill}
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
