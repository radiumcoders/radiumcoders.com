"use client"
import {
  GlobeIcon,
  MailboxIcon,
  UserIcon,
  XLogoIcon,
} from "@phosphor-icons/react"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

type HighlightType = "name" | "website" | "email" | "twitter"

export type Data = {
  name: string
  email: string
  website: string
  twitter: string
}

const DASH = 6
const GAP = 4
const UNIT = DASH + GAP

function DashedUnderline({ active }: { active: boolean }) {
  return (
    <svg
      className="absolute -bottom-1 left-0"
      width="100%"
      height={4}
      style={{ overflow: "visible" }}
    >
      <line
        x1="0"
        y1="2"
        x2="100%"
        y2="2"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeDasharray={`${DASH} ${GAP}`}
        strokeOpacity={active ? 1 : 0}
        style={{ transition: "stroke-opacity 0.2s ease" }}
      >
        {active && (
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to={`-${UNIT * 10}`}
            dur="5s"
            repeatCount="indefinite"
          />
        )}
      </line>
    </svg>
  )
}

function Address({ data }: { data: Data }) {
  const [highlight, setHighlight] = useState<HighlightType | null>(null)

  const rows: { type: HighlightType; value: string; href: string }[] = [
    { type: "name", value: data.name, href: "#" },
    { type: "email", value: data.email, href: `mailto:${data.email}` },
    { type: "website", value: data.website, href: data.website },
    {
      type: "twitter",
      value: data.twitter,
      href: `https://x.com/${data.twitter.replace("@", "")}`,
    },
  ]

  const icons: {
    label: string
    type: HighlightType
    icon: React.ElementType
    href: string
  }[] = [
    { label: "Name", type: "name", icon: UserIcon, href: "#" },
    {
      label: "Email",
      type: "email",
      icon: MailboxIcon,
      href: `mailto:${data.email}`,
    },
    { label: "Website", type: "website", icon: GlobeIcon, href: `/` },
    {
      label: "Twitter",
      type: "twitter",
      icon: XLogoIcon,
      href: `https://x.com/${data.twitter.replace("@", "")}`,
    },
  ]

  return (
    <div className="flex items-center justify-center gap-2">
      <div className="flex min-h-8 flex-col items-center gap-1">
        {icons.map(({ label, type, icon: Icon, href }) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            onMouseEnter={() => setHighlight(type)}
            onMouseLeave={() => setHighlight(null)}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="relative rounded-lg p-2"
          >
            <AnimatePresence>
              {highlight === type && (
                <motion.div
                  layoutId="bg-hover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="absolute inset-0 rounded-lg bg-primary/10"
                />
              )}
            </AnimatePresence>
            <Icon size={24} className="relative z-10" />
          </motion.a>
        ))}
      </div>

      <div className="flex flex-col gap-2 font-doto text-3xl font-black">
        {rows.map(({ type, value, href }) => {
          const isActive = highlight === type
          const isDimmed = highlight !== null && !isActive
          return (
            <motion.a
              key={type}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="relative inline-block"
              animate={{
                filter: isDimmed ? "blur(4px)" : "blur(0px)",
                opacity: isDimmed ? 0.3 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {value}
              <DashedUnderline active={isActive} />
            </motion.a>
          )
        })}
      </div>
    </div>
  )
}

export default Address
