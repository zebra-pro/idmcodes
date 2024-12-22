import React from 'react';

export default function CtaBanner() {
  return (
    <div className="relative py-16 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Elevate Your Business with IDM Codes?
        </h2>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}