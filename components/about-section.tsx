export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">01.</span>
          <h2 className="text-3xl font-bold text-foreground">About Me</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
          <p>
            I'm a full-stack web developer with a strong foundation in{" "}
            <span className="text-foreground">Data Structures, Algorithms, and Software Engineering</span>. My journey
            in computer science has equipped me with the ability to work comfortably across the entire development
            stack—from designing intuitive frontends to building robust backend systems.
          </p>
          <p>
            I'm passionate about creating <span className="text-foreground">production-ready applications</span> that
            solve real problems. My focus lies in building clean, modular systems that are not just functional but also
            maintainable and scalable. I believe great software comes from understanding both the technical requirements
            and the end-user experience.
          </p>
          <p>
            Currently pursuing my B.E. in Computer Science and Engineering, I continuously expand my skills through
            hands-on projects and competitive programming. I've solved{" "}
            <span className="text-primary font-medium">200+ problems on LeetCode</span>, sharpening my problem-solving
            abilities and algorithmic thinking.
          </p>
        </div>
      </div>
    </section>
  )
}
