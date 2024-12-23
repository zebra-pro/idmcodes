import React from 'react'
import HeroSlider from '../components/HeroSlider'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import SolutionsSection from '../components/SolutionsSection'
import MetricsSection from '../components/MetricsSection'
import IndustriesSection from '../components/IndustriesSection'
import PartnersSection from '../components/PartnersSection'
import TestimonialsSection from '../components/TestimonialsSection'
import CtaBanner from '../components/CtaBanner'
import Timeline from '../components/TimeLine'

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <Timeline />
      <SolutionsSection />
      <MetricsSection />
      <IndustriesSection />
      <ServicesSection />
      <TestimonialsSection />
      <PartnersSection />
      <CtaBanner />
    </>
  )
}
