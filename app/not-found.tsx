import Link from 'next/link'

export const metadata = {
  title: 'Page Not Found | Namish Yadav',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0f] text-white px-6 text-center">
      <p className="font-mono text-sm uppercase tracking-widest text-white/50 mb-4">404</p>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">This page went missing</h1>
      <p className="text-white/70 max-w-md mb-8">
        The page you are looking for does not exist or was moved. Let us get you back on track.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition-colors"
      >
        Back to home
      </Link>
    </main>
  )
}
