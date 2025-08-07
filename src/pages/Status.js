import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  AlertCircle,
  XCircle,
  Clock,
  Activity,
  Server,
  Database,
  Globe,
  Wifi,
  Shield,
  BarChart3,
  TrendingUp,
  TrendingDown,
  RefreshCw,
  Calendar,
  Clock as ClockIcon,
} from 'lucide-react';

const Status = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Simulate real-time status updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const refreshStatus = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 1000);
  };

  const overallStatus = {
    status: 'operational',
    uptime: '99.98%',
    responseTime: '45ms',
    lastIncident: '2024-01-10',
  };

  const services = [
    {
      name: 'API Gateway',
      status: 'operational',
      responseTime: '23ms',
      uptime: '99.99%',
      icon: Server,
      description: 'Main API gateway and routing service',
    },
    {
      name: 'Database',
      status: 'operational',
      responseTime: '12ms',
      uptime: '99.97%',
      icon: Database,
      description: 'Primary database cluster',
    },
    {
      name: 'CDN',
      status: 'operational',
      responseTime: '8ms',
      uptime: '99.99%',
      icon: Globe,
      description: 'Content delivery network',
    },
    {
      name: 'Authentication',
      status: 'operational',
      responseTime: '15ms',
      uptime: '99.98%',
      icon: Shield,
      description: 'User authentication and authorization',
    },
    {
      name: 'File Storage',
      status: 'operational',
      responseTime: '32ms',
      uptime: '99.96%',
      icon: Database,
      description: 'File upload and storage service',
    },
    {
      name: 'Email Service',
      status: 'operational',
      responseTime: '45ms',
      uptime: '99.95%',
      icon: Wifi,
      description: 'Email delivery and notifications',
    },
  ];

  const incidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance - Database Optimization',
      status: 'resolved',
      severity: 'maintenance',
      startTime: '2024-01-15T02:00:00Z',
      endTime: '2024-01-15T04:00:00Z',
      description:
        'Scheduled maintenance window for database optimization and performance improvements.',
      affectedServices: ['Database', 'API Gateway'],
    },
    {
      id: 2,
      title: 'Increased Response Times',
      status: 'resolved',
      severity: 'minor',
      startTime: '2024-01-10T14:30:00Z',
      endTime: '2024-01-10T16:45:00Z',
      description:
        'Temporary increase in API response times due to high traffic load.',
      affectedServices: ['API Gateway'],
    },
    {
      id: 3,
      title: 'CDN Performance Issues',
      status: 'resolved',
      severity: 'minor',
      startTime: '2024-01-05T09:15:00Z',
      endTime: '2024-01-05T10:30:00Z',
      description: 'Brief performance degradation in content delivery network.',
      affectedServices: ['CDN'],
    },
  ];

  const metrics = [
    {
      name: 'Response Time',
      value: '45ms',
      change: '+2ms',
      trend: 'up',
      icon: Activity,
    },
    {
      name: 'Uptime',
      value: '99.98%',
      change: '+0.01%',
      trend: 'up',
      icon: CheckCircle,
    },
    {
      name: 'Error Rate',
      value: '0.02%',
      change: '-0.01%',
      trend: 'down',
      icon: AlertCircle,
    },
    {
      name: 'Active Users',
      value: '12,847',
      change: '+234',
      trend: 'up',
      icon: BarChart3,
    },
  ];

  const getStatusColor = status => {
    switch (status) {
      case 'operational':
        return 'text-green-600 bg-green-100';
      case 'degraded':
        return 'text-yellow-600 bg-yellow-100';
      case 'outage':
        return 'text-red-600 bg-red-100';
      case 'maintenance':
        return 'text-blue-600 bg-blue-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = status => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5" />;
      case 'degraded':
        return <AlertCircle className="w-5 h-5" />;
      case 'outage':
        return <XCircle className="w-5 h-5" />;
      case 'maintenance':
        return <Clock className="w-5 h-5" />;
      default:
        return <AlertCircle className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                System Status
              </h1>
              <p className="text-xl mb-8 text-purple-100">
                Real-time monitoring of our services and infrastructure
              </p>

              {/* Overall Status */}
              <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                  <span className="text-2xl font-bold">
                    All Systems Operational
                  </span>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">
                      {overallStatus.uptime}
                    </div>
                    <div className="text-purple-200">Uptime</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">
                      {overallStatus.responseTime}
                    </div>
                    <div className="text-purple-200">Response Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">
                      {overallStatus.lastIncident}
                    </div>
                    <div className="text-purple-200">Last Incident</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Last Updated & Refresh */}
      <section className="py-4 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-600">
              <ClockIcon className="w-4 h-4" />
              <span className="text-sm">
                Last updated: {lastUpdated.toLocaleTimeString()}
              </span>
            </div>
            <button
              onClick={refreshStatus}
              disabled={isRefreshing}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 disabled:opacity-50"
            >
              <RefreshCw
                className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`}
              />
              <span className="text-sm">Refresh</span>
            </button>
          </div>
        </div>
      </section>

      {/* Metrics Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <metric.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div
                    className={`flex items-center space-x-1 text-sm ${
                      metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {metric.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    <span>{metric.change}</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {metric.value}
                </div>
                <div className="text-gray-600 text-sm">{metric.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Status */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Service Status
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Current status of all our services and infrastructure components
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 border border-gray-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {service.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1 ${getStatusColor(service.status)}`}
                  >
                    {getStatusIcon(service.status)}
                    <span className="capitalize">{service.status}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-600">Response Time</div>
                    <div className="font-semibold text-gray-900">
                      {service.responseTime}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-600">Uptime</div>
                    <div className="font-semibold text-gray-900">
                      {service.uptime}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Recent Incidents
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Historical incidents and maintenance windows
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {incidents.map((incident, index) => (
              <motion.div
                key={incident.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-500"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {incident.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          incident.severity === 'maintenance'
                            ? 'bg-blue-100 text-blue-800'
                            : incident.severity === 'minor'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {incident.severity}
                      </span>
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(incident.startTime).toLocaleDateString()}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      incident.status === 'resolved'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {incident.status}
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{incident.description}</p>

                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span>Affected services:</span>
                  <div className="flex space-x-2">
                    {incident.affectedServices.map((service, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 rounded-md"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-xl mb-8 text-blue-100">
                Get notified about service updates and incidents
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Status;
