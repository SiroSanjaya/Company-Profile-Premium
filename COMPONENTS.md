# 🧩 Components Documentation

This document provides detailed information about all the main components in the Company Profile Premium Template.

## 📋 Table of Contents

- [Pricing Calculator](#pricing-calculator)
- [Portfolio Showcase](#portfolio-showcase)
- [FAQ Section](#faq-section)
- [Team Section](#team-section)
- [Service Detail](#service-detail)
- [Contact Form](#contact-form)

---

## 💰 Pricing Calculator

### Overview

Interactive pricing calculator that allows users to select services, project size, timeline, and complexity to get real-time cost estimates.

### Features

- **Service Selection**: Choose from 6 different services
- **Project Size**: Small, Medium, Large, Enterprise
- **Timeline**: Normal, Fast, Urgent
- **Complexity**: Basic, Moderate, Complex, Advanced
- **Real-time Calculation**: Instant price updates
- **Timeline Estimation**: Project duration calculation

### Usage

```jsx
import PricingCalculator from '../components/PricingCalculator';

// In your page component
<PricingCalculator />;
```

### Customization

```javascript
// Update services in PricingCalculator.js
const services = [
  {
    id: 'custom-development',
    name: 'Custom Development',
    basePrice: 5000,
  },
  // Add more services...
];

// Update multipliers
const sizeMultipliers = {
  small: 1,
  medium: 1.5,
  large: 2.5,
  enterprise: 4,
};
```

---

## 🎨 Portfolio Showcase

### Overview

Professional portfolio gallery with filtering capabilities and detailed project modals.

### Features

- **Category Filtering**: Filter by project type
- **Project Modals**: Detailed project information
- **Technology Tags**: Display used technologies
- **Results Showcase**: Project outcomes and metrics
- **Responsive Grid**: Adaptive layout

### Usage

```jsx
import PortfolioShowcase from '../components/PortfolioShowcase';

// In your page component
<PortfolioShowcase />;
```

### Customization

```javascript
// Update projects in PortfolioShowcase.js
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'web',
    image: 'project-image-url',
    description: 'Project description...',
    technologies: ['React', 'Node.js', 'MongoDB'],
    features: ['Payment Processing', 'Inventory Management'],
    client: 'Client Name',
    duration: '8 weeks',
    budget: '$25,000',
    results: {
      conversionRate: '+45%',
      revenueIncrease: '+120%',
    },
  },
  // Add more projects...
];
```

---

## ❓ FAQ Section

### Overview

Comprehensive FAQ system with category filtering and expandable questions.

### Features

- **Category Filtering**: Filter questions by topic
- **Expandable Questions**: Smooth animations
- **12 Common Questions**: Covering all aspects
- **Contact CTA**: Call-to-action for more questions

### Usage

```jsx
import FAQSection from '../components/FAQSection';

// In your page component
<FAQSection />;
```

### Customization

```javascript
// Update FAQs in FAQSection.js
const faqs = [
  {
    id: 1,
    question: 'What services do you offer?',
    answer: 'Detailed answer...',
    category: 'services',
  },
  // Add more FAQs...
];

const categories = [
  { id: 'all', name: 'All Questions' },
  { id: 'services', name: 'Services' },
  { id: 'pricing', name: 'Pricing' },
  // Add more categories...
];
```

---

## 👥 Team Section

### Overview

Professional team showcase with detailed member profiles, skills, and achievements.

### Features

- **Member Profiles**: Detailed information for each team member
- **Skills Display**: Technology and expertise tags
- **Achievements**: Professional accomplishments
- **Social Links**: LinkedIn, GitHub, Twitter, etc.
- **Image Fallback**: Automatic fallback for failed images
- **Statistics**: Experience, projects, ratings

### Usage

```jsx
import TeamSection from '../components/TeamSection';

// In your page component
<TeamSection />;
```

### Customization

```javascript
// Update team members in TeamSection.js
const teamMembers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'Lead Developer & CTO',
    image: 'profile-image-url',
    fallbackImage: 'backup-image-url',
    bio: 'Professional bio...',
    skills: ['React', 'Node.js', 'AWS'],
    experience: '8+ years',
    projects: '50+',
    rating: '4.9/5',
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#',
      website: '#',
    },
    achievements: [
      'AWS Certified Solutions Architect',
      'React Advanced Conference Speaker',
    ],
  },
  // Add more team members...
];
```

---

## 🛠️ Service Detail

### Overview

Comprehensive service detail pages with features, benefits, and process information.

### Features

- **Service Information**: Detailed service descriptions
- **Features List**: Key service features
- **Benefits**: Service advantages
- **Process Steps**: How the service works
- **CTA Links**: Contact and quote buttons

### Usage

```jsx
// Route in App.js
<Route path="/service/:serviceId" element={<ServiceDetail />} />;

// Navigation from Services page
navigate(`/service/${serviceId}`);
```

### Customization

```javascript
// Update services in ServiceDetail.js
const services = [
  {
    id: 'custom-development',
    title: 'Custom Development',
    icon: 'Code',
    description: 'Service description...',
    longDescription: 'Detailed description...',
    features: ['Feature 1', 'Feature 2'],
    benefits: ['Benefit 1', 'Benefit 2'],
    process: [
      {
        step: 1,
        title: 'Discovery',
        description: 'Process step description...',
      },
    ],
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    gradient: 'from-blue-600 to-blue-700',
  },
  // Add more services...
];
```

---

## 📞 Contact Form

### Overview

Advanced contact form with validation, URL parameter handling, and toast notifications.

### Features

- **Form Validation**: React Hook Form integration
- **URL Parameters**: Dynamic form based on URL
- **Toast Notifications**: Success/error messages
- **Contact Information**: Clickable contact details
- **Service Integration**: Pre-filled based on service

### Usage

```jsx
// Basic usage
<Contact />

// With URL parameters
/contact?service=custom-development&type=quote
```

### Customization

```javascript
// Update contact information in Contact.js
const contactInfo = [
  {
    type: 'email',
    title: 'Email Us',
    info: 'hello@company.com',
    description: "We'll respond within 24 hours",
    icon: Mail,
  },
  // Add more contact methods...
];
```

---

## 🎨 Styling Components

### Color Scheme

```javascript
// Primary colors (blue)
primary: {
  50: '#eff6ff',
  500: '#3b82f6',
  600: '#2563eb',
  700: '#1d4ed8',
}

// Secondary colors (purple)
secondary: {
  500: '#8b5cf6',
  600: '#7c3aed',
  700: '#6d28d9',
}
```

### Typography

```css
/* Headings */
font-family: 'Poppins', sans-serif;
font-weight: 700;

/* Body text */
font-family: 'Inter', sans-serif;
font-weight: 400;
```

### Animations

```jsx
// Framer Motion animations
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  {/* Content */}
</motion.div>
```

---

## 🔧 Development Tips

### Adding New Components

1. Create component in `src/components/`
2. Import required dependencies
3. Add proper TypeScript types (if using TS)
4. Include error handling
5. Add responsive design
6. Test on different devices

### Best Practices

- Use semantic HTML
- Implement proper accessibility
- Add loading states
- Handle errors gracefully
- Optimize for performance
- Test user interactions

### Performance Optimization

- Lazy load components
- Optimize images
- Minimize bundle size
- Use React.memo for expensive components
- Implement proper caching

---

## 📱 Responsive Design

### Breakpoints

```css
/* Mobile */
@media (max-width: 767px) {
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) {
}

/* Desktop */
@media (min-width: 1024px) {
}
```

### Grid Systems

```jsx
// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Grid items */}
</div>
```

---

## 🚀 Deployment

### Build Process

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Test build locally
npm install -g serve
serve -s build
```

### Environment Variables

```env
REACT_APP_SITE_NAME=Company Profile Premium
REACT_APP_CONTACT_EMAIL=hello@company.com
REACT_APP_ANALYTICS_ID=GA_TRACKING_ID
```

---

## 🤝 Support

For questions about components:

1. Check this documentation
2. Review component source code
3. Open GitHub issue
4. Contact support team

---

_This documentation is maintained and updated regularly._
