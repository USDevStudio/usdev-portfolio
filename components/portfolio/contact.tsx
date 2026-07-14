'use client'

import { motion } from 'motion/react'
import { Mail, MapPin } from 'lucide-react'

export function Contact() {
  return (  <section id="contact" className="relative px-6 py-28">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[130px]"
        style={{ background: 'var(--secondary)' }}
      />
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold">
            Contact
          </span>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-balance sm:text-5xl">
            Let&apos;s Bring Your Vision to Life
            <span className="text-gradient"></span>.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground text-pretty">
            Have an idea, business, or startup? I'd love to help you build a modern,
            high-performance website that stands out. Let's discuss your project.
          </p>

          <div className="mt-10 space-y-4">
            <a
             href="mailto:shafiqubaid4@gmail.com"
              className="glass flex items-center gap-4 rounded-2xl p-4 transition-colors hover:text-gold"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-gold">
                <Mail className="h-5 w-5" />
              </span>
              <span className="text-sm">shafiqubaid4@gmail.com</span>
            </a>
            <div className="glass flex items-center gap-4 rounded-2xl p-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-gold">
                <MapPin className="h-5 w-5" />
              </span>
              <span className="text-sm text-muted-foreground">
                Available worldwide — Remote
              </span>
            </div>
          </div>
        </motion.div>
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-100px' }}
  transition={{ duration: 0.6, delay: 0.1 }}
  className="glass rounded-3xl p-8"
>
  <h3 className="font-serif text-2xl">
    Let's Connect
  </h3>

  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
    Interested in working together? Feel free to reach out through my social
    platforms or email. I'd love to discuss your next project.
  </p>

  <a
    href="mailto:shafiqubaid4@gmail.com"
    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3 text-sm font-medium text-gold-foreground transition-transform hover:scale-[1.02]"
  >
    <Mail className="h-4 w-4" />
    Send Email
  </a>
</motion.div>
      </div>
    </section>
  )
}
