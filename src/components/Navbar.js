import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const documentationItems = [
    { name: 'Documentation', path: '/docs' },
    { name: 'API Reference', path: '/api-reference' },
    { name: 'Help Center', path: '/help-center' },
    { name: 'Status', path: '/status' },
  ];

  const isActive = path => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {' '}
          {/* Logo */}{' '}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl"> P </span>{' '}
            </div>{' '}
            <span className="text-xl lg:text-2xl font-bold gradient-text">
              Premium{' '}
            </span>{' '}
          </Link>
          {/* Desktop Navigation */}{' '}
          <div className="hidden lg:flex items-center space-x-8">
            {' '}
            {navItems.map(item => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {item.name}{' '}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}{' '}
              </Link>
            ))}{' '}
            {/* Documentation Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className={`relative font-medium transition-colors duration-200 flex items-center space-x-1 ${
                  documentationItems.some(item => isActive(item.path))
                    ? 'text-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                <span>Documentation</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  >
                    {documentationItems.map(item => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                          isActive(item.path)
                            ? 'text-primary-600 bg-primary-50'
                            : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          {/* CTA Buttons */}{' '}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/contact" className="btn-outline">
              Get Started{' '}
            </Link>{' '}
            <Link to="/pricing" className="btn-primary">
              View Pricing{' '}
            </Link>{' '}
          </div>
          {/* Mobile Menu Button */}{' '}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}{' '}
          </button>{' '}
        </div>
        {/* Mobile Menu */}{' '}
        <AnimatePresence>
          {' '}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-200 bg-white"
            >
              <div className="py-4 space-y-4">
                {' '}
                {navItems.map(item => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 text-lg font-medium transition-colors duration-200 ${
                      isActive(item.path)
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}{' '}
                  </Link>
                ))}{' '}
                {/* Documentation Section in Mobile Menu */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Documentation
                  </div>
                  {documentationItems.map(item => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 text-lg font-medium transition-colors duration-200 ${
                        isActive(item.path)
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.name}{' '}
                    </Link>
                  ))}
                </div>
                <div className="px-4 pt-4 space-y-3">
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center btn-outline"
                  >
                    Get Started{' '}
                  </Link>{' '}
                  <Link
                    to="/pricing"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center btn-primary"
                  >
                    View Pricing{' '}
                  </Link>{' '}
                </div>{' '}
              </div>{' '}
            </motion.div>
          )}{' '}
        </AnimatePresence>{' '}
      </div>{' '}
    </nav>
  );
};

export default Navbar;
