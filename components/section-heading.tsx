import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  description?: string
  align?: "left" | "center" | "right"
  className?: string
}

export function SectionHeading({ title, description, align = "center", className }: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl mx-auto mb-12",
        align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center",
        className,
      )}
    >
      <h2 className="text-3xl font-semibold tracking-tight mb-3">{title}</h2>
      {description && <p className="text-muted-foreground text-lg">{description}</p>}
    </div>
  )
}
