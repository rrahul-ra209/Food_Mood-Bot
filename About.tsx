import React from 'react';
import { Heart, Target, Users, Lightbulb, Award, Globe } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Customer-Centric",
      description: "Every decision we make is focused on improving the dining experience for customers and restaurant owners alike."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
      title: "Innovation",
      description: "We continuously push the boundaries of AI technology to create smarter, more intuitive food recommendation systems."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Collaboration",
      description: "We work closely with restaurants and customers to understand their needs and deliver solutions that truly matter."
    },
    {
      icon: <Globe className="h-8 w-8 text-green-500" />,
      title: "Accessibility",
      description: "Making healthy, personalized dining accessible to everyone, regardless of their dietary needs or preferences."
    }
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "CEO & Co-Founder",
      bio: "Former Google AI researcher with 10+ years in machine learning and food tech.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Sarah Martinez",
      role: "CTO & Co-Founder",
      bio: "Ex-Uber engineer specializing in recommendation systems and scalable AI infrastructure.",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Dr. James Wilson",
      role: "Head of Nutrition Science",
      bio: "Nutritionist and food scientist with PhD from Stanford, published researcher in food psychology.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Maria Rodriguez",
      role: "Head of Restaurant Partnerships",
      bio: "20+ years in restaurant industry, former operations director at major restaurant chains.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const milestones = [
    { year: "2022", event: "Company founded by AI researchers and food industry veterans" },
    { year: "2022", event: "Developed first prototype of mood-based food recommendation algorithm" },
    { year: "2023", event: "Launched pilot program with 10 restaurants in San Francisco" },
    { year: "2023", event: "Secured $2M seed funding from leading VCs" },
    { year: "2024", event: "Expanded to 500+ restaurants across 15 cities" },
    { year: "2024", event: "Reached 100K+ active users and 1M+ recommendations served" }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About MoodFood AI
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
              We're on a mission to make dining decisions effortless and enjoyable by combining 
              artificial intelligence with deep understanding of human psychology and nutrition.
            </p>
            <div className="relative max-w-4xl mx-auto">
              <img
                src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Team working together"
                className="rounded-2xl shadow-2xl w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
                <p>
                  MoodFood AI was born from a simple observation: people often feel overwhelmed 
                  when choosing what to eat, especially when dining out. Our founders, Alex and Sarah, 
                  experienced this firsthand during their busy careers in tech.
                </p>
                <p>
                  After countless lunch meetings where colleagues spent more time debating menu choices 
                  than discussing business, they realized there had to be a better way. What if technology 
                  could understand not just what people like to eat, but how they're feeling and what 
                  their body needs?
                </p>
                <p>
                  Combining Alex's expertise in AI and machine learning with Sarah's background in 
                  scalable systems, they set out to create an intelligent recommendation system that 
                  considers mood, preferences, and health goals to suggest the perfect meal.
                </p>
                <p>
                  Today, MoodFood AI helps thousands of people make better dining decisions every day, 
                  while helping restaurants increase customer satisfaction and revenue.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Founders working on the product"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-teal-200 dark:bg-teal-900/30 rounded-full blur-3xl opacity-70"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <Target className="h-16 w-16 text-teal-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                To eliminate decision fatigue in dining by providing personalized, AI-powered 
                food recommendations that consider mood, health goals, and individual preferences, 
                making every meal a perfect match.
              </p>
            </div>
            <div className="text-center">
              <Award className="h-16 w-16 text-orange-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                A world where every dining experience is personalized, healthy, and joyful. 
                Where technology seamlessly connects human emotions with nutritious, delicious food 
                choices that enhance well-being and happiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The passionate people behind MoodFood AI
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-teal-600 dark:text-teal-400 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Key milestones in our mission to transform dining
            </p>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <span className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                    {milestone.year}
                  </span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-teal-500 rounded-full mt-2 mr-8"></div>
                <div className="flex-1">
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    {milestone.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Us in Transforming Dining
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Whether you're a restaurant owner looking to enhance customer experience 
            or a food lover seeking better dining decisions, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/for-restaurants"
              className="inline-flex items-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Partner With Us
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-teal-600 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;