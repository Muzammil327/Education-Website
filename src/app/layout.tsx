import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@/src/styles/globals.css'
import '@/src/styles/main.scss'

import { ToastContainer } from 'react-toastify'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'growlearnhub',
  description:
    'Main purpose of Codebloglab is to empowering through education and technical skills. Dive into study and technical work for personal and professional growth.',
  keywords: ['Codebloglab'],
  openGraph: {
    title: 'growlearnhub',
    description: 'growlearnhub',
  },
  metadataBase: new URL('https://growlearnhub.com'),
  twitter: {
    title: 'growlearnhub',
    description: 'growlearnhub',
  },
}

const data = {
  applicationName: 'Next.js',
  authorName: 'Muhammad Muzammil Safdar',
  domain: 'growlearnhub.com',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="application-name" content={data.applicationName} />
        <meta name="author" content={data.authorName} />
        <link rel="author" href="https://growlearnhub.com/" />
        <meta name="generator" content={data.applicationName} />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta name="color-scheme" content="light" />
        <meta name="creator" content={data.domain} />
        <meta name="publisher" content={data.domain} />
        {/* og */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={data.domain} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        {/* icon */}
        <meta name="theme-color" content="#f73e3e" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        <link
          rel="apple-touch-icon"
          href="/favicon/apple-touch-icon.png"
          type="image/png"
        />

        <link
          rel="apple-touch-icon"
          href="/favicon/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="/favicon/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        {/* twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@growlearnhub" />
        <meta property="twitter:domain" content={data.domain} />
        {/* ahref  */}
        <meta
          name="ahrefs-site-verification"
          content="234939215ab82c4e0069a4dfb6f90dcda6f5777af678e3dffac7654efdddbf42"
        ></meta>
        {/* google search console  */}
        <meta
          name="google-site-verification"
          content="TLC1ScjuJKnpeLltQJOI6Xu0QwitVD-gOYWCfoQarwo"
        />
      </head>
      <body className={inter.className}>
        {children}
        <ToastContainer />
      </body>
    </html>
  )
}
