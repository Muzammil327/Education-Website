import type { Metadata } from 'next'
import SubHeader from '@/src/components/layout/header/subheader/page'
import Container from '@/src/components/elements/container'
import Card from '@/src/components/card/page'
import { CardDataType } from '@/src/types/card/page'
import { Class9BookPunjabCardData } from '@/src/app/(main)/(class)/class/9th/books/punjab/data'

const data = {
  title: 'Class 9 Sindh Board Books',
  description:
    'You can download the Sindh Board Class 9 book in PDF format of physics, english and math. you can also view the book online.',
  canonical: '/class/9th/books/sindh',
  index: true,
  follow: true,
  image: '/opengraph-image.jpg',
  url: 'https://www.codebloglab.website/class/9th/books/sindh',
  keywords: [
    'codebloglab Class 9 Sindh Board Books',
    'Class 9 Sindh Board Books codebloglab',
    'codebloglab Class 9 Sindh Board Books',
    'Class 9 Sindh Board Books codebloglab',
    'Class 9 sindh Board Books',
    'Class 9 sindh Books',
    '9th Class sindh Books',
    'Class 9 book of sindh',
  ],
}

export default function page() {
  return (
    <>
      <SubHeader title="Class 9 Sindh Board Books" />
      <Container>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 py-12 mb-12 md:gap-6">
          {Class9BookPunjabCardData.map((data: CardDataType) => (
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
