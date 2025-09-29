import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Search, Filter, Star, ShoppingCart, ArrowLeft, Package } from 'lucide-react';
import electrical from '../assets/images/electrical.webp';
import hardware from '../assets/images/hardware.webp';
import plumbing from '../assets/images/plumbing.webp';
import marine from '../assets/images/marine.webp';
import networking from '../assets/images/networking.webp';
import packaging from '../assets/images/packaging.webp';

// CategoryProducts - Electrical Products
import switches from '../assets/images/electrical/switches-sockets.webp';
import floorbox from '../assets/images/electrical/floor-box.webp';
import switchgears from '../assets/images/electrical/switch-gears.webp';
import fansexhaust from '../assets/images/electrical/fans-exhaust.webp';
import conduit from '../assets/images/electrical/conduit-pipes.webp';
import daytacabinets from '../assets/images/electrical/dayta-cabinets.webp';
import isolators from '../assets/images/electrical/isolators.webp';
import lightings from '../assets/images/electrical/lightings.webp';
import plugtops from '../assets/images/electrical/plug-tops-extensions.webp';
import pvcgi from '../assets/images/electrical/pvc-gi-adaptable-boxes.webp';

// CategoryProducts - Hardware Supplies
import autopressurekits from '../assets/images/hardware/auto-pressure-kits.webp';
import bathroomfaucets from '../assets/images/hardware/bathroom-faucets.webp';
import floatswitches from '../assets/images/hardware/float-switches.webp';
import motorstarters from '../assets/images/hardware/motor-starters.webp';
import multistagepump from '../assets/images/hardware/multi-stage-pump.webp';
import peripheralwaterpump from '../assets/images/hardware/peripheral-water-pump.webp';
import triggersprays from '../assets/images/hardware/trigger-sprays.webp';
import waterpumps from '../assets/images/hardware/water-pumps.webp';
import anglevalve from '../assets/images/hardware/angle-valve.webp';
import cuttingtools from '../assets/images/hardware/cutting-tools.webp';
import fasteningtools from '../assets/images/hardware/fastening-tools.webp';
import hammers from '../assets/images/hardware/hammers.webp';
import kitchenmixer from '../assets/images/hardware/kitchen-mixer.webp';
import pliers from '../assets/images/hardware/pliers.webp';
import powertools from '../assets/images/hardware/power-tools.webp';
import singleleverbath from '../assets/images/hardware/single-lever-bath.webp';
import singleleverwashbasin from '../assets/images/hardware/single-lever-wash-basin.webp';
import toolbox from '../assets/images/hardware/tool-box.webp';
import waterheaterblu from '../assets/images/hardware/water-heater-blu.webp';
import waterheater from '../assets/images/hardware/water-heater.webp';

// CategoryProducts - Plumbing Solutions
import plumbing1 from '../assets/images/plumbing/plumbing-material-1.webp';
import plumbing2 from '../assets/images/plumbing/plumbing-material-2.webp';
import plumbing3 from '../assets/images/plumbing/plumbing-material-3.webp';
import plumbing4 from '../assets/images/plumbing/plumbing-material-4.webp';
import plumbing5 from '../assets/images/plumbing/plumbing-material-5.webp';

const CategoryProducts = () => {
  const { categoryId } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  // Category information
  const categoryInfo = {
    electrical: {
      name: 'Electrical Products',
      description: 'High-quality electrical equipment, components, and installation supplies for professional applications.',
      image: electrical
    },
    hardware: {
      name: 'Hardware Supplies',
      description: 'Hardware products, equipment, & maintenance supplies for industrial & commercial applications.',
      image: hardware
    },
    plumbing: {
      name: 'Plumbing Solutions',
      description: 'Complete plumbing solutions including fixtures, fittings, tools, and maintenance equipment.',
      image: plumbing
    },
    networking: {
      name: 'Networking Accessories',
      description: 'High-quality networking accessories, cables, and connectors for professional IT environments.',
      image: networking
    },
    packaging: {
      name: 'Packaging Solutions',
      description: 'Professional packaging solutions and equipment for diverse business needs.',
      image: packaging
    },
    marine: {
      name: 'Marine Solutions',
      description: 'Comprehensive Marine Solutions for Environmental Protection and Operational Safety.',
      image: marine
    }
  };

  // Sample products by category
  const allProducts = {
    electrical: [
      {
        id: 1,
        name: 'Switches & Sockets',
        price: 'Coming Soon!',
        rating: 4.8,
        reviews: 24,
        image: switches,
        description: 'High-quality switches and sockets with ergonomic designs for comfortable and reliable use.',
        features: ['Durable Construction', 'Ergonomic Design', 'Safety Features']
      },
      {
        id: 2,
        name: 'Floor Boxes',
        price: 'Coming Soon!',
        rating: 4.7,
        reviews: 18,
        image: floorbox,
        description: 'High-quality floor boxes with ergonomic design for convenient and safe access to power and data connections in any floor setting.',
        features: ['Durable Construction', 'Multi-Functionality', 'Easy Installation']
      },
      {
        id: 3,
        name: 'Switch Gears & Components',
        price: 'Coming Soon!',
        rating: 4.9,
        reviews: 32,
        image: switchgears,
        description: 'Reliable switch gears and components designed for efficient control and protection of electrical circuits, ensuring safe and stable power distribution.',
        features: ['Robust Build', 'Precision Engineering', 'High Electrical Performance']
      },
      {
        id: 4,
        name: 'Fans/Exhaust/Vortice Exhaust',
        price: 'Coming Soon!',
        rating: 4.9,
        reviews: 32,
        image: fansexhaust,
        description: 'Reliable switch gears and components designed for efficient control and protection of electrical circuits, ensuring safe and stable power distribution.',
        features: ['Robust Build', 'Precision Engineering', 'High Electrical Performance']
      },
      {
        id: 5,
        name: 'Datya Canbinets and Districbution Boards',
        price: 'Coming Soon!',
        rating: 4.9,
        reviews: 32,
        image: daytacabinets,
        description: 'Reliable switch gears and components designed for efficient control and protection of electrical circuits, ensuring safe and stable power distribution.',
        features: ['Robust Build', 'Precision Engineering', 'High Electrical Performance']
      },
      {
        id: 6,
        name: 'Weather proof isolators',
        price: 'Coming Soon!',
        rating: 4.9,
        reviews: 32,
        image: isolators,
        description: 'Reliable switch gears and components designed for efficient control and protection of electrical circuits, ensuring safe and stable power distribution.',
        features: ['Robust Build', 'Precision Engineering', 'High Electrical Performance']
      },
      {
        id: 7,
        name: 'Lightings (Bulbs all kind)',
        price: 'Coming Soon!',
        rating: 4.9,
        reviews: 32,
        image: lightings,
        description: 'Reliable switch gears and components designed for efficient control and protection of electrical circuits, ensuring safe and stable power distribution.',
        features: ['Robust Build', 'Precision Engineering', 'High Electrical Performance']
      },
      {
        id: 8,
        name: 'PVC, GI & Adaptable boxes',
        price: 'Coming Soon!',
        rating: 4.9,
        reviews: 32,
        image: pvcgi,
        description: 'Reliable switch gears and components designed for efficient control and protection of electrical circuits, ensuring safe and stable power distribution.',
        features: ['Robust Build', 'Precision Engineering', 'High Electrical Performance']
      },
      {
        id: 9,
        name: 'Plug Tops and Extension Bars',
        price: 'Coming Soon!',
        rating: 4.9,
        reviews: 32,
        image: plugtops,
        description: 'Reliable switch gears and components designed for efficient control and protection of electrical circuits, ensuring safe and stable power distribution.',
        features: ['Robust Build', 'Precision Engineering', 'High Electrical Performance']
      },
      {
        id: 10,
        name: 'Conduit Pipes and Accessories',
        price: 'Coming Soon!',
        rating: 4.9,
        reviews: 32,
        image: conduit,
        description: 'Reliable switch gears and components designed for efficient control and protection of electrical circuits, ensuring safe and stable power distribution.',
        features: ['Robust Build', 'Precision Engineering', 'High Electrical Performance']
      }
    ],
    hardware: [
      {
        id: 11,
        name: 'Water Pumps',
        price: 'Coming Soon!',
        rating: 4.9,
        reviews: 18,
        image: waterpumps,
        description: 'Heavy-duty vacuum cleaner for commercial use',
        features: ['High Suction Power', 'Large Capacity', 'HEPA Filter']
      },
      {
        id: 12,
        name: 'Multi Stage Centrifugal Pumps',
        price: 'Coming Soon!',
        rating: 4.5,
        reviews: 28,
        image: multistagepump,
        description: 'Complete eco-friendly cleaning solution set',
        features: ['Biodegradable', 'Non-Toxic', 'Concentrated Formula']
      },
      {
        id: 13,
        name: 'Automatic Pressure Control Kits',
        price: 'Coming Soon!',
        rating: 4.5,
        reviews: 28,
        image: autopressurekits,
        description: 'Complete eco-friendly cleaning solution set',
        features: ['Biodegradable', 'Non-Toxic', 'Concentrated Formula']
      },
      {
        id: 14,
        name: 'Peripheral Water Pumps',
        price: 'Coming Soon!',
        rating: 4.5,
        reviews: 28,
        image: peripheralwaterpump,
        description: 'Complete eco-friendly cleaning solution set',
        features: ['Biodegradable', 'Non-Toxic', 'Concentrated Formula']
      },
      {
        id: 15,
        name: 'Float Switches',
        price: 'Coming Soon!',
        rating: 4.5,
        reviews: 28,
        image: floatswitches,
        description: 'Complete eco-friendly cleaning solution set',
        features: ['Biodegradable', 'Non-Toxic', 'Concentrated Formula']
      },
      {
        id: 16,
        name: 'Motor Starters',
        price: 'Coming Soon!',
        rating: 4.5,
        reviews: 28,
        image: motorstarters,
        description: 'Complete eco-friendly cleaning solution set',
        features: ['Biodegradable', 'Non-Toxic', 'Concentrated Formula']
      },
      {
        id: 17,
        name: 'Bathroom Faucets and Water Showers Heads',
        price: 'Coming Soon!',
        rating: 4.5,
        reviews: 28,
        image: bathroomfaucets,
        description: 'Complete eco-friendly cleaning solution set',
        features: ['Biodegradable', 'Non-Toxic', 'Concentrated Formula']
      },
      {
        id: 18,
        name: 'Trigger Sprays Shower Head',
        price: 'Coming Soon!',
        rating: 4.5,
        reviews: 28,
        image: triggersprays,
        description: 'Complete eco-friendly cleaning solution set',
        features: ['Biodegradable', 'Non-Toxic', 'Concentrated Formula']
      },
      {
        id: 19,
        name: 'Angle Valve',
        price: 'Coming Soon!',
        rating: 4.5,
        reviews: 28,
        image: anglevalve,
        description: 'Complete eco-friendly cleaning solution set',
        features: ['Biodegradable', 'Non-Toxic', 'Concentrated Formula']
      },
      {
        id: 20,
        name: 'Single Lever Wash Basin',
        price: 'Coming Soon!',
        rating: 4.5,
        reviews: 28,
        image: singleleverwashbasin,
        description: 'Complete eco-friendly cleaning solution set',
        features: ['Biodegradable', 'Non-Toxic', 'Concentrated Formula']
      },
      {
        id: 21,
        name: 'Single Lever Bath and Shower Mixer',
        price: 'Coming Soon!',
        rating: 4.5,
        reviews: 28,
        image: singleleverbath,
        description: 'Complete eco-friendly cleaning solution set',
        features: ['Biodegradable', 'Non-Toxic', 'Concentrated Formula']
      },
      {
        id: 22,
        name: 'Single Lever Kitchen Mixer',
        price: 'Coming Soon!',
        rating: 4.5,
        reviews: 28,
        image: kitchenmixer,
        description: 'Complete eco-friendly cleaning solution set',
        features: ['Biodegradable', 'Non-Toxic', 'Concentrated Formula']
      },
      {
        id: 23,
        name: 'Hammers',
        price: 'Coming Soon!',
        rating: 4.5,
        reviews: 28,
        image: hammers,
        description: 'Complete eco-friendly cleaning solution set',
        features: ['Biodegradable', 'Non-Toxic', 'Concentrated Formula']
      },
      {
        id: 24,
        name: 'Pliers',
        price: 'Coming Soon!',
        rating: 4.5,
        reviews: 28,
        image: pliers,
        description: 'Complete eco-friendly cleaning solution set',
        features: ['Biodegradable', 'Non-Toxic', 'Concentrated Formula']
      },
      {
        id: 25,
        name: 'Fastening Tools',
        price: 'Coming Soon!',
        rating: 4.5,
        reviews: 28,
        image: fasteningtools,
        description: 'Complete eco-friendly cleaning solution set',
        features: ['Biodegradable', 'Non-Toxic', 'Concentrated Formula']
      },
      {
        id: 26,
        name: 'Cutting Tools',
        price: 'Coming Soon!',
        rating: 4.5,
        reviews: 28,
        image: cuttingtools,
        description: 'Complete eco-friendly cleaning solution set',
        features: ['Biodegradable', 'Non-Toxic', 'Concentrated Formula']
      },
      {
        id: 27,
        name: 'Power Tools',
        price: 'Coming Soon!',
        rating: 4.5,
        reviews: 28,
        image: powertools,
        description: 'Complete eco-friendly cleaning solution set',
        features: ['Biodegradable', 'Non-Toxic', 'Concentrated Formula']
      },
      {
        id: 28,
        name: 'Tool Boxes',
        price: 'Coming Soon!',
        rating: 4.5,
        reviews: 28,
        image: toolbox,
        description: 'Complete eco-friendly cleaning solution set',
        features: ['Biodegradable', 'Non-Toxic', 'Concentrated Formula']
      },
      {
        id: 29,
        name: 'Water Heater Pro IR Series',
        price: 'Coming Soon!',
        rating: 4.5,
        reviews: 28,
        image: waterheater,
        description: 'Complete eco-friendly cleaning solution set',
        features: ['Biodegradable', 'Non-Toxic', 'Concentrated Formula']
      },
      {
        id: 30,
        name: 'Water Heater Blu IR Series',
        price: 'Coming Soon!',
        rating: 4.5,
        reviews: 28,
        image: waterheaterblu,
        description: 'Complete eco-friendly cleaning solution set',
        features: ['Biodegradable', 'Non-Toxic', 'Concentrated Formula']
      }
    ],
    plumbing: [
      {
        id: 13,
        name: 'Tee, Elbow, Coupling, & Reducers',
        price: 'Coming Soon!',
        rating: 4.7,
        reviews: 31,
        image: plumbing1,
        description: 'Precision-engineered fittings for pipe branching, directional changes, connections, and diameter transitions in fluid systems.',
        features: ['Branches pipe flow', 'Durable', 'Pressure resistant']
      },
      {
        id: 14,
        name: 'PPR and PVC Pipes & Fittings',
        price: 'Coming Soon!',
        rating: 4.6,
        reviews: 22,
        image: plumbing2,
        description: 'Durable polymer pipes and fittings engineered for corrosion-resistant, high-pressure fluid transport in plumbing and industrial applications.',
        features: ['Corrosion Resistant', 'Lightweight', 'UV Resistant']
      },
      {
        id: 15,
        name: 'Stop Valves, Short Bridge, Blastic Ball Valves',
        price: 'Coming Soon!',
        rating: 4.6,
        reviews: 22,
        image: plumbing3,
        description: 'A range of high-performance valves including Stop Valves for flow control, Short Bridge designs for compact installations, and Blastic Ball Valves engineered for durability and precision in high-pressure systems. Ideal for industrial and commercial applications requiring reliable and efficient fluid management.',
        features: ['Precise shut-off', 'Leak-proof', 'Anti-corrosive']
      },
      {
        id: 16,
        name: 'Conduit Pipes, Fix Pipes, PVC Drainage Pipes',
        price: 'Coming Soon!',
        rating: 4.6,
        reviews: 22,
        image: plumbing4,
        description: 'A reliable range of piping solutions designed for electrical, structural, and drainage applications. Conduit Pipes ensure safe routing of electrical wiring, Fix Pipes offer rigid support in various construction systems, and PVC Drainage Pipes provide efficient and long-lasting wastewater management.',
        features: ['Lightweight, easy installation', 'Temperature resistant', 'UV resistant']
      },
      {
        id: 17,
        name: 'FE Double Union, Brass Unions, Reducing Elbow',
        price: 'Coming Soon!',
        rating: 4.6,
        reviews: 22,
        image: plumbing5,
        description: 'A durable selection of pipe fittings designed for secure and flexible connections in plumbing and industrial systems. FE Double Unions provide easy disassembly for maintenance, Brass Unions offer corrosion-resistant and leak-proof joins, and Reducing Elbows ensure smooth directional changes between different pipe sizes.',
        features: ['2-piece design', 'Corrosion Resistant', 'Reduce Turbulence']
      }
    ],
    networking: [
      {
        id: 18,
        name: 'Hotel Quality Bed Linens',
        price: '$159.99',
        rating: 4.6,
        reviews: 42,
        image: 'https://images.pexels.com/photos/271897/pexels-photo-271897.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Luxury cotton bed linen set for hotels',
        features: ['100% Cotton', 'Thread Count 400', 'Machine Washable']
      },
      {
        id: 19,
        name: 'Premium Bath Towel Set',
        price: '$79.99',
        rating: 4.7,
        reviews: 35,
        image: 'https://images.pexels.com/photos/6198368/pexels-photo-6198368.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Luxury hotel-grade towel set made from Egyptian cotton',
        features: ['Egyptian Cotton', 'Highly Absorbent', 'Quick Dry']
      }
    ],
    packaging: [
      {
        id: 20,
        name: 'Commercial Coffee Machine',
        price: '$1,299.99',
        rating: 4.8,
        reviews: 15,
        image: 'https://images.pexels.com/photos/4226861/pexels-photo-4226861.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Professional espresso machine for cafes and restaurants',
        features: ['Dual Boiler', 'Steam Wand', 'Programmable']
      }
    ],
    marine: [
      {
        id: 21,
        name: 'Guest Amenity Kit',
        price: '$24.99',
        rating: 4.5,
        reviews: 67,
        image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Complete guest amenity kit for hotels',
        features: ['Travel Size', 'Premium Quality', 'Eco-Friendly Packaging']
      }
    ]
  };

  const currentCategory = categoryInfo[categoryId as keyof typeof categoryInfo];
  const products = allProducts[categoryId as keyof typeof allProducts] || [];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
      case 'price-high':
        return parseFloat(b.price.replace('$', '').replace(',', '')) - parseFloat(a.price.replace('$', '').replace(',', ''));
      case 'rating':
        return b.rating - a.rating;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <Link to="/categories" className="text-blue-600 hover:text-blue-700">
            ← Back to Categories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${currentCategory.image})` }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <Link 
              to="/categories" 
              className="flex items-center text-blue-200 hover:text-white transition-colors duration-200 mr-4"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Categories
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{currentCategory.name}</h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            {currentCategory.description}
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-500" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
              <span className="text-sm text-gray-600">
                {sortedProducts.length} products found
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {sortedProducts.length === 0 ? (
            <div className="text-center py-12">
              <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your search terms or browse other categories.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedProducts.map(product => (
                <div key={product.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors duration-200">
                        <ShoppingCart className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.features.map((feature, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(product.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">({product.reviews})</span>
                      </div>
                      <div className="text-sm font-semibold text-blue-600">{product.price}</div>
                    </div>
                    
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                      <ShoppingCart className="h-4 w-4" />
                      <span>Request Quote</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CategoryProducts;