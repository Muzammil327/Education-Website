import type { Metadata } from 'next'
import SubHeader from '@/src/components/layout/header/subheader/page'
import Container from '@/src/components/elements/container'
import Card from '@/src/components/card/page'
import { CardDataType2 } from '@/src/types/card/page'
import { Class9BookCardData } from './data'
import Form from '@/src/components/elements/form/page'

const data = {
  title: 'Class 9 Physics Quiz | Codebloglab',
  description:
    'Access important resources for Class 9 in Pakistan, including date sheets, past papers, results, and study tools, all in one place!',
  canonical: '/class/9th/book',
  index: true,
  follow: true,
  image: '/opengraph-image.jpg',
  url: 'https://www.codebloglab.website/class/9th/book',
  keywords: [
    'Codebloglab Class 9 Books',
    'Class 9 Books Codebloglab',
    'Class 9 Books',
    'Class 9th Books',
    '9 Class Books',
    '9th Class Books',
  ],
}

export default function Page() {
  return (
    <>
      <SubHeader title="Class 9th Physics Quiz" />
      <div className="grid md:grid-cols-10">
        <div className="col-span-8">
          <Container>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              dolores sed architecto quos ipsum voluptate facere laborum esse
              repellat vitae quae, iste eos tempora sint recusandae aliquam.
              Perspiciatis, provident molestias.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              dolores sed architecto quos ipsum voluptate facere laborum esse
              repellat vitae quae, iste eos tempora sint recusandae aliquam.
              Perspiciatis, provident molestias.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              dolores sed architecto quos ipsum voluptate facere laborum esse
              repellat vitae quae, iste eos tempora sint recusandae aliquam.
              Perspiciatis, provident molestias.
            </p>
            <div className="grid grid-col-1 md:grid-cols-2 py-8 md:gap-6">
              {Class9BookCardData.map((data: CardDataType2) => (
                <Card key={data.id} title={data.title} href={data.href} />
              ))}
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              dolores sed architecto quos ipsum voluptate facere laborum esse
              repellat vitae quae, iste eos tempora sint recusandae aliquam.
              Perspiciatis, provident molestias.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              dolores sed architecto quos ipsum voluptate facere laborum esse
              repellat vitae quae, iste eos tempora sint recusandae aliquam.
              Perspiciatis, provident molestias.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              dolores sed architecto quos ipsum voluptate facere laborum esse
              repellat vitae quae, iste eos tempora sint recusandae aliquam.
              Perspiciatis, provident molestias.
            </p>
            <Form url={data.url} />
          </Container>
        </div>
        <div className="col-span-2"></div>
      </div>
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
