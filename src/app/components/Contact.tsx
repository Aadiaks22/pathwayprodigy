import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-green-50">
      <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">Contact Us</h2>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <Input type="text" placeholder="Your Name" className="w-full border-orange-200 focus:border-green-500 focus:ring-green-500" />
        </div>
        <div className="mb-4">
          <Input type="email" placeholder="Your Email" className="w-full border-orange-200 focus:border-green-500 focus:ring-green-500" />
        </div>
        <div className="mb-4">
          <Input type="phone" placeholder="Your Phone" className="w-full border-orange-200 focus:border-green-500 focus:ring-green-500" />
        </div>
        <div className="mb-4">
          <Textarea placeholder="Your Query" className="w-full border-orange-200 focus:border-green-500 focus:ring-green-500" />
        </div>
        <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">Send Query</Button>
      </form>
    </section>
  )
}

export default Contact

