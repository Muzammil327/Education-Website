'use client'
import React, { useState, useRef, useEffect } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'
import slugify from 'slugify'
import { keywords } from '@/src/app/(main)/(dashboard)/dashboard/keyword'

interface FormData {
  title: string
  description: string
  keyword: string[]
  options: string[]
  correctOption: string
  bookName: string
  heading1: string
  heading2: string
  heading3: string
}

export default function Page() {
  const router = useRouter()

  const [data, setData] = useState<FormData>({
    title: '',
    description: '',
    keyword: [],
    options: [],
    correctOption: '',
    bookName: '',
    heading1: '',
    heading2: '',
    heading3: '',
  })

  const handleTagsChange = (tags: string[]) => {
    setData({ ...data, options: tags }) // Update options field in data state
  }
  const [submitted, setSubmitted] = useState(false) // New state to track form submission

  // check box
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target
    const isChecked =
      event.target instanceof HTMLInputElement && event.target.checked

    // Update keyword state based on checkbox selection
    setData((prevData) => {
      let updatedKeywords: string[]

      if (isChecked) {
        // Add keyword to the list
        updatedKeywords = [...prevData.keyword, name]
      } else {
        // Remove keyword from the list
        updatedKeywords = prevData.keyword.filter((keyword) => keyword !== name)
      }

      // Return updated state
      return { ...prevData, keyword: updatedKeywords }
    })
  }

  // submit data
  const SubmitHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // Prevent form submission

    try {
      const response = await axios.post(`/api/mcqs`, {
        slug: slugify(data.title, {
          replacement: '-', // replace spaces with replacement character, defaults to `-`
          remove: undefined, // remove characters that match regex, defaults to `undefined`
          lower: true, // convert to lower case, defaults to `false`
          strict: false, // strip special characters except replacement, defaults to `false`
          locale: 'vi', // language code of the locale to use
          trim: true, // trim leading and trailing replacement chars, defaults to `true`
        }),
        title: data.title,
        description: data.description,
        keyword: data.keyword,
        options: data.options,
        correctOption: data.correctOption,
        bookName: data.bookName,
        heading1: data.heading1,
        heading2: data.heading2,
        heading3: data.heading3,
      })
      const res = await response.data
      if (res.error && res.error) {
        toast.error(res.error)
      } else {
        toast.success(res.message)

        setData({
          title: '',
          description: '',
          keyword: [],
          options: [],
          correctOption: '',
          bookName: '',
          heading1: '',
          heading2: '',
          heading3: '',
        })
        setSubmitted(true)
      }
    } catch (error) {
      toast.warning('Error during Catgeory Update')
    }
  }
  const [fetchUser1, setFetchUser1] = useState([])
  const [fetchUser2, setFetchUser2] = useState([])
  const [fetchUser3, setFetchUser3] = useState([])
  const [fetchUser4, setFetchUser4] = useState([])
  // Function to fetch data from the server

  const fetchData1 = async () => {
    try {
      const response = await axios.get(`/api/book`)
      setFetchUser1(response.data.user)
    } catch (error) {
      console.log('Error during Book Getting!', error)
    }
  }
  const fetchData2 = async () => {
    try {
      const response = await axios.get(`/api/heading1`)
      setFetchUser2(response.data.user)
    } catch (error) {
      console.log('Error during Heading 1 Getting!', error)
    }
  }
  const fetchData3 = async () => {
    try {
      const response = await axios.get(`/api/heading2`)
      setFetchUser3(response.data.user)
    } catch (error) {
      console.log('Error during Heading 2 Getting!', error)
    }
  }
  const fetchData4 = async () => {
    try {
      const response = await axios.get(`/api/heading3`)
      setFetchUser4(response.data.user)
    } catch (error) {
      console.log('Error during Heading 3 Getting!', error)
    }
  }

  useEffect(() => {
    fetchData1()
    fetchData2()
    fetchData3()
    fetchData4()
    setSubmitted(false)
  }, [])

  return (
    <div className="mb-8 mt-24">
      <div className="mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Mcqs Add Here
        </h2>
      </div>
      <form onSubmit={SubmitHandle} className="mt-16 mx-8 sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* Title */}
          <div className="">
            <label
              htmlFor="title"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Title
            </label>
            <div className="mt-2.5">
              <input
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="text"
                value={data.title}
                placeholder="Enter Title"
                onChange={(e) => setData({ ...data, title: e.target.value })}
              />
            </div>
          </div>
          {/*  Option Correct */}
          <div className="">
            <label
              htmlFor=" Option Correct"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Option Correct
            </label>
            <div className="mt-2.5">
              <select
                id="correctOption"
                name="correctOption"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={data.correctOption}
                onChange={(e) =>
                  setData({ ...data, correctOption: e.target.value })
                }
              >
                <option value="">Select Correct Option</option>
                {data.options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/*  Book Name */}
          <div className="">
            <label
              htmlFor=" Book Name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Book Name
            </label>
            <div className="mt-2.5">
              <select
                id="bookName"
                name="bookName"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={data.bookName}
                onChange={(e) => setData({ ...data, bookName: e.target.value })}
              >
                <option value="">Select Book Name</option>
                {fetchUser1.map((data: any) => (
                  <option key={data.id} value={data.title}>
                    {data.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/*  Heading 1 */}
          <div className="">
            <label
              htmlFor=" Heading 1"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Heading 1
            </label>
            <div className="mt-2.5">
              <select
                id="Heading1"
                name="Heading1"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={data.heading1}
                onChange={(e) => setData({ ...data, heading1: e.target.value })}
              >
                <option value="">Select Heading 1</option>
                {fetchUser2.map((data: any) => (
                  <option key={data.id} value={data.title}>
                    {data.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/*  Heading 2 */}
          <div className="">
            <label
              htmlFor=" Heading 2"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Heading 2
            </label>
            <div className="mt-2.5">
              <select
                id="Heading2"
                name="Heading2"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={data.heading2}
                onChange={(e) => setData({ ...data, heading2: e.target.value })}
              >
                <option value="">Select Heading 2</option>
                {fetchUser3.map((data: any) => (
                  <option key={data.id} value={data.title}>
                    {data.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/*  Heading 3 */}
          <div className="">
            <label
              htmlFor=" Heading 3"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Heading 3
            </label>
            <div className="mt-2.5">
              <select
                id="Heading3"
                name="Heading3"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={data.heading3}
                onChange={(e) => setData({ ...data, heading3: e.target.value })}
              >
                <option value="">Select Heading 3</option>
                {fetchUser4.map((data: any) => (
                  <option key={data.id} value={data.title}>
                    {data.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Descripton */}
          <div className="sm:col-span-2">
            <label
              htmlFor="descripton"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Descripton
            </label>
            <div className="mt-2.5">
              <textarea
                placeholder="Enter Descripton"
                value={data.description}
                onChange={(e) =>
                  setData({ ...data, description: e.target.value })
                }
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="tags">Tags</label>
            <TagsInput
              value={data.options}
              onChange={handleTagsChange}
              inputProps={{ id: 'tags' }}
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="descripton"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Keyword
            </label>
            <div className="mt-6 grid grid-cols-4">
              {keywords.map((keyword) => (
                <div key={keyword} className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id={keyword}
                      name={keyword}
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      onChange={handleCheckboxChange}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label
                      htmlFor={keyword}
                      className="font-medium text-gray-900"
                    >
                      {keyword}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit Here
          </button>
        </div>
      </form>
    </div>
  )
}
