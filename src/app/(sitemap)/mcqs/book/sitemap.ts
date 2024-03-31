import { MetadataRoute } from 'next'
import { getData1 } from '@/src/app/(sitemap)/mcqs/book/fetchdata'

export default async function sitemap({}: {}): Promise<MetadataRoute.Sitemap> {
  const datas = await getData1()
  return datas.user.map((product: any) => ({
    url: `${process.env.NEXT_URL}/quiz/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }))
}
