import React from 'react'
import { FactPanel } from '../components/about/FactPanel'
import { TeamMember } from '../components/about/TeamMember'
import { CoreValue } from '../components/about/CoreValue'
import { Section } from '../components/about/Section'
import { Lightbulb, Shield, Users } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Opening Section */}
      <Section background="white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
            IDM Codes: Empowering Innovation Since 2014
          </h1>
          <FactPanel />
        </div>
      </Section>

      {/* Who We Are */}
      <Section background="gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Who We Are
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                IDMCodes is a global consulting firm that delivers deep
                expertise, objective insights, a tailored approach and
                unparalleled collaboration to help leaders confidently face the
                future. Our consulting solutions span critical business problems
                in technology, business process, analytics, risk, compliance,
                transactions and internal audit. We are committed to attracting
                and developing a diverse workforce of professionals that share
                the common value of collaboration. As an organization, we
                believe that by teaming together, with each other, and our
                clients, we can see beyond the surface of changes and problems
                organizations face in this fast changing world to discover
                opportunities others might miss and face the future with greater
                confidence.
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                alt="Team collaboration"
                className="rounded-lg shadow-xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Vision and Mission */}
      <Section background="white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Our Vision and Mission
            </h2>
            <div className="mb-8">
              <h3 className="text-lg md:text-xl font-semibold mb-4">Vision</h3>
              <p className="text-base md:text-lg text-gray-700">
                To transform the way businesses operate by delivering seamless,
                secure, and innovative software solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4">Mission</h3>
              <p className="text-base md:text-lg text-gray-700">
                We aim to simplify complexity and empower businesses worldwide
                with cutting-edge technology tailored to their unique needs.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Meet Our CEO */}
      <Section background="gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative aspect-[4/3] w-full order-1 md:order-none">
              <img
                src="https://idmcodes.in/assets/custom/images/ceo.jpg"
                alt="CEO Portrait"
                className="rounded-lg shadow-xl object-cover w-full h-full"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Meet Our Visionary Leader
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                Under the leadership of Siva Sankar, IDM Codes has become a
                trusted name in the software industry. With over 15 years of
                experience and a passion for innovation, John has guided the
                company to new heights, fostering a culture of creativity and
                excellence.
              </p>
              <blockquote className="border-l-4 border-blue-600 pl-4 italic text-base md:text-lg text-gray-700">
                "At IDM Codes, we're not just building software—we're building
                the future."
              </blockquote>
            </div>
          </div>
        </div>
      </Section>

      {/* Meet Our Team */}
      <Section background="white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            The People Behind Our Success
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <TeamMember
              name="Sarah Johnson"
              role="Lead Developer"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              linkedIn="https://linkedin.com"
            />
            <TeamMember
              name="Michael Chen"
              role="UX Director"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
              linkedIn="https://linkedin.com"
            />
            <TeamMember
              name="Emily Rodriguez"
              role="Product Manager"
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
              linkedIn="https://linkedin.com"
            />
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section background="gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <CoreValue
              icon={Lightbulb}
              title="Innovation"
              description="Pioneering new solutions to meet the demands of tomorrow"
            />
            <CoreValue
              icon={Shield}
              title="Integrity"
              description="Building trust through transparency and accountability"
            />
            <CoreValue
              icon={Users}
              title="Collaboration"
              description="Achieving greatness together with our clients and team"
            />
          </div>
        </div>
      </Section>

      {/* Future Vision */}
      <Section background="white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Our Future Vision
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              As we look to the future, IDM Codes remains committed to advancing
              technology and empowering businesses to achieve their full
              potential. Together, we'll continue to shape a better, more
              connected world.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}
