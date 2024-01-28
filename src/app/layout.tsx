import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Escola Francis Drake',
  description: 'Ensinando nossos alunos a se aventurar no conhecimento.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
