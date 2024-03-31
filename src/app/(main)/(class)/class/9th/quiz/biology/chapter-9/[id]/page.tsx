'use client'
// import type { Metadata } from 'next'
import SubHeader from '@/src/components/layout/header/subheader/page'
import Container from '@/src/components/elements/container'
import Form from '@/src/components/elements/form/page'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'next/navigation'

interface Mcq {
  _id: string
  title: string
  description: string
  keyword: string[]
  options: string[]
  correctOption: string
}

export default function Page() {
  const { id } = useParams()
  const setId = parseInt(id as string) // Parse setId as a number
  const limit = 10
  const startIdx = (setId - 1) * limit // Calculate the starting index for MCQs
  const endIdx = startIdx + limit // Calculate the ending index for MCQs

  const [fetchData, setFetchData] = useState<Mcq[]>([])

  const filteredMcqs = fetchData.filter(
    (data) =>
      data.keyword.includes('9th') &&
      data.keyword.includes('biology') &&
      data.keyword.includes('ch9')
  )

  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get(`/api/mcqs`)

      setFetchData(response.data.user)
    }
    fetchdata()
  }, [])
  return (
    <>
      <SubHeader title="Class 9 Biology Chapter 1 Quiz Set 1" />
      <div className="grid md:grid-cols-10">
        <div className="col-span-8">
          <Container>
            {filteredMcqs.slice(startIdx, endIdx).map((data: any) => {
              return (
                <>
                  <div className="quiz" key={data._id}>
                    <div className="question">
                      <span>{data.title}</span>
                    </div>
                    <div className="option">
                      <ul>
                        {data.options.map((tag: string, index: number) => (
                          <li key={index}>
                            Option {index + 1}: {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <br /> <hr />
                </>
              )
            })}

            {/* <Form url={data.url} /> */}
          </Container>
        </div>
        <div className="col-span-2"></div>
      </div>
    </>
  )
}
