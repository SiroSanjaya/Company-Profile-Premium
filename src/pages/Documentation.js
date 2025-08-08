import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Code,
  Palette,
  Zap,
  Settings,
  ArrowRight,
  Search,
  FileText,
  Download,
  Github,
  ExternalLink,
} from 'lucide-react';

const Documentation = () => {
  const [activeSection, setActiveSection] = useState('getting-started');
  const [searchQuery, setSearchQuery] = useState('');

  const sections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: BookOpen,
      content: `
        <h2>Quick Start Guide</h2>
        <p>Welcome to our Premium React Template! This guide will help you get started quickly.</p>

        <h3>1. Installation</h3>
        <pre><code>npm install
npm start</code></pre>

        <h3>2. Project Structure</h3>
        <pre><code>src/
├── components/
│   ├── Navbar.js
│   ├── Footer.js
│   └── sections/
├── pages/
│   ├── Home.js
│   ├── About.js
│   ├── Services.js
│   ├── Blog.js
│   ├── Contact.js
│   └── Pricing.js
└── index.css</code></pre>

        <h3>3. Customization</h3>
        <p>Start by customizing the content in each component. The template is built with modularity in mind, making it easy to modify individual sections.</p>

        <h3>4. Styling</h3>
        <p>This template uses Tailwind CSS for styling. You can customize colors, fonts, and other design elements in the <code>tailwind.config.js</code> file.</p>
      `,
    },
    {
      id: 'components',
      title: 'Components',
      icon: Code,
      content: `
        <h2>Component Documentation</h2>
        <p>Learn about the available components and how to use them.</p>

        <h3>Navbar Component</h3>
        <p>The navigation bar is responsive and includes mobile menu functionality.</p>
        <pre><code>import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      {/* Your content */}
    </div>
  );
}</code></pre>

        <h3>Footer Component</h3>
        <p>The footer includes social links, contact information, and navigation links.</p>

        <h3>Section Components</h3>
        <p>Each section is a separate component for easy customization:</p>
        <ul>
          <li>HeroSection - Main landing section</li>
          <li>FeaturesSection - Feature showcase</li>
          <li>TestimonialsSection - Customer testimonials</li>
          <li>CTASection - Call-to-action sections</li>
        </ul>
      `,
    },
    {
      id: 'styling',
      title: 'Styling & Theming',
      icon: Palette,
      content: `
        <h2>Customizing the Design</h2>
        <p>This template uses Tailwind CSS for styling. Here's how to customize it.</p>

        <h3>Color Scheme</h3>
        <p>Customize colors in <code>tailwind.config.js</code>:</p>
        <pre><code>module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        secondary: {
          50: '#fdf4ff',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
        },
      },
    },
  },
}</code></pre>

        <h3>Typography</h3>
        <p>Customize fonts in the same config file:</p>
        <pre><code>fontFamily: {
  sans: ['Inter', 'sans-serif'],
  heading: ['Poppins', 'sans-serif'],
}</code></pre>

        <h3>Spacing & Layout</h3>
        <p>Use Tailwind's utility classes for consistent spacing and responsive design.</p>
      `,
    },
    {
      id: 'performance',
      title: 'Performance',
      icon: Zap,
      content: `
        <h2>Performance Optimization</h2>
        <p>Tips for optimizing your application performance.</p>

        <h3>Code Splitting</h3>
        <p>This template uses React.lazy for code splitting:</p>
        <pre><code>const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));</code></pre>

        <h3>Image Optimization</h3>
        <p>Use optimized images and implement lazy loading for better performance.</p>

        <h3>Bundle Analysis</h3>
        <p>Run bundle analysis to identify large dependencies:</p>
        <pre><code>npm run build
npx serve -s build</code></pre>

        <h3>Caching Strategies</h3>
        <p>Implement proper caching headers for static assets.</p>
      `,
    },
    {
      id: 'deployment',
      title: 'Deployment',
      icon: Settings,
      content: `
        <h2>Deployment Guide</h2>
        <p>Deploy your application to various platforms.</p>

        <h3>Netlify</h3>
        <ol>
          <li>Connect your GitHub repository</li>
          <li>Set build command: <code>npm run build</code></li>
          <li>Set publish directory: <code>build</code></li>
          <li>Deploy!</li>
        </ol>

        <h3>Vercel</h3>
        <ol>
          <li>Import your project</li>
          <li>Vercel will auto-detect React</li>
          <li>Deploy automatically</li>
        </ol>

        <h3>GitHub Pages</h3>
        <pre><code>npm install --save-dev gh-pages
npm run deploy</code></pre>

        <h3>Custom Domain</h3>
        <p>Configure your custom domain in your hosting provider's settings.</p>
      `,
    },
  ];

  const filteredSections = sections.filter(
    section =>
      section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      section.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentSection = sections.find(section => section.id === activeSection);

  return (
    <div className="pt-16 lg:pt-20">
      <Helmet>
        <title>Documentation – Premium React Template</title>
        <meta
          name="description"
          content="Complete guide to using and customizing the template, including components, styling, performance, and deployment."
        />
      </Helmet>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Documentation
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Complete guide to using and customizing our Premium React Template
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search
                  size={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap justify-center gap-4">
              <button
                className="btn-primary inline-flex items-center"
                onClick={() => {
                  alert('Downloading template...');
                }}
              >
                <Download size={20} className="mr-2" />
                Download Template
              </button>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center"
              >
                <Github size={20} className="mr-2" />
                View on GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documentation Content */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  {filteredSections.map(section => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center ${
                        activeSection === section.id
                          ? 'bg-primary-100 text-primary-700 border border-primary-200'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <section.icon size={20} className="mr-3" />
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              {currentSection && (
                <div className="bg-white rounded-lg border border-gray-200 p-8">
                  <div className="flex items-center mb-6">
                    <currentSection.icon
                      size={32}
                      className="text-primary-600 mr-4"
                    />
                    <h2 className="text-3xl font-bold text-gray-900">
                      {currentSection.title}
                    </h2>
                  </div>

                  <div
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: currentSection.content }}
                  />

                  {/* Navigation */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <button
                        onClick={() => {
                          const currentIndex = sections.findIndex(
                            s => s.id === activeSection
                          );
                          if (currentIndex > 0) {
                            setActiveSection(sections[currentIndex - 1].id);
                          }
                        }}
                        disabled={
                          sections.findIndex(s => s.id === activeSection) === 0
                        }
                        className="btn-outline disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Previous
                      </button>

                      <button
                        onClick={() => {
                          const currentIndex = sections.findIndex(
                            s => s.id === activeSection
                          );
                          if (currentIndex < sections.length - 1) {
                            setActiveSection(sections[currentIndex + 1].id);
                          }
                        }}
                        disabled={
                          sections.findIndex(s => s.id === activeSection) ===
                          sections.length - 1
                        }
                        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Next
                        <ArrowRight size={20} className="ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Get more help and support
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <FileText size={32} className="text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                API Reference
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Complete API documentation for all components and utilities.
              </p>
              <button
                className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                onClick={() => {
                  alert('API documentation coming soon...');
                }}
              >
                View API Docs
                <ExternalLink size={16} className="ml-1" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <Code size={32} className="text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Examples
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Real-world examples and use cases for different scenarios.
              </p>
              <button
                className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                onClick={() => {
                  alert('Examples coming soon...');
                }}
              >
                Browse Examples
                <ExternalLink size={16} className="ml-1" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <Github size={32} className="text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                GitHub
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Source code, issues, and contributions on GitHub.
              </p>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
              >
                Visit GitHub
                <ExternalLink size={16} className="ml-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;
