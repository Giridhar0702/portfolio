"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail, Send, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const socialLinks = [
  {
    label: "Email",
    href: "mailto:giridharsaravanakumar07@gmail.com",
    icon: Mail,
    value: "giridharsaravanakumar07@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/Giridhar0702",
    icon: Github,
    value: "https://github.com/Giridhar0702",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/giridhar-s-k-/",
    icon: Linkedin,
    value: "https://www.linkedin.com/in/giridhar-s-k-/",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/giridharsaravanakumar07/",
    icon: ExternalLink,
    value: "https://leetcode.com/u/giridharsaravanakumar07/",
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">06.</span>
          <h2 className="text-3xl font-bold text-foreground">Get In Touch</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm currently looking for new opportunities and my inbox is always open. Whether you have a question, want
              to collaborate on a project, or just want to say hi, I'll do my best to get back to you!
            </p>

            <div className="space-y-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="p-2 bg-secondary rounded-lg group-hover:bg-primary/10 transition-colors">
                    <link.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{link.label}</p>
                    <p className="text-sm text-foreground group-hover:text-primary transition-colors">{link.value}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-card border-border focus:border-primary"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-card border-border focus:border-primary"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-card border-border focus:border-primary min-h-32"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              <Send size={18} className="mr-2" />
              Send Message
            </Button>
          </form>
        </div>

        <div className="mt-24 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">Designed & Built by Giridhar S K</p>
        </div>
      </div>
    </section>
  )
}
