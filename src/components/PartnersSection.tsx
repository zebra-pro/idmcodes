import React from 'react'
import { partners } from '../data/partners'

export default function PartnersSection() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Technology Partners
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="p-6 flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
