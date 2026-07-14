'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

type Project = {
  name: string
  tag: string
  description: string
  image: string
  accent: string
  url: string
}

const projects: Project[] = [
  {
    name: 'Luxury Restaurant Website',
    tag: 'Fine Dining',
    description:
'A luxury restaurant website featuring elegant animations, premium UI, and a seamless dining reservation experience.',
    image: '/projects/lumiere.png',
    accent: 'var(--gold)',
    url: "https://lumiere-restaurant-rouge.vercel.app/"
  },
  {
    name: 'GalaxyX',
    tag: '3D / WebGL',
    description:
      'An immersive space-tech platform with interactive 3D galaxies and scroll storytelling.',
    image: '/projects/galaxyx.png',
    accent: 'var(--secondary)',
    url: "https://galaxyx-website.vercel.app/"
  },
  {
    name: 'Zenith Fitness',
    tag: 'Health & Fitness',
    description:
      'A high-energy membership site with dynamic motion and a bold athletic identity.',
    image: '/projects/zenith.png',
    accent: 'var(--primary)',
    url: "https://zenith-fitness-blue.vercel.app/"
  },
  {
    name: 'Velocity',
    tag: 'Automotive',
    description:
      'A luxury supercar configurator with real-time visuals and seamless transitions.',
    image: '/projects/velocity.png',
    accent: 'var(--gold)',
    url: "https://velocity-automotive-ivory.vercel.app/"
  },
  {
    name: 'Aurelia Grand Hotel',
    tag: 'Luxury Hospitality',
    description:
      'An opulent booking experience for a five-star hotel, dripping in gold and marble.',
    image: '/projects/aurelia.png',
    accent: 'var(--gold)',
    url: "https://aurelia-grand-hotel-iota.vercel.app/"
  },
  {
    name: 'CHRONOS',
    tag: 'Luxury Retail',
    description:
      'A premium timepiece boutique with macro product storytelling and refined detail.',
    image: '/projects/chronos.png',
    accent: 'var(--secondary)',
    url: "https://chronos-luxury-watches.vercel.app/"
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const featured = index === 0 || index === 3
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className={`group glass relative overflow-hidden rounded-3xl ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      <div
        className={`relative w-full overflow-hidden ${
          featured ? 'aspect-[16/9]' : 'aspect-[4/3]'
        }`}
      >
        <Image
          src={project.image || '/placeholder.svg'}
          alt={`${project.name} project preview`}
          fill
          sizes="(max-width: 1024px) 100vw, 66vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <span
          className="absolute left-5 top-5 rounded-full px-3 py-1 text-xs font-medium tracking-wide backdrop-blur-md"
          style={{
            background: 'color-mix(in oklch, var(--background) 55%, transparent)',
            color: project.accent,
            border: `1px solid color-mix(in oklch, ${project.accent} 40%, transparent)`,
          }}
        >
          {project.tag}
        </span>
      </div>

      <div className="relative -mt-16 p-7">
  <h3 className="font-serif text-2xl text-foreground sm:text-3xl">
    {project.name}
  </h3>

  <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
    {project.description}
  </p>

  <div className="mt-6">
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-gold-foreground transition-transform hover:scale-[1.04]"
    >
      View Project
      <ArrowUpRight className="h-4 w-4" />
    </a>
  </div>
</div>
    </motion.article>
  )
}


export function Projects() {
  return (
    <section id="work" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gold">
              Featured Projects
            </span>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight tracking-tight text-balance sm:text-5xl">
              Selected work I&apos;m proud of
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            A collection of premium experiences crafted for brands across
            hospitality, tech, and luxury retail.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
