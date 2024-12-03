import Image from 'next/image'

const Team = () => {
  const team = [
    { name: "Jane Doe", role: "Eco Consultant", image: "/placeholder.svg?height=100&width=100" },
    { name: "John Smith", role: "Green Energy Specialist", image: "/placeholder.svg?height=100&width=100" },
    { name: "Alice Johnson", role: "Waste Management Expert", image: "/placeholder.svg?height=100&width=100" },
  ]

  return (
    <section id="team" className="py-20">
      <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <div key={index} className="text-center">
            <Image
              src={member.image}
              alt={member.name}
              width={100}
              height={100}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-green-700">{member.name}</h3>
            <p className="text-green-600">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Team

