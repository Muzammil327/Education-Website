'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import slugify from 'slugify'

interface Mcq {
  _id: string
  title: string
  description: string
  keyword: string[]
  options: string[]
  correctOption: string
}

interface Iprops {
  bookname: string
  heading1: string
  heading2: string
  heading3: string
  slugfull: string
  setId: number
}
export default function ClientPage({
  bookname,
  heading1,
  heading2,
  heading3,
  setId,
  slugfull,
}: Iprops) {
  const limit = 10
  const startIdx = (setId - 1) * limit // Calculate the starting index for MCQs
  const endIdx = startIdx + limit // Calculate the ending index for MCQs

  const [fetchData, setFetchData] = useState<Mcq[]>([])
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string | null
  }>({})

  const filteredData = fetchData.filter(
    (item: any) =>
      item.bookName.trim().toLowerCase() === bookname.toLowerCase() &&
      item.heading1.trim().toLowerCase() === heading1.toLowerCase() &&
      item.heading2.trim().toLowerCase() === heading2.toLowerCase() &&
      item.heading3.trim().toLowerCase() === heading3.toLowerCase()
  )
  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get(`/api/mcqs`)

      setFetchData(response.data.user)
    }
    fetchdata()
  }, [])

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
      {filteredData.slice(startIdx, endIdx).map((data: Mcq) => {
        const slug = slugify(data.title, {
          replacement: '-', // replace spaces with replacement character, defaults to `-`
          remove: undefined, // remove characters that match regex, defaults to `undefined`
          lower: true, // convert to lower case, defaults to `false`
          strict: false, // strip special characters except replacement, defaults to `false`
          locale: 'vi', // language code of the locale to use
          trim: true, // trim leading and trailing replacement chars, defaults to `true`
        })
        return (
          <div className="quiz" key={data._id}>
            <div className="question">
              <Link href={`/mcqs/${slug}`}>{data.title}.</Link>
            </div>
            <div className="option">
              <ul>
                {data.options.map((option, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() =>
                        handleOptionClick(option, data.correctOption, data._id)
                      }
                      className="cursor-pointer md:text-base text-sm"
                    >
                      <button className="border-none outline-none">
                        Option {index + 1}: {option}
                      </button>
                    </li>
                  )
                })}
              </ul>
              <div className="option">
                {selectedOptions[data._id] ? (
                  <div className="flex gap-5 items-center justify-between">
                    <button className="flex items-center justify-center gap-2 whitespace-nowrap rounded bg-green-50 text-green-900 px-6 py-3 text-sm font-medium tracking-wide border-green-100 transition duration-300 hover:bg-green-100 focus:bg-green-100 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-green-100 disabled:bg-green-100 disabled:shadow-none">
                      {selectedOptions[data._id] === data.correctOption
                        ? 'Correct'
                        : 'False'}
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
