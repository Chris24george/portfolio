export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  role: string
  year: string
  tags: string[]
  href: string
  demoVideoUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: "384-onboarding",
    title: "384.dev Onboarding",
    description: "Engineered primary user onboarding and core functionality, coding frontend myself with progressive disclosure UI.",
    longDescription: "Led product definition and UI development for a streamlined developer onboarding experience that completely revamped how customers were onboarded onto our system and given access to their storage vaults.",
    role: "Technical Product Manager / Software Engineer",
    year: "2024",
    tags: ["Lit.dev", "Web Components", "Product Strategy", "TypeScript", "Wireframing"],
    href: "/projects/384-onboarding",
    demoVideoUrl: "#",
    featured: true,
  },
  {
    id: "384snap",
    title: "384snap iOS App",
    description: "Led end-to-end product definition from roadmap and core UX to hands-on UI development in SwiftUI.",
    longDescription: "Led end-to-end product definition from roadmap and core UX to hands-on UI development in SwiftUI, achieving feature-complete build for iOS storage management.",
    role: "Technical Product Manager / Software Engineer",
    year: "2024",
    tags: ["SwiftUI", "Product Development", "iOS"],
    href: "/projects/384snap",
    demoVideoUrl: "#",
    featured: true,
  },
  {
    id: "interactive-whitepaper",
    title: "Interactive Whitepaper",
    description: "Developed a Vue.js interactive whitepaper that showcased the SDK and impressed investors.",
    longDescription: "Developed a Vue.js interactive whitepaper that showcased the SDK and impressed investors with live demonstrations of our core technology capabilities.",
    role: "Technical Product Manager / Software Engineer",
    year: "2024",
    tags: ["Vue.js", "TypeScript", "Technical Writing"],
    href: "/projects/interactive-whitepaper",
    demoVideoUrl: "#",
    featured: true,
  },
]

export function getProject(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
} 