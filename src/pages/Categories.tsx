import React from 'react';
import { Link } from 'react-router-dom';
import { 
  UtensilsCrossed, 
  Sparkles, 
  Briefcase, 
  Home, 
  Wrench, 
  Shirt,
  ArrowRight,
  Package
} from 'lucide-react';
import electrical from '../assets/images/electrical.webp';
import hardware from '../assets/images/hardware.webp';
import plumbing from '../assets/images/plumbing.webp';
import marine from '../assets/images/marine.webp';
import networking from '../assets/images/networking.webp';
import packaging from '../assets/images/packaging.webp';

const Categories = () => {
  const categories = [
    {
      id: 'electrical',
      name: 'Electrical Products',
      description: 'High-quality electrical equipment, components, and installation supplies for professional applications.',
      icon: UtensilsCrossed,
      image: electrical,
      productCount: 10,
      targetAudience: 'Hotels, Restaurants, Cafes',
      featured: ['Switches & Sockets', 'Floor Boxes', ' Switch Gears & Components', 'Serving equipment']
    },
    {
      id: 'hardware',
      name: 'Hardware Supplies',
      description: 'Hardware products, equipment, & maintenance supplies for industrial & commercial applications.',
      icon: Sparkles,
      image: hardware,
      productCount: 21,
      targetAudience: 'All Business Types',
      featured: ['Water Pumps', 'Multi Stage Centrifugal Pumps', 'Float Switches', 'Motor Starters']
    },
    {
      id: 'plumbing',
      name: 'Plumbing Solutions',
      description: 'Complete plumbing solutions including fixtures, fittings, tools, and maintenance equipment.',
      icon: Briefcase,
      image: plumbing,
      productCount: 21,
      targetAudience: 'Hotels, Homes',
      featured: ['Office furniture', 'Stationery', 'IT accessories', 'Storage solutions']
    },
    {
      id: 'networking',
      name: 'Networking Accessories',
      description: 'High-quality networking accessories, cables, and connectors for professional IT environments.',
      icon: Shirt,
      image: networking,
      productCount: 14,
      targetAudience: 'Offices, Corporate Spaces',
      featured: ['Cat-6 Cable', 'CCTV Cameras', 'Structure Cable System', 'Access Control System']
    },
    {
      id: 'packaging',
      name: 'Packaging Solutions',
      description: 'Professional packaging solutions and equipment for diverse business needs.',
      icon: Wrench,
      image: packaging,
      productCount: 22,
      targetAudience: 'All Business Types',
      featured: ['Boxes & Cartons', 'Bags & Pouches', 'Labels & Stickers', 'Stretch & Shrink Wraps']
    },
    {
      id: 'marine',
      name: 'Marine Solutions',
      description: 'Comprehensive Marine Solutions for Environmental Protection and Operational Safety.',
      icon: Home,
      image: marine,
      productCount: 35,
      targetAudience: 'All Business Types',
      featured: ['Debris booms', 'Oil booms', 'Ecobag Dewatering tubes', 'Mooring System']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Product Categories</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive range of products organized by category. 
            Find exactly what you need for your business or home.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each category is carefully curated to meet the specific needs of our diverse clientele
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div key={category.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
                  <div className="relative">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {category.productCount} Products
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    
                    <div className="mb-4">
                      <p className="text-xs font-medium text-blue-600 mb-2">TARGET AUDIENCE</p>
                      <p className="text-sm text-gray-700">{category.targetAudience}</p>
                    </div>
                    
                    <div className="mb-6">
                      <p className="text-xs font-medium text-blue-600 mb-2">FEATURED PRODUCTS</p>
                      <div className="flex flex-wrap gap-1">
                        {category.featured.map((item, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Link
                      to={`/products/${category.id}`}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 group"
                    >
                      <Package className="h-4 w-4" />
                      <span>View Products</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600">Total Products</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
              <div className="text-gray-600">Main Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-gray-600">Target Markets</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team can help you find the perfect products for your specific needs. 
            Contact us for personalized recommendations.
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Contact Our Experts</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Categories;