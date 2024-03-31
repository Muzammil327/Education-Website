import type { Metadata } from 'next'
import SubHeader from '@/src/components/layout/header/subheader/page'
import Container from '@/src/components/elements/container'
import Card from '@/src/components/card/page'
import { CardDataType } from '@/src/types/card/page'
import { ClassCardData } from './data'
import Form from '@/src/components/elements/form/page'

const data = {
  title: 'Classes | Codebloglab',
  description:
    'Explore resources for all classes students in Pakistan, from class 9 to 12 and further more in further.',
  canonical: '/class',
  index: true,
  follow: true,
  image: '/opengraph-image.jpg',
  url: 'https://codebloglab.website/class',
  keywords: [
    'Codebloglab',
    'class 9 Codebloglab',
    'class 10 Codebloglab',
    'class 11 Codebloglab',
    'class 12 Codebloglab',
    'class books',
    'class notes',
    'class past paper',
  ],
}

export default function Page() {
  return (
    <>
      <SubHeader title="Classes" />
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
              {ClassCardData.map((data: CardDataType) => (
                <Card
                  key={data.id}
                  title={data.title}
                  // description={data.description}
                  href={data.href}
                  image={data.image}
                />
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
