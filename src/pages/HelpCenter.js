import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  HelpCircle,
  Search,
  MessageCircle,
  Phone,
  Mail,
  BookOpen,
  FileText,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'How do I get started with the template?',
      answer:
        'Getting started is easy! Simply download the template, run npm install to install dependencies, and then run npm start to launch the development server. Check our documentation for detailed setup instructions.',
    },
    {
      id: 2,
      question: 'Can I customize the colors and styling?',
      answer:
        'Absolutely! The template uses Tailwind CSS, making it easy to customize colors, fonts, and other design elements. You can modify the tailwind.config.js file to match your brand colors.',
    },
    {
      id: 3,
      question: 'Is the template responsive?',
      answer:
        'Yes, the template is fully responsive and works perfectly on all devices including desktop, tablet, and mobile phones. All components are built with mobile-first design principles.',
    },
    {
      id: 4,
      question: 'How do I add new pages?',
      answer:
        'To add new pages, create a new component in the src/pages directory and add a corresponding route in App.js. Follow the existing page structure for consistency.',
    },
    {
      id: 5,
      question: 'Can I use this template for commercial projects?',
      answer:
        'Yes, this template is licensed for commercial use. Please refer to the LICENSE file for complete terms and conditions.',
    },
    {
      id: 6,
      question: 'How do I deploy the website?',
      answer:
        'You can deploy the website to platforms like Vercel, Netlify, or any hosting service that supports React applications. Run npm run build to create a production build.',
    },
  ];

  const categories = [
    {
      title: 'Getting Started',
      icon: BookOpen,
      description: 'Learn the basics and get up and running quickly',
      color: 'bg-blue-500',
    },
    {
      title: 'Customization',
      icon: FileText,
      description: 'How to customize colors, fonts, and layouts',
      color: 'bg-green-500',
    },
    {
      title: 'Deployment',
      icon: ArrowRight,
      description: 'Deploy your website to production',
      color: 'bg-purple-500',
    },
    {
      title: 'Troubleshooting',
      icon: HelpCircle,
      description: 'Common issues and their solutions',
      color: 'bg-red-500',
    },
  ];

  const contactMethods = [
    {
      title: 'Email Support',
      description: 'Get help via email',
      icon: Mail,
      contact: 'support@company.com',
      response: 'Within 24 hours',
    },
    {
      title: 'Live Chat',
      description: 'Chat with our support team',
      icon: MessageCircle,
      contact: 'Available 24/7',
      response: 'Instant response',
    },
    {
      title: 'Phone Support',
      description: 'Call us directly',
      icon: Phone,
      contact: '+1 (555) 123-4567',
      response: 'Mon-Fri 9AM-6PM',
    },
  ];

  const filteredFaqs = faqs.filter(
    faq =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>Help Center – Get Support</title>
        <meta
          name="description"
          content="Find answers to common questions, learn how to use the template, and get support."
        />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                How can we help you?
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Find answers to common questions, learn how to use our template,
                and get the support you need.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, FAQs, or topics..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Browse by Category
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Find the help you need by browsing our organized categories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div
                  className={`${category.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Find quick answers to the most common questions
              </p>
            </div>

            <div className="space-y-4">
              {filteredFaqs.map(faq => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
                >
                  <button
                    onClick={() =>
                      setExpandedFaq(expandedFaq === faq.id ? null : faq.id)
                    }
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    <span className="font-medium text-gray-900 dark:text-white">
                      {faq.question}
                    </span>
                    {expandedFaq === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {expandedFaq === faq.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Still need help?
              </h2>
              <p className="text-gray-600">
                Our support team is here to help you get the most out of our
                template
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-md text-center"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {method.description}
                  </p>
                  <p className="text-blue-600 font-medium">{method.contact}</p>
                  <p className="text-gray-500 text-sm mt-1">
                    {method.response}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
