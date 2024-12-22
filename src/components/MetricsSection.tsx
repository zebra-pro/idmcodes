import React from 'react'
import { Users, Shield, Award, Globe } from 'lucide-react'
import { metrics } from '../data/metrics'
import MetricCard from './metrics/MetricCard'

export default function MetricsSection() {
  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Trusted by Businesses Worldwide
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {metrics.map((metric) => (
            <MetricCard key={metric.id} {...metric} />
          ))}
        </div>
      </div>
    </div>
  )
}
