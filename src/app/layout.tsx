import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Random Bites',
  description: 'Generated by Next',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className='flex bg-red-400 h-24 justify-between items-center px-10 text-black font-semibold'>
          <div className='left-side'>
            <Link href="/">
              <Image
                src="/RandomBites.svg"
                alt='Random Bites Logo'
                width={80}
                height={80}
              >
              </Image>
            </Link>
          </div>
          <div className='right-side'>
            <Link href='/home' className='text-2xl'>Home</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
