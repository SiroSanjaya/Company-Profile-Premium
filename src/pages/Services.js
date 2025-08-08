import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Code,
  Palette,
  Smartphone,
  Zap,
  Shield,
  Globe,
  ArrowRight,
} from 'lucide-react';

const Services = () => {
  const handleLearnMore = serviceTitle => {
    // Map service titles to service IDs
    const serviceIdMap = {
      'Custom Development': 'custom-development',
      'UI/UX Design': 'ui-ux-design',
      'Mobile Optimization': 'mobile-optimization',
      'Performance Optimization': 'performance-optimization',
      'Security Implementation': 'security-implementation',
      'SEO Optimization': 'seo-optimization',
    };

    const serviceId = serviceIdMap[serviceTitle];
    if (serviceId) {
      window.location.href = `/service/${serviceId}`;
    } else {
      // Fallback to contact page if service not found
      window.location.href = `/contact?service=${encodeURIComponent(serviceTitle)}`;
    }
  };

  const handleGetFreeQuote = () => {
    window.location.href = '/contact?type=quote';
  };

  const handleScheduleCall = () => {
    window.location.href = '/contact?type=call';
  };

  const services = [
    {
      icon: Code,
      title: 'Custom Development',
      description:
        'Tailored React.js solutions built to your exact specifications and requirements.',
      features: [
        'Custom Components',
        'API Integration',
        'Performance Optimization',
        'Code Review',
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description:
        'Beautiful, intuitive designs that enhance user experience and drive conversions.',
      features: [
        'Wireframing',
        'Prototyping',
        'User Testing',
        'Design Systems',
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimization',
      description:
        'Fully responsive designs that work perfectly on all devices and screen sizes.',
      features: [
        'Mobile-First Design',
        'Touch Optimization',
        'Progressive Web Apps',
        'App Store Ready',
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description:
        'Lightning-fast websites with optimized loading times and smooth interactions.',
      features: [
        'Code Splitting',
        'Lazy Loading',
        'Image Optimization',
        'Caching Strategies',
      ],
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
    },
    {
      icon: Shield,
      title: 'Security Implementation',
      description:
        'Enterprise-grade security measures to protect your application and users.',
      features: [
        'Authentication',
        'Authorization',
        'Data Encryption',
        'Security Audits',
      ],
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
    {
      icon: Globe,
      title: 'SEO Optimization',
      description:
        'Search engine optimized templates that help you rank higher in search results.',
      features: [
        'Meta Tags',
        'Structured Data',
        'Performance Metrics',
        'Analytics Integration',
      ],
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100',
    },
  ];

  return (
    <div className="pt-16 lg:pt-20">
      <Helmet>
        <title>Services – What We Offer</title>
        <meta
          name="description"
          content="Custom development, UI/UX design, mobile optimization, performance, security, and SEO services."
        />
      </Helmet>{' '}
      {/* Hero Section */}{' '}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="block gradient-text"> Services </span>{' '}
            </h1>{' '}
            <p className="text-xl text-gray-600 mb-8">
              We offer comprehensive web development services to help you build
              amazing digital experiences that drive results.{' '}
            </p>{' '}
          </motion.div>{' '}
        </div>{' '}
      </section>
      {/* Services Grid */}{' '}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {' '}
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 group hover:shadow-2xl transition-all duration-300 dark:bg-gray-800"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${service.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon size={28} className={service.color} />{' '}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {' '}
                  {service.title}{' '}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {' '}
                  {service.description}{' '}
                </p>
                <ul className="space-y-3 mb-6">
                  {' '}
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3">
                        {' '}
                      </div>{' '}
                      {feature}{' '}
                    </li>
                  ))}{' '}
                </ul>
                <button
                  onClick={() => handleLearnMore(service.title)}
                  className="flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors cursor-pointer"
                >
                  <span> Learn more </span>{' '}
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </button>{' '}
              </motion.div>
            ))}{' '}
          </div>{' '}
        </div>{' '}
      </section>
      {/* Process Section */}{' '}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Process{' '}
            </h2>{' '}
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We follow a proven methodology to deliver exceptional results{' '}
            </p>{' '}
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8">
            {' '}
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We understand your requirements and goals',
              },
              {
                step: '02',
                title: 'Planning',
                description: 'We create detailed project plans and wireframes',
              },
              {
                step: '03',
                title: 'Development',
                description:
                  'We build your solution with clean, efficient code',
              },
              {
                step: '04',
                title: 'Launch',
                description: 'We deploy and optimize your application',
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {' '}
                  {process.step}{' '}
                </div>{' '}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {' '}
                  {process.title}{' '}
                </h3>{' '}
                <p className="text-gray-600 dark:text-gray-400">
                  {' '}
                  {process.description}{' '}
                </p>{' '}
              </motion.div>
            ))}{' '}
          </div>{' '}
        </div>{' '}
      </section>
      {/* CTA Section */}{' '}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project ?
            </h2>{' '}
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let 's discuss how we can help you achieve your goals{' '}
            </p>{' '}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleGetFreeQuote}
                className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Free Quote{' '}
              </button>{' '}
              <button
                onClick={handleScheduleCall}
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule Call{' '}
              </button>{' '}
            </div>{' '}
          </motion.div>{' '}
        </div>{' '}
      </section>{' '}
    </div>
  );
};

export default Services;
