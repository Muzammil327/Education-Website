import { MetadataRoute } from 'next'
import { getData1 } from '@/src/app/(sitemap)/mcqs/book/fetchdata'

export async function generateSitemaps() {
  return [{ id: 0 }, { id: 1 }]
}

export default async function sitemap({
  id,
}: {
  id: number
}): Promise<MetadataRoute.Sitemap> {
  const datas = await getData1()
  const start = id * 50000
  const end = start + 49999
  const slicedData = datas.user.slice(start, end + 1)
  return slicedData.map((product: any) => ({
    url: `${process.env.NEXT_URL}/quiz/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }))
}
