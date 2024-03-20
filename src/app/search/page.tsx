'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import axios from 'axios'
import Header from '@/src/components/layout/header/page'
import { FaBolt } from 'react-icons/fa6'
import slugify from 'slugify'
import Container from '@/src/components/elements/container/page'
import { useParams } from 'next/navigation'

const SearchBar = () => {
  const router = useRouter() // Using useRouter hook to access the router object
  // const { book, subSlug, country } = router.query;

  const [tags, setTags] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSearch = async () => {
    try {
      // Send a GET request to your backend API with the entered tags
      const response = await axios.get(`/api/get/tags?tags=${tags}`)
      // Update the searchResults state with the data from the response
      if (response.data.length === 0) {
        setError('No results found for the provided tags.')
        alert('fg')
      } else {
        setSearchResults(response.data)
        setError('') // Clear error message if results are found
        setTags('')
        setLoading(false)
      }
    } catch (error) {
      // Handle errors (e.g., display error message)
      console.error('Error searching:', error)
    }
  }

  return (
    <div>
      {/* <Header title="Search Here" /> */}
      <div className="bg-gray-900 w-full py-12 mx-auto mt-20">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSearch()
          }}
          className="py-40 flex items-center justify-center"
        >
          <div className="mt-6 flex md:flex-row flex-col gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="Enter tags..."
              required
              className="lg:w-[700px] md:w-[350px] w-full outline-none rounded-md border-0 bg-white/5 px-3.5 py-4 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
            <button type="submit" className="btn1 md:mt-0 mt-4">
              Subscribe
            </button>
          </div>
        </form>
      </div>
      <Container>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div className="py-12">
          {/* Display search results */}
          {!loading && searchResults.length > 0 && (
            <>
              {searchResults.map((result: any) => (
                <div key={result.id}>
                  <div className="questionCard">
                    <div className="cards flex gap-4 items-center lg:m-6 md:m-4 m-2 lg:p-5 md:p-4 p-1 w-auto min-h-[80px]">
                      <div className="icon">
                        <FaBolt />
                      </div>

                      <h2 className="title">{result.question}</h2>
                    </div>
                  </div>
                  {/* </a> */}
                </div>
              ))}
            </>
          )}
        </div>
        {/* <span className="text-[400px]">  {country}</span> */}
      </Container>
    </div>
  )
}

export default SearchBar
