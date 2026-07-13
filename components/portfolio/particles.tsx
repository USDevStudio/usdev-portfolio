'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion } from 'motion/react'

type Particle = {
  id: number
  left: string
  size: number
  duration: number
  delay: number
  color: string
}

export function Particles({ count = 40 }: { count?: number }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const particles = useMemo<Particle[]>(() => {
    const colors = [
      'var(--primary)',
      'var(--secondary)',
      'var(--gold)',
      'var(--foreground)',
    ]
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 18 + 14,
      delay: Math.random() * -30,
      color: colors[i % colors.length],
    }))
  }, [count])

  if (!mounted) return null

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute bottom-[-10%] rounded-full"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: ['0%', '-120vh'],
            opacity: [0, 0.7, 0.7, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}
