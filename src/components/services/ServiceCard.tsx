import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Service } from '../../types/services'

interface ServiceCardProps {
  service: Service
  isEven: boolean
}

export default function ServiceCard({ service, isEven }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="relative overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-10"
        style={{ backgroundImage: `url(${service.backgroundImage})` }}
      />

      <div className="relative container mx-auto px-8 md:px-16 py-32">
        <div
          className={`grid md:grid-cols-2 gap-16 items-center ${
            isEven ? '' : 'md:grid-flow-dense'
          }`}
        >
          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
              {service.title}
            </h2>
            <p className="text-lg md:text-xl text-black-700 leading-relaxed">
              {service.description}
            </p>

            {/* Expandable Features */}
            <div className="md:block">
              {/* Mobile view with max-height transition */}
              <div
                className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                  isExpanded ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="space-y-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                        <div className="w-2 h-2 rounded-full bg-blue-600" />
                      </div>
                      <p className="text-black-700 text-lg">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop view always visible */}
              <div className="hidden md:block space-y-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-blue-600" />
                    </div>
                    <p className="text-black-700 text-lg">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Expand Button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="md:hidden flex items-center text-blue-600 font-semibold"
            >
              <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 ml-1" />
              ) : (
                <ChevronDown className="w-5 h-5 ml-1" />
              )}
            </button>
          </div>

          {/* Image */}
          <div className={`relative ${isEven ? 'md:order-last' : ''}`}>
            <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-2xl max-w-lg mx-auto">
              <img
                src={service.image}
                alt={service.title}
                className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
