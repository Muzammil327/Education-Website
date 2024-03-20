import Header from '@/src/components/layout/header/page'
import QuizHeading1 from '@/src/components/quiz/heading1/page'
import { Metadata } from 'next'

type props = {
  params: {
    book: string
  }
}

export const generateMetadata = ({ params }: props): Metadata => {
  const capitalizeWords = (text: string) => {
    return text
      .replace(/(^|\s)\S/g, (match) => match.toUpperCase())
      .replace(/-/g, ' ')
  }

  const capitalizedText = capitalizeWords(params.book)
  const herotext = capitalizedText + '  ' + ' Quiz '

  return {
    title: herotext,
  }
}

export default function Page({ params }: props) {
  // convert hero text to capitalize and remoce slash
  const capitalizeWords = (text: string) => {
    return text
      .replace(/(^|\s)\S/g, (match) => match.toUpperCase())
      .replace(/-/g, ' ')
  }

  const capitalizedText = capitalizeWords(params.book)
  const herotext = capitalizedText + '  ' + ' Quiz '
  return (
    <>
      <Header title={herotext} />
      <QuizHeading1 params={params.book} />
    </>
  )
}
