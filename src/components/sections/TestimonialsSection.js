import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      content:
        'This template transformed our business. The modern design and smooth animations helped us increase conversions by 300%.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Founder, Digital Agency',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content:
        'Incredible quality and easy to customize. Our clients love the professional look and feel. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content:
        "The best React template I've ever used. Clean code, great documentation, and amazing support team.",
      rating: 5,
    },
    {
      name: 'David Kim',
      role: 'Senior Developer',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      content:
        'Perfect for rapid prototyping. The component structure is intuitive and the performance is outstanding.',
      rating: 5,
    },
    {
      name: 'Lisa Thompson',
      role: 'Product Manager',
      avatar:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      content:
        'We saved months of development time with this template. The quality exceeded our expectations.',
      rating: 5,
    },
    {
      name: 'James Wilson',
      role: 'Startup Founder',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      content:
        'Outstanding template with modern features. Helped us launch our product faster than expected.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {' '}
        {/* Section Header */}{' '}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Customers{' '}
            <span className="block gradient-text"> Say About Us </span>{' '}
          </h2>{' '}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust our premium
            templates{' '}
          </p>{' '}
        </motion.div>
        {/* Testimonials Grid */}{' '}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {' '}
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 relative"
            >
              {/* Quote Icon */}{' '}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                <Quote size={16} className="text-white" />
              </div>
              {/* Rating */}{' '}
              <div className="flex items-center mb-4">
                {' '}
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-yellow-400 fill-current"
                  />
                ))}{' '}
              </div>
              {/* Content */}{' '}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"{' '}
              </p>
              {/* Author */}{' '}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {' '}
                    {testimonial.name}{' '}
                  </div>{' '}
                  <div className="text-sm text-gray-600">
                    {' '}
                    {testimonial.role}{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </motion.div>
          ))}{' '}
        </div>
        {/* Bottom Stats */}{' '}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2"> 4.9 / 5 </div>{' '}
                <div className="text-primary-100"> Average Rating </div>{' '}
              </div>{' '}
              <div>
                <div className="text-3xl font-bold mb-2"> 10, 000 + </div>{' '}
                <div className="text-primary-100"> Happy Customers </div>{' '}
              </div>{' '}
              <div>
                <div className="text-3xl font-bold mb-2"> 99 % </div>{' '}
                <div className="text-primary-100"> Satisfaction Rate </div>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </motion.div>{' '}
      </div>{' '}
    </section>
  );
};

export default TestimonialsSection;
