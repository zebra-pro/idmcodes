import React from 'react'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'IDM Codes helped us streamline our IT operations and improve security across our entire infrastructure.',
    author: 'John Doe',
    company: 'ABC Corp',
  },
  {
    quote:
      'Their expertise in cloud solutions has transformed how we handle our data and applications.',
    author: 'Sarah Smith',
    company: 'Tech Innovators',
  },
  {
    quote:
      'Outstanding service and support. IDM Codes is a trusted partner in our digital transformation journey.',
    author: 'Michael Johnson',
    company: 'Global Systems Inc',
  },
]

export default function TestimonialsSection() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        {/* Added margin classes to the grid for consistent spacing */}
        <div className="grid md:grid-cols-3 gap-8 mx-6 sm:mx-8 lg:mx-16 xl:mx-24">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="w-8 h-8 text-blue-600 mb-4" />
              <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-gray-500">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
