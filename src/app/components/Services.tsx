// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

// const Services = () => {
//   const services = [
//     { title: "Student Counselling", description: "We provide dedicated Student Counselling services to guide students toward achieving their academic and career goals. Our experienced counselors offer personalized support, helping students navigate challenges, make informed decisions, and unlock their full potential. Whether it's academic planning, career guidance, or personal development, we are here to empower students every step of the way. Let us help you build a brighter future!" },
//     { title: "Career Solutions", description: "We offer comprehensive Career Solutions to help individuals achieve their professional aspirations. Our services include career planning, skill development, resume building, and interview preparation, tailored to your unique goals. Whether you're starting out or seeking a career change, we provide expert guidance to ensure you succeed in today's competitive job market. Let us help you unlock your true potential and build a rewarding career!" },
//     { title: "Time Management", description: "Mastering Time Management is key to achieving your goals, and we’re here to help! Our online courses are designed for individual aspirants who want to upskill while balancing their current commitments. Learn to prioritize tasks, set achievable goals, and make the most of your time—all from the comfort of your home. With flexible schedules and expert guidance, you can enhance your skills without compromising on your daily routine. Invest in yourself and take charge of your time today!" },
//   ]

//   return (
//     <section id="services" className="py-10">
//       {/* <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Our Services</h2> */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {services.map((service, index) => (
//           <Card key={index} className="bg-green-100">
//             <CardHeader>
//               <CardTitle className="text-green-700">{service.title}</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-green-600">{service.description}</p>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default Services


import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const Services = () => {
    const services = [
    { title: "Student Counselling", description: "We provide dedicated Student Counselling services to guide students toward achieving their academic and career goals. Our experienced counselors offer personalized support, helping students navigate challenges, make informed decisions, and unlock their full potential. Whether it's academic planning, career guidance, or personal development, we are here to empower students every step of the way. Let us help you build a brighter future!" },
    { title: "Career Solutions", description: "We offer comprehensive Career Solutions to help individuals achieve their professional aspirations. Our services include career planning, skill development, resume building, and interview preparation, tailored to your unique goals. Whether you're starting out or seeking a career change, we provide expert guidance to ensure you succeed in today's competitive job market. Let us help you unlock your true potential and build a rewarding career!" },
    { title: "Time Management", description: "Mastering Time Management is key to achieving your goals, and we’re here to help! Our online courses are designed for individual aspirants who want to upskill while balancing their current commitments. Learn to prioritize tasks, set achievable goals, and make the most of your time—all from the comfort of your home. With flexible schedules and expert guidance, you can enhance your skills without compromising on your daily routine. Invest in yourself and take charge of your time today!" },
  ]


  return (
    <section id="services" className="py-10 bg-green-50">
      {/* <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">Our Services</h2> */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="bg-white border-orange-200 border-2">
            <CardHeader>
              <CardTitle className="text-green-700">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-orange-600">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Services



