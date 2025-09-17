import React from 'react';
import { Award, Users, Globe, TrendingUp, Eye, Target, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '500+', label: 'Happy Clients', icon: Users },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '50+', label: 'Countries Served', icon: Globe },
    { number: '99%', label: 'Client Satisfaction', icon: TrendingUp }
  ];

  const values = [
    {
      icon: Eye,
      title: 'Vision',
      description: 'To be the leading trading partner recognized for exceptional quality, reliability, and customer service across all industries we serve.'
    },
    {
      icon: Target,
      title: 'Mission',
      description: 'To provide high-quality products and comprehensive supply solutions that empower our clients to achieve their business goals while building lasting partnerships.'
    },
    {
      icon: Heart,
      title: 'Values',
      description: 'Integrity, excellence, reliability, and customer-centricity guide everything we do. We believe in sustainable practices and ethical business relationships.'
    }
  ];

  const team = [
    {
      name: 'James Anderson',
      role: 'Chief Executive Officer',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: '15+ years in international trading with expertise in supply chain management and business development.'
    },
    {
      name: 'Maria Garcia',
      role: 'Operations Director',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Logistics expert ensuring seamless operations and timely deliveries across all our service areas.'
    },
    {
      name: 'David Kim',
      role: 'Quality Assurance Manager',
      image: 'https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Quality control specialist with rigorous standards ensuring every product meets our excellence criteria.'
    },
    {
      name: 'Sarah Thompson',
      role: 'Customer Relations Manager',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Dedicated to building strong client relationships and ensuring exceptional customer experiences.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600)'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About High Vision Trading</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Building partnerships, delivering excellence, and creating value for over 15 years in the trading industry.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-blue-600 group-hover:text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2009, High Vision Trading began as a small family business with a simple vision: 
                  to provide high-quality products and exceptional service to businesses and individuals who 
                  demand excellence.
                </p>
                <p>
                  Over the years, we have grown from a local supplier to a trusted international trading partner, 
                  serving hotels, restaurants, offices, and homes across multiple countries. Our success is built 
                  on strong relationships, unwavering quality standards, and a deep understanding of our clients' needs.
                </p>
                <p>
                  Today, we continue to innovate and expand our product range while maintaining the personal touch 
                  and attention to detail that has been our hallmark from day one. Every product we supply and every 
                  service we provide reflects our commitment to excellence and our clients' success.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our warehouse and operations"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-blue-900 opacity-20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Foundation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our decisions and shape our relationships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <IconComponent className="h-10 w-10 text-blue-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Certifications & Standards
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              'ISO 9001:2015',
              'ISO 14001:2015',
              'HACCP Certified',
              'Fair Trade Certified'
            ].map((cert, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-blue-50 transition-colors duration-300">
                <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <p className="font-semibold text-gray-900">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;