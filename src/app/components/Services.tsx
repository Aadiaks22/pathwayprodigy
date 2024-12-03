import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { BookOpen, Briefcase, Clock } from 'lucide-react'

const Services = () => {
  const services = [
    { 
      title: "Student Counselling", 
      description: "Personalized guidance for academic and career success.", 
      icon: BookOpen 
    },
    { 
      title: "Career Solutions", 
      description: "Expert advice for professional growth and job market success.", 
      icon: Briefcase 
    },
    { 
      title: "Time Management", 
      description: "Learn to balance commitments and achieve your goals efficiently.", 
      icon: Clock 
    },
  ]

  return (
    <section id="services" className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white border-orange-200 border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="flex flex-col items-center">
                <div className="p-3 bg-orange-100 rounded-full mb-4">
                  <service.icon className="w-8 h-8 text-orange-500" />
                </div>
                <CardTitle className="text-green-700 text-xl text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-600 text-center">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

