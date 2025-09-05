"use client"

import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Play } from "lucide-react"
import Link from "next/link"
import { getProject } from "@/lib/projects"

export default function GlosovaProjectPage() {
  const project = getProject("glosova")
  
  if (!project) {
    notFound()
  }

  const demoVideos = [
    {
      title: "Core App Demo",
      url: "https://www.loom.com/share/9ba7dba5ea5244d4854e8c8f37008c04",
      description: "Overview of the main language learning features and user interface"
    },
    {
      title: "Additional Features",
      url: "https://www.loom.com/share/95c8161937b14f3bb4290e9f1f41acd2",
      description: "Demonstration of advanced features and functionality"
    }
  ]

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

          {/* Demo Videos */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Demo Videos</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {demoVideos.map((video, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-2">{video.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{video.description}</p>
                  <Button asChild size="sm">
                    <Link href={video.url} target="_blank" rel="noopener noreferrer">
                      <Play className="mr-2 h-4 w-4" />
                      Watch Demo
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Details */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Technical Implementation</h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Frontend & UI</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Built with SwiftUI for native iOS performance and modern interface</li>
                  <li>Custom highlighting gesture implementation using UIKit TextView</li>
                  <li>Clean, polished user experience designed for language learning</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Backend & APIs</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Supabase backend for user data and content management</li>
                  <li>Google Auth integration for secure user authentication</li>
                  <li>OpenAI API integration for real-time translation capabilities</li>
                  <li>ElevenLabs APIs for text-to-speech and speech-to-text functionality</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Key Features</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>AI-powered translation and lesson generation</li>
                  <li>Interactive highlighting for vocabulary selection</li>
                  <li>Save words and phrases for later review</li>
                  <li>Flashcard system for practicing saved vocabulary</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
