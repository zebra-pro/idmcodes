import React from 'react'

export default function Hero() {
  return (
    <div className="relative h-[500px] flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
        <p className="text-xl">
          We're looking for passionate individuals to help shape the future of
          technology. Join us in building innovative solutions that make a
          difference.
        </p>
      </div>
    </div>
  )
}
