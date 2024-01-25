import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

import './globals.css'
import Navbar from '@/components/NavigationBar/Navbar'
import { SessionProvider, useSession } from 'next-auth/react'
import { Session } from 'next-auth'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Sean Koh Personal Website',
  description: 'Explore the projects I have worked on and my experiences in the journey of software development.',
}

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode
  session: Session
}) {
  return (
      <html lang="en" className="h-full">
        <body className={`${inter.className} flex flex-col h-full overflow-y-auto`}>
          <SessionProvider session={session}>
            <main className="w-full">
              <Navbar />
              {children}
            </main>
            <Footer />
          </SessionProvider>
        </body>
      </html>

  )
}

