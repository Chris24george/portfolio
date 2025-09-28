"use client"

import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Play } from "lucide-react"
import Link from "next/link"
import { getProject } from "@/lib/projects"

export default function AITranslationAppProjectPage() {
  const project = getProject("ai-translation-app")
  
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
              <h3 className="text-lg font-medium mb-2">Live App Demonstration</h3>
              <p className="text-muted-foreground text-sm mb-4">
                See the translation app in action with real-time AI-powered translations, word breakdowns, and grammar analysis
              </p>
              <Button asChild size="sm">
                <Link href={project.demoVideoUrl || "#"} target="_blank" rel="noopener noreferrer">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </section>

          {/* Key Features */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-medium mb-2">AI-Powered Translation</h3>
                <p className="text-muted-foreground text-sm">
                  Uses Vercel's AI SDK with structured JSON outputs to provide accurate translations with contextual understanding
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-medium mb-2">Word-by-Word Breakdown</h3>
                <p className="text-muted-foreground text-sm">
                  Detailed analysis of each word showing individual translations and linguistic components
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-medium mb-2">Phrase Analysis</h3>
                <p className="text-muted-foreground text-sm">
                  Comprehensive phrase-level analysis explaining context, meaning, and usage patterns
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-medium mb-2">Grammar Overview</h3>
                <p className="text-muted-foreground text-sm">
                  Detailed grammatical breakdown including sentence structure, verb tenses, and linguistic rules
                </p>
              </div>
            </div>
          </section>

          {/* Technical Implementation */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Technical Implementation</h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Development Workflow</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Used v0.dev for initial project scaffolding and component structure</li>
                  <li>Refined and extended functionality with Cursor AI assistance</li>
                  <li>Iterative development approach combining AI tools with custom implementation</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Frontend & UI</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Built with Next.js 14 for optimal performance and SEO</li>
                  <li>Framer Motion for smooth animations and transitions</li>
                  <li>Tailwind CSS for responsive, utility-first styling</li>
                  <li>Radix UI components for accessible, customizable interface elements</li>
                  <li>TypeScript for type safety and better developer experience</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">AI Integration</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Vercel AI SDK for streamlined AI model integration</li>
                  <li>Structured JSON outputs using prompt engineering techniques</li>
                  <li>Custom prompts designed for comprehensive language analysis</li>
                  <li>Real-time processing with optimized API calls</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Learning Outcomes</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Advanced prompt engineering for structured AI outputs</li>
                  <li>Integration of modern AI development tools and workflows</li>
                  <li>Building user-friendly interfaces for AI-powered applications</li>
                  <li>Understanding of language processing and linguistic analysis</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Project Impact */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Project Impact</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-muted-foreground">
                This project served as an excellent introduction to AI development and prompt engineering. 
                By focusing on structured outputs and comprehensive language analysis, it demonstrated 
                how modern AI tools can be leveraged to create practical, user-focused applications. 
                The experience gained from this project has been invaluable for understanding 
                AI integration patterns and best practices in modern web development.
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
