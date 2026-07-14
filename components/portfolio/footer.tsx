'use client'
import Image from 'next/image'
const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/USDevStudio',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ubaid-ur-rehman-885b1a419/',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/ubaid_ur5/',
  },
]

export function Footer() {
  return (
  <footer className="relative border-t border-border px-6 py-12">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">

      <div>
        <a
  href="#home"
  className="flex items-center transition-transform duration-300 hover:scale-105"
>
  <Image
    src="/logo/usdevstudio-logo.png"
    alt="USDevStudio Logo"
    width={220}
    height={65}
    className="h-auto w-[220px]"
  />
</a>

        <p className="mt-2 text-sm text-muted-foreground">
          Building modern websites with creativity, performance, and precision.
        </p>
      </div>

      <ul className="flex flex-wrap items-center justify-center gap-6">
        {socials.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-all duration-300 hover:text-gold hover:-translate-y-1 inline-block"
            >
              {social.label}
            </a>
          </li>
        ))}
      </ul>

    </div>

    <div className="mx-auto mt-8 max-w-6xl border-t border-border pt-6 text-center text-xs text-muted-foreground sm:text-left">
      © {new Date().getFullYear()} USDevStudio. All rights reserved.
    </div>
  </footer>
  )
}

  