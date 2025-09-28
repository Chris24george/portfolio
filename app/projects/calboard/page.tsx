"use client"

import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Play } from "lucide-react"
import Link from "next/link"
import { getProject } from "@/lib/projects"

export default function CalBoardProjectPage() {
  const project = getProject("calboard")
  
  if (!project) {
    notFound()
  }

  return (
    <div className="pt-20 pb-8 md:pt-24 md:pb-16">
      <div className="container max-w-4xl">
        <div className="space-y-8">
          {/* Back Navigation */}
          <div>
            <Button variant="ghost" size="sm" asChild className="mb-4">
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
            
            {/* Project Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{project.year}</span>
                <span>•</span>
                <span>Personal Project</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                {project.title}
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl">
                {project.longDescription}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="bg-primary/10 border-primary/20">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Demo Video */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Demo Video</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-2">App Demonstration</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Watch how CalBoard displays real-time Caltrain schedules with a clean, minimalist interface
              </p>
              <Button asChild size="sm">
                <Link href={project.demoVideoUrl!} target="_blank" rel="noopener noreferrer">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </section>

          {/* Technical Details */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Technical Implementation</h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Frontend & UI</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Built entirely with SwiftUI for native iOS performance</li>
                  <li>Minimalist design focused on essential transit information</li>
                  <li>Clean, readable interface optimized for quick reference</li>
                  <li>Station selection with intuitive navigation</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">API Integration</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Direct integration with 511.org API for real-time transit data</li>
                  <li>No proxy server needed for this demonstration app</li>
                  <li>Efficient data parsing and display of timetable information</li>
                  <li>Real-time updates of upcoming departures</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Key Features</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Station-specific Caltrain schedule lookup</li>
                  <li>Real-time departure information</li>
                  <li>Simple, intuitive station selection interface</li>
                  <li>Focused on solving a specific transit problem effectively</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Project Context</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Created to address lack of simple Caltrain schedule apps</li>
                  <li>Demonstrates frontend development skills in iOS/SwiftUI</li>
                  <li>Focus on user experience and practical utility</li>
                  <li>Never published to App Store - proof of concept and skill demonstration</li>
                </ul>
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
