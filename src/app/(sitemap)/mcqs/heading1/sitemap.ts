import { MetadataRoute } from 'next'
import { getHeading1 } from './fetchdata'
import slugify from 'slugify'

export async function generateSitemaps() {
  return [{ id: 0 }, { id: 1 }]
}

export default async function sitemap({
  id,
}: {
  id: number
}): Promise<MetadataRoute.Sitemap[]> {
  const datas = await getHeading1()
  const start = id * 50000
  const end = start + 49999

  const slicedData = datas.user.slice(start, end + 1) // Add 1 to include the end index
  // Map sliced data to sitemap format

  const sitemapEntries = slicedData.map((data: any) => {
    const slug = slugify(data.bookName, {
      replacement: '-', // replace spaces with replacement character, defaults to `-`
      remove: undefined, // remove characters that match regex, defaults to `undefined`
      lower: true, // convert to lower case, defaults to `false`
      strict: false, // strip special characters except replacement, defaults to `false`
      locale: 'vi', // language code of the locale to use
      trim: true, // trim leading and trailing replacement chars, defaults to `true`
    })

    return {
      url: `${process.env.NEXT_URL}/quiz/${slug}/${data.slug}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }
  })
  return sitemapEntries
}
