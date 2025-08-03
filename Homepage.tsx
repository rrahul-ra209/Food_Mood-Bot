import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Users, TrendingUp, Star } from 'lucide-react';

const Homepage: React.FC = () => {
  const features = [
    {
      icon: <Sparkles className="h-8 w-8 text-orange-500" />,
      title: "AI-Powered Suggestions",
      description: "Get personalized food recommendations based on your current mood and preferences"
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: "Health-Conscious",
      description: "Receive calorie information and healthy add-on suggestions for every meal"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-500" />,
      title: "Restaurant Integration",
      description: "Seamlessly integrate with restaurant systems for enhanced customer experience"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Food Enthusiast",
      content: "This app completely changed how I order food. No more decision paralysis!",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Restaurant Owner",
      content: "Our customers love the personalized recommendations. Sales increased by 25%!",
      rating: 5
    },
    {
      name: "Emma Davis",
      role: "Health Coach",
      content: "Finally, an app that considers both mood and nutrition. Brilliant!",
      rating: 5
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Not Sure What to Eat?{' '}
                <span className="text-orange-600 dark:text-orange-400">
                  Let Your Mood Decide
                </span>{' '}
                🍽️
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                AI-powered food choices based on your mood, preferences, and health goals. 
                Make dining decisions effortless and enjoyable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Get Food Suggestions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center px-8 py-4 border-2 border-orange-600 text-orange-600 dark:text-orange-400 font-semibold rounded-full hover:bg-orange-600 hover:text-white transition-all duration-300"
                >
                  How It Works
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Happy customer choosing food"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-orange-200 dark:bg-orange-900/30 rounded-full blur-3xl opacity-70"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-amber-200 dark:bg-amber-900/30 rounded-full blur-3xl opacity-70"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose MoodFood AI?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our intelligent system understands your needs and delivers personalized recommendations 
              that match your mood and health goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-orange-100">Happy Users</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-orange-100">Partner Restaurants</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-orange-100">Recommendations Made</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-orange-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Real feedback from real people who love MoodFood AI
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Transform Your Dining Experience?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join thousands of users who have discovered the joy of mood-based food recommendations.
          </p>
          <Link
            to="/demo"
            className="inline-flex items-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Try It Now - It's Free!
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Homepage;