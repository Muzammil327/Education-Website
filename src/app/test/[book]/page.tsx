'use client'
import { useState, useEffect, Key } from 'react'
import slugify from 'slugify'
import Link from 'next/link'
import { Mcq } from '@/src/types/quiz/page'
import Container from '@/src/components/elements/container/page'

type props = {
  params: {
    book: string
  }
}
export default function Page({ params }: props) {
  const [uniqueBooks, setUniqueBooks] = useState([])
  // console.log("uniqueBooks:", uniqueBooks);
  // console.log("check param:", params.book);

  useEffect(() => {
    const fetchMcqs = async () => {
      try {
        let baseUrl

        if (process.env.NODE_ENV === 'development') {
          baseUrl = 'http://localhost:8000'
        } else {
          baseUrl = 'https://education-website-backend.vercel.app'
        }

        const apiUrl = `${baseUrl}/api/get/mcqs/${params.book}`

        const response = await fetch(apiUrl)
        console.log(response)
        const data = await response.json()
        // console.log("response:", response);
        console.log('data:', data)

        // Convert the object into an array
        //   const mcqsArray = Object.values(data);

        setUniqueBooks(data)
        // console.log("mcqsArray:", mcqsArray);
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchMcqs()
  }, [params.book])
  return (
    <>
      {uniqueBooks.length === 0 ? (
        <p>Loading...</p>
      ) : (
        uniqueBooks.map((data: any) => (
          <Link
            key={data._id}
            href={`/test/${slugify(data.title, {
              lower: true,
            })}`}
            className=" text-white bg-red-400 z-40 px-4 my-20 pt-9"
          >
            {data.title}
          </Link>
        ))
      )}
    </>
  )
}
