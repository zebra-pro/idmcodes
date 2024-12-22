import React from 'react'
import { industries } from '../data/industries'

export default function IndustriesSection() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Industries We Serve
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Delivering specialized IT solutions across diverse sectors
        </p>
        {/* Increased margin for the grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-6 sm:mx-8 lg:mx-16 xl:mx-24">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <industry.icon className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{industry.name}</h3>
              <p className="text-sm text-gray-600">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
