'use client'

import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

export function CursorGlow() {
  const x = useMotionValue(-500)
  const y = useMotionValue(-500)
  const springX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.4 })

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)')
    if (!media.matches) return

    const handle = (e: MouseEvent) => {
      x.set(e.clientX - 300)
      y.set(e.clientY - 300)
    }
    window.addEventListener('mousemove', handle)
    return () => window.removeEventListener('mousemove', handle)
  }, [x, y])

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-0 hidden h-[600px] w-[600px] rounded-full md:block"
      style={{
        x: springX,
        y: springY,
        background:
          'radial-gradient(circle, color-mix(in oklch, var(--primary) 22%, transparent) 0%, color-mix(in oklch, var(--secondary) 12%, transparent) 40%, transparent 70%)',
      }}
    />
  )
}
