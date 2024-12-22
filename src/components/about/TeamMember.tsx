import React from 'react'
import { Linkedin } from 'lucide-react'

interface TeamMemberProps {
  name: string
  role: string
  image: string
  linkedIn?: string
}

export function TeamMember({ name, role, image, linkedIn }: TeamMemberProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-white font-semibold text-xl">{name}</h3>
        <p className="text-gray-200">{role}</p>
        {linkedIn && (
          <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors mt-2"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  )
}
