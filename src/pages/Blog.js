import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const blogPosts = [
    {
      id: 1,
      title: '10 Essential React.js Best Practices for 2024',
      excerpt:
        'Learn the most important React.js best practices that will help you write cleaner, more maintainable code and build better applications.',
      image:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
      author: 'Sarah Johnson',
      date: 'March 15, 2024',
      readTime: '5 min read',
      category: 'Development',
      content: 'Full article content would go here...',
    },
    {
      id: 2,
      title: 'How to Optimize Your React App Performance',
      excerpt:
        'Discover proven techniques to improve your React application performance and provide a better user experience.',
      image:
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      author: 'Michael Chen',
      date: 'March 12, 2024',
      readTime: '8 min read',
      category: 'Performance',
      content: 'Full article content would go here...',
    },
    {
      id: 3,
      title: 'Building Responsive Websites with Tailwind CSS',
      excerpt:
        'A comprehensive guide to creating beautiful, responsive websites using Tailwind CSS and modern design principles.',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      author: 'Emily Rodriguez',
      date: 'March 10, 2024',
      readTime: '6 min read',
      category: 'Design',
      content: 'Full article content would go here...',
    },
    {
      id: 4,
      title: 'The Future of Web Development: What to Expect',
      excerpt:
        'Explore the latest trends and technologies that are shaping the future of web development and how to stay ahead.',
      image:
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop',
      author: 'David Kim',
      date: 'March 8, 2024',
      readTime: '7 min read',
      category: 'Trends',
      content: 'Full article content would go here...',
    },
    {
      id: 5,
      title: 'SEO Optimization for React Applications',
      excerpt:
        "Learn how to optimize your React applications for search engines and improve your site's visibility.",
      image:
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop',
      author: 'Lisa Wang',
      date: 'March 5, 2024',
      readTime: '9 min read',
      category: 'SEO',
      content: 'Full article content would go here...',
    },
    {
      id: 6,
      title: 'Advanced CSS Animations for Modern Web Apps',
      excerpt:
        'Master the art of creating smooth, engaging animations that enhance user experience and bring your designs to life.',
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
      author: 'Alex Thompson',
      date: 'March 3, 2024',
      readTime: '10 min read',
      category: 'Animation',
      content: 'Full article content would go here...',
    },
  ];

  const categories = [
    'All',
    'Development',
    'Design',
    'Performance',
    'SEO',
    'Trends',
    'Animation',
  ];

  // Filter posts by category
  const filteredPosts =
    selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter(post => post.category === selectedCategory);

  // Get visible posts
  const displayedPosts = filteredPosts.slice(0, visiblePosts);

  // Handle category selection
  const handleCategoryClick = category => {
    setSelectedCategory(category);
    setVisiblePosts(6); // Reset to show first 6 posts
  };

  // Handle load more
  const handleLoadMore = () => {
    setVisiblePosts(prev => prev + 3);
  };

  // Handle read more
  const handleReadMore = post => {
    // Navigate to blog detail page
    window.location.href = `/blog/${post.id}`;
  };

  // Handle newsletter subscription
  const handleSubscribe = e => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      alert(`Thank you for subscribing with: ${email}`);
      setEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <div className="pt-16 lg:pt-20">
      <Helmet>
        <title>Blog – Articles, Guides, and Insights</title>
        <meta
          name="description"
          content="Insights, tutorials, and the latest trends in web development, design, and technology."
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
              Our <span className="block gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Insights, tutorials, and the latest trends in web development,
              design, and technology.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Blog Posts */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                  category === selectedCategory
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-primary-100 hover:text-primary-700'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden group hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => handleReadMore(post)}
              >
                <div className="relative overflow-hidden">
                  <img
                    loading="lazy"
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center mr-4">
                      <User size={16} className="mr-1" /> {post.author}
                    </div>
                    <div className="flex items-center mr-4">
                      <Calendar size={16} className="mr-1" /> {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" /> {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
                    <span>Read more</span>
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          {/* Load More Button */}
          {visiblePosts < filteredPosts.length && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <button
                onClick={handleLoadMore}
                className="btn-outline cursor-pointer"
              >
                Load More Articles
              </button>
            </motion.div>
          )}
        </div>
      </section>
      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Get the latest articles and insights delivered to your inbox.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              />
              <button
                type="submit"
                className="btn-primary cursor-pointer"
                disabled={isSubscribed}
              >
                {isSubscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              No spam, unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
