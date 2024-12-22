import React from 'react';
import ServiceCard from './ServiceCard';
import { services } from '../../data/services';

export default function ServicesList() {
  return (
    <div id="services-list" className="bg-white">
      {services.map((service, index) => (
        <ServiceCard
          key={service.id}
          service={service}
          isEven={index % 2 === 0}
        />
      ))}
    </div>
  );
}