import { MetadataRoute } from 'next'
import { getData1 } from './fetchdata'

export async function generateSitemaps() {
  return [{ id: 0 }, { id: 1 }]
}

export default async function sitemap({
  id,
}: {
  id: number
}): Promise<MetadataRoute.Sitemap[]> {
  const datas = await getData1()
  const start = id * 50000
  const end = start + 49999

  const slicedData = datas.user.slice(start, end + 1) // Add 1 to include the end index
  console.log(slicedData.length)
  // Map sliced data to sitemap format

  const sitemapEntries = slicedData.map((data: any) => ({
    url: `${process.env.NEXT_URL}/quiz/${data.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  return sitemapEntries
}
