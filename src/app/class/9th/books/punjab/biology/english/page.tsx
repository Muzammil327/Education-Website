import React from 'react'
import type { Metadata } from 'next'
import SubHeader from '@/src/components/layout/header/subheader/page'
import EnglishComp from './EnglishComp'
import Form from '@/src/components/elements/form/page'
import Container from '@/src/components/elements/container/page'

const data = {
  title: 'Class 9 Punjab Board Biology Books English Medium',
  description:
    'You can download the Class 9 Punjab Board biology book english medium in PDF format, also include the chapter-wise, and for free. Enjoy learning!',
  canonical: '/class-9/punjab/punjab-board/biology/english',
  index: true,
  follow: true,
  image: '/opengraph-image.jpg',
  url: 'https://www.mindbenderquiz.com/class-9/punjab/biology/english',
  keywords: [
    'mindbender Class 9 Punjab Board Biology Books English Medium',
    'Class 9 Punjab Board Biology Books English Medium mindbender',
    'Mindbender Class 9 Punjab Board Biology Books English Medium',
    'Class 9 Punjab Board Biology Books English Medium Mindbender',
  ],
}
export default function page() {
  return (
    <>
      <SubHeader title="Class 9 Punjab Board Biology Books English Medium " />
      <Container>
        <div className="grid md:grid-cols-7 mt-5 mb-28">
          <div className="md:col-span-5">
            <EnglishComp />
            <Form url={data.url} />
          </div>

          <div className="md:col-span-2"></div>
        </div>
      </Container>
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
