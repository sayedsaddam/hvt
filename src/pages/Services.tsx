import React from 'react';
import { 
  Truck, 
  CheckCircle, 
  Clock, 
  Shield, 
  Users, 
  BarChart3, 
  Headphones, 
  Globe,
  ArrowRight,
  Package,
  Settings,
  Award
} from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: Package,
      title: 'Supply Chain Management',
      description: 'End-to-end supply chain solutions tailored to your business needs',
      features: [
        'Procurement planning and optimization',
        'Vendor management and selection',
        'Inventory management systems',
        'Cost optimization strategies'
      ],
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Truck,
      title: 'Logistics & Delivery',
      description: 'Reliable transportation and delivery services across all locations',
      features: [
        'Same-day and next-day delivery',
        'Temperature-controlled transport',
        'Real-time tracking systems',
        'Flexible delivery schedules'
      ],
      image: 'https://images.pexels.com/photos/1778/pexels-photo-1778.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Settings,
      title: 'Custom Solutions',
      description: 'Tailored solutions designed specifically for your industry requirements',
      features: [
        'Industry-specific product curation',
        'Custom packaging and branding',
        'Specialized handling requirements',
        'Bespoke delivery schedules'
      ],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Comprehensive insights to optimize your procurement and inventory',
      features: [
        'Detailed usage analytics',
        'Cost analysis and forecasting',
        'Performance monitoring',
        'Custom reporting dashboards'
      ],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const supportServices = [
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Rigorous quality control ensuring every product meets our high standards'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer service for urgent requirements and queries'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Comprehensive insurance and risk mitigation for all shipments'
    },
    {
      icon: Users,
      title: 'Account Management',
      description: 'Dedicated account managers for personalized service and support'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'International sourcing and delivery capabilities across 50+ countries'
    },
    {
      icon: Award,
      title: 'Compliance',
      description: 'Full regulatory compliance and certification management'
    }
  ];

  const industryServices = [
    {
      title: 'Hotels & Hospitality',
      description: 'Comprehensive solutions for guest services, housekeeping, and F&B operations',
      icon: '🏨',
      services: ['Guest amenities', 'Housekeeping supplies', 'Restaurant equipment', 'Maintenance tools']
    },
    {
      title: 'Restaurants & Cafes',
      description: 'Complete kitchen solutions from ingredients to equipment and supplies',
      icon: '🍽️',
      services: ['Fresh ingredients', 'Kitchen equipment', 'Serving supplies', 'Cleaning materials']
    },
    {
      title: 'Offices & Corporate',
      description: 'Professional supplies and equipment for modern workplace environments',
      icon: '🏢',
      services: ['Office supplies', 'IT equipment', 'Furniture', 'Maintenance services']
    },
    {
      title: 'Home & Individual',
      description: 'Premium home supplies and personal products for discerning customers',
      icon: '🏠',
      services: ['Home appliances', 'Personal care', 'Cleaning supplies', 'Specialty items']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions designed to meet your unique business requirements with 
            excellence, reliability, and unmatched customer service.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four pillars of excellence that form the foundation of our service offering
            </p>
          </div>

          <div className="space-y-16">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  <div className="lg:w-1/2">
                    <div className="relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="rounded-lg shadow-xl w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-blue-900 opacity-20 rounded-lg"></div>
                    </div>
                  </div>
                  <div className="lg:w-1/2 space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                        <IconComponent className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Support Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Additional services that ensure your experience with us is seamless and worry-free
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <IconComponent className="h-6 w-6 text-blue-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry-Specific Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized services tailored for each industry we serve
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industryServices.map((industry, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:bg-blue-50 transition-colors duration-300 group">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-4xl">{industry.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{industry.title}</h3>
                    <p className="text-gray-600">{industry.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {industry.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A streamlined approach to ensure optimal results for every client
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Understanding your specific needs and requirements' },
              { step: '02', title: 'Planning', description: 'Developing a customized solution strategy' },
              { step: '03', title: 'Implementation', description: 'Executing the plan with precision and care' },
              { step: '04', title: 'Support', description: 'Ongoing support and optimization' }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-colors duration-300">
                  <span className="text-xl font-bold">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
                {index < 3 && (
                  <ArrowRight className="h-6 w-6 text-blue-400 mx-auto mt-6 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Experience Our Services?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us create a customized solution that meets your unique requirements and exceeds your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <span>Get Started Today</span>
              <ArrowRight size={20} />
            </a>
            <a
              href="tel:+1-555-123-4567"
              className="bg-transparent border-2 border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <Headphones size={20} />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;