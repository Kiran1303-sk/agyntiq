# 🚀 AgyntiQ - Premium Enterprise AI Company Website

## 📋 Overview

AgyntiQ is a **premium, enterprise-grade AI company website** built with cutting-edge technologies and design patterns. The site showcases next-generation AI solutions with a focus on business transformation and innovation.

### ✨ Key Features

- **Premium Design**: Glassmorphism, neumorphism, aurora gradients, and animated glow effects
- **Enterprise Grade**: Responsive, accessible, and production-ready
- **Modern Tech Stack**: React 19, Next.js 15, TypeScript, Tailwind CSS
- **Smooth Animations**: Framer Motion, GSAP, Lenis smooth scrolling
- **Interactive Elements**: Counters, carousels, forms, and dynamic content
- **SEO Optimized**: Meta tags, structured data, and open graph support

---

## 🎨 Design System

### Color Palette

- **Primary Blue**: `#2D9CFF` - Main brand color
- **Purple**: `#6C4BFF` - Accent color
- **Deep Black**: `#050816` - Background
- **Dark Navy**: `#0E1325` - Surface
- **White**: `#FFFFFF` - Text and highlights

### Design Patterns

1. **Glassmorphism**: Frosted glass panels with blur effects
2. **Aurora Gradients**: Blue-to-purple gradient backgrounds
3. **Soft Shadows**: Subtle elevation and depth
4. **Smooth Transitions**: 300-500ms ease-out animations
5. **Micro-interactions**: Hover states, button feedback, scroll reveals

---

## 📁 Project Structure

```
agyntiq/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Main page
│   │   ├── globals.css         # Global styles
│   ├── components/
│   │   ├── agyntiq-website.tsx    # Main website component
│   │   ├── ui-components.tsx      # Reusable UI components
│   │   ├── advanced-animations.tsx # Animation utilities
│   │   ├── aurora-landing.tsx     # Legacy component
│   ├── public/                 # Static assets
│   │   ├── logo10.png
│   │   ├── logo9.png
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── next.config.mjs             # Next.js configuration
├── package.json                # Dependencies
└── README.md                   # This file
```

---

## 🛠 Technology Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 19.0.0 | UI library |
| Next.js | 15.1.6 | Framework |
| TypeScript | 5.8.3 | Type safety |
| Tailwind CSS | 3.4.17 | Styling |
| Framer Motion | 11.18.2 | Animations |
| GSAP | 3.13.0 | Advanced animations |
| Lenis | 1.3.8 | Smooth scrolling |

---

## 📑 Website Sections

### 1. Navigation Header
- Sticky navigation with blur effect on scroll
- Logo, menu items, CTA buttons
- Mobile-responsive hamburger menu
- Theme toggle (dark/light mode)

### 2. Hero Section
- Large headline: "Next-Generation AI Solutions"
- Subheading with value proposition
- CTA buttons: "Start Free Trial", "Book Demo"
- Company logos: Google, Microsoft, AWS, NVIDIA, OpenAI, Meta
- Trust badge: "Trusted by 500+ Businesses"
- Interactive AI illustration area

### 3. Statistics Section
- Animated counters
- 6 key metrics: Clients, Predictions, Accuracy, Countries, Support, Models
- Each stat has icon and label
- Reveal animations on scroll

### 4. Services Section
- 12 premium service cards
- Service categories: AI Consulting, Generative AI, ML, Computer Vision, NLP, etc.
- Icon, title, and description
- Hover lift effect

### 5. Industries Section
- 10 industry-specific solutions
- Healthcare, Finance, Retail, Manufacturing, Education, etc.
- Icon-based design
- Hover animations

### 6. Why Choose Us Section
- 8 key differentiators
- Enterprise Security, Scalable AI, Fast Deployment, etc.
- Premium icons and descriptions
- 4-column grid layout

### 7. AI Products Section
- 8 product showcases
- Features list for each product
- Interactive hover states
- Product cards with details

### 8. Pricing Section
- 3 pricing tiers: Starter, Professional, Enterprise
- Feature comparison
- "Most Popular" badge on Professional plan
- CTA buttons for each plan
- Special hover effects on Professional tier

### 9. Testimonials Section
- Client testimonials with 5-star ratings
- Client name, role, company
- Glassmorphic card design
- Auto-scrolling capability

### 10. Blog Section
- 6 featured articles
- Category, reading time, excerpt
- Hover zoom effect
- Emoji-based imagery

### 11. Contact Section
- Two-column layout
- Contact information (email, phone, address)
- Premium contact form with validation
- Fields: Name, Email, Company, Industry, Message, etc.

### 12. FAQ Section
- Accordion-style layout
- Smooth expand/collapse animations
- 6 key questions
- Click to expand answers

### 13. Footer
- Company info
- Navigation links
- Legal section
- Social media links
- Copyright

---

## 🎯 Features & Components

### Reusable UI Components (`ui-components.tsx`)

```typescript
- GradientText           // Text with gradient colors
- PremiumButton         // Styled CTA buttons
- GlassCard             // Glassmorphic card container
- FeatureHighlight      // Icon + title + description
- PricingCard           // Pricing tier card
- TestimonialCard       // Testimonial display
- SectionHeading        // Consistent section headers
```

### Advanced Animations (`advanced-animations.tsx`)

```typescript
- AnimatedMeshGradient  // Animated background
- ParticleNetwork       // Interactive particle system
- FloatingOrbs          // Floating animation elements
- ScrollProgress        // Progress indicator
- ParallaxBg            // Parallax effect
```

### Main Website Component (`agyntiq-website.tsx`)

- **Smooth Scrolling**: Lenis integration
- **Active Section Tracking**: Intersection observer
- **GSAP Animations**: Scroll-triggered reveals
- **Responsive Design**: Mobile-first approach
- **Accessibility**: Semantic HTML, ARIA attributes

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Environment Setup

No environment variables required for the basic setup. Customize colors in `tailwind.config.ts`.

---

## 📱 Responsive Design

- **Mobile**: Full-width, optimized touch targets, hamburger menu
- **Tablet**: 2-3 column layouts, adjusted spacing
- **Desktop**: Full features, 3-4 column grids, all animations

### Breakpoints (Tailwind)

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

---

## ⚡ Performance Optimizations

1. **Image Optimization**: Next.js Image component
2. **Code Splitting**: Automatic with Next.js
3. **CSS Optimization**: Tailwind purging unused styles
4. **Animation Performance**: GPU-accelerated transforms
5. **Lazy Loading**: Intersection Observer for reveals
6. **Smooth Scrolling**: Optimized Lenis implementation

### Build Stats

- Production build: ~202 KB First Load JS
- Optimized routes and static generation
- Minimal runtime JavaScript

---

## 🎨 Customization Guide

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  agyntiq: {
    "primary-blue": "#2D9CFF",    // Change primary color
    "purple": "#6C4BFF",          // Change accent
    // ... other colors
  }
}
```

### Add New Sections

1. Create component in `src/components/`
2. Import in `agyntiq-website.tsx`
3. Add section to main component
4. Update navigation items

### Modify Animations

Edit animations in `tailwind.config.ts`:

```typescript
keyframes: {
  float: { /* your animation */ },
  // Add custom keyframes
}
```

---

## 🔍 SEO Features

- **Meta Tags**: Comprehensive metadata in layout.tsx
- **Open Graph**: Social media sharing support
- **Twitter Cards**: Optimized Twitter preview
- **Structured Data**: Ready for schema.org markup
- **Sitemap**: Can be generated with `next-sitemap`
- **Robots.txt**: Configured for crawling

---

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🔒 Security

- Content Security Policy ready
- No inline scripts
- Type-safe TypeScript
- Secure form handling
- Input validation ready

---

## 📝 Best Practices Implemented

✅ Mobile-first design
✅ Accessibility (WCAG 2.1 AA)
✅ Performance optimizations
✅ Clean, maintainable code
✅ Type safety with TypeScript
✅ Responsive images
✅ Semantic HTML
✅ Progressive enhancement
✅ Error boundaries ready
✅ SEO optimized

---

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Environment Variables

```env
NEXT_PUBLIC_API_URL=https://api.example.com
```

---

## 🤝 Contributing

This is a custom project for AgyntiQ. For updates and improvements:

1. Create a feature branch
2. Make changes
3. Test thoroughly
4. Submit for review

---

## 📄 License

© 2026 AgyntiQ. All rights reserved.

---

## 📧 Support

For questions or support:

- Email: hello@agyntiq.ai
- Website: https://agyntiq.ai
- Office: New Delhi, India

---

## 🎉 Credits

Built with modern web technologies and best practices for premium enterprise experiences.

**Key Libraries & Tools:**
- React & Next.js
- Tailwind CSS
- Framer Motion
- GSAP
- Lenis
- TypeScript

---

## 📈 Performance Metrics

- **Lighthouse Score**: Target 90+
- **Core Web Vitals**: Optimized
- **First Contentful Paint**: < 2s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

---

**Last Updated**: 2026
**Version**: 1.0.0
**Status**: Production Ready ✅
