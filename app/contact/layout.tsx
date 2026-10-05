import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Namish Yadav',
  description: 'Get in touch with Namish Yadav, a full stack developer. Send a message about projects, collaboration, or opportunities.',
}

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
