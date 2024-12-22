import React, { useState } from 'react'
import {
  MapPin,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Building2,
} from 'lucide-react'

type JobProps = {
  title: string
  department: string
  location: string
  type: string
  description: string
  responsibilities: string[]
  requirements: string[]
  benefits: string[]
  applicationUrl: string
}

export default function JobCard({
  title,
  department,
  location,
  type,
  description,
  responsibilities,
  requirements,
  benefits,
  applicationUrl,
}: JobProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300">
      <div
        className="p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <div className="flex flex-wrap gap-4 text-gray-600">
              <div className="flex items-center">
                <Building2 size={18} className="mr-1" />
                {department}
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="mr-1" />
                {location}
              </div>
              <div className="flex items-center">
                <Briefcase size={18} className="mr-1" />
                {type}
              </div>
            </div>
          </div>
          {isExpanded ? (
            <ChevronUp className="text-gray-400" />
          ) : (
            <ChevronDown className="text-gray-400" />
          )}
        </div>

        <p className="mt-4 text-gray-600">{description}</p>
      </div>

      {isExpanded && (
        <div className="px-6 pb-6 border-t border-gray-100">
          <div className="mt-4">
            <h4 className="font-semibold text-gray-900 mb-2">
              Responsibilities
            </h4>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold text-gray-900 mb-2">Benefits</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {benefits.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <a
            href={applicationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Apply Now
          </a>
        </div>
      )}
    </div>
  )
}
