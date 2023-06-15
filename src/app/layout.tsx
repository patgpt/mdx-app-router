import { MDXProvider } from '@mdx-js/react'
import './globals.css'
import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata = {
  title: 'Channel 42',
  description: 'Website Design and Development |  Vancouver, BC',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <MDXProvider components={{
        // Allows customizing built-in components, e.g. to add styling. DEMO:
        // 
        h1: ({ children }) => <h1 className='font-thin text-blue-600' >{children}</h1>,
      }}>
        <body className={quicksand.className}>{children}</body>
      </MDXProvider>
    </html>
  )
}
