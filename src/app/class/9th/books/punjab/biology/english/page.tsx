import React from 'react'
import type { Metadata } from 'next'
import SubHeader from '@/src/components/layout/header/subheader/page'
import Container from '@/src/components/elements/container/page'
import BookPageLayout from '@/src/components/elements/BookPageLayout'
import TopProductSlider from '@/src/components/elements/bookSlider'

interface Iprops {
  id: number
  title: String
  link: string
}

const data = {
  title: 'Class 9 Punjab Board Biology Books English Medium',
  description:
    'You can download the Class 9 Punjab Board biology book english medium in PDF format, also include the chapter-wise, and for free. Enjoy learning!',
  canonical: '/class/9th/books/punjab/biology/english',
  index: true,
  follow: true,
  image: '/opengraph-image.jpg',
  url: 'https://www.codebloglab.website/class/9th/books/punjab/biology/english',
  keywords: [
    'codebloglab Class 9 Punjab Board Biology Books English Medium',
    'Class 9 Punjab Board Biology Books English Medium codebloglab',
    'codebloglab Class 9 Punjab Board Biology Books English Medium',
    'Class 9 Punjab Board Biology Books English Medium codebloglab',
  ],
}
export default function page() {
  return (
    <>
      <SubHeader title="Class 9 Punjab Board Biology Books English Medium " />
      <Container>
        <div className="grid md:grid-cols-7 mt-5">
          <div className="md:col-span-5">
            <BookPageLayout
              para="Biology is the study of life. It is one of the most interesting
              subjects, it has quite difficult concepts as they can be tricky to
              understand. It is imperative for the students to keep biology book
              with them to help them understand the different diagrams and the
              concepts easily. The schools have strict policy towards books and
              students are required to bring books with them. From here you can
              download the Biology 9th class Book in PDF for both English and
              Urdu medium."
              head="9th Class Biology PDF Book Punjab Board"
              tableData={tableData}
              tableC1="Chapters"
              tableC2="Download"
              url={data.url}
              fileName="class-9-punjab-board-biology-book-english-medium.pdf"
              fileUrl="https://drive.google.com/file/d/1F24QG0BJ0mLsu3PBgLEM7sBcqPovhYk0/preview"
              fileId="/book/9th/punjab/biology/english/class-9-punjab-board-biology-book-english-medium.pdf"
            />
          </div>
          <div className="md:col-span-2"></div>
        </div>
        <TopProductSlider />
      </Container>
    </>
  )
}

const tableData: Iprops[] = [
  { id: 1, title: '9th Class Biology Chapter 1', link: '/' },
  { id: 2, title: '9th Class Biology Chapter 2', link: '/' },
  { id: 3, title: '9th Class Biology Chapter 3', link: '/' },
  { id: 4, title: '9th Class Biology Chapter 4', link: '/' },
  { id: 5, title: '9th Class Biology Chapter 5', link: '/' },
  { id: 6, title: '9th Class Biology Chapter 6', link: '/' },
  { id: 7, title: '9th Class Biology Chapter 7', link: '/' },
  { id: 8, title: '9th Class Biology Chapter 8', link: '/' },
  { id: 9, title: '9th Class Biology Chapter 9', link: '/' },
]

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
