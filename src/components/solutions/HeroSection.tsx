import React from 'react'
import { Shield, Search, Server } from 'lucide-react'
import { ParallaxSection } from './ParallaxSection'

interface FeatureProps {
  icon: React.ReactNode
  title: string
  description: string
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4 h-full">
      <div className="text-blue-400 mb-3">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-200 text-sm">{description}</p>
    </div>
  )
}

export function HeroSection() {
  return (
    <ParallaxSection backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80">
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center text-white max-w-6xl mx-auto w-full">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Solutions</h1>
          <p className="text-lg md:text-xl mb-12">
            Empowering businesses with cutting-edge IT solutions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Feature
              icon={<Shield size={32} />}
              title="Identity & Access"
              description="Secure authentication and authorization solutions for your enterprise"
            />
            <Feature
              icon={<Search size={32} />}
              title="24/7 Monitoring"
              description="Round-the-clock security operations and threat detection"
            />
            <Feature
              icon={<Server size={32} />}
              title="Infrastructure"
              description="Scalable and reliable infrastructure solutions for growth"
            />
          </div>
        </div>
      </div>
    </ParallaxSection>
  )
}

export default HeroSection
