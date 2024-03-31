'use client'
import Container from '@/src/components/elements/container'
import Form from '@/src/components/elements/form/page'
import React, { useEffect, useState, useCallback } from 'react'
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

interface Iprops {
  bookname: string
  heading1: string
  heading2: string
  heading3: string
}

export default function ClientPage({
  bookname,
  heading1,
  heading2,
  heading3,
}: Iprops) {
  const [mcqs, setMcqs] = useState<Mcq[]>([])
  const [sets, setSets] = useState<Mcq[][]>([])

  useEffect(() => {
    const organizeIntoSets = (mcqs: Mcq[]) => {
      const mcqsPerSet = 10 // Specify the number of MCQs per set
      const totalSets = Math.ceil(mcqs.length / mcqsPerSet)

      const newSets: Mcq[][] = []
      for (let i = 0; i < totalSets; i++) {
        const startIdx = i * mcqsPerSet
        const endIdx = startIdx + mcqsPerSet

        const filteredMcqs = mcqs.filter(
          (data) =>
            data.keyword.includes(`${bookname}`) &&
            data.keyword.includes(`${heading1}`) &&
            data.keyword.includes(`${heading2}`) &&
            data.keyword.includes(`${heading3}`)
        )

        const mcqsInSet = filteredMcqs.slice(startIdx, endIdx)
        newSets.push(mcqsInSet)
      }

      setSets(newSets)
    }

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
  }, [bookname, heading1, heading2, heading3])

  return (
    <>
      {sets.map((set, index) => (
        <Card
          key={index}
          title={`Set ${index + 1}`}
          href={`/quiz/${bookname}/${heading1}/${heading2}/${heading3}/${index + 1}`}
        />
      ))}
    </>
  )
}
