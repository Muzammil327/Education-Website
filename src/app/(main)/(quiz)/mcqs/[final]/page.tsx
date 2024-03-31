import React from 'react'
import Header from '@/src/components/layout/header/page'
import ClientSlugPage from './ClientPage'
import type { Metadata } from 'next'
import Container from '@/src/components/elements/container'
import Form from '@/src/components/elements/form/page'

type props = {
  params: {
    final: string
  }
}
const capitalizeWords = (text: string) => {
  return text
    .replace(/(^|\s)\S/g, (match) => match.toUpperCase())
    .replace(/-/g, ' ')
}

export default async function Page({ params }: props) {
  const capitalizedText = capitalizeWords(params.final)
  const herotext = capitalizedText
  // convert hero text to capitalize and remoce slash

  return (
    <>
      <Header title={herotext} />
      <div className="grid md:grid-cols-10">
        <div className="col-span-8">
          <Container>
            <ClientSlugPage slug={params.final} />

            <Form url={`${process.env.NEXT_URL}/mcqs/${params.final}`} />
          </Container>
        </div>
        <div className="col-span-2"></div>
      </div>
    </>
  )
}

export async function generateMetadata({ params }: props) {
  const capitalizedText = capitalizeWords(params.final)
  const herotext = capitalizedText
  return {
    title: herotext,
    // description: data.description,
    // keywords: data.keyword,
    alternates: {
      canonical: `mcqs/${params.final}`,
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
      url: `mcqs/${params.final}`,
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
