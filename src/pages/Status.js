import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Status = () => {
  const services = [
    {
      name: 'API Gateway',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '45ms',
      lastIncident: '2 months ago',
      description: 'Core API routing and authentication service',
    },
    {
      name: 'Database Cluster',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '12ms',
      lastIncident: '1 month ago',
      description: 'Primary data storage and replication',
    },
    {
      name: 'CDN Network',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '8ms',
      lastIncident: '3 weeks ago',
      description: 'Global content delivery network',
    },
    {
      name: 'Email Service',
      status: 'degraded',
      uptime: '98.5%',
      responseTime: '120ms',
      lastIncident: '2 hours ago',
      description: 'Transactional email delivery system',
    },
    {
      name: 'File Storage',
      status: 'operational',
      uptime: '99.92%',
      responseTime: '25ms',
      lastIncident: '1 week ago',
      description: 'Cloud file storage and management',
    },
    {
      name: 'Monitoring System',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '5ms',
      lastIncident: 'Never',
      description: 'System monitoring and alerting',
    },
  ];

  const getStatusIcon = status => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'degraded':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'maintenance':
        return <Clock className="w-5 h-5 text-blue-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = status => {
    switch (status) {
      case 'operational':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'degraded':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'outage':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'maintenance':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const overallStatus = services.every(
    service => service.status === 'operational'
  )
    ? 'operational'
    : services.some(service => service.status === 'outage')
      ? 'outage'
      : 'degraded';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <Helmet>
        <title>Status – System Uptime and Incidents</title>
        <meta
          name="description"
          content="Real-time status of all services including uptime, response time, and incident history."
        />
      </Helmet>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            System Status
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real-time status of all our services and infrastructure components.
            We're committed to maintaining 99.9% uptime across all services.
          </p>
        </motion.div>

        {/* Overall Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                Overall System Status
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Last updated: {new Date().toLocaleString()}
              </p>
            </div>
            <div
              className={`flex items-center space-x-3 px-4 py-2 rounded-lg border ${getStatusColor(overallStatus)}`}
            >
              {getStatusIcon(overallStatus)}
              <span className="font-medium capitalize">{overallStatus}</span>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                </div>
                <div
                  className={`flex items-center space-x-2 px-3 py-1 rounded-full border ${getStatusColor(service.status)}`}
                >
                  {getStatusIcon(service.status)}
                  <span className="text-sm font-medium capitalize">
                    {service.status}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">
                    Uptime:
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {service.uptime}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">
                    Response Time:
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {service.responseTime}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">
                    Last Incident:
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {service.lastIncident}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Incident History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mt-8"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Recent Incidents
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-yellow-500 pl-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Email Service Degradation
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Increased response times affecting email delivery
                  </p>
                </div>
                <span className="text-sm text-gray-500">2 hours ago</span>
              </div>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">
                    Database Maintenance Completed
                  </h3>
                  <p className="text-sm text-gray-600">
                    Scheduled maintenance window completed successfully
                  </p>
                </div>
                <span className="text-sm text-gray-500">1 week ago</span>
              </div>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">
                    CDN Performance Optimization
                  </h3>
                  <p className="text-sm text-gray-600">
                    Global CDN performance improvements deployed
                  </p>
                </div>
                <span className="text-sm text-gray-500">3 weeks ago</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl shadow-lg p-6 mt-8 text-white"
        >
          <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
          <p className="text-primary-100 mb-4">
            If you're experiencing issues not reflected in our status page,
            please contact our support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 text-center"
            >
              Contact Support
            </a>
            <a
              href="mailto:support@premiumtemplate.com"
              className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-colors duration-200 text-center"
            >
              Email Support
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Status;
