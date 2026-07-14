'use client'

import { motion } from 'motion/react'

const stats = [
  { value: '7+', label: 'Projects Completed' },
  { value: '7', label: 'Live Websites' },
  { value: '4+', label: 'Technologies Used' },
  { value: '100%', label: 'Responsive Design' },
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
           Who I Am
          </span>
          <motion.h2
           className="..."
        >
          Crafting Modern Websites with Creativity & Code 
         </motion.h2>
          <p className="mt-6 leading-relaxed text-muted-foreground text-pretty">
            I&apos;m Ubaid Ur Rehman, a passionate Web Developer specializing in Next.js, React, TypeScript, and modern UI design. I build responsive, high-performance websites that combine clean code, engaging user experiences, and premium visual design.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            My goal is to help businesses and brands establish a strong online presence through fast, responsive, and visually engaging websites. Every project is built with attention to performance, usability, and long-term quality.
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
