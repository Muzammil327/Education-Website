import React from 'react'
import type { Metadata } from 'next'
import SubHeader from '@/src/components/layout/header/subheader/page'
import Container from '@/src/components/elements/container'
import BookPageLayout from '@/src/components/elements/BookPageLayout'
import dynamic from 'next/dynamic'
const TopProductSlider = dynamic(
  () => import('@/src/components/elements/bookSlider')
)

interface Iprops {
  id: number
  title: String
  link: string
}

interface Iprops2 {
  id: number
  title: string
  description: string
  href: string
  image: string
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
              para="Biology is a field of science that studies life and living organisms. It covers a broad range of topics varying from the structure of cells to ecosystems. The main objective of biology is to understand how living organisms function, evolve, and interact with their surroundings. Important areas of focus include genetics, ecology, and evolutionary biology. These fields provide understandings into the mechanisms of inheritance, the interdependence of species, and the processes of adaptation over time. Professions such as physiology and microbiology explore the workings of living systems at various levels, from the molecular level to complex organisms. From here you can download the 9th class Biology Book in PDF for both English and Urdu medium."
              para2="Analyze our website to discover a wide range of biology books, specifically designed for classes 10, 11, and 12 of all boards. You can also obtain a biology class 9 book chapter-wise, which covers a variety of topics.We are excited to announce that an other 9th-grade book is now available on our website! This excellent resource can help you achieve academic success, so make sure to download it today!"
              head="Class 9th Biology Book Punjab Board Download PDF"
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
        <TopProductSlider slider={Slider} />
      </Container>
    </>
  )
}

const Slider: Iprops2[] = [
  {
    id: 0,
    title: 'Class 9 Punjab Board Physics Books English Medium',
    href: '/class/9th/books/punjab/physics',
    description:
      'You can download the Class 9 Punjab Board Physics book in PDF format, chapter-wise, and for free. Download it in PDF format, urdu and english medium, Enjoy learning!',
    image: '/book/books-of-all-classes-and-professional-course.webp',
  },
  {
    id: 1,
    title: 'Class 9 Punjab Board Chemistry Books English Medium',
    href: '/class/9th/books/punjab/chemistry',
    description:
      'You can download the Class 9 Punjab Board Chemistry book in PDF format, chapter-wise, and for free. Download it in PDF format, urdu and english medium, Enjoy learning!',
    image: '/book/books-of-all-classes-and-professional-course.webp',
  },
  {
    id: 2,
    title: 'Class 9 Punjab Board Math Books English Medium',
    href: '/class/9th/books/punjab/biology',
    description:
      'You can download the Class 9 Punjab Board biology book in PDF format, chapter-wise, and for free. Download it in PDF format, urdu and english medium, Enjoy learning!',
    image: '/book/books-of-all-classes-and-professional-course.webp',
  },
  {
    id: 3,
    title: 'Class 10 Punjab Board Biology Books English Medium',
    href: '/class/9th/books/punjab/biology',
    description:
      'You can download the Class 9 Punjab Board biology book in PDF format, chapter-wise, and for free. Download it in PDF format, urdu and english medium, Enjoy learning!',
    image: '/book/books-of-all-classes-and-professional-course.webp',
  },
  {
    id: 4,
    title: 'Class 11 Punjab Board Biology Books English Medium',
    href: '/class/9th/books/punjab/biology',
    description:
      'You can download the Class 9 Punjab Board biology book in PDF format, chapter-wise, and for free. Download it in PDF format, urdu and english medium, Enjoy learning!',
    image: '/book/books-of-all-classes-and-professional-course.webp',
  },
  {
    id: 5,
    title: 'Class 12 Punjab Board Biology Books English Medium',
    href: '/class/9th/books/punjab/biology',
    description:
      'You can download the Class 9 Punjab Board biology book in PDF format, chapter-wise, and for free. Download it in PDF format, urdu and english medium, Enjoy learning!',
    image: '/book/books-of-all-classes-and-professional-course.webp',
  },
]

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
