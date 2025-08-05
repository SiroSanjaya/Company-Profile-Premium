import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, CheckCircle, AlertCircle } from 'lucide-react';

const PricingCalculator = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [projectSize, setProjectSize] = useState('small');
  const [timeline, setTimeline] = useState('normal');
  const [complexity, setComplexity] = useState('basic');

  const services = [
    { id: 'custom-development', name: 'Custom Development', basePrice: 5000 },
    { id: 'ui-ux-design', name: 'UI/UX Design', basePrice: 3000 },
    { id: 'mobile-optimization', name: 'Mobile Optimization', basePrice: 2000 },
    {
      id: 'performance-optimization',
      name: 'Performance Optimization',
      basePrice: 1500,
    },
    {
      id: 'security-implementation',
      name: 'Security Implementation',
      basePrice: 2500,
    },
    { id: 'seo-optimization', name: 'SEO Optimization', basePrice: 1000 },
  ];

  const sizeMultipliers = {
    small: 1,
    medium: 1.5,
    large: 2.5,
    enterprise: 4,
  };

  const timelineMultipliers = {
    normal: 1,
    fast: 1.3,
    urgent: 1.8,
  };

  const complexityMultipliers = {
    basic: 1,
    moderate: 1.4,
    complex: 2,
    advanced: 3,
  };

  const toggleService = serviceId => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const calculateTotal = () => {
    const baseTotal = selectedServices.reduce((total, serviceId) => {
      const service = services.find(s => s.id === serviceId);
      return total + (service?.basePrice || 0);
    }, 0);

    const sizeMultiplier = sizeMultipliers[projectSize];
    const timelineMultiplier = timelineMultipliers[timeline];
    const complexityMultiplier = complexityMultipliers[complexity];

    return Math.round(
      baseTotal * sizeMultiplier * timelineMultiplier * complexityMultiplier
    );
  };

  const getTimelineEstimate = () => {
    const baseWeeks = selectedServices.length * 2;
    const timelineMultiplier = timelineMultipliers[timeline];
    return Math.round(baseWeeks * timelineMultiplier);
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
            <Calculator size={32} className="text-primary-600" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Interactive Pricing Calculator
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get an instant quote for your project. Select your requirements and
            see the estimated cost and timeline.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Project Requirements
            </h3>

            {/* Services Selection */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Select Services
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map(service => (
                  <label
                    key={service.id}
                    className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedServices.includes(service.id)
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-primary-300'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedServices.includes(service.id)}
                      onChange={() => toggleService(service.id)}
                      className="sr-only"
                    />
                    <CheckCircle
                      size={20}
                      className={`mr-3 ${
                        selectedServices.includes(service.id)
                          ? 'text-primary-600'
                          : 'text-gray-400'
                      }`}
                    />
                    <div>
                      <div className="font-medium text-gray-900">
                        {service.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        Starting from ${service.basePrice.toLocaleString()}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Project Size */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Project Size
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { value: 'small', label: 'Small', desc: '1-5 pages' },
                  { value: 'medium', label: 'Medium', desc: '6-15 pages' },
                  { value: 'large', label: 'Large', desc: '16-50 pages' },
                  {
                    value: 'enterprise',
                    label: 'Enterprise',
                    desc: '50+ pages',
                  },
                ].map(size => (
                  <label
                    key={size.value}
                    className={`text-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      projectSize === size.value
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-primary-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="projectSize"
                      value={size.value}
                      checked={projectSize === size.value}
                      onChange={e => setProjectSize(e.target.value)}
                      className="sr-only"
                    />
                    <div className="font-medium text-gray-900">
                      {size.label}
                    </div>
                    <div className="text-sm text-gray-600">{size.desc}</div>
                  </label>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Timeline
              </h4>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: 'normal', label: 'Normal', desc: 'Standard pace' },
                  { value: 'fast', label: 'Fast', desc: '30% faster' },
                  { value: 'urgent', label: 'Urgent', desc: 'Rush delivery' },
                ].map(timelineOption => (
                  <label
                    key={timelineOption.value}
                    className={`text-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      timeline === timelineOption.value
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-primary-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="timeline"
                      value={timelineOption.value}
                      checked={timeline === timelineOption.value}
                      onChange={e => setTimeline(e.target.value)}
                      className="sr-only"
                    />
                    <div className="font-medium text-gray-900">
                      {timelineOption.label}
                    </div>
                    <div className="text-sm text-gray-600">
                      {timelineOption.desc}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Complexity */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Complexity Level
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { value: 'basic', label: 'Basic', desc: 'Simple features' },
                  {
                    value: 'moderate',
                    label: 'Moderate',
                    desc: 'Standard features',
                  },
                  {
                    value: 'complex',
                    label: 'Complex',
                    desc: 'Advanced features',
                  },
                  {
                    value: 'advanced',
                    label: 'Advanced',
                    desc: 'Custom solutions',
                  },
                ].map(complexityOption => (
                  <label
                    key={complexityOption.value}
                    className={`text-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      complexity === complexityOption.value
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-primary-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="complexity"
                      value={complexityOption.value}
                      checked={complexity === complexityOption.value}
                      onChange={e => setComplexity(e.target.value)}
                      className="sr-only"
                    />
                    <div className="font-medium text-gray-900">
                      {complexityOption.label}
                    </div>
                    <div className="text-sm text-gray-600">
                      {complexityOption.desc}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg shadow-lg p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-6">Your Quote</h3>

            {selectedServices.length === 0 ? (
              <div className="text-center py-12">
                <AlertCircle size={48} className="mx-auto mb-4 opacity-50" />
                <p className="text-primary-100">
                  Select at least one service to see your quote
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-3xl font-bold mb-2">
                    ${calculateTotal().toLocaleString()}
                  </div>
                  <div className="text-primary-100">Estimated Total</div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Selected Services:</span>
                    <span className="font-medium">
                      {selectedServices.length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Project Size:</span>
                    <span className="font-medium capitalize">
                      {projectSize}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Timeline:</span>
                    <span className="font-medium capitalize">{timeline}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Complexity:</span>
                    <span className="font-medium capitalize">{complexity}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Estimated Duration:</span>
                    <span className="font-medium">
                      {getTimelineEstimate()} weeks
                    </span>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/20">
                  <button className="w-full bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                    Get Detailed Quote
                  </button>
                  <p className="text-center text-primary-100 text-sm mt-4">
                    * This is an estimate. Final price may vary based on
                    specific requirements.
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PricingCalculator;
