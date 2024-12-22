import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'How can I get technical support?',
    answer:
      'Our technical support team is available 24/7. You can reach us through the contact form above, or email us directly at support@idm.codes for urgent matters.',
  },
  {
    question: "What's the best way to inquire about services?",
    answer:
      "For service inquiries, we recommend using our contact form and selecting 'General Inquiry' as the subject. A member of our sales team will respond within 1-2 business days.",
  },
  {
    question: 'Where are you located?',
    answer:
      'Our main office is located in Silicon Valley, California. We also have remote teams working across different time zones to provide round-the-clock support.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">
        Frequently Asked Questions
      </h2>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              className="w-full px-4 py-3 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium text-left">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="flex-shrink-0 text-gray-500" />
              ) : (
                <ChevronDown className="flex-shrink-0 text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 bg-white">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
