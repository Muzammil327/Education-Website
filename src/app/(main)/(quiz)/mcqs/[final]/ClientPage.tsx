'use client'
import Container from '@/src/components/elements/container'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { getData } from './fetchdata'

interface IProps {
  slug: string
}
interface McqsData {
  _id: string
  title: string
  description: string
  keyword: string[]
  options: string[]
  correctOption: string
}

export default function ClientSlugPage({ slug }: IProps) {
  const [mcqs, setMcqs] = useState<McqsData | null>(null) // Initialize with null or an empty object
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/mcqs/${slug}`)
        setMcqs(response.data.user)
      } catch (error) {
        console.log('Error fetching MCQs:', error)
      }
    }
    fetchData()
  }, [slug])

  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string | null
  }>({})

  const handleOptionClick = (
    option: string,
    correctOption: string,
    questionId: string
  ) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [questionId]: option === correctOption ? option : 'False',
    }))
  }

  return (
    <>
      {mcqs && (
        <>
          <div className="quiz">
            <div className="question">
              <span>{mcqs.title}.</span>
            </div>
            <div className="option">
              <ul>
                {mcqs.options &&
                  mcqs.options.map((option: any, index: any) => {
                    return (
                      <li
                        key={index}
                        onClick={() =>
                          handleOptionClick(
                            option,
                            mcqs.correctOption,
                            mcqs._id
                          )
                        }
                        className="cursor-pointer"
                      >
                        <button className="border-none outline-none">
                          Option {index + 1}: {option}
                        </button>
                      </li>
                    )
                  })}
              </ul>
              <div className="option mb-4">
                {selectedOptions[mcqs._id] ? (
                  <div className="flex gap-5 items-center justify-between">
                    <button className="flex items-center justify-center gap-2 whitespace-nowrap rounded bg-green-50 text-green-900 px-6 py-3 text-sm font-medium tracking-wide border-green-100 transition duration-300 hover:bg-green-100 focus:bg-green-100 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-green-100 disabled:bg-green-100 disabled:shadow-none">
                      {selectedOptions[mcqs._id] === mcqs.correctOption
                        ? 'Correct'
                        : 'False'}
                    </button>
                  </div>
                ) : null}
              </div>
              <span className="!my-6">Description: </span>
              <p>{mcqs.description}</p>
            </div>
          </div>
        </>
      )}
    </>
  )
}
