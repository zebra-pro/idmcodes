import React from 'react'
import { Container } from './Container'

interface SectionProps {
  children: React.ReactNode
  className?: string
  background?: 'white' | 'gray'
}

export function Section({
  children,
  className = '',
  background = 'white',
}: SectionProps) {
  return (
    <section
      className={`py-16 ${background === 'gray' ? 'bg-gray-50' : 'bg-white'}`}
    >
      <Container className={className}>{children}</Container>
    </section>
  )
}
