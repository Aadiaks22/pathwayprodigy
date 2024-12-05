'use client'

import { useState, useEffect, useRef, TouchEvent } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react'
import Image from 'next/image'

type Course = {
  title: string;
  description: string;
  image: string;
  duration: string;
};

const CourseCard = ({ course, index }: { course: Course; index: number }) => (
  <div className="opacity-0 translate-y-4 animate-fadeIn" style={{ animationDelay: `${index * 100}ms` }}>
    <Card className="h-full bg-white border-orange-200 border-2 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="relative h-40">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="transition-transform duration-300 hover:scale-110"
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <CardHeader className="pb-2">
            <CardTitle className="text-white text-xl flex items-center">
              <GraduationCap className="mr-2 h-5 w-5" />
              {course.title}
            </CardTitle>
          </CardHeader>
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-gray-700 mb-2">{course.description}</p>
        <p className="text-green-700 font-semibold">Duration: {course.duration}</p>
      </CardContent>
    </Card>
  </div>
)

const CourseCarousel = ({ courses }: { courses: Course[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const getVisibleSlides = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
    }
    return 1;
  }

  const nextSlide = () => {
    const visibleSlides = getVisibleSlides();
    setCurrentIndex((prevIndex) => 
      Math.min(prevIndex + 1, courses.length - visibleSlides)
    );
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  }

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide()
    }

    if (touchStart - touchEnd < -75) {
      prevSlide()
    }
  }

  useEffect(() => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.offsetWidth / getVisibleSlides();
      carouselRef.current.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
  }, [currentIndex, isClient])

  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        const slideWidth = carouselRef.current.offsetWidth / getVisibleSlides();
        carouselRef.current.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  if (!isClient) {
    return null;
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="overflow-hidden">
        <div
          ref={carouselRef}
          className="flex transition-transform duration-300 ease-in-out"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {courses.map((course, index) => (
            <div key={index} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-2">
              <CourseCard course={course} index={index} />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous course"
        disabled={currentIndex === 0}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next course"
        disabled={currentIndex >= courses.length - getVisibleSlides()}
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}

const Courses = () => {
  const ugCourses: Course[] = [
    { title: "BA (Bachelor of Arts)", description: "A comprehensive arts program covering humanities and social sciences.", image: "/images/card-img-1.jpg", duration: "3 years" },
    { title: "BCA (Bachelor of Computer Applications)", description: "A specialized program in computer applications and software development.", image: "/images/card-img.jpg", duration: "3 years" },
    { title: "BBA (Bachelor of Business Administration)", description: "A program designed to develop future business leaders and managers.", image: "/images/card-img-2.jpg", duration: "3 years" },
    { title: "B.Com (Bachelor of Commerce)", description: "A program focused on business, finance, and economics.", image: "/images/card-img-3.jpg", duration: "3 years" },
    { title: "B.Tech (Bachelor of Technology)", description: "An engineering program covering various technological fields.", image: "/images/card-img-4.jpg", duration: "4 years" },
  ]

  const pgCourses: Course[] = [
    { title: "MA (Master of Arts)", description: "An advanced program in arts, deepening knowledge in specific humanities or social science fields.", image: "/images/card-img-5.jpg", duration: "2 years" },
    { title: "MCA (Master of Computer Applications)", description: "An advanced program in computer applications, focusing on software development and IT management.", image: "/images/card-img-6.jpg", duration: "2 years" },
    { title: "MBA (Master of Business Administration)", description: "A graduate-level business program developing advanced management and leadership skills.", image: "/images/card-img-7.jpg", duration: "2 years" },
    { title: "M.Tech (Master of Technology)", description: "An advanced engineering program with specialized technological focus.", image: "/images/card-img-8.jpg", duration: "2 years" },
    { title: "M.Com (Master of Commerce)", description: "A postgraduate program in commerce, finance, and business studies.", image: "/images/card-img.jpg", duration: "2 years" },
  ]

  return (
    <section id="courses" className="py-16 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-green-700 mb-8 text-center">Our Courses</h2>
        <Tabs defaultValue="ug" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-12 max-w-md mx-auto">
            <TabsTrigger value="ug" className="text-lg">
              <GraduationCap className="mr-2 h-5 w-5 inline" />
              UG Courses
            </TabsTrigger>
            <TabsTrigger value="pg" className="text-lg">
              <GraduationCap className="mr-2 h-5 w-5 inline" />
              PG Courses
            </TabsTrigger>
          </TabsList>
          <TabsContent value="ug">
            <h3 className="text-2xl font-semibold text-green-600 mb-6 text-center">Undergraduate Courses</h3>
            <CourseCarousel courses={ugCourses} />
          </TabsContent>
          <TabsContent value="pg">
            <h3 className="text-2xl font-semibold text-green-600 mb-6 text-center">Postgraduate Courses</h3>
            <CourseCarousel courses={pgCourses} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default Courses

