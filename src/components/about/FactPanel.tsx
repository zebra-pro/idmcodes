import React from 'react'
import { Users, Award, Globe } from 'lucide-react'

const facts = [
  {
    icon: <Award className="w-8 h-8 text-blue-600" />,
    title: '10+ Years',
    description: 'Delivering cutting-edge software solutions',
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: '50+ Fortune 500',
    description: 'Companies trust our expertise',
  },
  {
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    title: '1M+ Users',
    description: 'Empowering users globally',
  },
]

export function FactPanel() {
  return (
    <div className="w-full overflow-x-auto py-12">
      <div className="flex flex-col md:flex-row md:justify-center space-y-6 md:space-y-0 md:space-x-8">
        {facts.map((fact, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full md:w-64"
          >
            <div className="mb-4">{fact.icon}</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {fact.title}
            </h3>
            <p className="text-gray-600 text-center">{fact.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
