import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  Zap,
  Smartphone,
  Palette,
  Code,
  Shield,
  Globe,
  CheckCircle,
  Star,
  Download,
  Eye,
  FileText,
} from "lucide-react";

const Features = () => {
  const mainFeatures = [
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description:
        "Optimized for speed with modern React practices and efficient rendering",
      benefits: [
        "Fast loading times",
        "Smooth animations",
        "Optimized bundle size",
      ],
      color: "bg-yellow-500",
    },
    {
      icon: Smartphone,
      title: "Fully Responsive Design",
      description:
        "Perfect display on all devices from mobile phones to large desktop screens",
      benefits: [
        "Mobile-first approach",
        "Touch-friendly interface",
        "Cross-device compatibility",
      ],
      color: "bg-blue-500",
    },
    {
      icon: Palette,
      title: "Customizable Design",
      description:
        "Easy to customize colors, fonts, and layouts to match your brand",
      benefits: [
        "Tailwind CSS integration",
        "Modular components",
        "Flexible theming",
      ],
      color: "bg-purple-500",
    },
    {
      icon: Code,
      title: "Clean & Modern Code",
      description:
        "Well-structured, maintainable code following React best practices",
      benefits: [
        "ES6+ syntax",
        "Component-based architecture",
        "Easy to extend",
      ],
      color: "bg-green-500",
    },
    {
      icon: Shield,
      title: "SEO Optimized",
      description:
        "Built with search engine optimization in mind for better visibility",
      benefits: ["Semantic HTML", "Meta tags", "Fast loading"],
      color: "bg-red-500",
    },
    {
      icon: Globe,
      title: "Cross-Browser Compatible",
      description: "Works seamlessly across all modern browsers and devices",
      benefits: [
        "Chrome, Firefox, Safari",
        "Edge support",
        "Progressive enhancement",
      ],
      color: "bg-indigo-500",
    },
  ];

  const technicalFeatures = [
    {
      category: "Frontend Framework",
      features: [
        "React 18 with Hooks",
        "Functional Components",
        "Context API for state management",
        "React Router for navigation",
      ],
    },
    {
      category: "Styling & UI",
      features: [
        "Tailwind CSS framework",
        "Responsive design system",
        "Custom animations with Framer Motion",
        "Modern UI components",
      ],
    },
    {
      category: "Development Tools",
      features: [
        "ESLint for code quality",
        "Prettier for code formatting",
        "Hot reload development",
        "Build optimization",
      ],
    },
    {
      category: "Performance",
      features: [
        "Code splitting",
        "Lazy loading",
        "Optimized images",
        "Minified production builds",
      ],
    },
  ];

  const includedPages = [
    {
      name: "Home",
      description: "Landing page with hero section and key features",
    },
    { name: "About", description: "Company information and team details" },
    {
      name: "Services",
      description: "Service offerings with detailed descriptions",
    },
    { name: "Blog", description: "Blog listing and individual post pages" },
    { name: "Contact", description: "Contact form and company information" },
    { name: "Pricing", description: "Pricing plans and comparison tables" },
    {
      name: "Documentation",
      description: "Technical documentation and guides",
    },
    { name: "Help Center", description: "FAQ and support resources" },
    { name: "Features", description: "Detailed feature showcase" },
    { name: "API Reference", description: "API documentation and examples" },
    { name: "Status", description: "System status and uptime information" },
  ];

  const stats = [
    { label: "Components", value: "50+", icon: Code },
    { label: "Pages", value: "11", icon: FileText },
    { label: "Animations", value: "20+", icon: Zap },
    { label: "Icons", value: "100+", icon: Star },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>Features – Premium React Template</title>
        <meta
          name="description"
          content="Explore features: performance, security, responsive design, customization, and SEO."
        />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Powerful Features
              </h1>
              <p className="text-xl mb-8 text-indigo-100">
                Discover what makes our Premium React Template the perfect
                choice for your next project
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Modern React</span>
                </div>
                <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Tailwind CSS</span>
                </div>
                <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Fully Responsive</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Core Features
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Everything you need to build a professional, modern website
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div
                  className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Built with modern technologies and best practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalFeatures.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm text-gray-600"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Included Pages Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Included Pages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete set of pages to get your website up and running quickly
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedPages.map((page, index) => (
              <motion.div
                key={page.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {page.name}
                  </h3>
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{page.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-8 text-indigo-100">
                Download the template and start building your amazing website
                today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Template
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors flex items-center justify-center">
                  <Eye className="w-5 h-5 mr-2" />
                  View Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
