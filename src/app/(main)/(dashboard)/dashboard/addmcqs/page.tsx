'use client'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Page() {
  const [fetchUser, setFetchUser] = useState([])
  const [visibleItems, setVisibleItems] = useState(5) // Number of items initially visible
  const [isLoading, setIsLoading] = useState(false) // Flag to track loading state

  // Function to fetch data from the server
  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/mcqs`)
      setFetchUser(response.data.user)
    } catch (error) {
      console.log('Error during Category Update', error)
    }
  }
  const DeleteHandle = async (id: string) => {
    try {
      await axios.delete(`/api/mcqs/?id=${id}`)
      fetchData()
    } catch (error) {
      console.log('Error during Category Update', error)
    }
  }

  const loadMoreItems = () => {
    setIsLoading(true) // Set loading state to true
    setTimeout(() => {
      setVisibleItems((prevVisibleItems) => prevVisibleItems + 5) // Increase number of visible items by 5
      setIsLoading(false) // Set loading state to false
    }, 1000) // Simulated delay of 1 second
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-28">
        <Link
          href="/dashboard/addmcqs/add"
          className="bg-red-500 text-white py-3 px-8 justify-center items-center inline-block rounded-md my-4"
        >
          Add Mcqs
        </Link>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-20 py-3">
                Title
              </th>
              <th scope="col" className="px-8 py-3 text-center">
                Book Name
              </th>
              <th scope="col" className="px-8 py-3 text-center">
                Heading 1
              </th>
              <th scope="col" className="px-8 py-3 text-center">
                Heading 2
              </th>
              <th scope="col" className="px-8 py-3 text-center">
                Heading 3
              </th>
              <th scope="col" className="px-8 py-3 text-center">
                Keyword
              </th>
              <th scope="col" className="px-8 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="overflow-x-auto">
            {Array.isArray(fetchUser) &&
              fetchUser.slice(0, visibleItems).map((data: any) => (
                <tr key={data._id}>
                  <td
                    scope="row"
                    className="px-20 py-3 font-medium text-gray-900 whitespace-nowrap border-b border-blue-gray-50"
                  >
                    {data.title}
                  </td>
                  <td className="px-12 py-3 font-medium text-gray-900 whitespace-nowrap border-b border-blue-gray-50">
                    {data.bookName}
                  </td>
                  <td className="px-12 py-3 font-medium text-gray-900 whitespace-nowrap border-b border-blue-gray-50">
                    {data.heading1}
                  </td>
                  <td className="px-12 py-3 font-medium text-gray-900 whitespace-nowrap border-b border-blue-gray-50">
                    {data.heading2}
                  </td>
                  <td className="px-12 py-3 font-medium text-gray-900 whitespace-nowrap border-b border-blue-gray-50">
                    {data.heading3}
                  </td>
                  <td className="px-12 py-3 font-medium text-gray-900 whitespace-nowrap border-b border-blue-gray-50">
                    {data.keyword.join(', ')}
                  </td>
                  <td className="px-12 py-3 font-medium text-gray-900 whitespace-nowrap border-b border-blue-gray-50">
                    <button
                      type="button"
                      className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                      onClick={() => DeleteHandle(data._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {fetchUser.length > visibleItems && (
        <div className="text-center mt-4">
          <button
            className="bg-indigo-500 text-white py-2 px-4 rounded-md"
            onClick={loadMoreItems}
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </>
  )
}
