import Container from '@/src/components/elements/container/page'
import { Article } from '@/src/types/article/page'
import PostCard from '@/src/components/article/post/card/page'
import PostMetadata from '@/src/components/article/post/PostMetadata/page'
import SubHeader from '@/src/components/layout/header/subheader/page'

export const generateStaticParams = async () => {
  const posts = PostMetadata()
  return posts.map((post) => ({
    catslug: post.catslug,
  }))
}

function Page({ params }: { params: { catslug: string } }) {
  const postMetadata = PostMetadata()
  return (
    <>
      <SubHeader title={params.catslug} />
      <Container>
        <div className="grid grid-cols-1 my-16 md:grid-col-2 lg:grid-cols-3 gap-5 ">
          {postMetadata
            .filter((post) => post.catslug === params.catslug)
            .splice(0, 9)
            .map((data: Article) => (
              <PostCard datas={data} key={data.id} />
            ))}
        </div>
      </Container>
    </>
  )
}

export default Page

export async function generateMetadata(props: any) {
  const slug = props.params.slug
  function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const title = capitalize(props.params.catslug)
  return {
    title: title,
    // description: post?.data.para,
    // keywords: data.keywords,
    alternates: {
      canonical: `catgeory/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      title: title,
      //   // description: post?.data.para,
      url: `catgeory/${slug}`,
      //   images: [
      //     {
      //       // url: data.image,
      alt: title,
      //     },
      //   ],
    },
    twitter: {
      title: title,
      // description: post?.data.para,
      images: {
        // url: data.image,
        alt: title,
      },
    },
  }
}
