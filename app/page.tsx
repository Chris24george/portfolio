"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github, Linkedin } from "lucide-react"
import { getFeaturedProjects } from "@/lib/projects"
import { ProjectCard } from "@/components/project-card"

export default function HomePage() {
  const projects = getFeaturedProjects()

  const skills = {
    technical: [
      "Node.js",
      "TypeScript",
      "React",
      "Python",
      "SwiftUI",
      "SQL",
      "Next.js",
      "Flask",
      "Vue",
      "REST APIs",
      "Git",
      "GitHub",
      "HTML5/CSS",
      "Web Components (Lit)",
      "SDK integration",
    ],
    product: [
      "Agile/Scrum",
      "Roadmapping",
      "Backlog Management",
      "Stakeholder Communication",
      "User Research",
      "Competitive Analysis",
      "QA",
      "UX Reviews",
      "Documentation & guides",
    ],
    enablement: [
      "Figma",
      "Canva",
      "Framer",
      "Cursor",
      "ElevenLabs",
    ],
  }

  const [showTech, setShowTech] = useState(false)
  const [showProduct, setShowProduct] = useState(false)
  const [showEnablement, setShowEnablement] = useState(false)
  const maxVisibleSkills = 8

  return (
    <div className="pt-20 pb-8 md:pt-24 md:pb-16 relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-50 -z-10" />
      <div className="container max-w-4xl">
        <div className="space-y-12">
          {/* Header */}
          <section className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-primary/20">
              <Image src="/images/headshot.jpeg" alt="Christopher George" fill className="object-cover" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">Christopher George</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Software engineer proficient in web and iOS development. Always learning new things.
            </p>
            <div className="flex items-center justify-center space-x-6 text-muted-foreground">
              <Link href="https://github.com/Chris24george" className="hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/chris24george/" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </section>

          {/* Projects */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Featured Projects</h2>
              <Button variant="outline" asChild>
                <Link href="/projects">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  href={project.href}
                  tags={project.tags}
                />
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Technical</h3>
                <div className="flex flex-wrap gap-2">
                  {(showTech ? skills.technical : skills.technical.slice(0, maxVisibleSkills)).map((skill) => (
                    <Badge key={skill} variant="outline" className="bg-primary/10 border-primary/20">
                      {skill}
                    </Badge>
                  ))}
                  {skills.technical.length > maxVisibleSkills && (
                    <Badge
                      variant="outline"
                      className="bg-primary/10 border-primary/20 cursor-pointer select-none"
                      role="button"
                      tabIndex={0}
                      aria-expanded={showTech}
                      onClick={() => setShowTech(!showTech)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault()
                          setShowTech(!showTech)
                        }
                      }}
                    >
                      {showTech ? "Show less" : `+${skills.technical.length - maxVisibleSkills} more`}
                    </Badge>
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Product</h3>
                <div className="flex flex-wrap gap-2">
                  {(showProduct ? skills.product : skills.product.slice(0, maxVisibleSkills)).map((skill) => (
                    <Badge key={skill} variant="outline" className="bg-primary/10 border-primary/20">
                      {skill}
                    </Badge>
                  ))}
                  {skills.product.length > maxVisibleSkills && (
                    <Badge
                      variant="outline"
                      className="bg-primary/10 border-primary/20 cursor-pointer select-none"
                      role="button"
                      tabIndex={0}
                      aria-expanded={showProduct}
                      onClick={() => setShowProduct(!showProduct)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault()
                          setShowProduct(!showProduct)
                        }
                      }}
                    >
                      {showProduct ? "Show less" : `+${skills.product.length - maxVisibleSkills} more`}
                    </Badge>
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Design & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {(showEnablement ? skills.enablement : skills.enablement.slice(0, maxVisibleSkills)).map((skill) => (
                    <Badge key={skill} variant="outline" className="bg-primary/10 border-primary/20">
                      {skill}
                    </Badge>
                  ))}
                  {skills.enablement.length > maxVisibleSkills && (
                    <Badge
                      variant="outline"
                      className="bg-primary/10 border-primary/20 cursor-pointer select-none"
                      role="button"
                      tabIndex={0}
                      aria-expanded={showEnablement}
                      onClick={() => setShowEnablement(!showEnablement)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault()
                          setShowEnablement(!showEnablement)
                        }
                      }}
                    >
                      {showEnablement ? "Show less" : `+${skills.enablement.length - maxVisibleSkills} more`}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
