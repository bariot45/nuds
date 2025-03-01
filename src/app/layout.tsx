import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meu Projeto',
  description: 'Criado com Next.js',
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
