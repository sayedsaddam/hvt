import React, { useState } from 'react';
import { Search, Filter, Tag, Star, ShoppingCart } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Products', count: 48 },
    { id: 'kitchen', name: 'Kitchen & Catering', count: 12 },
    { id: 'cleaning', name: 'Cleaning Supplies', count: 8 },
    { id: 'office', name: 'Office Supplies', count: 10 },
    { id: 'textiles', name: 'Textiles & Linens', count: 7 },
    { id: 'equipment', name: 'Equipment', count: 6 },
    { id: 'personal', name: 'Personal Care', count: 5 }
  ];

  const products = [
    {
      id: 1,
      name: 'Premium Kitchen Knife Set',
      category: 'kitchen',
      price: '$299.99',
      rating: 4.8,
      reviews: 24,
      image: 'https://images.pexels.com/photos/4226876/pexels-photo-4226876.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Professional-grade stainless steel knife set perfect for restaurants and hotels.',
      features: ['Stainless Steel', 'Ergonomic Handle', 'Professional Grade']
    },
    {
      id: 2,
      name: 'Industrial Vacuum Cleaner',
      category: 'cleaning',
      price: '$449.99',
      rating: 4.9,
      reviews: 18,
      image: 'https://images.pexels.com/photos/6195114/pexels-photo-6195114.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Heavy-duty vacuum cleaner suitable for commercial and office environments.',
      features: ['High Suction Power', 'Large Capacity', 'HEPA Filter']
    },
    {
      id: 3,
      name: 'Executive Office Chair',
      category: 'office',
      price: '$399.99',
      rating: 4.7,
      reviews: 31,
      image: 'https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Ergonomic leather office chair with lumbar support and adjustable height.',
      features: ['Leather Upholstery', 'Lumbar Support', 'Height Adjustable']
    },
    {
      id: 4,
      name: 'Hotel Quality Bed Linens',
      category: 'textiles',
      price: '$159.99',
      rating: 4.6,
      reviews: 42,
      image: 'https://images.pexels.com/photos/271897/pexels-photo-271897.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Luxury cotton bed linen set including sheets, pillowcases, and duvet covers.',
      features: ['100% Cotton', 'Thread Count 400', 'Machine Washable']
    },
    {
      id: 5,
      name: 'Commercial Coffee Machine',
      category: 'equipment',
      price: '$1,299.99',
      rating: 4.8,
      reviews: 15,
      image: 'https://images.pexels.com/photos/4226861/pexels-photo-4226861.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Professional espresso machine perfect for cafes, restaurants, and offices.',
      features: ['Dual Boiler', 'Steam Wand', 'Programmable']
    },
    {
      id: 6,
      name: 'Eco-Friendly Cleaning Set',
      category: 'cleaning',
      price: '$89.99',
      rating: 4.5,
      reviews: 28,
      image: 'https://images.pexels.com/photos/4099235/pexels-photo-4099235.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Complete eco-friendly cleaning solution for environmentally conscious businesses.',
      features: ['Biodegradable', 'Non-Toxic', 'Concentrated Formula']
    },
    {
      id: 7,
      name: 'Professional Cookware Set',
      category: 'kitchen',
      price: '$549.99',
      rating: 4.9,
      reviews: 19,
      image: 'https://images.pexels.com/photos/4226876/pexels-photo-4226876.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Complete stainless steel cookware set for commercial kitchens and restaurants.',
      features: ['Stainless Steel', 'Induction Ready', 'Dishwasher Safe']
    },
    {
      id: 8,
      name: 'Premium Bath Towel Set',
      category: 'textiles',
      price: '$79.99',
      rating: 4.7,
      reviews: 35,
      image: 'https://images.pexels.com/photos/6198368/pexels-photo-6198368.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Luxury hotel-grade towel set made from Egyptian cotton.',
      features: ['Egyptian Cotton', 'Highly Absorbent', 'Quick Dry']
    },
    {
      id: 9,
      name: 'Wireless Conference System',
      category: 'office',
      price: '$899.99',
      rating: 4.6,
      reviews: 12,
      image: 'https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Advanced wireless conference system for modern meeting rooms.',
      features: ['Wireless', 'HD Audio', 'Easy Setup']
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover our comprehensive range of high-quality products for hotels, restaurants, offices, and homes
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
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="text-sm text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Categories */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Tag className="h-5 w-5 mr-2" />
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-200 flex justify-between items-center ${
                      selectedCategory === category.id
                        ? 'bg-blue-100 text-blue-800'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className="text-sm text-gray-500">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
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
                      <div className="text-xl font-bold text-blue-600">{product.price}</div>
                    </div>
                    
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                      <ShoppingCart className="h-4 w-4" />
                      <span>Request Quote</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;