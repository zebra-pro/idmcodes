import React from 'react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Senior Developer',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    quote:
      'Working at IDM Codes has been the most rewarding experience of my career. The culture of innovation and collaboration is unmatched.',
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    quote:
      'What sets IDM Codes apart is the emphasis on personal growth and the opportunity to work on cutting-edge projects.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'UX Designer',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    quote:
      'The supportive environment and work-life balance at IDM Codes have allowed me to thrive both professionally and personally.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Team Says
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
