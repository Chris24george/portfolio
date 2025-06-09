"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Play } from "lucide-react"

export default function WhitepaperCaseStudy() {
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
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-8 group hover:bg-primary/10">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Link>
        </Button>

        {/* Header */}
        <div ref={headerRef} className="mb-12 opacity-0">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-primary/10 text-primary border-primary/20">Vue.js</Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20">TypeScript</Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20">Technical Writing</Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20">Cursor</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Interactive Whitepaper Site</h1>
          <p className="text-xl text-muted-foreground">
            Created a novel whitepaper format showcasing edge storage SDK with live interactive components
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-16 rounded-2xl overflow-hidden glass-card aspect-video">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Interactive Whitepaper Interface"
            width={1200}
            height={600}
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 shadow-2xl">
              <Play className="mr-2 h-5 w-5" />
              View Demo
            </Button>
          </div>
        </div>

        {/* Case Study Content */}
        <div ref={contentRef} className="space-y-12 opacity-0">
          {/* Challenge */}
          <section className="glass-card rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-semibold mb-6">The Challenge</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Create a novel whitepaper format to showcase our edge storage SDK in the browser as part of the flow of
                navigating the site. Most whitepapers are just static documents. We wanted to differentiate our product
                from the competition by showing it actually works.
              </p>
              <p>
                The goal was to move beyond traditional documentation and create an interactive experience that would
                demonstrate the capabilities of os384 while users read about them.
              </p>
            </div>
          </section>

          {/* My Role */}
          <section className="glass-card rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-semibold mb-6">My Role</h2>
            <p className="text-muted-foreground mb-4">
              I wore all three hats on this project, managing the entire development lifecycle from concept to
              deployment.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2 text-lg">•</span>
                <span>
                  <strong className="text-foreground">Product Manager:</strong> Defined the vision for an interactive
                  whitepaper that would differentiate us from competitors
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-lg">•</span>
                <span>
                  <strong className="text-foreground">UX Designer:</strong> Designed the user experience flow and
                  interactive components using Cursor for rapid prototyping
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-lg">•</span>
                <span>
                  <strong className="text-foreground">Frontend Engineer:</strong> Implemented Vue.js components that
                  integrated our JavaScript SDK for live demonstrations
                </span>
              </li>
            </ul>
          </section>

          {/* Process */}
          <section className="glass-card rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-semibold mb-6">The Process</h2>
            <div className="space-y-6 text-muted-foreground">
              <div className="flex items-start">
                <span className="text-primary mr-2 text-lg">•</span>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-foreground">Framework Research</h3>
                  <p>
                    Researched state-of-the-art web app frameworks that balance interactive components with structured
                    ease of writing documentation.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-primary mr-2 text-lg">•</span>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-foreground">Content Consolidation</h3>
                  <p>
                    Took all existing documentation (which was scattered) and uploaded to NotebookLM with permission.
                    This allowed rapid iteration on content for targeted pages with information grounded in
                    documentation we already wrote.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-primary mr-2 text-lg">•</span>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-foreground">Interactive Components</h3>
                  <p>
                    Created Vue components that actually used our JavaScript SDK inline to upload files and perform
                    benchmarking on the page itself.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Outcome */}
          <section className="glass-card rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-semibold mb-6">Outcome & Impact</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                A nice modern documentation/whitepaper hybrid site that showed the capabilities of os384 inline as you
                read about it. When you read about our file uploading capabilities, we provide you a button to select
                one of your own files and upload.
              </p>
              <p>
                This interactive approach differentiated our product documentation from traditional static whitepapers,
                allowing potential users to experience the SDK's capabilities firsthand rather than just reading about
                them.
              </p>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button asChild size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 shadow-lg">
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
