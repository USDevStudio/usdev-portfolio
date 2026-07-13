'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence } from 'motion/react'
import { Loader } from '@/components/portfolio/loader'
import { Particles } from '@/components/portfolio/particles'
import { CursorGlow } from '@/components/portfolio/cursor-glow'
import { Navbar } from '@/components/portfolio/navbar'
import { Hero } from '@/components/portfolio/hero'
import { About } from '@/components/portfolio/about'
import { Services } from '@/components/portfolio/services'
import { Projects } from '@/components/portfolio/projects'
import { Contact } from '@/components/portfolio/contact'
import { Footer } from '@/components/portfolio/footer'
import { BackToTop } from '@/components/portfolio/back-to-top'

export default function Page() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      <div className="relative min-h-screen overflow-x-clip">
        <CursorGlow />
        <Particles />

        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Services />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>

        <BackToTop />
      </div>
    </>
  )
}
