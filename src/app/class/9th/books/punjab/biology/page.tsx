import type { Metadata } from 'next'
import SubHeader from '@/src/components/layout/header/subheader/page'
import Container from '@/src/components/elements/container/page'
import Card from '@/src/components/card/page'

const data = {
  title: 'Class 9 Punjab Board Biology Books',
  description:
    'You can download the Class 9 Punjab Board biology book in PDF format, chapter-wise, and for free. Download it in PDF format, urdu and english medium, Enjoy learning!',
  canonical: '/class-9/book/punjab/biology',
  index: true,
  follow: true,
  image: '/opengraph-image.jpg',
  url: 'https://www.mindbenderquiz.com/class-9/book/punjab/biology',
  keywords: [
    'mindbender Class 9 Punjab Board Biology Books',
    'Class 9 Punjab Board Biology Books mindbender',
    'Mindbender Class 9 Punjab Board Biology Books',
    'Class 9 Punjab Board Biology Books Mindbender',
  ],
}

type ClassCardDataType = {
  id: number
  title: string
  description: string
  href: string
  image: string
}

const ClassCardData: ClassCardDataType[] = [
  {
    id: 1,
    title: 'Urdu Medium Books',
    href: '/class-9/book/punjab/biology/english',
    description:
      'Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.',
    image: '/book/books-of-all-classes-and-professional-course.webp',
  },
  {
    id: 2,
    title: 'English Medium Books',
    href: '/class-9/book/punjab/biology/urdu',
    description:
      'Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.',
    image: '/book/books-of-all-classes-and-professional-course.webp',
  },
]

export default function page() {
  return (
    <>
      <SubHeader title="Class 9 Punjab Board Biology Books" />
      <Container>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 py-12 mb-12 md:gap-6">
          {ClassCardData.map((data: ClassCardDataType) => (
            <Card
              key={data.id}
              title={data.title}
              description={data.description}
              href={data.href}
              image={data.image}
            />
          ))}
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
