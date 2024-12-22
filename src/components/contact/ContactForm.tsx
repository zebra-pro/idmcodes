import React, { useState } from 'react'
import { Send } from 'lucide-react'
import FormField from './FormField'
import FileUpload from './FileUpload'

type FormData = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  file?: File | null
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    file: null,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.size <= 10 * 1024 * 1024) {
      setFormData((prev) => ({ ...prev, file }))
    } else {
      alert('File size must be less than 10MB')
    }
  }

  if (submitted) {
    return (
      <div className="text-center p-8 bg-blue-50 rounded-lg">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">
          Thank you for reaching out!
        </h3>
        <p className="text-blue-600">
          We'll get back to you within 1-2 business days.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormField
        label="Name"
        id="name"
        required
        placeholder="Your full name"
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      <FormField
        label="Email Address"
        id="email"
        type="email"
        required
        placeholder="you@example.com"
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, email: e.target.value }))
        }
      />
      <FormField
        label="Phone Number"
        id="phone"
        type="tel"
        placeholder="(optional)"
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, phone: e.target.value }))
        }
      />
      <FormField
        label="Subject"
        id="subject"
        required
        placeholder="What's this about?"
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, subject: e.target.value }))
        }
      />
      <FormField
        label="Message"
        id="message"
        required
        multiline
        placeholder="Your message here..."
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, message: e.target.value }))
        }
      />
      <FileUpload onChange={handleFileChange} fileName={formData.file?.name} />
      <button
        type="submit"
        className="w-full inline-flex justify-center items-center px-6 py-3 rounded-lg text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
      >
        <Send className="w-4 h-4 mr-2" />
        Send Message
      </button>
    </form>
  )
}
