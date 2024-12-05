'use client'

import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const BackgroundSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  }

  const images = [
    '/images/slider-img-5.jpg',
    '/images/slider-img-6.jpg',
    '/images/slider-img-7.jpg',
  ]

  return (
    <div className="absolute inset-0">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="w-full h-screen relative">
            <Image
              src={image}
              alt={`Background ${index + 1}`}
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
              priority={index === 0}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

const Home = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {mounted && <BackgroundSlider />}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <div className="relative z-20 text-center w-full max-w-4xl px-6 py-12 bg-transparent backdrop-blur-sm rounded-lg">
        <h1 className="text-5xl font-bold text-white mb-6 leading-tight">Welcome to Pathway Prodigy</h1>
        <p className="text-2xl font-bold text-orange-400 mb-10">Your one-stop solution for Career Excellence</p>
      </div>
    </section>
  )
}

export default Home

