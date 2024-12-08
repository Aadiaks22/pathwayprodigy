import { Card, CardContent } from "@/components/ui/card"
//import { Badge } from "@/components/ui/badge"
import { GraduationCap, BookOpen, Users, Award } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-green-700 mb-8 text-center">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <GraduationCap className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-green-700 mb-2">Educational Excellence</h3>
              <p className="text-gray-600">
                Pathway Prodigy has been a dedicated name in higher education for many years, shaping the careers of thousands.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <BookOpen className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-green-700 mb-2">Comprehensive Programs</h3>
              <p className="text-gray-600">
                We offer a wide range of undergraduate and postgraduate programs tailored for both students and working professionals.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <p className="text-gray-700 mb-4 leading-relaxed">
            Pathway Prodigy has recently expanded into the edutech domain, offering comprehensive undergraduate and postgraduate programs. Our mission is to simplify the journey of higher education, enabling individuals to achieve maximum success in their academic pursuits.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At Pathway Prodigy, we are committed to bridging the gap between education and career aspirations, empowering learners to unlock their true potential.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <Users className="w-8 h-8 text-orange-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-green-700">1500+</p>
            <p className="text-gray-600">Students</p>
          </div>
          <div>
            <BookOpen className="w-8 h-8 text-orange-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-green-700">25+</p>
            <p className="text-gray-600">Courses</p>
          </div>
          <div>
            <GraduationCap className="w-8 h-8 text-orange-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-green-700">95%</p>
            <p className="text-gray-600">Graduation Rate</p>
          </div>
          <div>
            <Award className="w-8 h-8 text-orange-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-green-700">50+</p>
            <p className="text-gray-600">Awards</p>
          </div>
        </div>
        {/* <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Our Programs</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {['MBA', 'MCA', 'MA', 'MCom', 'BBA', 'BCA', 'BA', 'BCom'].map((program) => (
              <Badge key={program} variant="secondary" className="text-green-700 bg-green-100 hover:bg-green-200">
                {program}
              </Badge>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default About

