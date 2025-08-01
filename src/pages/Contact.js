import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async data => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Form data:', data);
    toast.success("Message sent successfully! We'll get back to you soon.");
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      info: 'hello@premiumtemplate.com',
      description: "We'll respond within 24 hours",
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 5pm',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: '123 Template Street, Digital City',
      description: 'Come say hello at our office',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      info: 'Monday - Friday',
      description: '8:00 AM - 6:00 PM EST',
    },
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {' '}
      {/* Hero Section */}{' '}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get in
              <span className="block gradient-text"> Touch </span>{' '}
            </h1>{' '}
            <p className="text-xl text-gray-600 mb-8">
              Have a question or want to work together ? We 'd love to hear from
              you. Send us a message and we 'll respond as soon as
              possible.{' '}
            </p>{' '}
          </motion.div>{' '}
        </div>{' '}
      </section>
      {/* Contact Form & Info */}{' '}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {' '}
            {/* Contact Form */}{' '}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Send us a Message{' '}
              </h2>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
                >
                  <CheckCircle
                    size={48}
                    className="text-green-500 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-green-900 mb-2">
                    Message Sent Successfully!
                  </h3>{' '}
                  <p className="text-green-700">
                    Thank you for reaching out.We 'll get back to you within 24
                    hours.{' '}
                  </p>{' '}
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>{' '}
                      <input
                        type="text"
                        {...register('firstName', {
                          required: 'First name is required',
                        })}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                          errors.firstName
                            ? 'border-red-500'
                            : 'border-gray-300'
                        }`}
                        placeholder="John"
                      />{' '}
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">
                          {' '}
                          {errors.firstName.message}{' '}
                        </p>
                      )}{' '}
                    </div>{' '}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>{' '}
                      <input
                        type="text"
                        {...register('lastName', {
                          required: 'Last name is required',
                        })}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                          errors.lastName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Doe"
                      />{' '}
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">
                          {' '}
                          {errors.lastName.message}{' '}
                        </p>
                      )}{' '}
                    </div>{' '}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>{' '}
                    <input
                      type="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="john@example.com"
                    />{' '}
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {' '}
                        {errors.email.message}{' '}
                      </p>
                    )}{' '}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>{' '}
                    <select
                      {...register('subject', {
                        required: 'Subject is required',
                      })}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                        errors.subject ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value=""> Select a subject </option>{' '}
                      <option value="general"> General Inquiry </option>{' '}
                      <option value="support"> Technical Support </option>{' '}
                      <option value="sales"> Sales Question </option>{' '}
                      <option value="partnership"> Partnership </option>{' '}
                      <option value="other"> Other </option>{' '}
                    </select>{' '}
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">
                        {' '}
                        {errors.subject.message}{' '}
                      </p>
                    )}{' '}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>{' '}
                    <textarea
                      {...register('message', {
                        required: 'Message is required',
                        minLength: {
                          value: 10,
                          message: 'Message must be at least 10 characters',
                        },
                      })}
                      rows={6}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Tell us about your project or question..."
                    />{' '}
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {' '}
                        {errors.message.message}{' '}
                      </p>
                    )}{' '}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary inline-flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2">
                          {' '}
                        </div>
                        Sending...{' '}
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Send Message{' '}
                      </>
                    )}{' '}
                  </button>{' '}
                </form>
              )}{' '}
            </motion.div>
            {/* Contact Information */}{' '}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Contact Information{' '}
              </h2>
              <div className="space-y-6">
                {' '}
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <info.icon size={24} className="text-primary-600" />
                      </div>{' '}
                    </div>{' '}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {' '}
                        {info.title}{' '}
                      </h3>{' '}
                      <p className="text-primary-600 font-medium mb-1">
                        {' '}
                        {info.info}{' '}
                      </p>{' '}
                      <p className="text-gray-600 text-sm">
                        {' '}
                        {info.description}{' '}
                      </p>{' '}
                    </div>{' '}
                  </motion.div>
                ))}{' '}
              </div>
              {/* Office Hours */}{' '}
              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Office Hours{' '}
                </h3>{' '}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600"> Monday - Friday </span>{' '}
                    <span className="font-medium">
                      {' '}
                      8 : 00 AM - 6: 00 PM{' '}
                    </span>{' '}
                  </div>{' '}
                  <div className="flex justify-between">
                    <span className="text-gray-600"> Saturday </span>{' '}
                    <span className="font-medium">
                      {' '}
                      9: 00 AM - 2: 00 PM{' '}
                    </span>{' '}
                  </div>{' '}
                  <div className="flex justify-between">
                    <span className="text-gray-600"> Sunday </span>{' '}
                    <span className="font-medium"> Closed </span>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </motion.div>{' '}
          </div>{' '}
        </div>{' '}
      </section>
      {/* Map Section */}{' '}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Find Our Office{' '}
            </h2>{' '}
            <p className="text-gray-600">
              Visit us at our headquarters in Digital City{' '}
            </p>{' '}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">
                  {' '}
                  Interactive Map Coming Soon{' '}
                </p>{' '}
                <p className="text-sm text-gray-500 mt-2">
                  123 Template Street, Digital City, DC 12345{' '}
                </p>{' '}
              </div>{' '}
            </div>{' '}
          </motion.div>{' '}
        </div>{' '}
      </section>{' '}
    </div>
  );
};

export default Contact;
