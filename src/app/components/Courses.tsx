'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const CourseCarousel = ({ courses }: { courses: { title: string; description: string }[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (courses.length - 3))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + courses.length - 3) % (courses.length - 3))
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
        >
          {courses.map((course, index) => (
            <Card key={index} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-green-50 border-orange-200 border-2 m-2">
              <CardHeader>
                <CardTitle className="text-green-700">{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-600">{course.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full"
        aria-label="Previous course"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full"
        aria-label="Next course"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}

const Courses = () => {
  const ugCourses = [
    { title: "BA (Bachelor of Arts)", description: "A comprehensive arts program covering humanities and social sciences." },
    { title: "BSc (Bachelor of Science)", description: "A rigorous science program focusing on various scientific disciplines." },
    { title: "BCA (Bachelor of Computer Applications)", description: "A specialized program in computer applications and software development." },
    { title: "BBA (Bachelor of Business Administration)", description: "A program designed to develop future business leaders and managers." },
    { title: "B.Com (Bachelor of Commerce)", description: "A program focused on business, finance, and economics." },
    { title: "B.Tech (Bachelor of Technology)", description: "An engineering program covering various technological fields." },
  ]

  const pgCourses = [
    { title: "MA (Master of Arts)", description: "An advanced program in arts, deepening knowledge in specific humanities or social science fields." },
    { title: "MSc (Master of Science)", description: "A higher-level science program, often involving research and specialization." },
    { title: "MCA (Master of Computer Applications)", description: "An advanced program in computer applications, focusing on software development and IT management." },
    { title: "MBA (Master of Business Administration)", description: "A graduate-level business program developing advanced management and leadership skills." },
    { title: "M.Tech (Master of Technology)", description: "An advanced engineering program with specialized technological focus." },
    { title: "M.Com (Master of Commerce)", description: "A postgraduate program in commerce, finance, and business studies." },
  ]

  return (
    <section id="courses" className="py-10 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">Our Courses</h2>
        <Tabs defaultValue="ug" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="ug" className="text-lg">UG Courses</TabsTrigger>
            <TabsTrigger value="pg" className="text-lg">PG Courses</TabsTrigger>
          </TabsList>
          <TabsContent value="ug">
            <h3 className="text-2xl font-semibold text-green-600 mb-4 text-center">Undergraduate Courses</h3>
            <CourseCarousel courses={ugCourses} />
          </TabsContent>
          <TabsContent value="pg">
            <h3 className="text-2xl font-semibold text-green-600 mb-4 text-center">Postgraduate Courses</h3>
            <CourseCarousel courses={pgCourses} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default Courses

