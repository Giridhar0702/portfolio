import Link from "next/link"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-mono text-sm tracking-wider">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
                Giridhar S K
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">Computer Science & Engineering Undergraduate</p>
              <p className="text-lg text-primary font-medium">Full-Stack Developer</p>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              I build production-ready web applications with clean interfaces and scalable architecture. Focused on
              solving real-world problems through thoughtful design and robust engineering.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="#projects">View Projects</Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-border text-foreground hover:bg-secondary bg-transparent"
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={22} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </Link>
              <Link
                href="mailto:giridharsaravanakumar07@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={22} />
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="w-72 h-72 rounded-full bg-primary/10 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-8xl font-bold text-primary/40">GSK</span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/30 rounded-lg rotate-12" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full" />
            </div>
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <Link
            href="#about"
            className="text-muted-foreground hover:text-primary transition-colors animate-bounce"
            aria-label="Scroll to About section"
          >
            <ArrowDown size={28} />
          </Link>
        </div>
      </div>
    </section>
  )
}
