import React from 'react'

interface ParallaxSectionProps {
  backgroundImage: string
  children: React.ReactNode
}

export function ParallaxSection({
  backgroundImage,
  children,
}: ParallaxSectionProps) {
  return (
    <div
      className="relative min-h-[500px] bg-fixed bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container mx-auto px-4 py-16">
        {children}
      </div>
    </div>
  )
}
