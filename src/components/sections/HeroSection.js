import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Star, CheckCircle, Users } from 'lucide-react';

const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Handle watch demo click
  const handleWatchDemo = () => {
    setIsVideoPlaying(true);
    alert(
      'Opening demo video...\n\nThis would open a modal or navigate to a video page.'
    );
  };

  // Handle get started click
  const handleGetStarted = () => {
    // Navigate to pricing page
    window.location.href = '/pricing';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-bounce-slow"></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Star size={16} className="fill-current" />
              <span>Trusted by 10,000+ businesses worldwide</span>
            </motion.div>
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Transform Your{' '}
              <span className="block gradient-text">Digital Presence</span>
              <span className="block text-gray-700">
                With Premium Solutions
              </span>
            </motion.h1>
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Elevate your business with our cutting-edge React.js templates.
              Modern, responsive, and fully customizable solutions that drive
              results.
            </motion.p>
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Link
                to="/pricing"
                onClick={handleGetStarted}
                className="btn-primary inline-flex items-center justify-center group cursor-pointer"
              >
                Get Started Free
                <ArrowRight
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <button
                onClick={handleWatchDemo}
                className="btn-outline inline-flex items-center justify-center group cursor-pointer"
              >
                <Play size={20} className="mr-2" />
                Watch Demo
              </button>
            </motion.div>
            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} className="text-green-500" />
                <span className="text-sm text-gray-600">Free 14-day trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users size={20} className="text-blue-500" />
                <span className="text-sm text-gray-600">10,000+ users</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star size={20} className="text-yellow-500 fill-current" />
                <span className="text-sm text-gray-600">4.9/5 rating</span>
              </div>
            </motion.div>
          </motion.div>
          {/* Right Content - Image/Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center">
                {isVideoPlaying ? (
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play size={24} className="text-white ml-1" />
                    </div>
                    <p className="text-primary-600 font-medium">
                      Demo Video Playing
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      This would show the actual video
                    </p>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-primary-700 transition-colors">
                      <Play size={24} className="text-white ml-1" />
                    </div>
                    <p className="text-primary-600 font-medium">
                      Click to Play Demo
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      See our template in action
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
