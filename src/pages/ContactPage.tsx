import React from 'react'
import ContactForm from '../components/contact/ContactForm'
import SocialLinks from '../components/contact/SocialLinks'
import Faq from '../components/contact/Faq'

function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-[40vh] bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Get Connected
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Have questions or need assistance? Reach out to our team, and we'll
            be in touch soon.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 py-12 sm:px-6">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Get in Touch
          </h2>
          <ContactForm />

          <div className="mt-12 pt-8 border-t border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">
              Follow Us
            </h3>
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
