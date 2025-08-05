import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'What services do you offer?',
      answer:
        'We offer comprehensive web development services including custom development, UI/UX design, mobile optimization, performance optimization, security implementation, and SEO optimization. Each service is tailored to meet your specific business needs and goals.',
      category: 'services',
    },
    {
      id: 2,
      question: 'How long does a typical project take?',
      answer:
        'Project timelines vary depending on complexity and scope. Small projects (1-5 pages) typically take 2-4 weeks, medium projects (6-15 pages) take 4-8 weeks, and large projects (16+ pages) can take 8-16 weeks. We always provide detailed timelines during the planning phase.',
      category: 'timeline',
    },
    {
      id: 3,
      question: 'What is your pricing structure?',
      answer:
        'Our pricing is transparent and based on project requirements. We offer fixed-price quotes for well-defined projects and hourly rates for ongoing work. We provide detailed estimates after understanding your specific needs and can work within various budget ranges.',
      category: 'pricing',
    },
    {
      id: 4,
      question: 'Do you provide ongoing support and maintenance?',
      answer:
        'Yes, we offer comprehensive support and maintenance packages. This includes regular updates, security patches, performance monitoring, and technical support. We also provide training for your team to manage the system effectively.',
      category: 'support',
    },
    {
      id: 5,
      question: 'Can you work with existing systems and integrations?',
      answer:
        'Absolutely! We have extensive experience working with existing systems, APIs, and third-party integrations. We can integrate with your current tech stack, migrate data, and ensure seamless compatibility with your existing workflows.',
      category: 'technical',
    },
    {
      id: 6,
      question: 'What technologies do you use?',
      answer:
        'We use modern, industry-standard technologies including React, Node.js, Python, PHP, and various databases. We choose the best technology stack for each project based on requirements, scalability needs, and client preferences.',
      category: 'technical',
    },
    {
      id: 7,
      question: 'How do you ensure project quality and testing?',
      answer:
        'We follow rigorous quality assurance processes including code reviews, automated testing, manual testing, and user acceptance testing. We also implement continuous integration/deployment (CI/CD) practices to maintain high code quality throughout development.',
      category: 'quality',
    },
    {
      id: 8,
      question: 'Do you provide hosting and domain services?',
      answer:
        'Yes, we offer comprehensive hosting solutions including cloud hosting, dedicated servers, and managed hosting services. We can also help with domain registration, SSL certificates, and ongoing server management.',
      category: 'hosting',
    },
    {
      id: 9,
      question: 'What happens after the project is completed?',
      answer:
        'After project completion, we provide comprehensive documentation, training sessions for your team, and ongoing support. We also offer maintenance packages to ensure your system continues to perform optimally.',
      category: 'post-launch',
    },
    {
      id: 10,
      question: 'Can you help with SEO and digital marketing?',
      answer:
        'Yes, we offer comprehensive SEO services including keyword research, on-page optimization, technical SEO, and content strategy. We also provide digital marketing services to help drive traffic and conversions.',
      category: 'marketing',
    },
    {
      id: 11,
      question: 'How do you handle project communication and updates?',
      answer:
        'We maintain transparent communication throughout the project using tools like Slack, email, and regular video calls. We provide weekly progress reports, milestone updates, and are always available for questions or concerns.',
      category: 'communication',
    },
    {
      id: 12,
      question: 'What if I need changes after the project is launched?',
      answer:
        'We understand that business needs evolve. We offer flexible change management processes and can accommodate post-launch modifications. We also provide retainer services for ongoing development and updates.',
      category: 'post-launch',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'services', name: 'Services' },
    { id: 'pricing', name: 'Pricing' },
    { id: 'technical', name: 'Technical' },
    { id: 'timeline', name: 'Timeline' },
    { id: 'support', name: 'Support' },
    { id: 'quality', name: 'Quality' },
    { id: 'communication', name: 'Communication' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredFaqs =
    selectedCategory === 'all'
      ? faqs
      : faqs.filter(faq => faq.category === selectedCategory);

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
            <HelpCircle size={32} className="text-primary-600" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our services, process, and
            what to expect when working with us.
          </p>
        </motion.div>

        {/* Category Filter */}
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
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {filteredFaqs.map(faq => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={20}
                    className={`text-gray-500 transition-transform ${
                      openFaq === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to
              help. Get in touch with us and we'll respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Contact Us
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Schedule a Call
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQSection;
