"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { getProject } from "@/lib/projects"
import { Breadcrumb } from "@/components/breadcrumb"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 relative">
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
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} className="bg-primary/10 text-primary border-primary/20">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-2">
            {project.longDescription}
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="font-medium">{project.role}</span>
            <span>•</span>
            <span>{project.year}</span>
          </div>
          <div className="flex flex-row gap-3">
            <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
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

        {/* Project Screenshots Carousel */}
        <div className="mb-12">
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border bg-muted/50">
                  <Image
                    src="/images/os384-loader-screenshot.png"
                    alt="os384 Loader Interface - Initial loading state"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border bg-muted/50">
                  <Image
                    src="/images/os384-loader-screenshot-2.png"
                    alt="os384 Loader Interface - Progressive disclosure in action"
                    fill
                    className="object-contain"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border bg-muted/50">
                  <Image
                    src="/images/os384-loader-screenshot-3.png"
                    alt="os384 Loader Interface - Vault creation workflow"
                    fill
                    className="object-contain"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border bg-muted/50">
                  <Image
                    src="/images/os384-loader-screenshot-4.png"
                    alt="os384 Loader Interface - Completed onboarding experience"
                    fill
                    className="object-contain"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <p className="text-sm text-muted-foreground mt-3 text-center">
            The redesigned os384 loader interface showcasing the progressive disclosure UI and streamlined onboarding flow
          </p>
        </div>

        {/* Case Study Content */}
        <div ref={contentRef} className="space-y-8 opacity-0">
          <section>
            <h2 className="text-2xl font-semibold mb-4">The challenge</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                To completely revamp how customers were onboarded onto our system and given access to their storage vaults. The previous UX was clunky and had unnecessary dependencies.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">My role</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I wore two hats for this role. The first hat was that of Product Manager. I needed to define what our objectives were and what the key results would be to get us where we needed.  The second hat was that of Front End Engineer. I was the only one available to actually re-architect this. So I needed to use my technical skills and experience.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">The process</h2>
            <ul className="space-y-4 text-muted-foreground list-disc pl-6">
              <li>A bit different than other projects. My role here was to get rid of unnecessary complexity in an existing product, not iterate on one from scratch.</li>
              <li>Removed all Shoelace UI components, remade basic funcitonal Lit components that cut down bundle size.</li>
              <li>Made the vault creation process a progressive disclosure UI that took you visually down on the same page through the process step by step, this reduced confusion as to where you were in the process and allowed you to go undo actions more easily.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Tech stack/skills used</h2>
            <ul className="space-y-2 text-muted-foreground list-disc pl-6">
              <li>Lit.dev, Web Components, Typescript</li>
              <li>Wireframing, fast iteration</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Outcome/impact</h2>
            <ul className="space-y-2 text-muted-foreground list-disc pl-6">
              <li>Much more intuitive flow for creating a vault</li>
              <li>Cleaner, less cluttered UI for managing your storage in your vault</li>
              <li>Positive investor feedback</li>
            </ul>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button asChild size="lg" className="rounded-full px-8 shadow-lg">
            <Link href="/projects">
              Explore More Projects
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
