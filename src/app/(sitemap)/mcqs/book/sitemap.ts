export default async function sitemap() {
  let posts = [] // Default value for posts

  try {
    let data = await fetch('https://codebloglab.website/api/book')
    let datapost = await data.json()

    posts = datapost.user.map((item: any) => ({
      url: `https://www.codebloglab.website/quiz/${item.slug}`,
      lastModified: new Date(),
    }))

    return posts
  } catch (error) {
    console.error('Error fetching data:', error)
    // Handle errors appropriately
    return posts // Return default value
  }
}
