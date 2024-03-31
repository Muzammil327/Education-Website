import { getData1 } from '@/src/app/(sitemap)/mcqs/book/fetchdata'

export default async function sitemap() {
  const data = await getData1()
  return data.user.map((product: any) => ({
    url: `${process.env.NEXT_URL}/quiz/${product.slug}`,
    lastModified: new Date(),
  }))
}
