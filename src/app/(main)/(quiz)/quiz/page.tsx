import React from 'react'
import type { Metadata } from 'next'
import Container from '@/src/components/elements/container'
import SubHeader from '@/src/components/layout/header/subheader/page'
import { Iprops } from '@/src/app/(main)/(quiz)/type'
import Card2 from '@/src/components/card2/page'
import Form from '@/src/components/elements/form/page'
import { getBooks } from './fetchdata'

const data = {
  title: 'Quiz | Grow Learn Hub',
  description:
    'Main purpose of growlearnhub is to provide you quiz of all book topic wise and subtopic and you esailt select topic and read it.',
  canonical: '/quiz',
  index: true,
  follow: true,
  image: '/opengraph-image.jpg',
  url: 'https://growlearnhub.com/quiz',
  keywords: ['growlearnhub quiz', 'quiz growlearnhub'],
}

export default async function Page() {
  const books = await getBooks()
  return (
    <main>
      <SubHeader title="Quiz Book" />

      <section>
        <Container>
          <div className="grid md:grid-cols-9 md:gap-4">
            <div className="col-span-7">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                suscipit reprehenderit, voluptas blanditiis odio velit, id in
                architecto fugiat voluptates corporis fuga tempora? Ipsa
                corrupti, facilis officiis voluptatibus earum enim.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                suscipit reprehenderit, voluptas blanditiis odio velit, id in
                architecto fugiat voluptates corporis fuga tempora? Ipsa
                corrupti, facilis officiis voluptatibus earum enim.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                suscipit reprehenderit, voluptas blanditiis odio velit, id in
                architecto fugiat voluptates corporis fuga tempora? Ipsa
                corrupti, facilis officiis voluptatibus earum enim.
              </p>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-5 mb-16">
                {books.user.map((data: Iprops) => {
                  return (
                    <Card2
                      key={data._id}
                      id={data._id}
                      title={data.title}
                      link={`${process.env.NEXT_URL}/quiz/${data.slug}`}
                    />
                  )
                })}
              </div>
              <Form url={data.url} />
            </div>
            <div className="col-span-2"></div>
          </div>
        </Container>
      </section>
    </main>
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
