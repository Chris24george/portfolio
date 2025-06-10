"use client"

import { useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  href: string
  tags: string[]
  role?: string
  year?: string
}

export function ProjectCard({ title, description, href, tags, role, year }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={href}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:border-border hover:bg-background group-hover:-translate-y-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2 leading-tight">
              {title}
            </h3>
            {(role || year) && (
              <div className="flex items-center gap-2 text-sm text-foreground/70 font-medium">
                {role && <span>{role}</span>}
                {role && year && <span>•</span>}
                {year && <span>{year}</span>}
              </div>
            )}
          </div>
          <div className={`ml-4 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-70 translate-x-1"
          }`}>
            <div className="bg-muted group-hover:bg-primary/10 rounded-full p-2.5 transition-colors">
              <ArrowUpRight className="h-4 w-4 text-foreground/60 group-hover:text-primary transition-colors" />
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-foreground/80 leading-relaxed mb-6 line-clamp-3 text-base">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 5).map((tag) => (
            <Badge key={tag} variant="outline" className="bg-primary/10 border-primary/20">
              {tag}
            </Badge>
          ))}
          {tags.length > 5 && (
            <Badge variant="outline" className="bg-primary/10 border-primary/20">
              +{tags.length - 5}
            </Badge>
          )}
        </div>
      </div>
    </Link>
  )
}
