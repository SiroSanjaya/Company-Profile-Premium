import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import {
  Code,
  Palette,
  Smartphone,
  Zap,
  Shield,
  Globe,
  ArrowLeft,
  CheckCircle,
} from 'lucide-react';

// Service data with detailed information
const services = [
  {
    id: 'custom-development',
    title: 'Custom Development',
    icon: Code,
    description:
      'Tailored React.js solutions built to your exact specifications and requirements.',
    longDescription:
      "Our custom development service provides you with bespoke React.js applications that are perfectly aligned with your business needs. We don't just build applications; we create digital solutions that drive results.",
    features: [
      'Custom Components',
      'API Integration',
      'Performance Optimization',
      'Code Review',
    ],
    benefits: [
      'Scalable architecture that grows with your business',
      'Clean, maintainable code following industry best practices',
      'Comprehensive testing and quality assurance',
      'Ongoing support and maintenance',
    ],
    process: [
      {
        step: '01',
        title: 'Requirements Analysis',
        description:
          'We thoroughly analyze your needs and create detailed specifications.',
      },
      {
        step: '02',
        title: 'Architecture Design',
        description:
          'We design a scalable architecture that meets your current and future needs.',
      },
      {
        step: '03',
        title: 'Development',
        description:
          'Our expert developers build your application using modern React.js practices.',
      },
      {
        step: '04',
        title: 'Testing & Deployment',
        description:
          'Comprehensive testing ensures quality, followed by smooth deployment.',
      },
    ],
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    gradient: 'from-blue-600 to-blue-700',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    icon: Palette,
    description:
      'Beautiful, intuitive designs that enhance user experience and drive conversions.',
    longDescription:
      'Our UI/UX design service focuses on creating user-centered designs that not only look beautiful but also provide exceptional user experiences. We combine creativity with data-driven insights to create designs that convert.',
    features: ['Wireframing', 'Prototyping', 'User Testing', 'Design Systems'],
    benefits: [
      'User-centered design that drives engagement',
      'Consistent design language across all touchpoints',
      'Data-driven design decisions',
      'Accessible designs that work for everyone',
    ],
    process: [
      {
        step: '01',
        title: 'Research & Discovery',
        description: 'We research your users, competitors, and business goals.',
      },
      {
        step: '02',
        title: 'Wireframing',
        description:
          'We create wireframes to establish the structure and flow.',
      },
      {
        step: '03',
        title: 'Design & Prototyping',
        description:
          'We design beautiful interfaces and create interactive prototypes.',
      },
      {
        step: '04',
        title: 'Testing & Iteration',
        description: 'We test with real users and iterate based on feedback.',
      },
    ],
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    gradient: 'from-purple-600 to-purple-700',
  },
  {
    id: 'mobile-optimization',
    title: 'Mobile Optimization',
    icon: Smartphone,
    description:
      'Fully responsive designs that work perfectly on all devices and screen sizes.',
    longDescription:
      "In today's mobile-first world, your application must work flawlessly across all devices. Our mobile optimization service ensures your React.js application provides an exceptional experience on smartphones, tablets, and desktops.",
    features: [
      'Mobile-First Design',
      'Touch Optimization',
      'Progressive Web Apps',
      'App Store Ready',
    ],
    benefits: [
      'Consistent experience across all devices',
      'Faster loading times on mobile networks',
      'Offline functionality for better user experience',
      'Reduced development costs with cross-platform compatibility',
    ],
    process: [
      {
        step: '01',
        title: 'Device Analysis',
        description: 'We analyze target devices and user behavior patterns.',
      },
      {
        step: '02',
        title: 'Responsive Design',
        description: 'We create designs that adapt to all screen sizes.',
      },
      {
        step: '03',
        title: 'Performance Optimization',
        description: 'We optimize for mobile performance and loading speeds.',
      },
      {
        step: '04',
        title: 'Testing & Launch',
        description: 'We test across devices and launch with confidence.',
      },
    ],
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    gradient: 'from-green-600 to-green-700',
  },
  {
    id: 'performance-optimization',
    title: 'Performance Optimization',
    icon: Zap,
    description:
      'Lightning-fast websites with optimized loading times and smooth interactions.',
    longDescription:
      'Performance is crucial for user experience and SEO. Our performance optimization service ensures your React.js application loads quickly, runs smoothly, and provides an exceptional user experience.',
    features: [
      'Code Splitting',
      'Lazy Loading',
      'Image Optimization',
      'Caching Strategies',
    ],
    benefits: [
      'Faster loading times improve user experience',
      'Better SEO rankings with improved performance',
      'Reduced bounce rates and increased conversions',
      'Lower hosting costs with optimized assets',
    ],
    process: [
      {
        step: '01',
        title: 'Performance Audit',
        description:
          'We analyze your current performance and identify bottlenecks.',
      },
      {
        step: '02',
        title: 'Optimization Planning',
        description: 'We create a comprehensive optimization strategy.',
      },
      {
        step: '03',
        title: 'Implementation',
        description:
          'We implement optimizations using industry best practices.',
      },
      {
        step: '04',
        title: 'Monitoring',
        description: 'We monitor performance and make ongoing improvements.',
      },
    ],
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
    gradient: 'from-yellow-600 to-yellow-700',
  },
  {
    id: 'security-implementation',
    title: 'Security Implementation',
    icon: Shield,
    description:
      'Enterprise-grade security measures to protect your application and users.',
    longDescription:
      "Security is not an afterthought—it's built into every aspect of our development process. Our security implementation service ensures your React.js application is protected against modern threats and vulnerabilities.",
    features: [
      'Authentication',
      'Authorization',
      'Data Encryption',
      'Security Audits',
    ],
    benefits: [
      'Protection against common web vulnerabilities',
      'Compliance with industry security standards',
      'User trust and confidence in your application',
      'Reduced risk of data breaches and attacks',
    ],
    process: [
      {
        step: '01',
        title: 'Security Assessment',
        description:
          'We assess your current security posture and identify risks.',
      },
      {
        step: '02',
        title: 'Security Design',
        description:
          'We design security measures that protect your application.',
      },
      {
        step: '03',
        title: 'Implementation',
        description: 'We implement security features following best practices.',
      },
      {
        step: '04',
        title: 'Testing & Monitoring',
        description: 'We test security measures and monitor for threats.',
      },
    ],
    color: 'text-red-600',
    bgColor: 'bg-red-100',
    gradient: 'from-red-600 to-red-700',
  },
  {
    id: 'seo-optimization',
    title: 'SEO Optimization',
    icon: Globe,
    description:
      'Search engine optimized templates that help you rank higher in search results.',
    longDescription:
      'SEO is crucial for driving organic traffic to your application. Our SEO optimization service ensures your React.js application is search engine friendly and ranks well for your target keywords.',
    features: [
      'Meta Tags',
      'Structured Data',
      'Performance Metrics',
      'Analytics Integration',
    ],
    benefits: [
      'Higher search engine rankings',
      'Increased organic traffic',
      'Better user experience signals',
      'Improved conversion rates',
    ],
    process: [
      {
        step: '01',
        title: 'SEO Audit',
        description:
          'We analyze your current SEO performance and identify opportunities.',
      },
      {
        step: '02',
        title: 'Keyword Research',
        description:
          'We research target keywords and optimize content accordingly.',
      },
      {
        step: '03',
        title: 'Technical SEO',
        description:
          'We implement technical SEO improvements and optimizations.',
      },
      {
        step: '04',
        title: 'Monitoring',
        description: 'We monitor rankings and make ongoing improvements.',
      },
    ],
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
    gradient: 'from-indigo-600 to-indigo-700',
  },
];

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundService = services.find(service => service.id === serviceId);
      setService(foundService);
      setIsLoading(false);
    }, 1000);
  }, [serviceId]);

  if (isLoading) {
    return (
      <div className="pt-16 lg:pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading service details...</p>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="pt-16 lg:pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Service Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The service you're looking for doesn't exist.
          </p>
          <Link to="/services" className="btn-primary">
            <ArrowLeft size={20} className="mr-2" />
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section
        className={`py-20 bg-gradient-to-br ${service.gradient} text-white`}
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm text-white/80 mb-6">
              <Link
                to="/services"
                className="hover:text-white transition-colors"
              >
                Services
              </Link>
              <span>/</span>
              <span className="text-white">{service.title}</span>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-white/20 mb-6">
                <service.icon size={40} className="text-white" />
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                {service.title}
              </h1>

              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                {service.longDescription}
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
                >
                  Get Started
                </Link>
                <Link
                  to="/services"
                  className="btn-outline border-white text-white hover:bg-white hover:text-primary-600"
                >
                  <ArrowLeft size={20} className="mr-2" />
                  Back to Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your specific needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${service.bgColor} mb-6`}
                >
                  <service.icon size={28} className={service.color} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Professional implementation of {feature.toLowerCase()} to
                  ensure your project meets the highest standards.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our {service.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the advantages that set our services apart
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <CheckCircle
                  size={24}
                  className={`${service.color} mt-1 flex-shrink-0`}
                />
                <p className="text-gray-700 leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4`}
                >
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our {service.title} service can help you achieve
              your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={`/contact?service=${encodeURIComponent(service.title)}`}
                className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Free Quote
              </Link>
              <Link
                to="/contact?type=call"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule Call
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
