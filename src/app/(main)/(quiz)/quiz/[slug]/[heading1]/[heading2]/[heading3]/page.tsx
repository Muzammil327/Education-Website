import React from 'react'
import Header from '@/src/components/layout/header/page'
import type { Metadata } from 'next'
import { getHeading3 } from './fetchdata'
import Container from '@/src/components/elements/container'
import { Iprops } from '../../../../../type'
import Card2 from '@/src/components/card2/page'
import Form from '@/src/components/elements/form/page'
import ClientPage from './clientPage'

type props = {
  params: {
    slug: string
    heading1: string
    heading2: string
    heading3: string
  }
}

const capitalizeWords = (text: string) => {
  return text
    .replace(/(^|\s)\S/g, (match) => match.toUpperCase())
    .replace(/-/g, ' ')
}
export default async function Page({ params }: props) {
  const heading1 = await getHeading3()

  const capitalizedslug = capitalizeWords(params.slug)
  const capitalizedheading1 = capitalizeWords(params.heading1)
  const capitalizedheading2 = capitalizeWords(params.heading2)
  const capitalizedheading3 = capitalizeWords(params.heading3)

  const herotext =
    capitalizedheading1 + ' ' + capitalizedheading3 + ' ' + 'Quiz'
  // convert hero text to capitalize and remoce slash
  const filteredData = heading1.user.filter(
    (item: any) =>
      item.bookName.trim().toLowerCase() === capitalizedslug.toLowerCase() &&
      item.heading1.trim().toLowerCase() ===
        capitalizedheading1.toLowerCase() &&
      item.heading2.trim().toLowerCase() === capitalizedheading2.toLowerCase()
  )

  return (
    <>
      <Header title={herotext} />
      <section>
        <Container>
          <div className="grid md:grid-cols-9 md:gap-4">
            <div className="col-span-7">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-5 mb-16">
                <ClientPage
                  bookname={params.slug}
                  heading1={params.heading1}
                  heading2={params.heading2}
                  heading3={params.heading3}
                />
              </div>
              <Form
                url={`${process.env.NEXT_URL}/quiz/${params.slug}/${params.heading1}/${params.heading2}/${params.heading3}`}
              />
            </div>
            <div className="col-span-2"></div>
          </div>
        </Container>
      </section>
    </>
  )
}

export async function generateMetadata({ params }: props) {
  const capitalizedheading1 = capitalizeWords(params.heading1)
  const capitalizedheading3 = capitalizeWords(params.heading3)

  const herotext =
    capitalizedheading1 + ' ' + capitalizedheading3 + ' ' + 'Quiz'
  return {
    title: herotext,
    // description: data.description,
    // keywords: data.keyword,
    alternates: {
      canonical: `quiz/${params.slug}/${params.heading1}/${params.heading2}/${params.heading3}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      title: herotext,
      // description: data.description,
      url: `quiz/${params.slug}/${params.heading1}/${params.heading2}/${params.heading3}`,

      images: [
        {
          // url: post?.data.image,
          // alt: post?.data.para,
        },
      ],
    },
    twitter: {
      title: herotext,
      // description: data.description,
      images: {
        // url: post?.data.image,
        // alt: post?.data.para,
      },
    },
  }
}
