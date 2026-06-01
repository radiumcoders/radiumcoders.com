import Container from "@/components/container"
import AboutSection from "@/components/sections/about"
import GitHubContributionsSection from "@/components/sections/github-contri"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export default function Page() {
  return (
    <Container className="min-h-screen py-5 flex gap-10 flex-col">
      <div className="flex items-end justify-between">
        <div className="flex items-end justify-start gap-3">
          <img src="/jay.png" alt="Jay" className="size-[2lh] rounded" />
          <div>
            <span className="font-mono text-xs text-primary/50">
              Hey! it's me again,
            </span>
            <div className="flex items-baseline gap-2">
              <h1 className="font-doto text-3xl leading-none font-bold text-primary">
                Jay
              </h1>
              <Link href="https://x.com/radiumcoders" target="_blank">
                <span className="font-mono text-xs text-primary/50">
                  / @radiumcoders
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
      <AboutSection />
      <GitHubContributionsSection />
    </Container>
  )
}
