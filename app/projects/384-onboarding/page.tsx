"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { getProject } from "@/lib/projects"
import { Breadcrumb } from "@/components/breadcrumb"

export default function OnboardingCaseStudy() {
  const project = getProject("384-onboarding")
  
  if (!project) {
    return <div>Project not found</div>
  }
  // Refs for scroll animations
  const headerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Simple intersection observer for animations
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

    const sections = [headerRef.current, contentRef.current]
    sections.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [])

  return (
    <div className="pt-24 pb-16 md:py-32 relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-50 -z-10" />
      <div className="container max-w-4xl relative z-10">
        {/* Breadcrumb */}
        <Breadcrumb 
          items={[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/projects" },
            { label: project.title }
          ]}
          className="mb-8"
        />

        {/* Header */}
        <div ref={headerRef} className="mb-12 opacity-0">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <Badge key={tag} className="bg-primary/10 text-primary border-primary/20">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{project.title}</h1>
              <p className="text-xl text-muted-foreground mb-4">
                {project.longDescription}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="font-medium">{project.role}</span>
                <span>•</span>
                <span>{project.year}</span>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" asChild>
                <Link href={project.demoVideoUrl || "#"} target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo Video
                </Link>
              </Button>
              <Button variant="ghost" asChild className="group hover:bg-primary/10">
                <Link href="/projects">
                  <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  Back to Projects
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Case Study Content */}
        <div ref={contentRef} className="space-y-12 opacity-0">
          {/* Challenge */}
          <section className="glass-card rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-semibold mb-6">The Challenge</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                To completely revamp how customers were onboarded onto our system and given access to their storage
                vaults. The previous UX was clunky and had unnecessary dependencies that created friction in the user
                experience.
              </p>
              <p>
                This wasn't about building something new from scratch – it was about identifying and removing complexity
                from an existing product to create a more streamlined, intuitive experience.
              </p>
            </div>
          </section>

          {/* My Role */}
          <section className="glass-card rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-semibold mb-6">My Role</h2>
            <p className="text-muted-foreground mb-4">
              I wore two distinct hats for this project, requiring me to balance strategic thinking with hands-on
              technical execution.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2 text-lg">•</span>
                <span>
                  <strong className="text-foreground">Product Manager:</strong> Defined objectives and key results,
                  identified what needed to be simplified and removed from the existing flow
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-lg">•</span>
                <span>
                  <strong className="text-foreground">Frontend Engineer:</strong> As the only available engineer, I
                  re-architected the entire onboarding system using my technical skills and experience
                </span>
              </li>
            </ul>
          </section>

          {/* Process */}
          <section className="glass-card rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-semibold mb-6">The Process</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="mb-6">
                This project was different from others – my role was to eliminate unnecessary complexity in an existing
                product, not iterate on one from scratch.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2 text-lg">•</span>
                  <span>
                    <strong className="text-foreground">Component Optimization:</strong> Removed all Shoelace UI
                    components and rebuilt basic functional Lit components that significantly cut down bundle size
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 text-lg">•</span>
                  <span>
                    <strong className="text-foreground">Progressive Disclosure:</strong> Redesigned the vault creation
                    process as a progressive disclosure UI that guides users visually down the same page through each
                    step
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 text-lg">•</span>
                  <span>
                    <strong className="text-foreground">Improved Navigation:</strong> This approach reduced confusion
                    about process location and allowed users to easily undo actions
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Outcome */}
          <section className="glass-card rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-semibold mb-6">Outcome & Impact</h2>
            <div className="space-y-6">
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start">
                  <span className="text-primary mr-2 text-lg">•</span>
                  <span>
                    <strong className="text-foreground">Intuitive Flow:</strong> Created a much more intuitive flow for
                    creating a vault, eliminating user confusion and friction
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-2 text-lg">•</span>
                  <span>
                    <strong className="text-foreground">Cleaner Interface:</strong> Delivered a cleaner, less cluttered
                    UI for managing storage in your vault
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-2 text-lg">•</span>
                  <span>
                    <strong className="text-foreground">Investor Validation:</strong> Received positive investor
                    feedback on the improved user experience and simplified architecture
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
