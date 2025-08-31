# Acharya - Digital Learning Platform

A modern, digital-first learning platform built with **Angular 20**, empowering students to learn independently at their own pace with interactive learning modules, personalized subject selection, and comprehensive progress tracking.

## 🎯 Vision

**A digital-first platform where students can:**
- **Learn independently** at their own pace
- **Access interactive learning modules** for enhanced engagement
- **Choose subjects, lessons, and language** of preference
- **Track progress, practice, and improve** performance

## 🚀 Features

### Core Learning Capabilities
- **Independent Learning** - Self-paced learning with personalized study paths
- **Interactive Modules** - Engaging learning content with multimedia support
- **Subject Selection** - Choose from diverse subjects and topics
- **Language Preferences** - Multi-language support for global accessibility
- **Progress Tracking** - Comprehensive analytics and performance insights
- **Practice Sessions** - Interactive exercises and assessments
- **Performance Analytics** - Detailed progress reports and improvement suggestions

### Student Management
- **Student Registration** - Complete student enrollment with learning preferences
- **Profile Management** - Personalized learning profiles and settings
- **Learning History** - Track completed lessons and achievements
- **Goal Setting** - Set and monitor learning objectives

### Technical Features
- **Angular 20** - Latest Angular with standalone components
- **Signals** - Modern state management using Angular signals
- **Reactive Forms** - Form validation and error handling
- **TypeScript** - Strict type checking and interfaces
- **SCSS** - Customizable styling with Bootstrap SCSS variables
- **Routing** - Angular Router with lazy loading support
- **Responsive Design** - Mobile-first approach with Bootstrap 5

## 🏗️ Architecture

### Project Structure
```
src/app/
├── features/                          # Feature-based organization
│   └── student-registration/         # Student learning platform
│       ├── components/               # UI components
│       │   ├── student-registration/ # Student enrollment
│       │   ├── student-list/        # Student management
│       │   ├── learning-modules/    # Interactive learning content
│       │   ├── subject-selection/   # Subject and lesson choice
│       │   ├── progress-tracking/   # Learning analytics
│       │   └── practice-sessions/   # Interactive exercises
│       ├── models/                   # Data models
│       ├── services/                 # Business logic & API
│       └── constants/                # Feature constants
├── components/                        # Shared components
│   └── home/                         # Home page component
├── scss/                             # Global styles
│   ├── _variable.scss               # Bootstrap SCSS overrides
│   ├── _typography.scss             # Typography system
│   ├── _utilities.scss              # Utility classes
│   └── _fonts.scss                  # Font definitions
└── app.routes.ts                     # Application routing
```

### Component Architecture
- **Standalone Components** - No NgModules, modern Angular approach
- **Signal-based State** - Reactive state management for learning data
- **Dependency Injection** - Using `inject()` function
- **Type Safety** - Strict TypeScript configuration

## 🛠️ Technology Stack

### Frontend
- **Angular 20** - Modern web framework for interactive applications
- **TypeScript 5** - Type-safe JavaScript for robust development
- **Bootstrap 5** - CSS framework with custom SCSS variables
- **SCSS** - Advanced CSS preprocessing for custom theming

### Development Tools
- **Angular CLI** - Development and build tools
- **ESLint** - Code quality and consistency
- **Prettier** - Code formatting
- **Git** - Version control

## 📋 Prerequisites

- **Node.js** 18+ 
- **npm** 9+ or **yarn** 1.22+
- **Angular CLI** 20+

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone <repository-url>
cd raga
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
ng serve
```

Navigate to `http://localhost:4200/` to view the learning platform.

### 4. Build for Production
```bash
ng build
```

## 🎯 Available Routes

- **`/`** - Home page with learning platform overview
- **`/home`** - Home page (redirects from root)
- **`/students`** - Student management and progress tracking
- **`/students/register`** - Student enrollment and learning preferences
- **`/learning`** - Interactive learning modules
- **`/subjects`** - Subject and lesson selection
- **`/progress`** - Learning analytics and performance tracking
- **`/practice`** - Interactive exercises and assessments

## 🎨 Styling & Theming

### Bootstrap Integration
- **Custom SCSS Variables** - Override Bootstrap defaults for learning theme
- **Responsive Grid** - Mobile-first responsive design for all devices
- **Utility Classes** - Bootstrap utility-first approach
- **Custom Components** - Enhanced Bootstrap components for learning UI

### Design System
- **Color Palette** - Primary, secondary, and semantic colors for learning
- **Typography** - Inter font family with Playfair Display headings
- **Spacing** - Consistent spacing scale for content readability
- **Shadows** - Custom shadow system for depth and focus

## 🔧 Development

### Code Generation
```bash
# Generate a new learning component
ng generate component learning-module

# Generate a new service
ng generate service learning-service

# Generate a new model
ng generate interface learning-progress
```

### Code Quality
```bash
# Lint the code
ng lint

# Run tests
ng test

# Build with production optimizations
ng build --configuration production
```

## 📱 Responsive Design

- **Mobile First** - Designed for mobile devices first, perfect for learning on-the-go
- **Breakpoints** - Bootstrap responsive breakpoints for all screen sizes
- **Touch Friendly** - Optimized for touch interactions on tablets and phones
- **Accessibility** - WCAG compliant design for inclusive learning

## 🔒 Security Features

- **Form Validation** - Client-side validation with custom error messages
- **Input Sanitization** - XSS protection for user-generated content
- **Type Safety** - TypeScript prevents runtime errors
- **Secure Routing** - Angular Router security features
- **Data Privacy** - Secure handling of student learning data

## 🚀 Performance

- **Lazy Loading** - Route-based code splitting for learning modules
- **Signal-based Change Detection** - Efficient rendering for interactive content
- **Tree Shaking** - Unused code elimination
- **Optimized Bundles** - Production build optimizations
- **Content Caching** - Efficient loading of learning materials

## 🧪 Testing

### Unit Tests
```bash
ng test
```

### End-to-End Tests
```bash
ng e2e
```

## 📦 Build & Deployment

### Development Build
```bash
ng build
```

### Production Build
```bash
ng build --configuration production
```

### Build Output
- **`dist/acharya/`** - Compiled learning platform
- **`dist/acharya/browser/`** - Browser-compatible files
- **`dist/acharya/prerendered-routes.json`** - Prerendered routes

## 🌐 Browser Support

- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-learning-feature`)
3. Commit your changes (`git commit -m 'Add amazing learning feature'`)
4. Push to the branch (`git push origin feature/amazing-learning-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Angular Team** - For the amazing framework powering our learning platform
- **Bootstrap Team** - For the CSS framework enabling responsive design
- **Inter Font** - For the beautiful typography enhancing readability
- **Playfair Display** - For elegant headings in our learning content

## 📞 Support

For support and questions about the learning platform:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Empowering independent learning with ❤️ using Angular 20 and modern web technologies**
