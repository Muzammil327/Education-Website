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
import Card from '../card/page'
// import required modules

const Slider = [
  {
    id: 0,
    title: 'Physics Books',
    href: '/class/9th/books/punjab/physics',
    description:
      'You can download the Class 9 Punjab Board Physics book in PDF format, chapter-wise, and for free. Download it in PDF format, urdu and english medium, Enjoy learning!',
    image: '/book/books-of-all-classes-and-professional-course.webp',
  },
  {
    id: 1,
    title: 'Chemistry Books',
    href: '/class/9th/books/punjab/chemistry',
    description:
      'You can download the Class 9 Punjab Board Chemistry book in PDF format, chapter-wise, and for free. Download it in PDF format, urdu and english medium, Enjoy learning!',
    image: '/book/books-of-all-classes-and-professional-course.webp',
  },
  {
    id: 2,
    title: 'Biology Books',
    href: '/class/9th/books/punjab/biology',
    description:
      'You can download the Class 9 Punjab Board biology book in PDF format, chapter-wise, and for free. Download it in PDF format, urdu and english medium, Enjoy learning!',
    image: '/book/books-of-all-classes-and-professional-course.webp',
  },
  {
    id: 3,
    title: 'Biology Books',
    href: '/class/9th/books/punjab/biology',
    description:
      'You can download the Class 9 Punjab Board biology book in PDF format, chapter-wise, and for free. Download it in PDF format, urdu and english medium, Enjoy learning!',
    image: '/book/books-of-all-classes-and-professional-course.webp',
  },
]

export default function TopProductSlider() {
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
        {Slider.map((data: any) => (
          <SwiperSlide key={data.id}>
            {' '}
            {/* Assign a unique key to each SwiperSlide */}
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
