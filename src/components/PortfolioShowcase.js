import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Filter,
  ExternalLink,
  Github,
  Eye,
  Code,
  Palette,
  Smartphone,
  Zap,
} from 'lucide-react';

const PortfolioShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', name: 'All Projects', icon: Filter },
    { id: 'web', name: 'Web Development', icon: Code },
    { id: 'design', name: 'UI/UX Design', icon: Palette },
    { id: 'mobile', name: 'Mobile Apps', icon: Smartphone },
    { id: 'ecommerce', name: 'E-commerce', icon: Zap },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web',
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      description:
        'A modern e-commerce platform with advanced features including payment integration, inventory management, and analytics dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      features: [
        'Payment Processing',
        'Inventory Management',
        'Analytics Dashboard',
        'Mobile Responsive',
      ],
      client: 'TechStart Inc.',
      duration: '8 weeks',
      budget: '$25,000',
      liveUrl: '#',
      githubUrl: '#',
      results: {
        conversionRate: '+45%',
        revenueIncrease: '+120%',
        userSatisfaction: '4.8/5',
      },
    },
    {
      id: 2,
      title: 'Healthcare App',
      category: 'mobile',
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      description:
        'A comprehensive healthcare application for patient management, appointment scheduling, and telemedicine features.',
      technologies: ['React Native', 'Firebase', 'Twilio', 'Stripe'],
      features: [
        'Patient Portal',
        'Appointment Scheduling',
        'Video Consultations',
        'Prescription Management',
      ],
      client: 'HealthCare Plus',
      duration: '12 weeks',
      budget: '$35,000',
      liveUrl: '#',
      githubUrl: '#',
      results: {
        userAdoption: '+200%',
        appointmentEfficiency: '+60%',
        patientSatisfaction: '4.9/5',
      },
    },
    {
      id: 3,
      title: 'Financial Dashboard',
      category: 'web',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      description:
        'Real-time financial dashboard with advanced analytics, portfolio tracking, and investment recommendations.',
      technologies: ['React', 'D3.js', 'Python', 'PostgreSQL'],
      features: [
        'Real-time Data',
        'Portfolio Tracking',
        'Investment Analytics',
        'Risk Assessment',
      ],
      client: 'FinanceCorp',
      duration: '10 weeks',
      budget: '$30,000',
      liveUrl: '#',
      githubUrl: '#',
      results: {
        dataAccuracy: '99.9%',
        userEngagement: '+80%',
        investmentReturns: '+15%',
      },
    },
    {
      id: 4,
      title: 'Restaurant Management System',
      category: 'web',
      image:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
      description:
        'Complete restaurant management solution with order processing, inventory tracking, and customer analytics.',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Socket.io'],
      features: [
        'Order Management',
        'Inventory Tracking',
        'Customer Analytics',
        'Kitchen Display',
      ],
      client: 'FoodChain Restaurants',
      duration: '6 weeks',
      budget: '$20,000',
      liveUrl: '#',
      githubUrl: '#',
      results: {
        orderEfficiency: '+70%',
        customerSatisfaction: '+40%',
        revenueGrowth: '+25%',
      },
    },
    {
      id: 5,
      title: 'Educational Platform',
      category: 'web',
      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
      description:
        'Interactive learning platform with video courses, progress tracking, and collaborative features.',
      technologies: ['React', 'Node.js', 'AWS', 'WebRTC'],
      features: [
        'Video Courses',
        'Progress Tracking',
        'Live Sessions',
        'Collaborative Learning',
      ],
      client: 'EduTech Solutions',
      duration: '14 weeks',
      budget: '$40,000',
      liveUrl: '#',
      githubUrl: '#',
      results: {
        studentEngagement: '+150%',
        courseCompletion: '+85%',
        learningOutcomes: '+60%',
      },
    },
    {
      id: 6,
      title: 'Travel Booking App',
      category: 'mobile',
      image:
        'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop',
      description:
        'Comprehensive travel booking application with flight search, hotel booking, and itinerary management.',
      technologies: ['React Native', 'Express.js', 'MongoDB', 'Amadeus API'],
      features: [
        'Flight Search',
        'Hotel Booking',
        'Itinerary Management',
        'Travel Insurance',
      ],
      client: 'Wanderlust Travel',
      duration: '16 weeks',
      budget: '$45,000',
      liveUrl: '#',
      githubUrl: '#',
      results: {
        bookingConversion: '+90%',
        userRetention: '+75%',
        customerSatisfaction: '4.7/5',
      },
    },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our successful projects and see how we've helped businesses
            achieve their digital goals.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <category.icon size={20} className="mr-2" />
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <Eye size={20} className="text-gray-600" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{project.duration}</span>
                    <span>{project.budget}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                  >
                    <Eye size={20} className="text-gray-600" />
                  </button>
                </div>
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    {selectedProject.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Project Details
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Client:</span>
                          <span className="font-medium">
                            {selectedProject.client}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Duration:</span>
                          <span className="font-medium">
                            {selectedProject.duration}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Budget:</span>
                          <span className="font-medium">
                            {selectedProject.budget}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map(tech => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {selectedProject.features.map(feature => (
                          <li
                            key={feature}
                            className="flex items-center text-gray-600"
                          >
                            <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">
                        Results
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(selectedProject.results).map(
                          ([key, value]) => (
                            <div
                              key={key}
                              className="text-center p-3 bg-gray-50 rounded-lg"
                            >
                              <div className="text-2xl font-bold text-primary-600">
                                {value}
                              </div>
                              <div className="text-sm text-gray-600 capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-8 pt-6 border-t border-gray-200">
                    <button className="flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                      <ExternalLink size={20} className="mr-2" />
                      View Live Demo
                    </button>
                    <button className="flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      <Github size={20} className="mr-2" />
                      View Code
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PortfolioShowcase;
