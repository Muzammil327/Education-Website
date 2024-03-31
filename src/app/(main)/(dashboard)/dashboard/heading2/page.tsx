'use client'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Page() {
  const [fetchUser, setFetchUser] = useState([])

  // Function to fetch data from the server

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/heading2`)
      setFetchUser(response.data.user)
    } catch (error) {
      console.log('Error during Heading 2 Getting!', error)
    }
  }
  const DeleteHandle = async (id: string) => {
    try {
      const response = await axios.delete(`/api/heading2/?id=${id}`)
      fetchData()
    } catch (error) {
      console.log('Error during Heading 2 Deleting!', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-28">
        <Link
          href="/dashboard/heading2/add"
          className="bg-red-500 text-white py-3 px-8 justify-center items-center inline-block rounded-md my-4"
        >
          Add Heading 2
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
                Keyword
              </th>
              <th scope="col" className="px-8 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="overflow-x-auto">
            {Array.isArray(fetchUser) &&
              fetchUser.map((data: any) => (
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
    </>
  )
}
