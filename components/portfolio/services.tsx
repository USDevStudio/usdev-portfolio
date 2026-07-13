'use client'

import { motion } from 'motion/react'
import { Monitor, Boxes, Palette, Gauge } from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: 'Premium Websites',
    desc: 'Bespoke business websites engineered for conversion, speed and a luxury feel from first scroll to checkout.',
  },
  {
    icon: Boxes,
    title: 'Immersive 3D',
    desc: 'Interactive WebGL and 3D experiences that turn ordinary landing pages into memorable moments.',
  },
  {
    icon: Palette,
    title: 'Brand & UI Design',
    desc: 'Refined visual identities and design systems with meticulous typography, color and motion.',
  },
  {
    icon: Gauge,
    title: 'Performance',
    desc: 'Buttery-smooth, accessible builds optimized for Core Web Vitals without sacrificing beauty.',
  },
]

export function Services() {
  return (
    <section id="services" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold">
            Services
          </span>
          <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-balance sm:text-4xl">
            What I bring to every project
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass group rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:border-gold/30"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-gold transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
