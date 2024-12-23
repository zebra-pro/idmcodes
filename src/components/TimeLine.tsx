import React, { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import gsap from 'gsap'

const milestones = [
  {
    year: '2012',
    title: 'Founded',
    description: 'Redefining Innovation',
  },
  {
    year: '2018',
    title: '50+ Enterprise Clients',
    description: 'Trust IDM Codes',
  },
  {
    year: '2023',
    title: '1M+ Users',
    description: 'Empowered Worldwide',
  },
]

const Timeline: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (inView && timelineRef.current) {
      gsap.from('.milestone', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: 'power3.out',
      })
    }
  }, [inView])

  return (
    <div ref={ref} className="py-24 bg-gradient-to-b from-gray-900 to-blue-900">
      <div className="container mx-auto px-6">
        <div ref={timelineRef} className="relative">
          <h1 className="font-bold text-white mb-8 text-center md:text-6xl md:mb-12 ">
            Timeline
          </h1>
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-500/30" />
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="milestone relative flex items-center mb-16 last:mb-0"
            >
              <div className="flex-1 pr-8 text-right">
                <div className="text-5xl font-bold text-blue-400 mb-2">
                  {milestone.year}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-1">
                  {milestone.title}
                </h3>
                <p className="text-blue-200">{milestone.description}</p>
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full">
                <div className="absolute w-8 h-8 bg-blue-500/30 rounded-full -left-2 -top-2 animate-ping" />
              </div>

              <div className="flex-1 pl-8">
                <div className="h-0.5 w-8 bg-blue-500/30" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Timeline
