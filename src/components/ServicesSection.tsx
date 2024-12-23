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

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Advisory Services',
    description:
      'Strategic IT consulting to align technology with your business goals.',
    backgroundImage:
      'https://t4.ftcdn.net/jpg/08/76/75/27/240_F_876752752_j04eQHdAKo6nOfM6VJrkG21K98AiPTOx.jpg',
    accentColor: 'bg-blue-600',
    details: `
      Our advisory services focus on helping businesses maximize the value of their technology investments. 
      We provide IT strategy development, technology roadmap planning, and comprehensive business alignment consulting. 
      Whether you’re undergoing a digital transformation or optimizing your current processes, our experts ensure 
      your technology supports your long-term objectives and delivers measurable results.`,
  },
  {
    title: 'Managed Security Services',
    description:
      '24/7 security monitoring and threat detection for your infrastructure.',
    backgroundImage:
      'https://img.freepik.com/free-vector/abstract-secure-technology-wallpaper_52683-28465.jpg?t=st=1734551509~exp=1734555109~hmac=6f26a8016627ac8c6c456bcf4e1526f57430798b833e546b96abfd9a40ba05de&w=996',
    accentColor: 'bg-red-600',
    details: `
      Our managed security services provide proactive protection for your digital assets. 
      We offer real-time threat detection, 24/7 security monitoring, and incident response to safeguard 
      your infrastructure. Additionally, we ensure compliance with industry standards such as GDPR, HIPAA, 
      and ISO 27001. Let us help you protect sensitive data, minimize risks, and stay ahead of evolving cyber threats.`,
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions designed for your business needs.',
    backgroundImage:
      'https://t3.ftcdn.net/jpg/09/18/25/86/240_F_918258680_gTWTo3p7G5kY4KEYQ8WYBJCE5I1jkPRx.jpg',
    accentColor: 'bg-green-600',
    details: `
      Our cloud infrastructure services provide a foundation for agility, scalability, and innovation. 
      We specialize in cloud architecture design, migration planning, and cost optimization. 
      Whether you’re looking to move to AWS, Azure, Google Cloud, or a hybrid solution, we ensure seamless transitions 
      and ongoing management to meet your evolving business demands. Empower your business with resilient cloud solutions.`,
  },
  {
    title: 'Data Analytics & Insights',
    description:
      'Transform raw data into actionable insights for informed decision-making.',
    backgroundImage:
      'https://img.freepik.com/free-vector/analytics-data-management-process-diagram_456031-204.jpg?w=900',
    accentColor: 'bg-purple-600',
    details: `
      Unlock the potential of your data with our analytics and insights services. 
      We provide advanced data modeling, visualization, and predictive analytics to help businesses gain a competitive edge. 
      From building custom dashboards to implementing AI-driven solutions, our team ensures that your data tells a meaningful story 
      that drives business growth and operational efficiency.`,
  },
  {
    title: 'DevOps & Automation',
    description:
      'Streamline your development and operations with automated workflows and CI/CD pipelines.',
    backgroundImage:
      'https://media.istockphoto.com/id/1367728715/vector/devops-concept-with-infinite-loop-on-abstract-technology-background.jpg?s=612x612&w=0&k=20&c=aadwZ3TQPv31Qxd_RyCwvoNNHBT1kNiaoksHtPdfKAA=',
    accentColor: 'bg-orange-600',
    details: `
      Accelerate your software delivery with our DevOps and automation services. 
      We design and implement CI/CD pipelines, infrastructure as code (IaC), and robust monitoring systems. 
      By automating repetitive tasks and optimizing workflows, we reduce deployment times and enhance collaboration 
      between your development and operations teams. Focus on innovation while we handle scalability and efficiency.`,
  },
]

export default function ServicesSection() {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const toggleAccordion = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Featured Services
        </h2>
        <div className="space-y-8 mx-6 sm:mx-8 lg:mx-16 xl:mx-24">
          {services.map((service, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-md bg-white"
            >
              {/* Header Section */}
              <div
                className="cursor-pointer flex items-center justify-between px-6 py-4"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-xl font-bold text-gray-800">
                  {service.title}
                </h3>
                <span
                  className={`transition-transform ${
                    expandedIndex === index ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  ▼
                </span>
              </div>

              {/* Expandable Content */}
              {expandedIndex === index && (
                <div
                  className="p-6 bg-cover bg-center text-white rounded-b-lg"
                  style={{
                    backgroundImage: `url(${service.backgroundImage})`,
                  }}
                >
                  <div className="bg-black/70 p-4 rounded-lg">
                    <p className="text-white mb-4">{service.description}</p>
                    <p className="text-gray-200 mb-4">{service.details}</p>
                    <Link
                      to="/services"
                      className={`inline-block px-4 py-2 font-semibold rounded-lg text-white ${service.accentColor} hover:opacity-90`}
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
