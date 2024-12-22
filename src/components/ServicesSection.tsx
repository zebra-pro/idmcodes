// import React from 'react'
// import { Shield, Server, Users } from 'lucide-react'

// const services = [
//   {
//     title: 'Advisory Services',
//     description:
//       'Strategic IT consulting to align technology with your business goals.',
//     icon: Users,
//   },
//   {
//     title: 'Managed Security Services',
//     description:
//       '24/7 security monitoring and threat detection for your infrastructure.',
//     icon: Shield,
//   },
//   {
//     title: 'Cloud Infrastructure',
//     description: 'Scalable cloud solutions designed for your business needs.',
//     icon: Server,
//   },
// ]

// export default function ServicesSection() {
//   return (
//     <div className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-12">
//           Featured Services
//         </h2>
//         {/* Added responsive margins to the grid */}
//         <div className="grid md:grid-cols-3 gap-8 mx-6 sm:mx-8 lg:mx-16 xl:mx-24">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
//             >
//               <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
//                 <service.icon className="w-8 h-8 text-blue-600" />
//               </div>
//               <h3 className="text-xl font-bold mb-4">{service.title}</h3>
//               <p className="text-gray-600 mb-6">{service.description}</p>
//               <a
//                 href="/services"
//                 className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
//               >
//                 Learn More →
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

import React from 'react'
import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Advisory Services',
    description:
      'Strategic IT consulting to align technology with your business goals.',
    backgroundImage:
      'https://t4.ftcdn.net/jpg/08/76/75/27/240_F_876752752_j04eQHdAKo6nOfM6VJrkG21K98AiPTOx.jpg',
    accentColor: 'bg-blue-600',
  },
  {
    title: 'Managed Security Services',
    description:
      '24/7 security monitoring and threat detection for your infrastructure.',
    backgroundImage:
      'https://img.freepik.com/free-vector/abstract-secure-technology-wallpaper_52683-28465.jpg?t=st=1734551509~exp=1734555109~hmac=6f26a8016627ac8c6c456bcf4e1526f57430798b833e546b96abfd9a40ba05de&w=996',
    accentColor: 'bg-red-600',
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions designed for your business needs.',
    backgroundImage:
      'https://t3.ftcdn.net/jpg/09/18/25/86/240_F_918258680_gTWTo3p7G5kY4KEYQ8WYBJCE5I1jkPRx.jpg',
    accentColor: 'bg-green-600',
  },
]

export default function ServicesSection() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Featured Services
        </h2>
        <div className="grid md:grid-cols-3 gap-16 mx-6 sm:mx-8 lg:mx-16 xl:mx-24">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative h-[500px] rounded-2xl overflow-hidden group"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${service.backgroundImage})`,
                  // various filter options: blur, brightness, contrast, grayscale, hue-rotate, invert, opacity, saturate
                }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div
                  className={`absolute bottom-0 left-0 h-1 ${service.accentColor} w-full transition-all duration-300 group-hover:h-2`}
                />
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-200 mb-4">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-white font-semibold hover:text-opacity-80"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
