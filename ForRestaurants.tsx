import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Tablet, 
  TrendingUp, 
  Users, 
  Clock, 
  Star, 
  BarChart3, 
  Smartphone,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const ForRestaurants: React.FC = () => {
  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-green-500" />,
      title: "Increase Sales by 25%",
      description: "Personalized recommendations lead to higher order values and customer satisfaction"
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-500" />,
      title: "Reduce Decision Time",
      description: "Customers spend 40% less time deciding what to order, improving table turnover"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: "Better Customer Experience",
      description: "Eliminate menu overwhelm and provide personalized dining experiences"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-orange-500" />,
      title: "Data-Driven Insights",
      description: "Understand customer preferences and optimize your menu based on real data"
    }
  ];

  const features = [
    "Easy tablet/kiosk integration",
    "Customizable for your menu",
    "Real-time analytics dashboard",
    "Multi-language support",
    "Dietary restriction filtering",
    "Seasonal menu updates",
    "Customer feedback collection",
    "Staff training included"
  ];

  const testimonials = [
    {
      name: "Maria Rodriguez",
      restaurant: "Bella Vista Italian",
      content: "Our customers love the personalized recommendations. We've seen a 30% increase in dessert orders since implementing MoodFood AI.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "James Chen",
      restaurant: "Dragon Palace Asian Fusion",
      content: "The system has completely transformed our ordering process. Customers are happier and our staff can focus on service quality.",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Sarah Johnson",
      restaurant: "Green Garden Cafe",
      content: "Perfect for our health-conscious customers. The healthy add-on suggestions have boosted our profit margins significantly.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Transform Your Restaurant with{' '}
                <span className="text-indigo-600 dark:text-indigo-400">AI-Powered</span>{' '}
                Food Recommendations
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Embed MoodFood AI into your restaurant's ordering system and watch customer 
                satisfaction soar while boosting your revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 font-semibold rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-300"
                >
                  View Demo
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Restaurant tablet with AI recommendations"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-indigo-200 dark:bg-indigo-900/30 rounded-full blur-3xl opacity-70"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Restaurants Choose MoodFood AI
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join hundreds of restaurants that have transformed their customer experience 
              and increased revenue with our AI-powered recommendation system.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Options */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Flexible Integration Options
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Choose the integration method that works best for your restaurant
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg text-center">
              <Tablet className="h-16 w-16 text-indigo-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Tablet Kiosks
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Perfect for fast-casual restaurants and cafes. Customers can interact 
                directly with the AI recommendation system.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                <li>• Self-service ordering</li>
                <li>• Reduced wait times</li>
                <li>• Interactive experience</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg text-center">
              <Smartphone className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                QR Code Menus
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Integrate with your existing QR code menu system. Customers use 
                their phones for personalized recommendations.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                <li>• No additional hardware</li>
                <li>• Contactless ordering</li>
                <li>• Easy implementation</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg text-center">
              <Users className="h-16 w-16 text-purple-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Staff-Assisted
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Empower your servers with AI insights to make better recommendations 
                and enhance the dining experience.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                <li>• Enhanced service quality</li>
                <li>• Staff training included</li>
                <li>• Personal touch maintained</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Everything You Need to Get Started
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Our comprehensive solution includes all the tools and support you need 
                to successfully implement AI-powered recommendations in your restaurant.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Restaurant dashboard analytics"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Success Stories from Our Partners
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              See how restaurants are transforming their business with MoodFood AI
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.restaurant}
                    </div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Restaurant?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join the AI revolution in dining. Contact us today for a personalized demo 
            and pricing information tailored to your restaurant's needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Sales Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
          <p className="text-indigo-200 text-sm mt-6">
            No setup fees • 30-day free trial • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
};

export default ForRestaurants;