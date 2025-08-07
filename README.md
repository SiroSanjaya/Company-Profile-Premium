# 🏢 Company Profile Premium Template

A **premium, professional React.js template** designed for digital agencies, companies, and freelancers. This template features modern design, interactive components, and comprehensive functionality to showcase your business effectively.

![Company Profile Premium](https://img.shields.io/badge/React-18.0+-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.0+-purple?style=for-the-badge&logo=framer)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## ✨ Features

### 🎯 **Core Features**
- **Responsive Design** - Perfect on all devices
- **Modern UI/UX** - Clean, professional design
- **Interactive Components** - Engaging user experience
- **SEO Optimized** - Search engine friendly
- **Fast Performance** - Optimized for speed
- **Accessibility** - WCAG compliant

### 🚀 **Interactive Components**
- **Pricing Calculator** - Real-time quote estimation
- **Portfolio Showcase** - Filterable project gallery
- **FAQ System** - Category-based filtering
- **Team Profiles** - Detailed member information
- **Service Details** - Comprehensive service pages
- **Contact Forms** - Advanced form handling

### 📱 **Pages & Sections**
- **Home** - Hero, stats, features, testimonials
- **About** - Company info, team, portfolio
- **Services** - Service listings with detail pages
- **Pricing** - Interactive pricing calculator
- **Blog** - Article listings with detail pages
- **Contact** - Contact form with FAQ section
- **Documentation** - Comprehensive guides

### 🎨 **Design System**
- **Color Scheme** - Professional blue/purple gradient
- **Typography** - Modern, readable fonts
- **Animations** - Smooth Framer Motion transitions
- **Icons** - Lucide React icon library
- **Components** - Reusable, modular design

## 🛠️ Technology Stack

- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons
- **React Hook Form** - Form handling
- **React Hot Toast** - Notifications

## 📦 Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Quick Start

```bash
# Clone the repository
git clone https://github.com/Kawasan-Digital/Company-Profile-Premium.git

# Navigate to project directory
cd Company-Profile-Premium

# Install dependencies
npm install

# Start development server
npm start
```

### Build for Production

```bash
# Build the project
npm run build

# Serve the build
npm install -g serve
serve -s build
```

## 🎯 Usage

### Customization

#### 1. **Company Information**
Edit `src/components/` files to update:
- Company name and logo
- Contact information
- Social media links
- Team member details

#### 2. **Content Management**
Update content in:
- `src/pages/` - Page content
- `src/components/` - Component data
- `src/data/` - Static data (if created)

#### 3. **Styling**
Modify `tailwind.config.js` for:
- Color scheme
- Typography
- Spacing
- Custom components

### Key Components

#### Pricing Calculator
```jsx
// Interactive pricing with service selection
<PricingCalculator />
```

#### Portfolio Showcase
```jsx
// Filterable project gallery
<PortfolioShowcase />
```

#### Team Section
```jsx
// Professional team profiles
<TeamSection />
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── sections/       # Page sections
│   ├── PricingCalculator.js
│   ├── PortfolioShowcase.js
│   ├── FAQSection.js
│   └── TeamSection.js
├── pages/              # Page components
│   ├── Home.js
│   ├── About.js
│   ├── Services.js
│   ├── Pricing.js
│   ├── Contact.js
│   ├── Blog.js
│   └── Documentation.js
├── App.js              # Main app component
├── index.js            # Entry point
└── index.css           # Global styles
```

## 🎨 Customization Guide

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
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
        700: '#6d28d9',
      },
    },
  },
}
```

### Content
Update company information in components:
- Company name and branding
- Team member details
- Service offerings
- Portfolio projects
- Contact information

### Styling
Customize the design by modifying:
- `src/index.css` - Global styles
- Component-specific styles
- Tailwind utility classes

## 🚀 Deployment

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically

### Vercel
1. Import your GitHub repository
2. Framework preset: Create React App
3. Deploy with zero configuration

### Traditional Hosting
1. Run `npm run build`
2. Upload `build/` folder to your server
3. Configure server for SPA routing

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO)
- **Bundle Size**: ~130KB (gzipped)
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s

## 🔧 Development

### Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject (not recommended)
npm run eject
```

### Code Quality
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **React Hooks** - Modern React patterns
- **TypeScript Ready** - Easy migration path

## 📱 Responsive Design

The template is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 SEO Features

- Semantic HTML structure
- Meta tags optimization
- Open Graph tags
- Structured data ready
- Sitemap generation ready
- Robots.txt ready

## 🔒 Security

- HTTPS ready
- Content Security Policy
- XSS protection
- CSRF protection ready
- Input validation

## 📈 Analytics Ready

The template is ready for:
- Google Analytics
- Google Tag Manager
- Facebook Pixel
- Custom tracking

## 🤝 Support

### Documentation
- Comprehensive component documentation
- Usage examples
- Best practices guide

### Community
- GitHub Issues for bug reports
- Feature requests welcome
- Community contributions

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** - Amazing framework
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Smooth animations
- **Lucide** - Beautiful icons
- **Unsplash** - High-quality images

## 🚀 Get Started

Ready to create your professional company profile?

```bash
git clone https://github.com/Kawasan-Digital/Company-Profile-Premium.git
cd Company-Profile-Premium
npm install
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to see your new website!

---

**Made with ❤️ by [Your Company Name]**

*Professional, modern, and ready for business.* 