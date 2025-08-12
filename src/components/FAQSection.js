import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ChevronDown,
  Search,
  HelpCircle,
  MessageCircle,
  Mail,
} from "lucide-react";

const FAQSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedItems, setExpandedItems] = useState(new Set());

  const faqData = useMemo(
    () => [
      {
        id: 1,
        question: "What makes this template premium?",
        answer:
          "Our premium template includes advanced animations, interactive components, comprehensive documentation, priority support, and regular updates. It's built with modern best practices and optimized for performance.",
        category: "general",
        tags: ["premium", "features", "quality"],
      },
      {
        id: 2,
        question: "How do I customize the template?",
        answer:
          "The template is fully customizable through our intuitive configuration system. You can modify colors, fonts, layouts, and components using our built-in theme editor or by editing the source code directly.",
        category: "customization",
        tags: ["customization", "theming", "configuration"],
      },
      {
        id: 3,
        question: "What browsers are supported?",
        answer:
          "Our template supports all modern browsers including Chrome, Firefox, Safari, and Edge. We ensure cross-browser compatibility and responsive design for all devices.",
        category: "technical",
        tags: ["browsers", "compatibility", "responsive"],
      },
      {
        id: 4,
        question: "Do you provide documentation?",
        answer:
          "Yes! We provide comprehensive documentation including setup guides, component documentation, customization tutorials, and video tutorials to help you get started quickly.",
        category: "support",
        tags: ["documentation", "guides", "tutorials"],
      },
      {
        id: 5,
        question: "Can I use this for commercial projects?",
        answer:
          "Absolutely! Our premium license allows you to use this template for unlimited commercial projects. You can create multiple websites for yourself or your clients.",
        category: "licensing",
        tags: ["commercial", "license", "usage"],
      },
      {
        id: 6,
        question: "How often do you release updates?",
        answer:
          "We release regular updates with new features, bug fixes, and performance improvements. Premium users get priority access to all updates and new components.",
        category: "updates",
        tags: ["updates", "features", "improvements"],
      },
      {
        id: 7,
        question: "What support options are available?",
        answer:
          "Premium users get priority email support, live chat support during business hours, and access to our exclusive community forum. We typically respond within 24 hours.",
        category: "support",
        tags: ["support", "help", "assistance"],
      },
      {
        id: 8,
        question: "Is the code well-documented?",
        answer:
          "Yes! All code is thoroughly documented with inline comments, JSDoc annotations, and clear naming conventions. This makes it easy to understand and modify.",
        category: "technical",
        tags: ["code", "documentation", "comments"],
      },
      {
        id: 9,
        question: "Can I integrate with third-party services?",
        answer:
          "The template includes built-in integrations for popular services like payment gateways, analytics, and social media. You can also easily add custom integrations.",
        category: "integrations",
        tags: ["integrations", "services", "third-party"],
      },
      {
        id: 10,
        question: "What performance optimizations are included?",
        answer:
          "We include lazy loading, code splitting, image optimization, caching strategies, and other performance best practices to ensure fast loading times.",
        category: "technical",
        tags: ["performance", "optimization", "speed"],
      },
      {
        id: 11,
        question: "Do you provide design assets?",
        answer:
          "Yes! Premium users get access to all design assets including Figma files, icon sets, color palettes, and typography guidelines.",
        category: "design",
        tags: ["design", "assets", "figma"],
      },
      {
        id: 12,
        question: "Can I resell the template?",
        answer:
          "Our license allows you to create unlimited projects for yourself or clients, but does not permit reselling the template itself. Please refer to our license terms for details.",
        category: "licensing",
        tags: ["resell", "license", "terms"],
      },
    ],
    []
  );

  const categories = [
    { id: "all", label: "All Questions", count: faqData.length },
    {
      id: "general",
      label: "General",
      count: faqData.filter(faq => faq.category === "general").length,
    },
    {
      id: "technical",
      label: "Technical",
      count: faqData.filter(faq => faq.category === "technical").length,
    },
    {
      id: "support",
      label: "Support",
      count: faqData.filter(faq => faq.category === "support").length,
    },
    {
      id: "customization",
      label: "Customization",
      count: faqData.filter(faq => faq.category === "customization").length,
    },
    {
      id: "licensing",
      label: "Licensing",
      count: faqData.filter(faq => faq.category === "licensing").length,
    },
    {
      id: "updates",
      label: "Updates",
      count: faqData.filter(faq => faq.category === "updates").length,
    },
    {
      id: "integrations",
      label: "Integrations",
      count: faqData.filter(faq => faq.category === "integrations").length,
    },
    {
      id: "design",
      label: "Design",
      count: faqData.filter(faq => faq.category === "design").length,
    },
  ];

  const filteredFAQs = useMemo(() => {
    let filtered = faqData;

    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter(faq => faq.category === activeCategory);
    }

    // Filter by search term
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(
        faq =>
          faq.question.toLowerCase().includes(searchLower) ||
          faq.answer.toLowerCase().includes(searchLower) ||
          faq.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }

    return filtered;
  }, [searchTerm, activeCategory, faqData]);

  const toggleItem = id => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-6"
          >
            <HelpCircle className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Find answers to common questions about our premium template. Can't
            find what you're looking for? Contact our support team.
          </motion.p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto mb-12"
        >
          {/* Search Bar */}
          <motion.div variants={itemVariants} className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search questions, answers, or tags..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </motion.div>

          {/* Category Filters */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map(category => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category.label} ({category.count})
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <AnimatePresence mode="wait">
            {filteredFAQs.length === 0 ? (
              <motion.div
                key="no-results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12"
              >
                <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No questions found
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Try adjusting your search terms or browse all categories.
                </p>
              </motion.div>
            ) : (
              <div className="space-y-4">
                {filteredFAQs.map(faq => (
                  <motion.div
                    key={faq.id}
                    variants={itemVariants}
                    layout
                    className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {faq.question}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {faq.tags.map(tag => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <motion.div
                        animate={{
                          rotate: expandedItems.has(faq.id) ? 180 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {expandedItems.has(faq.id) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4">
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Contact Support */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our support team is here to help you get the most out of our
              premium template. We're available 24/7 to answer your questions
              and provide assistance.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Live Chat
              </motion.a>
              <motion.a
                href="mailto:support@example.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Support
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
