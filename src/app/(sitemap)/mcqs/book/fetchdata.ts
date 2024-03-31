// export async function getData1() {
//   try {
//     const response = await fetch(`https://www.codebloglab.website/api/book`, {
//       // next: { revalidate: 3600 },
//       cache: 'no-store',
//     })
//     if (!response.ok) {
//       throw new Error('Failed to fetch data')
//     }
//     const data = await response.json() // Parse the JSON data

//     return data
//   } catch (error: any) {
//     if (error instanceof Error) {
//       throw new Error('Failed to fetch data: ' + error.message)
//     } else {
//       throw new Error('An unknown error occurred while fetching data')
//     }
//   }
// }
import axios from 'axios'

export async function getData1() {
  try {
    const response = await axios.get(`/api/book`)
    console.log(response)
    return response.data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw new Error('Failed to fetch data')
  }
}
