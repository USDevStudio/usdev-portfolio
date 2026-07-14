import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ubaid Ur Rehman | Web Developer | USDevStudio',

  description:
    'Professional portfolio of Ubaid Ur Rehman, a Web Developer specializing in Next.js, React, TypeScript, and Tailwind CSS. Explore modern, responsive websites and premium digital experiences.',

  keywords: [
    'Ubaid Ur Rehman',
    'USDevStudio',
    'Web Developer',
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Frontend Developer',
    'Portfolio',
    'Pakistan',
  ],

  authors: [
    {
      name: 'Ubaid Ur Rehman',
    },
  ],

  creator: 'Ubaid Ur Rehman',

  openGraph: {
    title: 'Ubaid Ur Rehman | USDevStudio',

    description:
      'Explore premium business websites, modern UI designs, and interactive web experiences built with Next.js, React, and TypeScript.',

    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a12',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
