import React from 'react';
import { Package, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Package className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">High Vision Trading</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner for quality products and reliable supply solutions. 
              Serving hotels, restaurants, offices, and homes with excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-white transition-colors duration-200">Products</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white transition-colors duration-200">Services</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">info@highvisionstrading.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5" />
                <span className="text-gray-300">123 Business District<br />Suite 456, City, State 12345</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Business Hours</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-blue-400" />
                <div className="text-gray-300">
                  <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 High Vision Trading. All rights reserved. | 
            <a href="#" className="hover:text-white transition-colors duration-200"> Privacy Policy</a> | 
            <a href="#" className="hover:text-white transition-colors duration-200"> Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;