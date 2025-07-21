# Yussef Rostom - Portfolio Website

A modern, responsive personal portfolio website showcasing backend development expertise and competitive programming achievements. Built with React, TypeScript, and Tailwind CSS featuring a custom dark theme optimized for developer aesthetics.

## 🚀 Live Demo

Visit the live portfolio: [https://lovable.dev/projects/25da9e28-db0a-4f14-82cb-d3b67cf41c6b](https://lovable.dev/projects/25da9e28-db0a-4f14-82cb-d3b67cf41c6b)

## ✨ Features

### Design & UX
- **Dark Theme**: Custom programmer-friendly dark theme with cyan (#00ffff) and neon green (#7CFC00) accents
- **Responsive**: Mobile-first design with Tailwind CSS utilities
- **Smooth Animations**: Hover effects, smooth scrolling, and transition animations
- **Modern Typography**: JetBrains Mono for headings, Inter for body text
- **Gradient Effects**: Beautiful gradient backgrounds and text effects

### Sections
- **Hero Section**: Animated introduction with contact information cards
- **About Me**: Personal bio highlighting MEAN stack expertise
- **Skills**: Interactive skill categories with progress indicators
- **Experience**: Timeline layout showcasing professional internships
- **Projects**: Featured project cards with hover effects and technology tags
- **Education**: Academic background and competitive programming achievements
- **Contact**: Functional contact form with availability status

### Technical Features
- **TypeScript**: Full type safety throughout the application
- **Component Architecture**: Modular, reusable React components
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Form Handling**: Contact form with validation and toast notifications
- **SEO Optimized**: Meta tags and semantic HTML structure

## 🛠️ Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Setup
1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

## 🎨 Customization Guide

### Colors & Theme
The color scheme is defined in `src/index.css` using CSS custom properties. To customize colors:

```css
:root {
  /* Primary Colors */
  --primary: 180 100% 50%;        /* Cyan accent - #00ffff */
  --accent: 84 100% 59%;          /* Neon green - #7CFC00 */
  --background: 210 11% 7%;       /* Dark background - #121212 */
  --foreground: 0 0% 88%;         /* Light text - #e0e0e0 */
  
  /* Card Colors */
  --card: 210 11% 9%;             /* Card backgrounds */
  --border: 210 11% 20%;          /* Border colors */
}
```

#### Alternative Color Schemes

**Blue & Purple Theme:**
```css
--primary: 213 94% 68%;    /* Blue */
--accent: 271 81% 56%;     /* Purple */
```

**Orange & Red Theme:**
```css
--primary: 25 95% 53%;     /* Orange */
--accent: 0 84% 60%;       /* Red */
```

**Green & Yellow Theme:**
```css
--primary: 142 76% 36%;    /* Green */
--accent: 45 93% 47%;      /* Yellow */
```

### Fonts
Fonts are configured in `index.html` and `src/index.css`:

1. **Update Google Fonts link in `index.html`:**
   ```html
   <link href="https://fonts.googleapis.com/css2?family=YOUR_MONO_FONT:wght@400;500;600;700&family=YOUR_SANS_FONT:wght@400;500;600;700&display=swap" rel="stylesheet">
   ```

2. **Update font families in `src/index.css`:**
   ```css
   body {
     font-family: 'YOUR_SANS_FONT', sans-serif;
   }
   
   h1, h2, h3, h4, h5, h6 {
     font-family: 'YOUR_MONO_FONT', monospace;
   }
   ```

### Content Customization

#### Personal Information
Update personal details in `src/components/Hero.tsx`:
```tsx
const personalInfo = {
  name: "Your Name",
  role: "Your Role",
  email: "your.email@example.com",
  phone: "+1234567890",
  location: "Your Location",
  linkedin: "your-linkedin",
  github: "your-github"
};
```

#### Skills & Technologies
Modify skills in `src/components/Skills.tsx`:
```tsx
const skillCategories = [
  {
    title: "Your Skill Category",
    skills: [
      { name: "Skill Name", level: 85 },
      // Add more skills
    ]
  }
];
```

#### Projects
Update projects in `src/components/Projects.tsx`:
```tsx
const projects = [
  {
    title: "Project Name",
    description: "Project description",
    image: yourProjectImage,
    technologies: ["Tech1", "Tech2"],
    github: "https://github.com/username/project",
    demo: "https://your-demo-url.com"
  }
];
```

#### Experience
Update work experience in `src/components/Experience.tsx`:
```tsx
const experiences = [
  {
    title: "Job Title",
    company: "Company Name",
    period: "Start Date – End Date",
    description: "Job description",
    achievements: ["Achievement 1", "Achievement 2"]
  }
];
```

### Images
1. Replace project images in `src/assets/` directory
2. Update image imports in respective components
3. Ensure images are optimized for web (WebP format recommended)

### Animations
Customize animations in `src/index.css`:
```css
@keyframes your-animation {
  from { /* start state */ }
  to { /* end state */ }
}

.your-element {
  animation: your-animation 2s ease-in-out;
}
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills section
│   ├── Experience.tsx  # Experience section
│   ├── Projects.tsx    # Projects section
│   ├── Education.tsx   # Education section
│   ├── Contact.tsx     # Contact section
│   ├── Navigation.tsx  # Navigation component
│   └── Footer.tsx      # Footer component
├── assets/             # Images and static files
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── index.css           # Global styles & design system
└── main.tsx            # Application entry point
```

## 🚀 Deployment

### Using Lovable
1. Visit [Lovable Project](https://lovable.dev/projects/25da9e28-db0a-4f14-82cb-d3b67cf41c6b)
2. Click on Share → Publish
3. Your portfolio will be live instantly

### Using Vercel
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy with one click

### Using Netlify
1. Connect repository to Netlify
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Deploy

## 🔧 Development Tips

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add to `src/pages/Index.tsx`
3. Add navigation link in `src/components/Navigation.tsx`

### Debugging Styles
- Use browser dev tools to inspect CSS custom properties
- Check Tailwind CSS documentation for utility classes
- Verify color values are in HSL format for design system

### Performance Optimization
- Optimize images (use WebP format)
- Lazy load sections below the fold
- Minimize bundle size with tree shaking

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

**Yussef Rostom** - Backend Developer

- Email: yussef.rostom@gmail.com
- LinkedIn: [yussefrostom](https://linkedin.com/in/yussefrostom)
- GitHub: [Yussef-Rostom](https://github.com/Yussef-Rostom)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS