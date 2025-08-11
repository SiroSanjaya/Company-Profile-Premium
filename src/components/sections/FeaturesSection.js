import { motion } from "framer-motion";
import { Zap, Shield, Globe, Code, Rocket, ArrowRight } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Optimized for speed with modern build tools and efficient code splitting.",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    {
      icon: Shield,
      title: "Secure by Default",
      description:
        "Built with security best practices and regular security updates.",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: Globe,
      title: "Mobile First",
      description:
        "Responsive design that works perfectly on all devices and screen sizes.",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Code,
      title: "Customizable",
      description:
        "Easy to customize with Tailwind CSS and modular components.",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      icon: Code,
      title: "Clean Code",
      description:
        "Well-structured, maintainable code following React best practices.",
      color: "text-indigo-600",
      bgColor: "bg-indigo-100",
    },
    {
      icon: Rocket,
      title: "SEO Optimized",
      description:
        "Built for search engines with proper meta tags and structure.",
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
  ];

  // Handle learn more click
  const handleLearnMore = feature => {
    alert(
      `Learn more about: ${feature.title}\n\nThis would navigate to a detailed feature page.`
    );
  };

  // Handle start free trial
  const handleStartFreeTrial = () => {
    alert(
      "Starting free trial...\n\nThis would redirect to the pricing page or signup form."
    );
  };

  // Handle view documentation
  const handleViewDocumentation = () => {
    window.location.href = "/docs";
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose Our{" "}
            <span className="block gradient-text">Premium Template</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Built with modern technologies and best practices to deliver
            exceptional user experiences
          </p>
        </motion.div>
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-8 group hover:shadow-2xl transition-all duration-300 dark:bg-gray-800"
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${feature.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon size={28} className={feature.color} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {feature.description}
              </p>
              <div
                className="flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors cursor-pointer"
                onClick={() => handleLearnMore(feature)}
              >
                <span>Learn more</span>
                <ArrowRight
                  size={16}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </div>
            </motion.div>
          ))}
        </div>
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Join thousands of developers who trust our templates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleStartFreeTrial}
                className="btn-primary cursor-pointer"
              >
                Start Free Trial
              </button>
              <button
                onClick={handleViewDocumentation}
                className="btn-outline cursor-pointer"
              >
                View Documentation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
