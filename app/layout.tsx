import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GMT - assignment',
  description: 'Created by Rajesh for the Grow My Therapy',
  generator: 'Rajesh',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
