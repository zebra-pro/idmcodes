import React from 'react';
import ScrollArrow from '../ui/ScrollArrow';

export default function ServiceHero() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-list');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
          Explore What We Offer
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-16">
          Empowering businesses with cutting-edge IT solutions and exceptional service delivery
        </p>
        
        {/* Animated Scroll Arrow */}
        <ScrollArrow onClick={scrollToServices} />
      </div>
    </div>
  );
}