import slugify from 'slugify'

export default async function sitemap() {
  let posts = [] // Default value for posts

  try {
    let data1 = await fetch('https://codebloglab.website/api/heading2')
    let datapost1 = await data1.json()
    posts = datapost1.user.map((item: any) => {
      const slug1 = slugify(item.bookName, {
        replacement: '-', // replace spaces with replacement character, defaults to `-`
        remove: undefined, // remove characters that match regex, defaults to `undefined`
        lower: true, // convert to lower case, defaults to `false`
        strict: false, // strip special characters except replacement, defaults to `false`
        locale: 'vi', // language code of the locale to use
        trim: true, // trim leading and trailing replacement chars, defaults to `true`
      })
      const slug2 = slugify(item.heading1, {
        replacement: '-', // replace spaces with replacement character, defaults to `-`
        remove: undefined, // remove characters that match regex, defaults to `undefined`
        lower: true, // convert to lower case, defaults to `false`
        strict: false, // strip special characters except replacement, defaults to `false`
        locale: 'vi', // language code of the locale to use
        trim: true, // trim leading and trailing replacement chars, defaults to `true`
      })
      return {
        url: `http://localhost:3000/quiz/${slug1}/${slug2}/${item.slug}`,
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
