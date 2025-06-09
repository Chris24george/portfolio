"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "384.dev Onboarding",
      description:
        "Engineered primary user onboarding and core functionality, coding frontend myself with progressive disclosure UI.",
      image: "/placeholder.svg?height=400&width=600",
      href: "/projects/384-onboarding",
      tags: ["Lit.dev", "Web Components", "Product Strategy"],
      role: "Technical Product Manager / Software Engineer",
      year: "2024",
    },
    {
      title: "384snap iOS App",
      description:
        "Led end-to-end product definition from roadmap and core UX to hands-on UI development in SwiftUI, achieving feature-complete build.",
      image: "/placeholder.svg?height=400&width=600",
      href: "/projects/384snap",
      tags: ["SwiftUI", "Product Development", "iOS"],
      role: "Technical Product Manager / Software Engineer",
      year: "2024",
    },
    {
      title: "Interactive Whitepaper",
      description:
        "Developed a Vue.js interactive whitepaper that showcased the SDK and impressed investors with live demonstrations.",
      image: "/placeholder.svg?height=400&width=600",
      href: "/projects/interactive-whitepaper",
      tags: ["Vue.js", "TypeScript", "Technical Writing"],
      role: "Technical Product Manager / Software Engineer",
      year: "2024",
    },
  ]

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
        <div ref={contentRef} className="space-y-12 opacity-0">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Projects</h1>
            <p className="text-xl text-muted-foreground">
              Case studies showcasing my approach to bridging engineering and product
            </p>
          </div>

          {/* Projects */}
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <div className="space-y-12">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className={index !== projects.length - 1 ? "border-b border-border pb-12" : ""}
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                      <div className="aspect-video rounded-lg overflow-hidden mb-4">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={600}
                          height={338}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                            <span>{project.role}</span>
                            <span>•</span>
                            <span>{project.year}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-6">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="bg-primary/10 border-primary/20">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button asChild className="bg-primary hover:bg-primary/90">
                        <Link href={project.href}>
                          View Case Study
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
