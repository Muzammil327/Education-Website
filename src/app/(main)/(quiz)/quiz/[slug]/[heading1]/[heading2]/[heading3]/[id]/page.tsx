import type { Metadata } from 'next'
import SubHeader from '@/src/components/layout/header/subheader/page'
import ClientPage from './clientPage'
import Form from '@/src/components/elements/form/page'
import Container from '@/src/components/elements/container'
import { getMcqs } from './fetchdata'

interface Iprops {
  params: {
    slug: string
    heading1: string
    heading2: string
    heading3: string
    id: string
  }
}

const data = {
  title: 'Pakistan Tarbela Dams Quiz Set',
  description:
    'Main purpose of MindBender is to empowering through education and technical skills. Dive into study and technical work for personal and professional growth.',
  canonical: '/quiz/general-knowledge/pakistan/dams/tarbela',
  index: true,
  follow: true,
  image: '/opengraph-image.jpg',
  url: 'https://growlearnhub.com/quiz/general-knowledge/pakistan/dams/tarbela',
  keywords: [
    'growlearnhub quiz general knowledge Pakistan tarbela dams',
    'quiz growlearnhub generalknowledge Pakistan tarbela dams',
    'quiz general knowledge Pakistan tarbela dams',
    'general knowledge quiz Pakistan tarbela dams',
    'quiz Pakistan tarbela dams',
    'dams quiz Pakistan tarbela',
  ],
}

const capitalizeWords = (text: string) => {
  return text
    .replace(/(^|\s)\S/g, (match) => match.toUpperCase())
    .replace(/-/g, ' ')
}
export default async function Page({ params }: Iprops) {
  const mcqs = await getMcqs()

  const id = params.id
  const setId = parseInt(id as string) // Parse setId as a number

  const capitalizedslug = capitalizeWords(params.slug)
  const capitalizedheading1 = capitalizeWords(params.heading1)
  const capitalizedheading2 = capitalizeWords(params.heading2)
  const capitalizedheading3 = capitalizeWords(params.heading3)

  const herotext =
    capitalizedheading1 + ' ' + capitalizedheading3 + ' ' + 'Quiz'

  return (
    <>
      <SubHeader title={`${herotext} Set ${setId}`} />
      <section>
        <Container>
          <div className="grid md:grid-cols-9 md:gap-4">
            <div className="col-span-7">
              <div className="my-5 mb-16">
                <ClientPage
                  bookname={capitalizedslug}
                  heading1={capitalizedheading1}
                  heading2={capitalizedheading2}
                  heading3={capitalizedheading3}
                  slugfull={`${params.slug}/${params.heading1}/${params.heading2}/${params.heading3}/${params.id}`}
                  setId={setId}
                />
                {mcqs.user.length > 10 &&
                  mcqs.user.length - parseInt(params.id) * 10 > 0 && (
                    <a
                      className="bg-indigo-500 px-6 py-2 text-white rounded-md"
                      href={`/quiz/${params.slug}/${params.heading1}/${params.heading2}/${params.heading3}/${parseInt(params.id) + 1}`}
                    >
                      Next
                    </a>
                  )}
              </div>
              <Form
                url={`${process.env.NEXT_URL}/quiz/${params.slug}/${params.heading1}/${params.heading2}/${params.heading3}/${setId}`}
              />
            </div>
            <div className="col-span-2"></div>
          </div>
        </Container>
      </section>
    </>
  )
}

export async function generateMetadata({ params }: Iprops) {
  const capitalizedheading1 = capitalizeWords(params.heading1)
  const capitalizedheading3 = capitalizeWords(params.heading3)

  const herotext =
    capitalizedheading1 + ' ' + capitalizedheading3 + ' ' + 'Quiz'

  const id = params.id

  return {
    title: `${herotext} Set ${id}`,
    description: data.description,
    keywords: data.keywords,
    alternates: {
      canonical: `quiz/${params.slug}/${params.heading1}/${params.heading2}/${params.heading3}/${id}`,
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
      title: `${herotext} Set ${id}`,
      description: data.description,
      url: `quiz/${params.slug}/${params.heading1}/${params.heading2}/${params.heading3}/${id}`,
      images: [
        {
          url: '/opengraph-image.jpg',
          alt: `${data.title} ${id}`,
        },
      ],
    },
    twitter: {
      title: `${herotext} Set ${id}`,
      description: data.description,
      images: {
        url: '/opengraph-image.jpg',
        alt: `${data.title} ${id}`,
      },
    },
  }
}
