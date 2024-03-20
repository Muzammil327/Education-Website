'use client'
import { useParams } from 'next/navigation'
import Header from '@/src/components/layout/header/page'
import QuizHeading2 from '@/src/components/quiz/heading2/page'

export default function Page() {
  const params = useParams<{
    book: string
    subSlug: string
  }>()

  // convert hero text to capitalize and remoce slash
  const capitalizeWords = (text: string) => {
    return text
      .replace(/(^|\s)\S/g, (match) => match.toUpperCase())
      .replace(/-/g, ' ')
  }

  const capitalizedText = capitalizeWords(params.subSlug)
  const capitalizedTextBook = capitalizeWords(params.book)
  const herotext = capitalizedTextBook + '  ' + capitalizedText + ' Quiz '

  return (
    <>
      <Header title={herotext} />

      <QuizHeading2 book={params.book} subSlug={params.subSlug} />
    </>
  )
}
