import React from 'react'
import { Lightbulb } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AboutSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      {/* Decorative Background Layers */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      <div
        className="absolute top-0 right-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 75% 25%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)',
          width: '600px',
          height: '600px',
          transform: 'translate(20%, -20%)',
          zIndex: 2,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          {/* Content Section */}
          <div className="space-y-6 transform transition-all duration-500 hover:scale-[1.03]">
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight drop-shadow-sm">
              About IDM Codes
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              IDM Codes is your trusted partner in IT innovation, offering
              cutting-edge solutions in cybersecurity, infrastructure
              management, and software development. We empower businesses to
              excel in the digital era through tailored technology and expert
              guidance.
            </p>
            <Link
              to="/about"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-all
              duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Learn More About Us
            </Link>
          </div>

          {/* Visual Section */}
          <div className="hidden md:flex justify-center perspective-1000">
            <div
              className="w-44 h-44 bg-blue-100 rounded-full flex items-center justify-center
              transform transition-transform duration-500 hover:rotate-6 hover:scale-110 shadow-xl"
            >
              <Lightbulb className="w-20 h-20 text-blue-600 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
