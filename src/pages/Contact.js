import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serviceType, setServiceType] = useState('');
  const [contactType, setContactType] = useState('');

  // Handle URL parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const service = urlParams.get('service');
    const type = urlParams.get('type');

    if (service) {
      setServiceType(service);
    }

    if (type) {
      setContactType(type);
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async data => {
    setIsSubmitting(true);

    // Add service type and contact type to form data
    const formData = {
      ...data,
      serviceType,
      contactType,
    };

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Form data:', formData);

    let successMessage =
      "Message sent successfully! We'll get back to you soon.";
    if (serviceType) {
      successMessage = `Thank you for your interest in ${serviceType}! We'll get back to you soon.`;
    } else if (contactType === 'quote') {
      successMessage =
        "Quote request submitted! We'll send you a detailed quote within 24 hours.";
    } else if (contactType === 'call') {
      successMessage =
        "Call request submitted! We'll contact you to schedule a call.";
    }

    toast.success(successMessage);
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  // Handle contact info click
  const handleContactInfoClick = (type, info) => {
    switch (type) {
      case 'email':
        window.open(`mailto:${info}`, '_blank');
        break;
      case 'phone':
        window.open(`tel:${info}`, '_blank');
        break;
      case 'map':
        window.open(
          `https://maps.google.com/?q=${encodeURIComponent(info)}`,
          '_blank'
        );
        break;
      default:
        break;
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      info: 'hello@premiumtemplate.com',
      description: "We'll respond within 24 hours",
      type: 'email',
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 5pm',
      type: 'phone',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: '123 Template Street, Digital City',
      description: 'Come say hello at our office',
      type: 'map',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      info: 'Monday - Friday',
      description: '8:00 AM - 6:00 PM EST',
      type: 'hours',
    },
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              {serviceType
                ? `Get ${serviceType} Quote`
                : contactType === 'quote'
                  ? 'Get Free Quote'
                  : contactType === 'call'
                    ? 'Schedule a Call'
                    : 'Get in Touch'}
              {!serviceType && !contactType && (
                <span className="block gradient-text">Touch</span>
              )}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {serviceType
                ? `Interested in our ${serviceType} service? Let us know your requirements and we'll provide you with a detailed quote.`
                : contactType === 'quote'
                  ? "Ready to get started? Request a free quote and we'll provide you with a detailed proposal tailored to your needs."
                  : contactType === 'call'
                    ? "Let's discuss your project! Schedule a call with our team and we'll help you plan the perfect solution."
                    : "Have a question or want to work together? We'd love to hear from you. Send us a message and we'll respond as soon as possible."}
            </p>
          </motion.div>
        </div>
      </section>
      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Send us a Message
              </h2>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                >
                  <CheckCircle
                    size={48}
                    className="text-green-500 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-700">
                    Thank you for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        {...register('firstName', {
                          required: 'First name is required',
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="John"
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        {...register('lastName', {
                          required: 'Last name is required',
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Doe"
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      {...register('subject', {
                        required: 'Subject is required',
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="How can we help you?"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      {...register('message', {
                        required: 'Message is required',
                        minLength: {
                          value: 10,
                          message: 'Message must be at least 10 characters',
                        },
                      })}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Tell us more about your project..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-start space-x-4 p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 ${
                      item.type !== 'hours'
                        ? 'cursor-pointer hover:border-primary-300'
                        : ''
                    }`}
                    onClick={() =>
                      item.type !== 'hours' &&
                      handleContactInfoClick(item.type, item.info)
                    }
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <item.icon size={24} className="text-primary-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 font-medium mb-1">
                        {item.info}
                      </p>
                      <p className="text-sm text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
