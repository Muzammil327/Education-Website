export async function getData(params: string) {
  try {
    const response = await fetch(`http://localhost:3000/api/mcqs/${params}`)
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
    const data = await response.json() // Parse the JSON data
    return data
  } catch (error: any) {
    if (error instanceof Error) {
      throw new Error('Failed to fetch data: ' + error.message)
    } else {
      throw new Error('An unknown error occurred while fetching data')
    }
  }
}
