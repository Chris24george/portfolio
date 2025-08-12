"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { getProject } from "@/lib/projects"
import { Breadcrumb } from "@/components/breadcrumb"

export default function WhitepaperCaseStudy() {
  const project = getProject("interactive-whitepaper")
  
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

        {/* Case Study Content */}
        <div ref={contentRef} className="space-y-8 opacity-0">
          <section>
            <h2 className="text-2xl font-semibold mb-4">The challenge</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Create a novel whitepaper format to showcase our edge storage SDK in the browser as part of the flow of navigating the site. Most whitepapers are just static documents. We wanted to differentiate our product from the competition by showing it actually works.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">My role</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Product Manager, UX designer, Frontend Engineer. I wore all 3 hats. 
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">The process</h2>
            <ul className="space-y-4 text-muted-foreground list-disc pl-6">
              <li>Decide on web app framework. I did research on state of the art that balances interactive components with structured ease of writing documentation.</li>
              <li>We took all of our documentation that existed previously (it was scattered) and uploaded to NotebookLM (with permission of course). This allowed us to rapidly iterate on content on targeted pages with information that was grounded in documentation that we already wrote in various places.</li>
              <li>Create Vue components that actually used our Javascript SDK inline to upload files and perform benchmarking on the page itself.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Tech stack/skills used</h2>
            <ul className="space-y-2 text-muted-foreground list-disc pl-6">
              <li>Vue.js, Typescript, Jira, Cursor (for prototyping UI flows)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Outcome/impact</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                A nice modern documentation/whitepaper hybrid site that showed the capabilities of os384 inline as you read about it. When you read about our file uploading capabilities, we provide you a button to select one of your own files and upload.
              </p>
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
