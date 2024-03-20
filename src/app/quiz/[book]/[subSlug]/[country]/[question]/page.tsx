'use client'
import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Mcq } from '@/src/types/quiz/page'
import party from 'party-js'
import { FaCheck } from 'react-icons/fa6'
import { FaTimes } from 'react-icons/fa'
import Container from '@/src/components/elements/container/page'
import QuizQuestionForm from '@/src/components/quiz/question/form/page'
import Header from '@/src/components/layout/header/page'
import Head from 'next/head'

export default function Page() {
  const params = useParams<{
    slug: string
    subSlug: string
    country: string
    question: string
  }>()

  // show click and result
  const [selectedOption, setSelectedOption] = useState(null)

  const handleOptionChange = (option: any) => {
    setSelectedOption(option)
  }

  const [mcqs, setMcqs] = useState<Mcq>()
  // console.log("mcqs:", mcqs);
  // console.log("check param:", params.book);
  // console.log("check param:", params.subSlug);
  // console.log("check param:", params.country);

  useEffect(() => {
    const fetchMcqs = async () => {
      try {
        let baseUrl

        if (process.env.NODE_ENV === 'development') {
          baseUrl = 'http://localhost:8000'
        } else {
          baseUrl = 'https://education-website-backend.vercel.app'
        }

        const apiUrl = `${baseUrl}/api/get/pakstudy/${params.question}`

        const response = await fetch(apiUrl)
        // console.log("response:", response);

        if (response.ok) {
          const data = await response.json()
          // console.log("data:", data);

          setMcqs(data)
        } else {
          console.error('Failed to fetch data:', response.statusText)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchMcqs()
  }, [params.question])

  const herotext: string | undefined = mcqs?.question

  const partyFun = (e: any) => {
    party.confetti(e.target)
  }

  const resultText = selectedOption ? (
    selectedOption === mcqs?.correctoption ? (
      <div className="flex gap-5 items-center justify-between">
        <span className="whitespace-nowrap mb-2 inline-block text-sm bg-green-50 hover:bg-green-100 text-green-900 border border-green-100 py-1 px-3 rounded-md transition-all">
          <FaCheck className="mx-auto" /> Correct
        </span>
        <button
          onClick={(e) => partyFun(e)}
          className="flex items-center justify-center gap-2 whitespace-nowrap rounded bg-green-50 text-green-900 px-6 py-3 text-sm font-medium tracking-wide border-green-100 transition duration-300 hover:bg-green-100 focus:bg-green-100 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-green-100 disabled:bg-green-100 disabled:shadow-none"
        >
          Click me! For Celebrate 🎉
        </button>
      </div>
    ) : (
      <span className="whitespace-nowrap mb-2 inline-block text-sm bg-red-50 hover:bg-green-100 text-red-900 border border-red-100 py-1 px-3 rounded-md transition-all">
        <FaTimes className="mx-auto" /> False
      </span>
    )
  ) : null

  return (
    <div>
      <Head>
        <title>hjhj</title>
      </Head>
      <Header title={herotext || ''} />

      <Container>
        <div className="grid md:grid-cols-9 gap-2">
          <div className="col-span-6">
            <section className="quiz">
              <h2>
                <span>{mcqs?.id} - </span>

                {mcqs?.question}
              </h2>
              <div className="option">
                <ul>
                  <li onClick={() => handleOptionChange(mcqs?.option1)}>
                    {mcqs?.option1}
                  </li>
                  <li onClick={() => handleOptionChange(mcqs?.option2)}>
                    {mcqs?.option2}
                  </li>
                  <li onClick={() => handleOptionChange(mcqs?.option3)}>
                    {mcqs?.option3}
                  </li>
                  <li onClick={() => handleOptionChange(mcqs?.option4)}>
                    {mcqs?.option4}
                  </li>
                </ul>

                <p>{resultText}</p>
              </div>
              {/* <span>Description:</span>
              <br />
              <p>{mcqs?.description} </p> */}
              {/* <div className="tag">
                <ul>
                  {mcqs?.tags.map((value, index) => (
                    <>
                      <li key={index}>{value}</li>
                    </>
                  ))}
                </ul>
              </div> */}
            </section>
            <QuizQuestionForm url={params.question} />
          </div>
          <div className="col-span-3"></div>
        </div>
      </Container>
    </div>
  )
}
