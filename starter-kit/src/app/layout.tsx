import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Connect 2.0 Assessment',
  description: 'Coding assessment for Connect 2.0 platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
