"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Smartphone, Users, Lightbulb, Code } from "lucide-react"
import { getProject } from "@/lib/projects"
import { Breadcrumb } from "@/components/breadcrumb"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function SnapCaseStudy() {
  const project = getProject("384snap")
  
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
            <span>{project.year}</span>
          </div>
          <div className="flex flex-row gap-3">
            <Button variant="ghost" asChild className="group hover:bg-primary/10">
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Projects
              </Link>
            </Button>
          </div>
        </div>

        {/* App Demo Videos */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">App Demonstrations</h2>
          <Carousel className="w-full max-w-sm mx-auto">
            <CarouselContent>
              <CarouselItem>
                <div className="relative">
                  <video 
                    controls 
                    className="w-full rounded-2xl shadow-lg bg-black"
                    preload="metadata"
                  >
                    <source src="/videos/384snap-flow-1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <p className="text-sm text-muted-foreground mt-3 text-center">
                    Photo Album Creation Flow
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative">
                  <video 
                    controls 
                    className="w-full rounded-2xl shadow-lg bg-black"
                    preload="metadata"
                  >
                    <source src="/videos/384snap-flow-2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <p className="text-sm text-muted-foreground mt-3 text-center">
                    Photo Sharing & Storage
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative">
                  <video 
                    controls 
                    className="w-full rounded-2xl shadow-lg bg-black"
                    preload="metadata"
                  >
                    <source src="/videos/384snap-flow-3.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <p className="text-sm text-muted-foreground mt-3 text-center">
                    QR Code Sharing & Collaboration
                  </p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
          <p className="text-xs text-muted-foreground mt-4 text-center max-w-md mx-auto">
            Live recordings of the 384snap iOS app showcasing key user flows and the seamless integration with our os384 storage platform
          </p>
        </div>

        {/* Case Study Content */}
        <div ref={contentRef} className="space-y-8 opacity-0">
          {/* Challenge */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                To create a seamless experience for group photo album sharing on top of our distributed storage
                platform, os384. The app needed to showcase the capabilities of our storage technology while delivering
                an intuitive and engaging user experience.
              </p>
              <p>
                This project required balancing technical constraints of an evolving storage SDK with the need to create
                a polished, user-friendly mobile application that could impress investors and validate our product
                direction.
              </p>
            </div>
          </section>

          {/* My Role */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">My Role</h2>
            <p className="text-muted-foreground mb-6">
              I wore all three hats on this project, taking ownership of the entire product development lifecycle from
              initial concept through to investor demonstrations. This multi-disciplinary approach allowed for rapid
              iteration and tight integration between product vision and technical implementation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-muted/50 rounded-xl p-6 text-center border border-border">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4 mx-auto">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <div className="text-lg font-semibold mb-1">Product Manager</div>
                <div className="text-sm text-muted-foreground">
                  Research, roadmapping, sprint planning
                </div>
              </div>
              <div className="bg-muted/50 rounded-xl p-6 text-center border border-border">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4 mx-auto">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-lg font-semibold mb-1">UX Designer</div>
                <div className="text-sm text-muted-foreground">Wireframing, user flows, UI design</div>
              </div>
              <div className="bg-muted/50 rounded-xl p-6 text-center border border-border">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4 mx-auto">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-lg font-semibold mb-1">Frontend Engineer</div>
                <div className="text-sm text-muted-foreground">SwiftUI, UIKit implementation</div>
              </div>
            </div>
          </section>

          {/* Process */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">The Process</h2>
            <div className="space-y-6 text-muted-foreground">
              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full p-2 mr-4 mt-1">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-foreground">Customer Research</h3>
                  <p>
                    I conducted customer research among our team, friends, and family to identify essential MVP features
                    for the app. This research integrated feedback from designers, engineers, and sales to prioritize
                    features for shipping quickly.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full p-2 mr-4 mt-1">
                  <Lightbulb className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-foreground">UX Design & Wireframing</h3>
                  <p>
                    I wireframed end-to-end UX flows for essential features in tldraw. This included capturing photos,
                    creating albums, sharing albums (via QR code, iMessage, etc.), taking photos, and saving them to
                    albums.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full p-2 mr-4 mt-1">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-foreground">Development & Implementation</h3>
                  <p>
                    I locked down sprint planning and took initiative to help frontend engineers implement actual
                    features for camera swiping integration, album sorting, and sharing. I held daily standups and
                    maintained weekly sprint pace for rapid iteration.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full p-2 mr-4 mt-1">
                  <Smartphone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-foreground">Technical Coordination</h3>
                  <p>
                    I navigated the challenge of having the storage library changing rapidly under us. We had to find
                    methods to continue improving the frontend while the backend was evolving. This coordination
                    required flexibility and dedication through long hours.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Tech Stack & Skills Used</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">SwiftUI</Badge>
                    <Badge variant="outline">Figma</Badge>
                    <Badge variant="outline">UIKit</Badge>
                    <Badge variant="outline">tldraw</Badge>
                    <Badge variant="outline">Jira</Badge>
                    <Badge variant="outline">MVVM Framework</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Customer Research</Badge>
                    <Badge variant="outline">Wireframing</Badge>
                    <Badge variant="outline">Roadmapping</Badge>
                    <Badge variant="outline">Backlog Management</Badge>
                    <Badge variant="outline">UI Design</Badge>
                    <Badge variant="outline">Mobile Engineering</Badge>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Outcome */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Outcome & Impact</h2>
            <div className="space-y-6 text-muted-foreground">
              <div className="flex items-start">
                <div className="text-primary mr-3 text-xl">•</div>
                <p>
                  <strong className="text-foreground">SDK Development:</strong> Implementing features had direct
                  impact on storage SDK development on the backend, creating a feedback loop that improved both the
                  application and the underlying platform.
                </p>
              </div>

              <div className="flex items-start">
                <div className="text-primary mr-3 text-xl">•</div>
                <p>
                  <strong className="text-foreground">Investor Validation:</strong> Delivered investor-facing demos
                  that led to positive feedback and validation of product direction and UX, serving as a compelling case
                  study for our distributed storage platform's capabilities.
                </p>
              </div>

              <div className="flex items-start">
                <div className="text-primary mr-3 text-xl">•</div>
                <p>
                  <strong className="text-foreground">Leadership Growth:</strong> Gained cross-functional
                  leadership experience by shipping a complete internal prototype as PM, designer, and engineer —
                  accelerating iteration speed and team coordination.
                </p>
              </div>
            </div>
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
