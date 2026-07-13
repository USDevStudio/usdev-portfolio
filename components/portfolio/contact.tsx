'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Mail, MapPin, Send, Check } from 'lucide-react'

export function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3500)
  }

  return (
    <section id="contact" className="relative px-6 py-28">
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
            Let&apos;s build something{' '}
            <span className="text-gradient">premium</span>.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground text-pretty">
            Have a project in mind? Tell me about your brand and vision — I reply
            to every serious inquiry within 24 hours.
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

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass flex flex-col gap-5 rounded-3xl p-7 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" htmlFor="name">
              <input
                id="name"
                name="name"
                required
                placeholder="Your name"
                className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold/60"
              />
            </Field>
            <Field label="Email" htmlFor="email">
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@email.com"
                className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold/60"
              />
            </Field>
          </div>
          <Field label="Project" htmlFor="project">
            <input
              id="project"
              name="project"
              placeholder="What are you building?"
              className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold/60"
            />
          </Field>
          <Field label="Message" htmlFor="message">
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Tell me about your vision..."
              className="w-full resize-none rounded-xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold/60"
            />
          </Field>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-sm font-medium text-gold-foreground transition-transform hover:scale-[1.02] disabled:opacity-70"
            disabled={sent}
          >
            {sent ? (
              <>
                <Check className="h-4 w-4" />
                Message Sent
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Send Message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2">
      <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  )
}
