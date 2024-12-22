import React from 'react';
import { Service } from '../../types/services';
import { ArrowRight } from 'lucide-react';

interface ServiceSectionProps {
  service: Service;
  isEven: boolean;
}

export default function ServiceSection({ service, isEven }: ServiceSectionProps) {
  return (
    <section id={service.id} className="py-24 relative overflow-hidden">
      {/* Background with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-10"
        style={{ backgroundImage: `url(${service.backgroundImage})` }}
      />
      
      <div className="container mx-auto px-4">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${isEven ? '' : 'md:grid-flow-dense'}`}>
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {service.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {service.description}
            </p>
            
            {/* Features List */}
            <div className="space-y-4">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <ArrowRight className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="pt-4">
              <a
                href={`/contact?service=${service.id}`}
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Image */}
          <div className={`relative ${isEven ? 'md:order-last' : ''}`}>
            <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-2xl">
              <img
                src={service.image}
                alt={service.title}
                className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}