'use client'

import { motion } from 'motion/react'

const stats = [
  { value: '6', label: 'Websites Built' },
  { value: '3D', label: 'Interactive Projects' },
  { value: 'AI', label: 'Powered Creations' },
  { value: '100%', label: 'Passion for Learning' },
]
export function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold">
            About Me
          </span>
          <motion.h2
           className="..."
        >
          INTRODUCTION 
         </motion.h2>
          <p className="mt-6 leading-relaxed text-muted-foreground text-pretty">
            I&apos;m Ubaid Ur Rehman, an aspiring AI and Web Developer passionate about building modern websites and immersive 3D digital experiences. I enjoy combining AI tools with coding to create fast, beautiful, and interactive websites.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            Every pixel is intentional. Every interaction is considered. The
            result is work that doesn&apos;t just look premium — it performs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center transition-transform hover:-translate-y-1"
            >
              <div className="font-serif text-4xl text-gradient">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
