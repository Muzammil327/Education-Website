import React from 'react'
import Header from '@/src/components/layout/header/page'
import { getHeading2 } from './fetchdata'
import Container from '@/src/components/elements/container'
import { Iprops } from '../../../type'
import Card2 from '@/src/components/card2/page'
import Form from '@/src/components/elements/form/page'

type props = {
  params: {
    slug: string
    heading1: string
  }
}
const capitalizeWords = (text: string) => {
  return text
    .replace(/(^|\s)\S/g, (match) => match.toUpperCase())
    .replace(/-/g, ' ')
}
export default async function Page({ params }: props) {
  const heading1 = await getHeading2()

  const capitalizedslug = capitalizeWords(params.slug)
  const capitalizedheading1 = capitalizeWords(params.heading1)

  const herotext = capitalizedslug + ' ' + capitalizedheading1
  // convert hero text to capitalize and remoce slash

  const filteredData = heading1.user.filter(
    (item: any) =>
      item.bookName.trim().toLowerCase() === capitalizedslug.toLowerCase() &&
      item.heading1.trim().toLowerCase() === capitalizedheading1.toLowerCase()
  )
  return (
    <>
      <Header title={herotext} />
      <section>
        <Container>
          <div className="grid md:grid-cols-9 md:gap-4">
            <div className="col-span-7">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-5 mb-16">
                {filteredData.map((data: Iprops) => {
                  return (
                    <Card2
                      key={data._id}
                      id={data._id}
                      title={data.title}
                      link={`/quiz/${params.slug}/${params.heading1}/${data.slug}`}
                    />
                  )
                })}
              </div>
              <Form
                url={`${process.env.NEXT_URL}/quiz/${params.slug}/${params.heading1}`}
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
  const capitalizedslug = capitalizeWords(params.slug)
  const capitalizedheading1 = capitalizeWords(params.heading1)

  const herotext = capitalizedslug + ' ' + capitalizedheading1
  return {
    title: herotext,
    // description: data.description,
    // keywords: data.keyword,
    alternates: {
      canonical: `quiz/${params.slug}/${params.heading1}`,
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
      url: `quiz/${params.slug}/${params.heading1}`,
      images: [
        {
          // url: post?.data.image,
          alt: herotext,
        },
      ],
    },
    twitter: {
      title: herotext,
      // description: data.description,
      images: {
        // url: post?.data.image,
        alt: herotext,
      },
    },
  }
}
