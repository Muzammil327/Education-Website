import { MetadataRoute } from 'next'
import { getData1 } from './fetchdata'
import { Iprops } from '../../(main)/(quiz)/type'

export async function generateSitemaps() {
  // Fetch the total number of products and calculate the number of sitemaps needed
  return [{ id: 0 }, { id: 1 }]
}

export default async function sitemap({
  id,
}: {
  id: number
}): Promise<MetadataRoute.Sitemap[]> {
  // Change return type to array of sitemap entries
  // Google's limit is 50,000 URLs per sitemap
  const datas = await getData1()
  const start = id * 50000
  const end = start + 49999

  const slicedData = datas.user.slice(start, end + 1) // Add 1 to include the end index
  // Map sliced data to sitemap format

  const sitemapEntries = slicedData.map((data: any) => ({
    url: `${process.env.NEXT_URL}/mcqs/${data.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  return sitemapEntries
}
