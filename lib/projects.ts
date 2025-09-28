export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  year: string
  tags: string[]
  href: string
  demoVideoUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: "384snap",
    title: "384 Snap",
    description: "Led end-to-end product definition from roadmap and core UX to hands-on UI development in SwiftUI.",
    longDescription: "Led end-to-end product definition from roadmap and core UX to hands-on UI development in SwiftUI, achieving feature-complete build for iOS storage management.",
    year: "2024",
    tags: ["SwiftUI", "Product Development", "iOS"],
    href: "/projects/384snap",
    demoVideoUrl: "#",
    featured: true,
  },
  {
    id: "glosova",
    title: "Glosova",
    description: "A polished iOS language learning app built with SwiftUI, featuring AI-powered translation, speech synthesis, and a custom highlighting gesture interface.",
    longDescription: "A comprehensive language learning iOS app built with SwiftUI that combines AI-powered translation via OpenAI, text-to-speech and speech-to-text through ElevenLabs APIs, and Google Auth with Supabase backend. Features a clean, polished UX with a custom-built highlighting gesture on UIKit TextView for an engaging learning experience.",
    year: "2025",
    tags: ["SwiftUI", "iOS", "AI/ML", "Supabase", "OpenAI API", "ElevenLabs", "UIKit"],
    href: "/projects/glosova",
    demoVideoUrl: "https://www.loom.com/share/9ba7dba5ea5244d4854e8c8f37008c04",
    featured: true,
  },
  {
    id: "384-onboarding",
    title: "os384 Loader",
    description: "Engineered primary user onboarding and core functionality, coding frontend myself with progressive disclosure UI.",
    longDescription: "Led product definition and UI development for a streamlined developer onboarding experience that completely revamped how customers were onboarded onto our system and given access to their storage vaults.",
    year: "2025",
    tags: ["Lit.dev", "Web Components", "Product Strategy", "TypeScript", "Wireframing"],
    href: "/projects/384-onboarding",
    demoVideoUrl: "https://www.loom.com/share/8923cae25bd049fdabe35f7627cd75f2",
    featured: true,
  },
  {
    id: "ai-translation-app",
    title: "AI Translation Web App",
    description: "A simple but effective translation web app built with Next.js and Vercel's AI SDK, featuring structured AI outputs with word-by-word breakdowns and grammar analysis.",
    longDescription: "A simple but effective translation web app built with Next.js and Vercel's AI SDK that demonstrates prompt engineering and structured JSON AI outputs. Features phrase translation, word-by-word breakdown, phrase analysis, and grammar overview, with a clean UI using Framer Motion, Tailwind CSS, and Radix components.",
    year: "2025",
    tags: ["Next.js", "Vercel AI SDK", "Prompt Engineering", "Framer Motion", "Tailwind CSS", "Radix UI", "TypeScript"],
    href: "/projects/ai-translation-app",
    demoVideoUrl: "https://www.loom.com/share/b4adf8af905a467696b0b1b41710a820",
    featured: true,
  },
  {
    id: "calboard",
    title: "CalBoard",
    description: "A minimalist iOS app built with SwiftUI that displays real-time Caltrain schedules using the 511.org API.",
    longDescription: "A simple and minimalist iOS app built with SwiftUI that uses the 511.org API to display upcoming Caltrain timetables by station. Created to address the lack of easy solutions for quick Caltrain schedule lookup, demonstrating frontend development skills and practical problem-solving. Features clean design focused on essential transit information with intuitive station selection.",
    year: "2025",
    tags: ["SwiftUI", "iOS", "API Integration", "Transit", "Frontend Development"],
    href: "/projects/calboard",
    demoVideoUrl: "https://www.loom.com/share/9729183bd3694b2695da15e8b581ee7d",
    featured: true,
  },
  {
    id: "interactive-whitepaper",
    title: "Interactive Whitepaper",
    description: "Developed a Vue.js interactive whitepaper that showcased the SDK and impressed investors.",
    longDescription: "Developed a Vue.js interactive whitepaper that showcased the SDK and impressed investors with live demonstrations of our core technology capabilities.",
    year: "2025",
    tags: ["Vue.js", "TypeScript", "Technical Writing"],
    href: "/projects/interactive-whitepaper",
    demoVideoUrl: "https://www.loom.com/share/18f0f5f4683c4a209ab58c0ffc97aaf3",
    featured: true,
  },
]

export function getProject(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
} 