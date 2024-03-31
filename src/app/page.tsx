'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'

// import type { Metadata } from 'next'
// import HomeView from '@/src/views/home/page'
// import Footer from '@/src/components/layout/footer/page'
// import Navbar from '@/src/components/layout/navbar/page'

// const data = {
//   title: 'Codebloglab',
//   description:
//     'Main purpose of Codebloglab is to empowering through education and technical skills. Dive into study and technical work for personal and professional growth.',
//   canonical: '/',
//   index: true,
//   follow: true,
//   image: '/opengraph-image.jpg',
//   url: 'https://www.Codebloglab.website/',
//   keywords: ['Codebloglab'],
// }
import { CustomQuery } from './(main)/(quiz)/customQuery'

export default function Home() {
  const { fetchdata, loading, error } = CustomQuery(
    'https://www.codebloglab.website/api/book'
  )
  if (loading) {
    return (
      <>
        <h1>Loadding ...</h1>
      </>
    )
  }
  if (error) {
    return (
      <>
        <h1>Error ...</h1>
      </>
    )
  }

  return (
    <>
      {fetchdata.map((data: any) => {
        return (
          <div key={data._id}>
            <h1>{data.title}</h1>
          </div>
        )
      })}
      {/* <Navbar />
      <main>
        <HomeView />
      </main>
      <Footer /> */}
    </>
  )
}

// export const metadata: Metadata = {
//   title: data.title,
//   description: data.description,
//   keywords: data.keywords,
//   openGraph: {
//     title: data.title,
//     description: data.description,
//     url: data.url,
//     images: [
//       {
//         url: data.image,
//         alt: data.title,
//       },
//     ],
//   },
//   alternates: {
//     canonical: data.canonical,
//   },
//   robots: {
//     index: data.index,
//     follow: data.follow,
//     googleBot: {
//       index: data.index,
//       follow: data.follow,
//     },
//   },
//   twitter: {
//     title: data.title,
//     description: data.description,
//     images: {
//       url: data.image,
//       alt: data.title,
//     },
//   },
// }
