import React from 'react';
import { Smile, Settings, Utensils, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: 1,
      icon: <Smile className="h-12 w-12 text-orange-500" />,
      title: "Select Your Mood",
      description: "Choose from various mood options like happy, tired, romantic, or stressed. Our AI understands how your emotions affect your food cravings.",
      moods: ["😊 Happy", "😴 Tired", "💕 Romantic", "😰 Stressed", "🎉 Celebratory", "🧘 Calm"]
    },
    {
      step: 2,
      icon: <Settings className="h-12 w-12 text-green-500" />,
      title: "Set Your Preferences",
      description: "Tell us about your dietary needs, spice tolerance, calorie goals, and any allergies. We'll tailor recommendations just for you.",
      preferences: ["🥬 Vegetarian", "🌶️ Spicy", "🥗 Low-carb", "🚫 Allergies", "💪 High-protein", "🍃 Organic"]
    },
    {
      step: 3,
      icon: <Utensils className="h-12 w-12 text-blue-500" />,
      title: "Get Perfect Suggestions",
      description: "Receive 2-3 personalized food recommendations with images, ingredients, calorie counts, and healthy add-on suggestions.",
      features: ["📸 Food Images", "🥘 Ingredients", "🔥 Calorie Count", "💚 Healthy Tips", "⭐ Ratings", "💬 Reviews"]
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            How MoodFood AI Works
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            Our intelligent system makes food recommendations in three simple steps, 
            ensuring you get exactly what you're craving based on your mood and preferences.
          </p>
          <div className="relative max-w-4xl mx-auto">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="How it works process"
              className="rounded-2xl shadow-2xl w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div key={step.step} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full mr-4">
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-orange-600 dark:text-orange-400 mb-1">
                        STEP {step.step}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    {step.description}
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {(step.moods || step.preferences || step.features)?.map((item, i) => (
                      <div
                        key={i}
                        className="bg-gray-50 dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 text-center"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="relative">
                    <div className={`w-full h-80 bg-gradient-to-br ${
                      step.step === 1 ? 'from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30' :
                      step.step === 2 ? 'from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30' :
                      'from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30'
                    } rounded-2xl flex items-center justify-center`}>
                      <div className="text-6xl opacity-50">
                        {step.step === 1 ? '🎭' : step.step === 2 ? '⚙️' : '🍽️'}
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute -right-8 top-1/2 transform -translate-y-1/2">
                        <ArrowRight className="h-8 w-8 text-gray-400" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              The Science Behind Our Recommendations
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our AI analyzes multiple factors to provide the most accurate food suggestions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Mood Analysis</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Understanding emotional states and their connection to food cravings
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🥗</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Nutritional Matching</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Balancing taste preferences with health and dietary requirements
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Data Learning</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Continuously improving recommendations based on user feedback
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Real-time Results</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Instant suggestions delivered in under 3 seconds
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Smart Food Recommendations?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Try our demo and see how MoodFood AI can transform your dining decisions
          </p>
          <a
            href="/demo"
            className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Try the Demo Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;