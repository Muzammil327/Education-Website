export async function getHeading1() {
  try {
    const response = await fetch(`${process.env.NEXT_URL}/api/heading1`, {
      // next: { revalidate: 3600 },
      cache: 'no-store',
    })
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
