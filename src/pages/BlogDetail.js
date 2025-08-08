import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Bookmark,
} from 'lucide-react';

// Mock article data - in real app this would come from API
const articles = [
  {
    id: 1,
    title: '10 Essential React.js Best Practices for 2024',
    excerpt:
      'Learn the most important React.js best practices that will help you write cleaner, more maintainable code and build better applications.',
    content: `
      <h2>Introduction</h2>
      <p>React.js has evolved significantly over the years, and with the introduction of React 18 and new patterns, it's crucial to stay updated with the latest best practices. In this comprehensive guide, we'll explore the 10 most essential React.js best practices that every developer should know in 2024.</p>

      <h2>1. Use Functional Components with Hooks</h2>
      <p>Functional components with hooks are now the standard way to write React components. They're more readable, easier to test, and provide better performance.</p>
      <pre><code>// Good
const MyComponent = () => {
  const [state, setState] = useState(initialValue);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Side effects here
  }, []);

  return <div>Content</div>;
};</code></pre>

      <h2>2. Implement Proper Error Boundaries</h2>
      <p>Error boundaries are crucial for handling JavaScript errors anywhere in your component tree. They catch errors in child components and display a fallback UI.</p>

      <h2>3. Optimize Performance with useMemo and useCallback</h2>
      <p>Use useMemo for expensive calculations and useCallback for function memoization to prevent unnecessary re-renders.</p>

      <h2>4. Follow the Single Responsibility Principle</h2>
      <p>Each component should have a single responsibility. Break down complex components into smaller, more manageable pieces.</p>

      <h2>5. Use TypeScript for Better Type Safety</h2>
      <p>TypeScript provides better developer experience with type checking, better IDE support, and fewer runtime errors.</p>

      <h2>6. Implement Proper State Management</h2>
      <p>Choose the right state management solution based on your app's complexity. For simple apps, useState and useContext might be sufficient.</p>

      <h2>7. Write Comprehensive Tests</h2>
      <p>Testing is crucial for maintaining code quality. Use Jest and React Testing Library for unit and integration tests.</p>

      <h2>8. Optimize Bundle Size</h2>
      <p>Use code splitting, lazy loading, and tree shaking to reduce your bundle size and improve loading performance.</p>

      <h2>9. Follow Accessibility Guidelines</h2>
      <p>Make your React applications accessible by following WCAG guidelines and using semantic HTML elements.</p>

      <h2>10. Keep Dependencies Updated</h2>
      <p>Regularly update your dependencies to get the latest features, bug fixes, and security patches.</p>

      <h2>Conclusion</h2>
      <p>Following these best practices will help you write more maintainable, performant, and scalable React applications. Remember that best practices evolve over time, so stay updated with the latest React documentation and community recommendations.</p>
    `,
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    author: 'Sarah Johnson',
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'Development',
    tags: ['React', 'JavaScript', 'Best Practices', '2024'],
  },
  {
    id: 2,
    title: 'How to Optimize Your React App Performance',
    excerpt:
      'Discover proven techniques to improve your React application performance and provide a better user experience.',
    content: `
      <h2>Performance Optimization in React</h2>
      <p>Performance is crucial for user experience. In this guide, we'll explore various techniques to optimize your React application performance.</p>

      <h2>1. Use React.memo for Component Memoization</h2>
      <p>React.memo is a higher-order component that memoizes your component, preventing unnecessary re-renders when props haven't changed.</p>

      <h2>2. Implement Virtual Scrolling for Large Lists</h2>
      <p>For large lists, use virtual scrolling libraries like react-window or react-virtualized to render only visible items.</p>

      <h2>3. Optimize Images and Assets</h2>
      <p>Use modern image formats, implement lazy loading, and optimize asset sizes to reduce loading times.</p>

      <h2>4. Use Web Workers for Heavy Computations</h2>
      <p>Move heavy computations to web workers to prevent blocking the main thread and improve UI responsiveness.</p>

      <h2>5. Implement Code Splitting</h2>
      <p>Use React.lazy and Suspense to split your code into smaller chunks and load them on demand.</p>

      <h2>Conclusion</h2>
      <p>Performance optimization is an ongoing process. Monitor your app's performance regularly and implement these techniques based on your specific needs.</p>
    `,
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
    author: 'Michael Chen',
    date: 'March 12, 2024',
    readTime: '8 min read',
    category: 'Performance',
    tags: ['Performance', 'Optimization', 'React'],
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundArticle = articles.find(
        article => article.id === parseInt(id)
      );
      setArticle(foundArticle);
      setIsLoading(false);
    }, 1000);
  }, [id]);

  if (isLoading) {
    return (
      <div className="pt-16 lg:pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="pt-16 lg:pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Article Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The article you're looking for doesn't exist.
          </p>
          <Link to="/blog" className="btn-primary">
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 lg:pt-20">
      <Helmet>
        <title>{`${article.title} – Blog`}</title>
        <meta name="description" content={article.excerpt} />
      </Helmet>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
              <Link
                to="/blog"
                className="hover:text-primary-600 transition-colors"
              >
                Blog
              </Link>
              <span>/</span>
              <span>{article.category}</span>
              <span>/</span>
              <span className="text-gray-900">{article.title}</span>
            </div>

            {/* Article Header */}
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                  {article.category}
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {article.title}
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                {article.excerpt}
              </p>

              {/* Article Meta */}
              <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-500 mb-8">
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  {article.author}
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  {article.date}
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  {article.readTime}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-4">
                <button className="flex items-center text-gray-600 hover:text-primary-600 transition-colors">
                  <Share2 size={16} className="mr-2" />
                  Share
                </button>
                <button className="flex items-center text-gray-600 hover:text-primary-600 transition-colors">
                  <Bookmark size={16} className="mr-2" />
                  Save
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Featured Image */}
              <div className="mb-8">
                <img
                  loading="lazy"
                  src={article.image}
                  alt={article.title}
                  className="w-full h-64 lg:h-96 object-cover rounded-lg"
                />
              </div>

              {/* Article Content */}
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Tags:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-primary-100 hover:text-primary-700 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Back to Blog */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <Link
                  to="/blog"
                  className="btn-outline inline-flex items-center"
                >
                  <ArrowLeft size={20} className="mr-2" />
                  Back to Blog
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
