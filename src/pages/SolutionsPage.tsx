import React from 'react'
import { ParallaxSection } from '../components/solutions/ParallaxSection'
import { SolutionCard } from '../components/solutions/SolutionCard'
import { HeroSection } from '../components/solutions/HeroSection'
import Footer from '../components/Footer'

const solutions = [
  {
    title: 'Identity Access and Management (IAM)',
    intro: `Ensure secure access to your company's resources and data with our IAM solutions, designed to protect your business from unauthorized access while enhancing user convenience.`,
    details:
      'Our IAM services help businesses enforce policies around who can access critical applications, systems, and data. We specialize in identity verification, multi-factor authentication, user provisioning, and real-time monitoring. With IAM, you can automate user access control and reduce the risk of security breaches. We also ensure compliance with industry regulations like GDPR, HIPAA, and others, all while providing a seamless experience for users.',
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
  },
  {
    title: 'Security Operations Center (SOC)',
    intro: `Our Security Operations Center offers round-the-clock monitoring and management of security threats to safeguard your business from cyber-attacks.',
    details: 'Our SOC solutions provide continuous surveillance, monitoring for security vulnerabilities, and responding to potential incidents swiftly. We combine cutting-edge technology with industry expertise to detect threats in real time, assess risks, and mitigate attacks before they escalate. With our SOC services, you can ensure that your organization's network, applications, and data are fully protected from evolving cyber threats. Our approach is designed to provide actionable insights and proactive threat intelligence.`,
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80',
  },
  {
    title: 'Infrastructure Solutions',
    intro:
      'Build a reliable, scalable, and secure IT infrastructure with our tailored solutions designed to optimize performance and minimize downtime.',
    details: `IDM Codes offers a range of infrastructure services including cloud hosting, network management, data center optimization, and disaster recovery. We help businesses build IT systems that are robust, flexible, and scalable, ensuring high availability and performance under all conditions. Our infrastructure solutions enable organizations to enhance operational efficiency while reducing costs, allowing them to focus on growth and innovation without worrying about the reliability of their IT backbone.`,
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80',
  },
]

function Solutions() {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeroSection />

      {solutions.map((solution, index) => (
        <ParallaxSection key={index} backgroundImage={solution.image}>
          <SolutionCard
            title={solution.title}
            intro={solution.intro}
            details={solution.details}
          />
        </ParallaxSection>
      ))}

      <Footer />
    </div>
  )
}

export default Solutions
