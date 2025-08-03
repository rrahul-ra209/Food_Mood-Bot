import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Utensils className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold">MoodFood AI</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Making dining decisions effortless with AI-powered food recommendations 
              based on your mood, preferences, and health goals.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>hello@moodfood.ai</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-orange-400 transition-colors">Home</Link></li>
              <li><Link to="/how-it-works" className="text-gray-400 hover:text-orange-400 transition-colors">How It Works</Link></li>
              <li><Link to="/demo" className="text-gray-400 hover:text-orange-400 transition-colors">Try Demo</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-orange-400 transition-colors">About</Link></li>
            </ul>
          </div>

          {/* For Business */}
          <div>
            <h3 className="text-lg font-semibold mb-4">For Business</h3>
            <ul className="space-y-2">
              <li><Link to="/for-restaurants" className="text-gray-400 hover:text-orange-400 transition-colors">For Restaurants</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-orange-400 transition-colors">Contact Sales</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">API Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 MoodFood AI. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center mt-2 md:mt-0">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for better dining experiences
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;