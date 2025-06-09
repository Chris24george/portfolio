"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, ExternalLink, ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export default function HomePage() {
  const projects = [
    {
      title: "384.dev Onboarding",
      description:
        "Engineered primary user onboarding and core functionality, coding frontend myself with progressive disclosure UI.",
      image: "/placeholder.svg?height=400&width=600",
      href: "/projects/384-onboarding",
      tags: ["Lit.dev", "Web Components", "Product Strategy"],
      role: "Technical Product Manager / Software Engineer",
    },
    {
      title: "384snap iOS App",
      description: "Led end-to-end product definition from roadmap and core UX to hands-on UI development in SwiftUI.",
      image: "/placeholder.svg?height=400&width=600",
      href: "/projects/384snap",
      tags: ["SwiftUI", "Product Development", "iOS"],
      role: "Technical Product Manager / Software Engineer",
    },
    {
      title: "Interactive Whitepaper",
      description: "Developed a Vue.js interactive whitepaper that showcased the SDK and impressed investors.",
      image: "/placeholder.svg?height=400&width=600",
      href: "/projects/interactive-whitepaper",
      tags: ["Vue.js", "TypeScript", "Technical Writing"],
      role: "Technical Product Manager / Software Engineer",
    },
  ]

  const skills = {
    technical: ["Node.js", "TypeScript", "React", "Python", "SwiftUI", "Vue.js"],
    product: ["Agile/Scrum", "Roadmapping", "User Research", "Competitive Analysis", "UX Reviews"],
    design: ["Figma", "Canva", "Framer", "Cursor", "ElevenLabs"],
  }

  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (contentRef.current) {
      observer.observe(contentRef.current)
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current)
      }
    }
  }, [])

  return (
    <div className="pt-24 pb-16 md:py-32 relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-50 -z-10" />
      <div className="container max-w-4xl">
        <div ref={contentRef} className="space-y-16 opacity-0">
          {/* Header */}
          <section className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-primary/20">
              <Image src="/images/headshot.jpeg" alt="Christopher George" fill className="object-cover" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Christopher George</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Technical Product Manager | Software Engineer | UX Advocate
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="#" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="rounded-full px-8">
                <Link href="https://linkedin.com/in/yourusername" target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-6 text-muted-foreground">
              <Link href="https://github.com/yourusername" className="hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com/in/yourusername" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="mailto:chris24george@gmail.com" className="hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </section>

          {/* About */}
          <section className="glass-card rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-semibold mb-6">About</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Technical Product Manager who bridges engineering and product to rapidly develop impactful, user-focused
                software. Adept at translating ambiguous, emerging-tech problems into clear roadmaps, OKRs, and
                well-defined features ready for development.
              </p>
              <p>
                My hands-on coding background enables deep collaboration with engineers and credible trade-off calls. I
                have a proven record leading mobile and web teams, refining UX with user research, and managing full
                product lifecycles in high-velocity agile environments.
              </p>
            </div>
          </section>

          {/* Skills */}
          <section className="glass-card rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-semibold mb-8">Skills</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-4">Technical</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill) => (
                    <Badge key={skill} variant="outline" className="bg-primary/10 border-primary/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4">Product Management</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.product.map((skill) => (
                    <Badge key={skill} variant="outline" className="bg-primary/10 border-primary/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4">Design & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.design.map((skill) => (
                    <Badge key={skill} variant="outline" className="bg-primary/10 border-primary/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="glass-card rounded-2xl p-8 md:p-10">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-semibold">Featured Projects</h2>
              <Button variant="outline" asChild>
                <Link href="/projects">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="space-y-8">
              {projects.map((project) => (
                <div key={project.title} className="border-b border-border last:border-0 pb-8 last:pb-0">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={400}
                          height={225}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{project.role}</p>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={project.href}>
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs bg-primary/10 border-primary/20">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
