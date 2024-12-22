import React from 'react'
import { LucideIcon } from 'lucide-react'

interface CoreValueProps {
  icon: LucideIcon
  title: string
  description: string
}

export function CoreValue({ icon: Icon, title, description }: CoreValueProps) {
  return (
    <div className="flex flex-col items-center p-6 text-center">
      <Icon className="w-12 h-12 text-blue-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
