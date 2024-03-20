'use client'
import { notFound, useParams } from 'next/navigation'
import Header from '@/src/components/layout/header/page'
import QuizCountry from '@/src/components/quiz/country/page'

export default function Page() {
  const params = useParams<{
    book: string
    subSlug: string
    country: string
  }>()

  // convert hero text to capitalize and remoce slash
  const capitalizeWords = (text: string) => {
    return text
      .replace(/(^|\s)\S/g, (match) => match.toUpperCase())
      .replace(/-/g, ' ')
  }

  const capitalizedText = capitalizeWords(params.subSlug)
  const capitalizedTextBook = capitalizeWords(params.country)
  const herotext = capitalizedTextBook + '  ' + capitalizedText + ' Quiz '

  if (params.subSlug !== params.subSlug) {
    notFound()
  }

  return (
    <>
      <Header title={herotext} />
      <QuizCountry
        book={params.book}
        subSlug={params.subSlug}
        country={params.country}
      />
    </>
  )
}
