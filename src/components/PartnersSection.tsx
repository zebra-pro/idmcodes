import React from 'react'

const PartnersSection = () => {
  // Your partners data
  const partners = [
    {
      id: 'microsoft',
      name: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
    },
    {
      id: 'aws',
      name: 'Amazon Web Services',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    },
    {
      id: 'google',
      name: 'Google Cloud',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Google_Cloud_Logo.svg',
    },
    {
      id: 'salesforce',
      name: 'Salesforce',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg',
    },
  ]

  // Function to repeat partners array to fill the row
  const getRepeatedPartners = (count) => {
    const repeated = []
    while (repeated.length < count) {
      repeated.push(...partners)
    }
    return repeated
  }

  // Get enough partners to fill each row (minimum 8 items per row for smooth scrolling)
  const row1Partners = getRepeatedPartners(12)
  const row2Partners = getRepeatedPartners(12)
  const row3Partners = getRepeatedPartners(12)

  return (
    <div className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Technology Partners
        </h2>

        {/* Scrolling Container */}
        <div className="relative">
          {/* Row 1 - Scroll Right */}
          <div className="flex mb-8 animate-scroll-right">
            <div className="flex space-x-8 whitespace-nowrap">
              {row1Partners.map((partner, index) => (
                <div
                  key={`row1-${partner.id}-${index}`}
                  className="w-40 h-20 flex-shrink-0 flex items-center justify-center"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Scroll Left */}
          <div className="flex mb-8 animate-scroll-left">
            <div className="flex space-x-8 whitespace-nowrap">
              {row2Partners.map((partner, index) => (
                <div
                  key={`row2-${partner.id}-${index}`}
                  className="w-40 h-20 flex-shrink-0 flex items-center justify-center"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 3 - Scroll Right */}
          <div className="flex animate-scroll-right">
            <div className="flex space-x-8 whitespace-nowrap">
              {row3Partners.map((partner, index) => (
                <div
                  key={`row3-${partner.id}-${index}`}
                  className="w-40 h-20 flex-shrink-0 flex items-center justify-center"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-right {
          animation: scrollRight 40s linear infinite;
        }

        .animate-scroll-left {
          animation: scrollLeft 40s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-scroll-right {
            animation-duration: 25s;
          }
          .animate-scroll-left {
            animation-duration: 25s;
          }
        }

        /* Pause animation on hover */
        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export default PartnersSection
