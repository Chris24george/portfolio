"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink } from "lucide-react"
import { projects } from "@/lib/projects"

export default function ProjectsPage() {
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
          <div className="space-y-6">
            {projects.map((project) => (
              <div key={project.id} className="group relative">
                <Link href={project.href} className="block p-8 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-border transition-all duration-300 cursor-pointer">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h2>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="font-medium">{project.role}</span>
                        <span>•</span>
                        <span>{project.year}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 ml-4">
                      <Button variant="outline" size="sm" asChild className="hover:bg-primary hover:text-primary-foreground" onClick={(e) => e.stopPropagation()}>
                        <Link href={project.demoVideoUrl || "#"} target="_blank">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo Video
                        </Link>
                      </Button>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.longDescription}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs font-medium bg-primary/10 hover:bg-primary/20 transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
