import React from 'react'
import type { Metadata } from 'next'
import SubHeader from '@/src/components/layout/header/subheader/page'
import Link from 'next/link'

const data = {
  title: 'Class 9 Punjab Board Physics Books',
  description:
    'You can get your hands on the Punjab Board Class 9 biology book for free! Download it in PDF format, chapter-wise, and even view it online. Enjoy learning!',
  canonical: '/class-9/punjab/punjab-board/physics',
  index: true,
  follow: true,
  image: '/opengraph-image.jpg',
  url: 'https://www.mindbenderquiz.com/class-9/punjab-board/physics',
  keywords: [
    'mindbender Class 9 Punjab Board Physics Books',
    'Class 9 Punjab Board Physics Books mindbender',
    'Mindbender Class 9 Punjab Board Physics Books',
    'Class 9 Punjab Board Physics Books Mindbender',
  ],
}
export default function page() {
  return (
    <>
      <SubHeader title="Class 9 Punjab Board Physics Books" />
    </>
  )
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: data.keywords,
  openGraph: {
    title: data.title,
    description: data.description,
    url: data.url,
    images: [
      {
        url: data.image,
        alt: data.title,
      },
    ],
  },
  alternates: {
    canonical: data.canonical,
  },
  robots: {
    index: data.index,
    follow: data.follow,
    googleBot: {
      index: data.index,
      follow: data.follow,
    },
  },
  twitter: {
    title: data.title,
    description: data.description,
    images: {
      url: data.image,
      alt: data.title,
    },
  },
}
