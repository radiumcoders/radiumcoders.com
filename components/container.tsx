import { cn } from "@/lib/utils"

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <main className={cn("container mx-auto max-w-2xl", className)}>
      {children}
    </main>
  )
}
