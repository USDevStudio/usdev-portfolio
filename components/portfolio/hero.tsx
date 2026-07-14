'use client'

import { motion } from 'motion/react'
import { ArrowRight, Sparkles } from 'lucide-react'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28"
    >
      {/* ambient glows */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/3 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
        style={{ background: 'var(--primary)' }}
      />
      <div
        aria-hidden
        className="absolute right-1/4 top-1/2 -z-10 h-[400px] w-[400px] rounded-full opacity-25 blur-[120px]"
        style={{ background: 'var(--secondary)' }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <motion.span
          variants={item}
          className="glass mx-auto mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.25em] text-muted-foreground"
        >
          <Sparkles className="h-3.5 w-3.5 text-gold" />
          Building Premium Websites That Grow Businesses
        </motion.span>

        <motion.h1
           variants={item}
           className="font-serif text-4xl leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl"
        >
          Ubaid <span className="text-gradient">Ur Rehman </span>
          <span className="text-gradient">

             - Full Stack Web Developer
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg"
        >
          I build modern, responsive websites using Next.js, React, and TypeScript,
helping businesses establish a powerful online presence.
        </motion.p>
        <motion.p
  variants={item}
  className="mt-5 text-sm font-medium tracking-wide text-gold"
>
  Next.js • React • TypeScript • Tailwind CSS
</motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-gold-foreground transition-transform hover:scale-[1.03]"
          >
            View My Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:text-gold"
          >
            Hire Me
          </a>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1.5">
          <motion.span
            className="h-1.5 w-1 rounded-full bg-gold"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </motion.div>
    </section>
  )
}
