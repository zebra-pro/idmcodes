import React from 'react'
import { LucideIcon } from 'lucide-react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

interface MetricCardProps {
  icon: LucideIcon
  value: number // Changed to number for proper CountUp functionality
  label: string
}

export default function MetricCard({
  icon: Icon,
  value,
  label,
}: MetricCardProps) {
  const { ref, inView } = useInView({ triggerOnce: true }) // Trigger animation once when in view

  return (
    <div
      ref={ref}
      className="text-center p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105"
    >
      <div className="inline-flex items-center justify-center w-14 h-14 mb-4 bg-blue-50 rounded-full">
        <Icon className="w-8 h-8 text-blue-500" />
      </div>
      <div className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">
        {inView ? <CountUp end={value} duration={2} separator="," /> : 0}
      </div>
      <div className="text-sm md:text-base text-gray-500">{label}</div>
    </div>
  )
}
