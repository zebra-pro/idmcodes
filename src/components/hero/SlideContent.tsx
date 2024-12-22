import React from 'react'
import { Slide } from '../../types/hero'
import { Link } from 'react-router-dom'

interface SlideContentProps {
  slide: Slide
  isActive: boolean
}

export default function SlideContent({ slide, isActive }: SlideContentProps) {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-1000 ${
        isActive ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="absolute inset-0 bg-black/50 z-10" />
      <img
        src={slide.image}
        alt={slide.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-3xl md:text-6xl font-bold mb-4">{slide.title}</h1>
          <p className="text-lg md:text-2xl mb-8">{slide.subtitle}</p>
          <Link
            to={slide.cta.link}
            className="inline-block bg-white hover:bg-gray-100 text-blue-600 px-6 md:px-8 py-3 rounded-lg text-base md:text-lg transition-colors"
          >
            {slide.cta.text}
          </Link>
        </div>
      </div>
    </div>
  )
}
