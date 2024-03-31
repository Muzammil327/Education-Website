'use client'
import SubHeader from '@/src/components/layout/header/subheader/page'
import Container from '@/src/components/elements/container'
import Form from '@/src/components/elements/form/page'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '@/src/components/card/page'

interface Mcq {
  _id: string
  title: string
  description: string
  keyword: string[]
  options: string[]
  correctOption: string
}

export default function Page() {
  const [mcqs, setMcqs] = useState<Mcq[]>([])
  const [sets, setSets] = useState<Mcq[][]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/mcqs')
        setMcqs(response.data.user)
        organizeIntoSets(response.data.user) // Organize MCQs into sets
      } catch (error) {
        console.log('Error fetching MCQs:', error)
      }
    }
    fetchData()
  }, [])

  const organizeIntoSets = (mcqs: Mcq[]) => {
    const mcqsPerSet = 10 // Specify the number of MCQs per set
    const totalSets = Math.ceil(mcqs.length / mcqsPerSet)

    const newSets: Mcq[][] = []
    for (let i = 0; i < totalSets; i++) {
      const startIdx = i * mcqsPerSet
      const endIdx = startIdx + mcqsPerSet

      const filteredMcqs = mcqs.filter(
        (data) =>
          data.keyword.includes('9th') &&
          data.keyword.includes('biology') &&
          data.keyword.includes('ch3')
      )

      const mcqsInSet = filteredMcqs.slice(startIdx, endIdx)
      newSets.push(mcqsInSet)
    }

    setSets(newSets)
  }
  return (
    <>
      <SubHeader title="Class 9 Biology Chapter 1 Quiz" />
      <div className="grid md:grid-cols-10">
        <div className="col-span-8">
          <Container>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              dolores sed architecto quos ipsum voluptate facere laborum esse
              repellat vitae quae, iste eos tempora sint recusandae aliquam.
              Perspiciatis, provident molestias.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              dolores sed architecto quos ipsum voluptate facere laborum esse
              repellat vitae quae, iste eos tempora sint recusandae aliquam.
              Perspiciatis, provident molestias.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              dolores sed architecto quos ipsum voluptate facere laborum esse
              repellat vitae quae, iste eos tempora sint recusandae aliquam.
              Perspiciatis, provident molestias.
            </p>
            {sets.map((set, index) => (
              <div
                className="grid grid-col-1 md:grid-cols-2 py-8 md:gap-6"
                key={index}
              >
                <Card
                  title={`Set ${index + 1}`}
                  href={`/class/9th/quiz/biology/chapter-1/${index + 1}`}
                />
              </div>
            ))}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              dolores sed architecto quos ipsum voluptate facere laborum esse
              repellat vitae quae, iste eos tempora sint recusandae aliquam.
              Perspiciatis, provident molestias.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              dolores sed architecto quos ipsum voluptate facere laborum esse
              repellat vitae quae, iste eos tempora sint recusandae aliquam.
              Perspiciatis, provident molestias.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              dolores sed architecto quos ipsum voluptate facere laborum esse
              repellat vitae quae, iste eos tempora sint recusandae aliquam.
              Perspiciatis, provident molestias.
            </p>
            {/* <Form url={data.url} /> */}
          </Container>
        </div>
        <div className="col-span-2"></div>
      </div>
    </>
  )
}
