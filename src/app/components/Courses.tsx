'use client'

import { useState, useEffect } from 'react'
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
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-110"
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
        <p className="text-orange-600 font-bold mb-2">{course.description}</p>
        <p className="text-green-700 font-semibold">Duration: {course.duration}</p>
      </CardContent>
    </Card>
  </div>
)

const CourseCarousel = ({ courses }: { courses: Course[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (courses.length - 2))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + courses.length - 2) % (courses.length - 2))
  }

  if (!isClient) {
    return null;
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
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
        className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300"
        aria-label="Previous course"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300"
        aria-label="Next course"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}

const Courses = () => {
  const ugCourses: Course[] = [
    { title: "BA (Bachelor of Arts)", description: "A comprehensive arts program covering humanities and social sciences.", image: "/images/card-img.jpg", duration: "3 years" },
    { title: "BSc (Bachelor of Science)", description: "A rigorous science program focusing on various scientific disciplines.", image: "/images/card-img.jpg", duration: "3 years" },
    { title: "BCA (Bachelor of Computer Applications)", description: "A specialized program in computer applications and software development.", image: "/images/card-img.jpg", duration: "3 years" },
    { title: "BBA (Bachelor of Business Administration)", description: "A program designed to develop future business leaders and managers.", image: "/images/card-img.jpg", duration: "3 years" },
    { title: "B.Com (Bachelor of Commerce)", description: "A program focused on business, finance, and economics.", image: "/images/card-img.jpg", duration: "3 years" },
    { title: "B.Tech (Bachelor of Technology)", description: "An engineering program covering various technological fields.", image: "/images/card-img.jpg", duration: "4 years" },
  ]

  const pgCourses: Course[] = [
    { title: "MA (Master of Arts)", description: "An advanced program in arts, deepening knowledge in specific humanities or social science fields.", image: "/images/ma-course.jpg", duration: "2 years" },
    { title: "MSc (Master of Science)", description: "A higher-level science program, often involving research and specialization.", image: "/images/msc-course.jpg", duration: "2 years" },
    { title: "MCA (Master of Computer Applications)", description: "An advanced program in computer applications, focusing on software development and IT management.", image: "/images/mca-course.jpg", duration: "2 years" },
    { title: "MBA (Master of Business Administration)", description: "A graduate-level business program developing advanced management and leadership skills.", image: "/images/mba-course.jpg", duration: "2 years" },
    { title: "M.Tech (Master of Technology)", description: "An advanced engineering program with specialized technological focus.", image: "/images/mtech-course.jpg", duration: "2 years" },
    { title: "M.Com (Master of Commerce)", description: "A postgraduate program in commerce, finance, and business studies.", image: "/images/mcom-course.jpg", duration: "2 years" },
  ]

  return (
    <section id="courses" className="py-16 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-green-700 mb-8 text-center">Our Courses</h2>
        <Tabs defaultValue="ug" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-12 max-w-md mx-auto bg-green-400">
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

