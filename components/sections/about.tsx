const SKILLS = ["Next.js", "TanStack Start", "React", "TypeScript"]

function AboutSection() {
  return (
    <section className="flex flex-col gap-4">
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

      <div className="flex flex-wrap gap-2">
        {SKILLS.map((skill) => (
          <span
            key={skill}
            className="rounded-md border px-2 py-0.5 font-mono text-xs text-muted-foreground"
          >
            {skill}
          </span>
        ))}
      </div>
      {/* 
      <p className="text-muted-foreground leading-relaxed">
        Passionate about exploring new technologies and turning ideas into
        reality through polished, thoughtfully crafted personal projects.
      </p> */}
    </section>
  )
}

export default AboutSection
