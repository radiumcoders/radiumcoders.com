"use client"
import {
  GlobeIcon,
  MailboxIcon,
  UserIcon,
  XLogoIcon,
} from "@phosphor-icons/react"
import { AnimatePresence, motion } from "motion/react"
import { useRef, useState } from "react"

type HighlightType = "name" | "website" | "email" | "twitter"

const icons: {
  label: string
  type: HighlightType
  icon: React.ElementType
}[] = [
  { label: "Name", type: "name", icon: UserIcon },
  { label: "Email", type: "email", icon: MailboxIcon },
  { label: "Website", type: "website", icon: GlobeIcon },
  { label: "Twitter", type: "twitter", icon: XLogoIcon },
]

export type data = {
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
            dur="10s"
            repeatCount="indefinite"
          />
        )}
      </line>
    </svg>
  )
}

function Address({ data }: { data: data }) {
  const [highlight, setHighlight] = useState<HighlightType | null>(null)

  const rows: { type: HighlightType; value: string }[] = [
    { type: "name", value: data.name },
    { type: "email", value: data.email },
    { type: "website", value: data.website },
    { type: "twitter", value: data.twitter },
  ]

  return (
    <div className="flex items-center justify-center gap-2">
      <div className="flex min-h-8 flex-col items-center gap-1">
        {icons.map(({ label, type, icon: Icon }) => (
          <motion.button
            key={label}
            onMouseEnter={() => setHighlight(type)}
            onMouseLeave={() => setHighlight(null)}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="relative rounded p-2"
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
          </motion.button>
        ))}
      </div>

      <div className="flex flex-col gap-2 font-doto text-3xl font-black">
        {rows.map(({ type, value }) => {
          const isActive = highlight === type
          const isDimmed = highlight !== null && !isActive
          return (
            <motion.span
              key={type}
              className="relative inline-block w-fit"
              animate={{
                filter: isDimmed ? "blur(4px)" : "blur(0px)",
                opacity: isDimmed ? 0.3 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {value}
              <DashedUnderline active={isActive} />
            </motion.span>
          )
        })}
      </div>
    </div>
  )
}

export default Address
