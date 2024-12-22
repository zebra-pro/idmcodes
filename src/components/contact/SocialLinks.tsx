import React from 'react'
import { Linkedin, Twitter, Facebook } from 'lucide-react'

export default function SocialLinks() {
  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ]

  return (
    <div className="flex justify-center space-x-6">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          <Icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  )
}
