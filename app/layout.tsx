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
  metadataBase: new URL('https://portfolio-rho-lake-21.vercel.app'),
  title: 'Namish Yadav | Full Stack Developer',
  description: 'Portfolio of Namish Yadav - A passionate full stack developer building elegant, interactive software applications with Java, Python, JavaScript, and more.',
  keywords: ['Namish Yadav', 'Full Stack Developer', 'Java', 'Python', 'JavaScript', 'Portfolio', 'Web Developer'],
  authors: [{ name: 'Namish Yadav', url: 'https://github.com/p3xz' }],
  creator: 'Namish Yadav',
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://portfolio-rho-lake-21.vercel.app',
    title: 'Namish Yadav | Full Stack Developer',
    description: 'Portfolio of Namish Yadav - A passionate full stack developer building elegant, interactive software applications.',
    siteName: 'Namish Yadav Portfolio',
    images: [
      {
        url: '/preview.png',
        width: 1200,
        height: 630,
        alt: 'Namish Yadav portfolio preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Namish Yadav | Full Stack Developer',
    description: 'Portfolio of Namish Yadav - A passionate full stack developer building elegant, interactive software applications.',
    images: ['/preview.png'],
  },
  robots: 'index, follow',
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Namish Yadav',
  url: 'https://portfolio-rho-lake-21.vercel.app',
  jobTitle: 'Full Stack Developer',
  sameAs: [
    'https://github.com/p3xz',
    'https://linkedin.com/in/namish-yadav-639769408',
    'https://instagram.com/nam7sh',
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
