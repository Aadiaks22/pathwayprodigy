'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

type FAQItem = {
    question: string
    answer: string
}

const faqData: FAQItem[] = [
    {
        question: "What services does Pathway Prodigy offer?",
        answer: "Pathway Prodigy offers a range of services including career counseling, resume building, interview preparation, and personalized education planning for both undergraduate and postgraduate studies."
    },
    {
        question: "Why should you choose Pathway Prodigy?",
        answer: "Pathway Prodigy prioritizes your career, offering top-notch services and the best experience for your success."
    },
    {
        question: "How is Pathway Prodigy different?",
        answer: "We provide unbiased counselling for higher and professional courses, exclusively in UGC-approved universities. We offer exam assistance during project work and exam periods, along with support for your career growth and development."
    },
    {
        question: "What else does Pathway Prodigy offer?",
        answer: "We offer online courses in MBA, BBA, and BCA, delivered by our expert and experienced team."
    },
    {
        question: "How can I schedule a counseling session?",
        answer: "You can schedule a counseling session by filling out the contact form on our website or by calling our office directly. One of our representatives will get back to you to set up an appointment that fits your schedule."
    },
    {
        question: "Do you offer online counseling services?",
        answer: "Yes, we offer both in-person and online counseling services to accommodate our clients' preferences and geographical locations."
    },
    {
        question: "What age groups do you cater to?",
        answer: "We cater to a wide range of age groups, from high school students planning their college education to working professionals looking to advance or change their careers."
    }
]

const FAQItem = ({ item }: { item: FAQItem }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border-b border-green-200 py-4">
            <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-semibold text-orange-600">{item.question}</span>
                {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-orange-500" />
                ) : (
                    <ChevronDown className="h-5 w-5 text-orange-500" />
                )}
            </button>
            {isOpen && (
                <p className="mt-2 text-grey-700">{item.answer}</p>
            )}
        </div>
    )
}

const FAQ = () => {
    return (
        <section id="faq" className="py-10 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">Frequently Asked Questions</h2>
                <div className="max-w-3xl mx-auto">
                    {faqData.map((item, index) => (
                        <FAQItem key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ

