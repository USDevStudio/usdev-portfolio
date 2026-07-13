'use client'

import { motion } from 'motion/react'

export function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-6"
      >
        <span className="font-serif text-4xl tracking-tight text-gradient">
          US
        </span>
        <div className="relative h-px w-40 overflow-hidden bg-border">
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-gold to-transparent"
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            transition={{
              duration: 1.1,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
          />
        </div>
        <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
          Ubaid Shafiq
        </span>
      </motion.div>
    </motion.div>
  )
}
