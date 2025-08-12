"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink } from "lucide-react"
import { projects } from "@/lib/projects"
import { ProjectCard } from "@/components/project-card"

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
              Selected work spanning product, solutions engineering, and product specialist domains
            </p>
          </div>

          {/* Projects */}
          <div className="grid grid-cols-1 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.longDescription}
                href={project.href}
                tags={project.tags}
                year={project.year}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
