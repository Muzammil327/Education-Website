'use client'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
// Import Swiper styles

// import required modules
import { Autoplay, Navigation } from 'swiper/modules'
import dynamic from 'next/dynamic'
const Card = dynamic(() => import('@/src/components/card/page'))
// import required modules
interface Iprops {
  id: number
  title: string
  description: string
  href: string
  image: string
}
export default function TopProductSlider(props: { slider: Iprops[] }) {
  return (
    <div className="pb-20">
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        spaceBetween={31}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {props.slider.map((data: Iprops) => (
          <SwiperSlide key={data.id}>
            <Card
              key={data.id}
              title={data.title}
              description={data.description}
              href={data.href}
              image={data.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
