// import { MetadataRoute } from 'next'
// import { getHeading1 } from './fetchdata'
// import slugify from 'slugify'

import slugify from 'slugify'

// export async function generateSitemaps() {
//   return [{ id: 0 }, { id: 1 }]
// }

// export default async function sitemap({
//   id,
// }: {
//   id: number
// }): Promise<MetadataRoute.Sitemap[]> {
//   let posts = [] // Default value for posts

//   let data = await fetch('https://codebloglab.website/api/book')
//   let datapost = await data.json()
//   const start = id * 50000
//   const end = start + 49999

//   const slicedData = datapost.user.slice(start, end + 1) // Add 1 to include the end index
//   // Map sliced data to sitemap format

//   posts = slicedData.map((item: any) => ({
//     url: `https://www.codebloglab.website/quiz/${item.slug}`,
//     lastModified: new Date(),
//   }))

//   const sitemapEntries = slicedData.map((data: any) => {
//     const slug = slugify(data.bookName, {
//       replacement: '-', // replace spaces with replacement character, defaults to `-`
//       remove: undefined, // remove characters that match regex, defaults to `undefined`
//       lower: true, // convert to lower case, defaults to `false`
//       strict: false, // strip special characters except replacement, defaults to `false`
//       locale: 'vi', // language code of the locale to use
//       trim: true, // trim leading and trailing replacement chars, defaults to `true`
//     })

//     return {
//       url: `${process.env.NEXT_URL}/quiz/${slug}/${data.slug}/`,
//       lastModified: new Date(),
//       changeFrequency: 'weekly',
//       priority: 0.8,
//     }
//   })
//   return sitemapEntries
// }
export default async function sitemap() {
  let posts = [] // Default value for posts

  try {
    let data1 = await fetch('http://localhost:3000/api/heading1')
    let datapost1 = await data1.json()
    posts = datapost1.user.map((item: any) => {
      const slug = slugify(item.bookName, {
        replacement: '-', // replace spaces with replacement character, defaults to `-`
        remove: undefined, // remove characters that match regex, defaults to `undefined`
        lower: true, // convert to lower case, defaults to `false`
        strict: false, // strip special characters except replacement, defaults to `false`
        locale: 'vi', // language code of the locale to use
        trim: true, // trim leading and trailing replacement chars, defaults to `true`
      })
      return {
        url: `http://localhost:3000/quiz/${slug}/${item.slug}`,
        lastModified: new Date(),
      }
    })

    return posts
  } catch (error) {
    console.error('Error fetching data:', error)
    // Handle errors appropriately
    return [...posts] // Return default value
  }
}
