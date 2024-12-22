import React, { useState, useMemo } from 'react'
import Hero from '../components/careers/Hero'
import SearchAndFilter from '../components/careers/SearchAndFilter'
import JobCard from '../components/careers/JobCard'
import Testimonials from '../components/careers/Testimonials'
import { jobs } from '../data/Jobs'

function CareersPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({
    jobType: '',
    department: '',
    location: '',
  })

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesType =
        !filters.jobType ||
        job.type.toLowerCase() === filters.jobType.toLowerCase()
      const matchesDepartment =
        !filters.department ||
        job.department.toLowerCase() === filters.department.toLowerCase()
      const matchesLocation =
        !filters.location ||
        job.location.toLowerCase() === filters.location.toLowerCase()

      return (
        matchesSearch && matchesType && matchesDepartment && matchesLocation
      )
    })
  }, [searchTerm, filters])

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />

      <main className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Current Opportunities
        </h2>

        <SearchAndFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filters={filters}
          setFilters={setFilters}
        />

        <div className="mt-8 space-y-6">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}

          {filteredJobs.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No jobs found matching your criteria. Try adjusting your search or
              filters.
            </div>
          )}
        </div>
      </main>

      <Testimonials />

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About IDM Codes</h3>
              <p className="text-gray-400">
                We're building the future of technology, one line of code at a
                time. Join us in our mission to innovate and create meaningful
                solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Company Overview
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} IDM Codes. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default CareersPage
