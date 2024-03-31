import React from 'react'
import CatgeoryView from '@/src/views/article/catgeory/page'
import type { Metadata } from 'next'

const data = {
  title: 'Blogs Catgeory | MindBender',
  description:
    'Main purpose of MindBender is to empowering through education and technical skills. Dive into study and technical work for personal and professional growth.',
  canonical: '/catgeory',
  index: true,
  follow: true,
  image: '/opengraph-image.jpg',
  url: 'https://www.mindbenderquiz.com/catgeory',
  keywords: [
    'mindbender catgeory',
    'catgeory mindbender',
    'Mindbender catgeory',
    'catgeory Mindbender',
  ],
}
export default function page() {
  return (
    <>
      <CatgeoryView />
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
