import React from 'react';

export default function ServicesHero() {
  return (
    <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000)',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Discover how IDM Codes empowers businesses with cutting-edge IT solutions
          and exceptional service delivery.
        </p>
        <a
          href="#services"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg 
          transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
        >
          Explore Our Services
        </a>
      </div>
    </div>
  );
}