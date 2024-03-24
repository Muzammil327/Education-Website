import React from 'react'
import type { Metadata } from 'next'
import SubHeader from '@/src/components/layout/header/subheader/page'

const data = {
  title: 'Class 9 Punjab Board Biology Books Chapter 1',
  description:
    'Download Punjab Board Class 9 Biology Chapter 1 in PDF format for free. It is available in both English and Urdu medium.',
  canonical: '/class-9/punjab/punjab-board/biology/chapter-1',
  index: true,
  follow: true,
  image: '/opengraph-image.jpg',
  url: 'https://www.mindbenderquiz.com/class-9/punjab-board/biology/chapter-1',
  keywords: [
    'mindbender Class 9 Punjab Board Biology Books Chapter 1',
    'Class 9 Punjab Board Biology Books Chapter 1 mindbender',
    'Mindbender Class 9 Punjab Board Biology Books Chapter 1',
    'Class 9 Punjab Board Biology Books Chapter 1 Mindbender',
  ],
}
export default function page() {
  return (
    <>
      <SubHeader title="Class 9 Punjab Board Biology Books English Medium Chapter 1" />
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
