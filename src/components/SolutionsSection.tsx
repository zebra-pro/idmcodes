import React from 'react'
import { Key, Shield, Database } from 'lucide-react'
import { Link } from 'react-router-dom'

const solutions = [
  {
    title: 'Identity Access and Management',
    description:
      'Secure and streamline user authentication and access controls.',
    icon: Key,
    backgroundImage:
      'https://img.freepik.com/free-vector/matchmaking-website-idea-social-network-geolocation-search-user-account-personal-profile-internet-surfing-online-dating-service-isolated-concept-metaphor-illustration_335657-1234.jpg',
    accentColor: 'from-purple-600 to-blue-600',
  },
  {
    title: 'Security Operations Center',
    description: '24/7 monitoring to detect and respond to cyber threats.',
    icon: Shield,
    backgroundImage:
      'https://img.freepik.com/free-vector/gradient-ssl-illustration_23-2149247155.jpg',
    accentColor: 'from-red-600 to-orange-600',
  },
  {
    title: 'Infrastructure Solutions',
    description:
      'Scalable and reliable IT infrastructure tailored to your needs.',
    icon: Database,
    backgroundImage:
      'https://img.freepik.com/free-vector/engineers-consolidating-structuring-data-center-big-data-engineering-massive-data-operation-big-data-architecture-concept-bright-vibrant-violet-isolated-illustration_335657-443.jpg',
    accentColor: 'from-green-600 to-teal-600',
  },
]

const SolutionsSection = () => {
  return (
    <div className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBoLTJ2LTJoMnYyem0wLTJoLTJ2LTJoMnYyem0tMi0yaC0ydjJoMnYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] animate-pattern" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 tracking-tight">
            Our Solutions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-8 mx-4 lg:mx-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative h-[500px] rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              {/* Card Background */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${solution.backgroundImage})`,
                }}
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
              <div
                className={`absolute inset-0 bg-gradient-to-tr ${solution.accentColor} opacity-0 transition-opacity duration-500 group-hover:opacity-20`}
              />

              {/* Content Container */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                {/* Icon */}
                <div className="mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                  <solution.icon className="w-12 h-12 text-white opacity-80" />
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight transition-transform duration-500 group-hover:translate-x-2">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-lg mb-6 transition-all duration-500 group-hover:text-white">
                  {solution.description}
                </p>

                {/* CTA Link */}
                <Link
                  to="/solutions"
                  className="inline-flex items-center space-x-2 text-white font-semibold bg-white/10 rounded-lg px-6 py-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 group/link"
                >
                  <span>Learn More</span>
                  <span className="transform transition-transform duration-300 group-hover/link:translate-x-1">
                    →
                  </span>
                </Link>

                {/* Animated Border */}
                <div
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r opacity-50 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    backgroundImage: `linear-gradient(to right, transparent, ${solution.accentColor
                      .split(' ')[1]
                      .replace('to-', '')}, transparent)`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes pattern {
          0% {
            transform: translateX(0) translateY(0);
          }
          100% {
            transform: translateX(-30px) translateY(-30px);
          }
        }
        .animate-pattern {
          animation: pattern 20s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default SolutionsSection
