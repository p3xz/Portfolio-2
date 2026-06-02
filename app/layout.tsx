import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist-sans"
});
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono"
});

export const metadata: Metadata = {
  title: 'Namish Yadav | Full Stack Developer',
  description: 'Portfolio of Namish Yadav - A passionate full stack developer building elegant, interactive software applications with Java, Python, JavaScript, and more.',
  keywords: ['Namish Yadav', 'Full Stack Developer', 'Java', 'Python', 'JavaScript', 'Portfolio', 'Web Developer'],
  authors: [{ name: 'Namish Yadav' }],
  creator: 'Namish Yadav',
  openGraph: {
    type: 'website',
    title: 'Namish Yadav | Full Stack Developer',
    description: 'Portfolio of Namish Yadav - A passionate full stack developer building elegant, interactive software applications.',
    siteName: 'Namish Yadav Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Namish Yadav | Full Stack Developer',
    description: 'Portfolio of Namish Yadav - A passionate full stack developer building elegant, interactive software applications.',
  },
  robots: 'index, follow',
}

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased bg-[#0a0a0f] text-white min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
