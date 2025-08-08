# Premium Features Usage Guide

## Overview

This guide explains how to use and customize the premium features included in this React template.

## 🚀 Premium Components Usage

### 1. Pricing Calculator

#### Basic Usage

```jsx
import PricingCalculator from './components/PricingCalculator';

function App() {
  return (
    <div>
      <PricingCalculator />
    </div>
  );
}
```

#### Customization Options

```jsx
// Custom plans
const customPlans = {
  starter: { price: 19, name: 'Starter' },
  business: { price: 49, name: 'Business' },
  enterprise: { price: 99, name: 'Enterprise' },
};

// Custom features
const customFeatures = [
  { id: 'analytics', name: 'Analytics', price: 10 },
  { id: 'support', name: 'Priority Support', price: 15 },
  { id: 'api', name: 'API Access', price: 20 },
];

<PricingCalculator
  plans={customPlans}
  features={customFeatures}
  currency="EUR"
  theme="dark"
/>;
```

#### Props

- `plans`: Object with plan configurations
- `features`: Array of additional features
- `currency`: Currency symbol (default: "$")
- `theme`: "light" or "dark" (default: "light")

### 2. Portfolio Showcase

#### Basic Usage

```jsx
import PortfolioShowcase from './components/PortfolioShowcase';

function App() {
  return (
    <div>
      <PortfolioShowcase />
    </div>
  );
}
```

#### Custom Projects Data

```jsx
const customProjects = [
  {
    id: 1,
    title: 'Custom Project',
    category: 'web',
    image: '/path/to/image.jpg',
    description: 'Project description',
    technologies: ['React', 'Node.js'],
    liveUrl: 'https://project.com',
    githubUrl: 'https://github.com/project',
    featured: true,
  },
];

<PortfolioShowcase projects={customProjects} />;
```

#### Categories

- `web`: Web applications
- `mobile`: Mobile applications
- `design`: Design systems
- `other`: Other projects

### 3. FAQ Section

#### Basic Usage

```jsx
import FAQSection from './components/FAQSection';

function App() {
  return (
    <div>
      <FAQSection />
    </div>
  );
}
```

#### Custom FAQ Data

```jsx
const customFAQs = [
  {
    id: 1,
    question: 'Custom question?',
    answer: 'Custom answer.',
    category: 'general',
    tags: ['custom', 'tag'],
  },
];

<FAQSection faqData={customFAQs} />;
```

#### Categories

- `general`: General questions
- `technical`: Technical questions
- `support`: Support questions
- `customization`: Customization questions
- `licensing`: Licensing questions

### 4. Team Section

#### Basic Usage

```jsx
import TeamSection from './components/TeamSection';

function App() {
  return (
    <div>
      <TeamSection />
    </div>
  );
}
```

#### Custom Team Data

```jsx
const customTeam = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Developer',
    image: '/path/to/image.jpg',
    bio: 'Team member bio',
    skills: ['React', 'Node.js'],
    experience: '5+ years',
    projects: 25,
    social: {
      github: 'https://github.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
      website: 'https://johndoe.com',
      email: 'john@example.com',
    },
    featured: true,
  },
];

<TeamSection teamMembers={customTeam} />;
```

### 5. Advanced Contact Form

#### Basic Usage

```jsx
import AdvancedContactForm from './components/AdvancedContactForm';

function App() {
  return (
    <div>
      <AdvancedContactForm />
    </div>
  );
}
```

#### Custom Form Configuration

```jsx
const formConfig = {
  onSubmit: data => {
    // Handle form submission
    console.log(data);
  },
  contactInfo: [
    {
      icon: Mail,
      title: 'Email',
      details: 'contact@example.com',
      description: '24/7 support',
    },
  ],
};

<AdvancedContactForm {...formConfig} />;
```

## 🎨 Customization Guide

### Theme Customization

#### Colors

```javascript
// tailwind.config.js
module.exports = {
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
          500: '#8b5cf6',
          600: '#7c3aed',
        },
      },
    },
  },
};
```

#### Typography

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
};
```

### Animation Customization

#### Framer Motion Variants

```jsx
const customVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

<motion.div variants={customVariants}>Content</motion.div>;
```

### Component Styling

#### CSS Classes

```jsx
// Custom styling for components
<div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6">
  <PricingCalculator className="custom-pricing" />
</div>
```

#### Tailwind Utilities

```jsx
// Responsive design
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <PortfolioShowcase />
</div>
```

## 🔧 Advanced Configuration

### Environment Variables

```env
# .env
REACT_APP_API_URL=https://api.example.com
REACT_APP_ANALYTICS_ID=GA_TRACKING_ID
REACT_APP_CONTACT_EMAIL=contact@example.com
```

### API Integration

#### Contact Form API

```jsx
const handleSubmit = async data => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      toast.success('Message sent successfully!');
    }
  } catch (error) {
    toast.error('Failed to send message');
  }
};
```

#### Portfolio Data API

```jsx
const [projects, setProjects] = useState([]);

useEffect(() => {
  const fetchProjects = async () => {
    const response = await fetch('/api/projects');
    const data = await response.json();
    setProjects(data);
  };

  fetchProjects();
}, []);
```

### SEO Optimization

#### Meta Tags

```jsx
import { Helmet } from 'react-helmet-async';

function Page() {
  return (
    <>
      <Helmet>
        <title>Page Title</title>
        <meta name="description" content="Page description" />
        <meta property="og:title" content="Page Title" />
        <meta property="og:description" content="Page description" />
      </Helmet>
      <div>Page content</div>
    </>
  );
}
```

#### Structured Data

```jsx
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Your Company',
  url: 'https://example.com',
  logo: 'https://example.com/logo.png',
};

<script type="application/ld+json">{JSON.stringify(structuredData)}</script>;
```

## 📱 Responsive Design

### Breakpoints

```css
/* Mobile First */
.container {
  padding: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    padding: 3rem;
  }
}
```

### Component Responsiveness

```jsx
// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => (
    <div key={item.id} className="p-4">
      {item.content}
    </div>
  ))}
</div>
```

## 🚀 Performance Optimization

### Lazy Loading

```jsx
import { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./components/HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

### Image Optimization

```jsx
import { LazyLoadImage } from 'react-lazy-load-image-component';

<LazyLoadImage
  src="/path/to/image.jpg"
  alt="Description"
  effect="blur"
  placeholderSrc="/path/to/placeholder.jpg"
/>;
```

### Code Splitting

```jsx
// Route-based code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
```

## 🔒 Security Best Practices

### Form Validation

```jsx
import { useForm } from 'react-hook-form';

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();

<form onSubmit={handleSubmit(onSubmit)}>
  <input
    {...register('email', {
      required: 'Email is required',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Invalid email address',
      },
    })}
  />
  {errors.email && <span>{errors.email.message}</span>}
</form>;
```

### XSS Protection

```jsx
// Sanitize user input
import DOMPurify from 'dompurify';

const sanitizedContent = DOMPurify.sanitize(userInput);
```

## 📊 Analytics Integration

### Google Analytics

```jsx
import ReactGA from 'react-ga';

// Initialize
ReactGA.initialize('GA_TRACKING_ID');

// Track page views
useEffect(() => {
  ReactGA.pageview(window.location.pathname);
}, []);
```

### Custom Events

```jsx
// Track form submissions
const handleSubmit = data => {
  ReactGA.event({
    category: 'Form',
    action: 'Submit',
    label: 'Contact Form',
  });
};
```

## 🧪 Testing

### Component Testing

```jsx
import { render, screen } from '@testing-library/react';
import PricingCalculator from './components/PricingCalculator';

test('renders pricing calculator', () => {
  render(<PricingCalculator />);
  expect(screen.getByText('Pricing Calculator')).toBeInTheDocument();
});
```

### Integration Testing

```jsx
import { render, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from './components/AdvancedContactForm';

test('submits form successfully', async () => {
  render(<ContactForm />);

  fireEvent.change(screen.getByLabelText('Email'), {
    target: { value: 'test@example.com' },
  });

  fireEvent.click(screen.getByText('Send Message'));

  await waitFor(() => {
    expect(screen.getByText('Message Sent!')).toBeInTheDocument();
  });
});
```

## 📚 Additional Resources

### Documentation

- [React Documentation](https://reactjs.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

### Community

- [React Community](https://reactjs.org/community/)
- [Tailwind CSS Community](https://tailwindcss.com/community)
- [GitHub Discussions](https://github.com/your-repo/discussions)

### Support

- Email: support@premiumtemplate.com
- Documentation: [Component Guide](COMPONENTS.md)
- Premium Features: [Premium Features](PREMIUM-FEATURES.md)

---

This usage guide provides comprehensive information on how to use and customize the premium features. For additional support, please refer to the documentation or contact our support team.
