"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Play, Smartphone, Users, Lightbulb, Code } from "lucide-react"

export default function SnapCaseStudy() {
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
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 dark:from-blue-950/20 dark:via-cyan-950/20 dark:to-indigo-950/20" />
      <div className="absolute inset-0 bg-dot-pattern opacity-50 -z-10" />
      <div className="container max-w-4xl relative z-10">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-8 group hover:bg-blue-50 dark:hover:bg-blue-950">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Link>
        </Button>

        {/* Header */}
        <div ref={headerRef} className="mb-12 opacity-0">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800">
              SwiftUI
            </Badge>
            <Badge className="bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200 hover:bg-pink-200 dark:hover:bg-pink-800">
              UX Design
            </Badge>
            <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 hover:bg-emerald-200 dark:hover:bg-emerald-800">
              Product Management
            </Badge>
            <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-800">
              Mobile Development
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-gradient-cool">384snap Development</span>
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            Engineered a feature-complete photo sharing app from concept to investor-ready prototype
          </p>
        </div>

        {/* Hero Image/Video */}
        <div className="relative mb-16 rounded-2xl overflow-hidden glass-card-colorful aspect-video">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="384snap Mobile App Interface"
            width={1200}
            height={600}
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Button size="lg" className="rounded-full btn-gradient-tertiary shadow-2xl">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Case Study Content */}
        <div ref={contentRef} className="space-y-16 opacity-0">
          {/* Challenge */}
          <section className="glass-card-colorful rounded-2xl p-8 md:p-10 border border-blue-200/30 dark:border-blue-800/30">
            <h2 className="text-2xl font-semibold mb-6 text-gradient-cool">The Challenge</h2>
            <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
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
          <section className="glass-card-colorful rounded-2xl p-8 md:p-10 border border-purple-200/30 dark:border-purple-800/30">
            <h2 className="text-2xl font-semibold mb-6 text-gradient-primary">My Role</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900 dark:to-violet-900 rounded-xl p-6 text-center border border-purple-200 dark:border-purple-800">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-violet-600 shadow-lg shadow-purple-500/25 mb-4 mx-auto">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <div className="text-lg font-semibold text-gradient-primary mb-1">Product Manager</div>
                <div className="text-sm text-purple-700 dark:text-purple-300">
                  Research, roadmapping, sprint planning
                </div>
              </div>
              <div className="bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900 dark:to-rose-900 rounded-xl p-6 text-center border border-pink-200 dark:border-pink-800">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-rose-600 shadow-lg shadow-pink-500/25 mb-4 mx-auto">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="text-lg font-semibold text-gradient-warm mb-1">UX Designer</div>
                <div className="text-sm text-pink-700 dark:text-pink-300">Wireframing, user flows, UI design</div>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 rounded-xl p-6 text-center border border-blue-200 dark:border-blue-800">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 shadow-lg shadow-blue-500/25 mb-4 mx-auto">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <div className="text-lg font-semibold text-gradient-cool mb-1">Frontend Engineer</div>
                <div className="text-sm text-blue-700 dark:text-blue-300">SwiftUI, UIKit implementation</div>
              </div>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400">
              I wore all three hats on this project, taking ownership of the entire product development lifecycle from
              initial concept through to investor demonstrations. This multi-disciplinary approach allowed for rapid
              iteration and tight integration between product vision and technical implementation.
            </p>
          </section>

          {/* Process */}
          <section className="glass-card-colorful rounded-2xl p-8 md:p-10 border border-emerald-200/30 dark:border-emerald-800/30">
            <h2 className="text-2xl font-semibold mb-6 text-gradient-accent">The Process</h2>
            <div className="space-y-6 text-neutral-600 dark:text-neutral-400">
              <div className="flex items-start">
                <div className="bg-emerald-100 dark:bg-emerald-900 rounded-full p-2 mr-4 mt-1">
                  <Users className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gradient-accent">Customer Research</h3>
                  <p>
                    I conducted customer research among our team, friends, and family to identify essential MVP features
                    for the app. This research integrated feedback from designers, engineers, and sales to prioritize
                    features for shipping quickly.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-2 mr-4 mt-1">
                  <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gradient-cool">UX Design & Wireframing</h3>
                  <p>
                    I wireframed end-to-end UX flows for essential features in tldraw. This included capturing photos,
                    creating albums, sharing albums (via QR code, iMessage, etc.), taking photos, and saving them to
                    albums.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-2 mr-4 mt-1">
                  <Code className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gradient-primary">Development & Implementation</h3>
                  <p>
                    I locked down sprint planning and took initiative to help frontend engineers implement actual
                    features for camera swiping integration, album sorting, and sharing. I held daily standups and
                    maintained weekly sprint pace for rapid iteration.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-pink-100 dark:bg-pink-900 rounded-full p-2 mr-4 mt-1">
                  <Smartphone className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gradient-warm">Technical Coordination</h3>
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
          <section className="glass-card-colorful rounded-2xl p-8 md:p-10 border border-blue-200/30 dark:border-blue-800/30">
            <h2 className="text-2xl font-semibold mb-6 text-gradient-cool">Tech Stack & Skills Used</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-4 text-gradient-cool">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-blue-100/50 dark:bg-blue-800/50">
                      SwiftUI
                    </Badge>
                    <Badge variant="outline" className="bg-blue-100/50 dark:bg-blue-800/50">
                      Figma
                    </Badge>
                    <Badge variant="outline" className="bg-blue-100/50 dark:bg-blue-800/50">
                      UIKit
                    </Badge>
                    <Badge variant="outline" className="bg-blue-100/50 dark:bg-blue-800/50">
                      tldraw
                    </Badge>
                    <Badge variant="outline" className="bg-blue-100/50 dark:bg-blue-800/50">
                      Jira
                    </Badge>
                    <Badge variant="outline" className="bg-blue-100/50 dark:bg-blue-800/50">
                      MVVM Framework
                    </Badge>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4 text-gradient-cool">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-blue-100/50 dark:bg-blue-800/50">
                      Customer Research
                    </Badge>
                    <Badge variant="outline" className="bg-blue-100/50 dark:bg-blue-800/50">
                      Wireframing
                    </Badge>
                    <Badge variant="outline" className="bg-blue-100/50 dark:bg-blue-800/50">
                      Roadmapping
                    </Badge>
                    <Badge variant="outline" className="bg-blue-100/50 dark:bg-blue-800/50">
                      Backlog Management
                    </Badge>
                    <Badge variant="outline" className="bg-blue-100/50 dark:bg-blue-800/50">
                      UI Design
                    </Badge>
                    <Badge variant="outline" className="bg-blue-100/50 dark:bg-blue-800/50">
                      Mobile Engineering
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Outcome */}
          <section className="glass-card-colorful rounded-2xl p-8 md:p-10 border border-emerald-200/30 dark:border-emerald-800/30">
            <h2 className="text-2xl font-semibold mb-6 text-gradient-accent">Outcome & Impact</h2>
            <div className="space-y-6 text-neutral-600 dark:text-neutral-400">
              <div className="flex items-start">
                <div className="text-emerald-500 mr-3 text-xl">•</div>
                <p>
                  <strong className="text-gradient-accent">SDK Development:</strong> Implementing features had direct
                  impact on storage SDK development on the backend, creating a feedback loop that improved both the
                  application and the underlying platform.
                </p>
              </div>

              <div className="flex items-start">
                <div className="text-emerald-500 mr-3 text-xl">•</div>
                <p>
                  <strong className="text-gradient-accent">Investor Validation:</strong> Delivered investor-facing demos
                  that led to positive feedback and validation of product direction and UX, serving as a compelling case
                  study for our distributed storage platform's capabilities.
                </p>
              </div>

              <div className="flex items-start">
                <div className="text-emerald-500 mr-3 text-xl">•</div>
                <p>
                  <strong className="text-gradient-accent">Leadership Growth:</strong> Gained cross-functional
                  leadership experience by shipping a complete internal prototype as PM, designer, and engineer —
                  accelerating iteration speed and team coordination.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button asChild size="lg" className="rounded-full px-8 btn-gradient-tertiary shadow-lg">
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
