import React from 'react';
import ServiceHero from '../components/services/ServiceHero';
import ServicesList from '../components/services/ServicesList';
import ContactCTA from '../components/services/ContactCTA';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero />
      <ServicesList />
      <ContactCTA />
    </div>
  );
}