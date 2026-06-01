import {
  NextJsIcon,
  ReactIcon,
  TypeScriptIcon,
  TailwindIcon,
  ShadcnIcon,
  CursorIcon,
  MotionIcon,
} from "@/components/skill-icons"

const SKILLS = [
  { name: "Next.js", Icon: NextJsIcon },
  { name: "React", Icon: ReactIcon },
  { name: "TypeScript", Icon: TypeScriptIcon },
  { name: "Tailwind", Icon: TailwindIcon },
  { name: "Shadcn", Icon: ShadcnIcon },
  { name: "Cursor", Icon: CursorIcon },
  { name: "Motion", Icon: MotionIcon },
]

function AboutSection() {
  return (
    <section className="flex flex-col gap-1">
      <span className="font-mono text-xs text-primary/50">ABOUT</span>

      <div>
        <h2 className="font-doto text-2xl leading-tight font-black text-primary">
          Design Engineer
        </h2>

        <p className="leading-relaxed text-muted-foreground">
          known for pixel-perfect execution and strong attention to small
          details. With a Minimal and Beautiful taste.
        </p>
      </div>

      <div className="flex gap-2">
        {SKILLS.map(({ name, Icon }) => (
          <span
            key={name}
            className="inline-flex items-center w-fit h-fit gap-1 rounded-md border px-2 py-1 font-mono text-xs text-primary"
          >
            <Icon />
            {name}
          </span>
        ))}
      </div>
    </section>
  )
}

export default AboutSection
