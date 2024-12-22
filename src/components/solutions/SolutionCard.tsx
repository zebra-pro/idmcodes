import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface SolutionCardProps {
  title: string
  intro: string
  details: string
}

export function SolutionCard({ title, intro, details }: SolutionCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-6 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
      <p className="text-lg text-gray-600 mb-4">{intro}</p>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-h-[500px]' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600 mb-4">{details}</p>
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
      >
        <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
    </div>
  )
}
