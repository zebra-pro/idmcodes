import React, { useState } from 'react'
import { Key, Shield, Database } from 'lucide-react'
import { Link } from 'react-router-dom'

const solutions = [
  {
    title: 'Identity Access and Management',
    description:
      'Secure and streamline user authentication and access controls.',
    icon: Key,
    backgroundImage:
      'https://img.freepik.com/free-vector/matchmaking-website-idea-social-network-geolocation-search-user-account-personal-profile-internet-surfing-online-dating-service-isolated-concept-metaphor-illustration_335657-1234.jpg?t=st=1734551643~exp=1734555243~hmac=00b6cfa84a4473e3f27ac5c826c76441d94c6508aaf0b66ce95e0275c73247b9&w=740',
    accentColor: 'bg-black-600',
  },
  {
    title: 'Security Operations Center',
    description: '24/7 monitoring to detect and respond to cyber threats.',
    icon: Shield,
    backgroundImage:
      'https://img.freepik.com/free-vector/gradient-ssl-illustration_23-2149247155.jpg?ga=GA1.1.256731741.1734551171&semt=ais_hybrid',
    accentColor: 'bg-red-600',
  },
  {
    title: 'Infrastructure Solutions',
    description:
      'Scalable and reliable IT infrastructure tailored to your needs.',
    icon: Database,
    backgroundImage:
      'https://img.freepik.com/free-vector/engineers-consolidating-structuring-data-center-big-data-engineering-massive-data-operation-big-data-architecture-concept-bright-vibrant-violet-isolated-illustration_335657-443.jpg?ga=GA1.1.256731741.1734551171&semt=ais_tags_boosted',
    accentColor: 'bg-green-600',
  },
]

export default function SolutionsSection() {
  const [loadedImages, setLoadedImages] = useState(
    new Array(solutions.length).fill(false)
  )

  const handleImageLoad = (index) => {
    const newLoadedImages = [...loadedImages]
    newLoadedImages[index] = true
    setLoadedImages(newLoadedImages)
  }

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Solutions
        </h2>
        <div className="grid md:grid-cols-3 gap-16 mx-6 sm:mx-8 lg:mx-16 xl:mx-24">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="relative h-[450px] rounded-2xl overflow-hidden group transition-all duration-300"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${solution.backgroundImage})`,
                }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                {/* Accent Line */}
                <div
                  className={`absolute bottom-0 left-0 h-1 ${solution.accentColor} w-full transition-all duration-300 group-hover:h-2`}
                />
                {/* Solution Title */}
                <h3 className="text-2xl font-bold mb-2 transition-transform duration-300 group-hover:translate-y-2">
                  {solution.title}
                </h3>
                {/* Solution Description */}
                <p className="text-gray-200 mb-4 opacity-80 transition-opacity duration-300 group-hover:opacity-100">
                  {solution.description}
                </p>
                {/* Learn More Link */}
                <Link
                  to="/solutions"
                  className="inline-flex items-center text-white font-semibold hover:text-opacity-80 transition-opacity duration-300"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
