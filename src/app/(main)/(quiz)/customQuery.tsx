'use client'
import axios from 'axios'
import { useState, useEffect } from 'react'
export const CustomQuery = (fetchURL: any) => {
  const [fetchdata, setFetchData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const FetchData = async () => {
      try {
        setError(false)
        setLoading(true)
        const response = await axios.get(fetchURL)
        console.log('responseData:', response.data)
        setFetchData(response.data)
        setLoading(false)
      } catch (error) {
        console.log('error :', error)
        setError(true)
        setLoading(false)
      }
    }
    FetchData()
  }, [fetchURL])

  return {
    fetchdata,
    error,
    loading,
  }
}
