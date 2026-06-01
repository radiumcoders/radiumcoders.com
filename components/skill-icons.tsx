import { cn } from "@/lib/utils"

export function ShadcnIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 256 256"
      className={cn("size-3.5 text-black dark:text-white", className)}
      fill="none"
    >
      <path fill="none" d="M0 0h256v256H0z" />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="25"
        strokeLinecap="round"
        d="M208 128l-80 80M192 40L40 192"
      />
    </svg>
  )
}

export function CursorIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 466.73 532.09"
      className={cn("size-3.5 text-black dark:text-white", className)}
    >
      <path
        d="M457.43,125.94L244.42,2.96c-6.84-3.95-15.28-3.95-22.12,0L9.3,125.94c-5.75,3.32-9.3,9.46-9.3,16.11v247.99c0,6.65,3.55,12.79,9.3,16.11l213.01,122.98c6.84,3.95,15.28,3.95,22.12,0l213.01-122.98c5.75-3.32,9.3-9.46,9.3-16.11v-247.99c0-6.65-3.55-12.79-9.3-16.11h-.01ZM444.05,151.99l-205.63,356.16c-1.39,2.4-5.06,1.42-5.06-1.36v-233.21c0-4.66-2.49-8.97-6.53-11.31L24.87,145.67c-2.4-1.39-1.42-5.06,1.36-5.06h411.26c5.84,0,9.49,6.33,6.57,11.39h-.01Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function MotionIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 1103 386" className={cn("size-3.5", className)}>
      <path
        fill="#FFF312"
        d="M416.473 0 198.54 385.66H0L170.17 84.522C196.549 37.842 262.377 0 317.203 0Zm486.875 96.415c0-53.249 44.444-96.415 99.27-96.415 54.826 0 99.27 43.166 99.27 96.415 0 53.248-44.444 96.415-99.27 96.415-54.826 0-99.27-43.167-99.27-96.415ZM453.699 0h198.54L434.306 385.66h-198.54Zm234.492 0h198.542L716.56 301.138c-26.378 46.68-92.207 84.522-147.032 84.522h-99.27Z"
      />
    </svg>
  )
}

type IconProps = { className?: string }

export function NextJsIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 180 180"
      className={cn("size-3.5 text-black dark:text-white", className)}
      fill="none"
    >
      <path
        d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
        fill="currentColor"
      />
      <rect fill="currentColor" height="72" width="12" x="115" y="54" />
    </svg>
  )
}

export function TanStackIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("size-3.5", className)}
      fill="none"
    >
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="5" y="7" width="14" height="1.5" rx="0.75" fill="currentColor" />
      <rect
        x="5"
        y="11.25"
        width="14"
        height="1.5"
        rx="0.75"
        fill="currentColor"
      />
      <rect
        x="5"
        y="15.5"
        width="14"
        height="1.5"
        rx="0.75"
        fill="currentColor"
      />
    </svg>
  )
}

export function ReactIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("size-3.5", className)}
      fill="none"
    >
      <circle cx="12" cy="12" r="1.5" fill="#61DAFB" />
      <ellipse
        cx="12"
        cy="12"
        rx="5"
        ry="10"
        stroke="#61DAFB"
        strokeWidth="1.25"
        transform="rotate(0 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="5"
        ry="10"
        stroke="#61DAFB"
        strokeWidth="1.25"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="5"
        ry="10"
        stroke="#61DAFB"
        strokeWidth="1.25"
        transform="rotate(120 12 12)"
      />
    </svg>
  )
}

export function TypeScriptIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 256 256"
      className={cn("size-3.5", className)}
      fill="none"
    >
      <rect width="256" height="256" rx="20" fill="#3178C6" />
      <path
        d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z"
        fill="#fff"
      />
    </svg>
  )
}

export function TailwindIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 54 33"
      className={cn("size-3.5", className)}
      fill="#06B6D4"
    >
      <path
        d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  )
}

