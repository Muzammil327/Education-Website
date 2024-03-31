import axios, { AxiosError } from 'axios'

export async function getData1() {
  try {
    const response = await axios.get(`/api/book`)
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // AxiosError extends Error, so we can safely cast it to AxiosError
      const axiosError = error as AxiosError
      if (axiosError.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        throw new Error('Failed to fetch data: ' + axiosError.response.data)
      } else if (axiosError.request) {
        // The request was made but no response was received
        throw new Error('No response received while fetching data')
      } else {
        // Something happened in setting up the request that triggered an Error
        throw new Error(
          'An error occurred while fetching data: ' + axiosError.message
        )
      }
    } else {
      // If the error is not of type AxiosError, we treat it as a generic error
      throw new Error('An unknown error occurred while fetching data')
    }
  }
}
