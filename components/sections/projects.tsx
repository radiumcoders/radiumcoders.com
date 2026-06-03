import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr"
import { GitHubStars } from "@/components/github-stars"
import { getStarCount } from "@/lib/get-stars"

type Project = {
  title: string
  link: string
  description: string
  technologies: string[]
  repo?: string
}

const PROJECTS: Project[] = [
  {
    title: "EvilButtons",
    link: "https://evilbuttons.com",
    description:
      "shadcn/ui registry of playful, highly animated button components with evil aesthetics and killing interactions.",
    technologies: ["React", "Next.js", "Tailwind CSS", "ShadCN", "TypeScript"],
    repo: "radiumcoders/Evil-Buttons",
  }
]

const OPENSOURCE_PROJECTS: Project[] = [
  {
    title: "Mellow Lines",
    link: "https://mellowlines.dev/?utm_source=radiumcoders.com",
    description:
      "Transform code into motion. Create stunning, cinematic code walkthroughs in seconds. The ultimate free and open source tool for developers, content creators and educators.",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "ShadCN",
      "TypeScript",
      "Motion",
    ],
    repo: "kostyniuk/mellow-lines",
  },
  {
    title: "Ghostex",
    link: "https://ghostex.dev",
    description:
      "Native Agent CLIs manager for macOS. Ghostty Terminals + Codex App Features. Embedded browser & IDE with strong agent support.",
    technologies: ["Zig", "macOS", "Ghostty", "CLI"],
    repo: "maddada/Ghostex",
  },
]

function ProjectCard({
  project,
  stars,
}: {
  project: Project
  stars?: number
}) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-1 rounded-lg border-2 border-dotted border-border p-2.5 transition-all hover:border-primary/40 hover:animate-flash-hover"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <h3 className="font-doto text-lg leading-tight font-bold text-primary">
            {project.title}
          </h3>
          {project.repo && stars !== undefined && (
            <GitHubStars repo={project.repo} stargazersCount={stars} />
          )}
        </div>
        <ArrowSquareOut
          weight="bold"
          className="mt-0.5 size-3.5 shrink-0 text-primary/30 transition-colors group-hover:text-primary/60"
        />
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center rounded-md border border-border px-1.5 py-0.5 font-mono text-[11px] text-primary/60"
          >
            {tech}
          </span>
        ))}
      </div>
    </a>
  )
}

async function ProjectWithStars({ project }: { project: Project }) {
  const stars = project.repo ? await getStarCount(project.repo) : undefined
  return <ProjectCard project={project} stars={stars} />
}

export default function ProjectsSection() {
  return (
    <section className="flex flex-col gap-1">
      <span className="font-mono text-xs text-primary/50">PROJECTS</span>

      <div className="flex flex-col gap-2">
        {PROJECTS.map((project) => (
          <ProjectWithStars key={project.title} project={project} />
        ))}
      </div>

      <div className="mt-2 flex flex-col gap-2">
        <span className="font-mono text-[11px] text-primary/40">
          OPEN SOURCE CONTRIBUTIONS
        </span>
        {OPENSOURCE_PROJECTS.map((project) => (
          <ProjectWithStars key={project.title} project={project} />
        ))}
      </div>

      <a
        href="mailto:hi@radiumcoders.com"
        className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
      >
        Get ur own project here
        <ArrowSquareOut weight="bold" />
      </a>
    </section>
  )
}
