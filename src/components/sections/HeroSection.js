import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, Star, CheckCircle, Users } from "lucide-react";

const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const heroSection = document.querySelector(".hero-section");
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => observer.disconnect();
  }, []);

  // Handle watch demo click
  const handleWatchDemo = () => {
    setIsVideoPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  // Handle get started click
  const handleGetStarted = () => {
    navigate("/pricing");
  };

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&h=1080&fit=crop"
        >
          <source
            src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white/80 to-primary-50/80 dark:from-gray-900/80 dark:via-gray-800/80 dark:to-gray-900/80"></div>
      </div>

      {/* Parallax Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"
          style={{ transform: `translateY(${scrollY * -0.3}px)` }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-bounce-slow"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Star size={16} className="fill-current" />
              <span>Trusted by 10,000+ businesses worldwide</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Transform Your{" "}
              <span className="block gradient-text">Digital Presence</span>
              <span className="block text-gray-700 dark:text-gray-300">
                With Premium Solutions
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Elevate your business with our cutting-edge React.js templates.
              Modern, responsive, and fully customizable solutions that drive
              results.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Link
                to="/pricing"
                onClick={handleGetStarted}
                className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 inline-flex items-center justify-center group cursor-pointer"
              >
                Get Started Free
                <motion.div
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  whileHover={{ x: 5 }}
                >
                  →
                </motion.div>
              </Link>
              <button
                onClick={handleWatchDemo}
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 inline-flex items-center justify-center group cursor-pointer"
              >
                <Play size={20} className="mr-2" />
                Watch Demo
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} className="text-green-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Free 14-day trial
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Users size={20} className="text-blue-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  10,000+ users
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Star size={20} className="text-yellow-500 fill-current" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  4.9/5 rating
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center overflow-hidden">
                {isVideoPlaying ? (
                  <div className="w-full h-full">
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                      muted
                      loop
                    >
                      <source
                        src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                ) : (
                  <div
                    className="text-center cursor-pointer"
                    onClick={handleWatchDemo}
                  >
                    <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary-700 transition-colors hover:scale-110 transform">
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
