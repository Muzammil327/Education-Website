import { getData1 } from '@/src/app/(sitemap)/mcqs/book/fetchdata'

export default async function sitemap() {
  const data = await getData1()
  console.log(data)
  const posts = data.user.map((data: any) => ({
    url: `https://www.codebloglab.website/quiz/${data.slug}`,
    lastModified: new Date(),
  }))

  return [...posts]
}
