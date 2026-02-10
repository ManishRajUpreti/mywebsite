# Portfolio

A modern, animated 3D developer portfolio built with **React**, **Three.js**, and **TailwindCSS**. This project is designed to help you stand out and creatively showcase your skills with a unique, visually striking experience.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Open Source](https://img.shields.io/badge/Open%20Source-%E2%9D%A4-red)](https://github.com/ManishRajUpreti/mywebsite)
[![React](https://img.shields.io/badge/React-19.0-blue.svg)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6.1-purple.svg)](https://vitejs.dev)

>  This project is **open source** and available for anyone to use, learn from, and customize for their own portfolio!

---

##  Features

- **Immersive 3D Visuals** — Powered by React Three Fiber and Drei for stunning 3D graphics
- **Smooth Animations** — Scroll-based effects and transitions using Framer Motion
- **Responsive Design** — Clean, modern UI built with TailwindCSS, works on all devices
- **Working Contact Form** — Integrated with EmailJS for direct email communications
- **SEO Optimized** — Proper meta tags and semantic HTML for search engine visibility
- **Accessibility First** — WCAG 2.1 compliant with keyboard navigation and ARIA labels
- **Error Handling** — Error boundaries and proper error states for reliability
- **Fast & Optimized** — Built with Vite for lightning-fast development and production builds

---

##  Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Modern UI library with hooks and concurrent features |
| **Vite 6** | Ultra-fast build tool and development server |
| **TailwindCSS 4** | Utility-first CSS framework for rapid styling |
| **React Three Fiber** | React renderer for Three.js WebGL graphics |
| **React Router v7** | Client-side routing for multi-page functionality |
| **Framer Motion** | Production-ready animation library |
| **EmailJS** | Backend-less email service for contact forms |
| **React Helmet Async** | SEO meta tag management |
| **Three.js** | 3D graphics library |
| **Maath** | Mathematical utilities for animations |

---

##  Project Structure
```
.
├── public/
│   ├── assets/          # Images, logos, project screenshots
│   ├── models/          # 3D models
│   └── ...
├── src/
│   ├── components/      # Reusable UI components
│   ├── sections/        # Page sections (Hero, About, Projects, etc.)
│   ├── pages/           # Full page components (Terms, Privacy)
│   ├── constants/       # Configuration and constants
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── .env.example         # Environment variables template
├── CONTRIBUTING.md      # Contribution guidelines
├── DEVELOPMENT.md       # Development best practices
├── LICENSE              # MIT License
├── package.json         # Project dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # TailwindCSS configuration
└── README.md            # This file
```
|   |   └── ...
|   ├── constants/
|   |   └── index.js
|   ├── sections/
|   |   ├── About.jsx
|   |   └── ...
|   ├── App.jsx
|   ├── index.css
|   └── main.jsx
├── .gitignore
├── .npmrc
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.js
├── vite.config.js
└── README.md

```


##  Getting Started

### Prerequisites
- Node.js 18+ or higher
- npm or yarn package manager
- Git for version control

### Installation

1. **Clone the Repository**
```bash
git clone https://github.com/ManishRajUpreti/mywebsite.git
cd mywebsite
```

2. **Install Dependencies**
```bash
npm install
```

3. **Configure Environment Variables**
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. **Run the Development Server**
```bash
npm run dev
```
The application will be accessible at `http://localhost:5173`

### Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Check code quality with ESLint |

##  Configuration

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Optional: Analytics and Third-party Services
VITE_GOOGLE_ANALYTICS_ID=your_ga_id
VITE_ENABLE_ANALYTICS=false
```

### Customization

1. **Update your portfolio data** in `src/constants/index.js`
2. **Replace content** with your own information
3. **Update social links** in the constants
4. **Add your projects** and work experiences
5. **Update meta tags** in `index.html` for SEO

##  Customization Guide

### Adding Projects

Edit `src/constants/index.js`:
```javascript
export const myProjects = [
  {
    id: 1,
    title: "Your Project",
    description: "Project description",
    href: "https://github.com/...",
    image: "assets/projects/your-project.png",
    tags: [
      { id: 1, name: "React", path: "assets/logos/react.svg" }
    ]
  }
];
```

### Adding Work Experience

```javascript
export const experiences = [
  {
    title: "Your Role",
    job: "Company Name",
    date: "2023 - 2024",
    contents: [
      "Achievement 1",
      "Achievement 2"
    ]
  }
];
```

### Styling

- Uses TailwindCSS for all styling
- Custom CSS in `src/index.css`
- Dark theme by default (can be customized in `tailwind.config.js`)

##  Browser Support

| Browser | Support |
| :--- | :--- |
| Chrome | ✅ Latest 2 versions |
| Firefox | ✅ Latest 2 versions |
| Safari | ✅ Latest 2 versions |
| Edge | ✅ Latest 2 versions |
| Mobile Browsers | ✅ iOS Safari, Chrome Mobile |

## ♿ Accessibility

This project follows **WCAG 2.1 Level AA** standards:
- ✅ Keyboard navigation support
- ✅ ARIA labels and semantic HTML
- ✅ Focus indicators on interactive elements
- ✅ Sufficient color contrast ratios
- ✅ Error boundaries and graceful error handling

##  Security & Privacy

- SEO optimized with proper meta tags
- Privacy policy page included
- Terms of use page included
- Error handling with ErrorBoundary
- No sensitive data stored in frontend

##  Assets & Attributions

All 3D models, textures, and assets are located in the `public/` directory. Ensure you have proper licenses for any third-party assets you use.

##  Contributing

We welcome contributions! Whether it's bug fixes, features, or improvements, please contribute.

### Steps to Contribute:
1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

For detailed guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md) and [DEVELOPMENT.md](DEVELOPMENT.md).

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

You are free to:
- ✅ Use for personal or commercial projects
- ✅ Modify and customize
- ✅ Distribute or sublicense
- ✅ Use as a template

**Requirement**: Include the original license and copyright notice in your project.

## 🚀 Deployment

This project is optimized for deployment on:
- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**
- **Any Node.js hosting**

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Live Demo
🔗 [manishrajupreti.com.np](https://manishrajupreti.com.np)

##  Contact & Support

For questions, suggestions, or issues:
- Email: manishrajupreti@gmail.com
- GitHub Issues: [Report an issue](https://github.com/ManishRajUpreti/mywebsite/issues)
- Twitter/X: [@ManishRajUpreti](https://twitter.com)

##  Acknowledgments

This project was inspired by and built with concepts from:
- The React community
- Open-source contributors
- Modern web development best practices
- WCAG accessibility guidelines

Special thanks to all the amazing tools and libraries used:
- **React** and ecosystem
- **Three.js** and **React Three Fiber**
- **TailwindCSS**
- **Framer Motion**
- All other open-source contributors

##  Support This Project

If you find this project helpful or use it for your portfolio, please consider:
- Giving it a star 
- Sharing it with others
- Contributing improvements
- Providing feedback

Your support motivates further development!

##  Bug Reports & Feature Requests

Have a bug or feature request? Please open an issue with:
- Clear description of the problem
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Environment details (browser, OS, Node version)

##  Roadmap

Planned features and improvements:
- [ ] Blog section
- [ ] Dark/Light theme toggle
- [ ] Multi-language support
- [ ] Analytics integration
- [ ] Component storybook
- [ ] Unit and integration tests
- [ ] Performance monitoring

---

<div align="center">

Made by [Manish Raj Upreti](https://github.com/ManishRajUpreti)

[Report Bug](https://github.com/ManishRajUpreti/mywebsite/issues) • [Request Feature](https://github.com/ManishRajUpreti/mywebsite/issues) • [View Demo](https://manishrajupreti.com.np)

</div>


## Contact
Feel free to reach out to me for questions or collaborations.
Email: manishrajupreti@gmail.com

## Acknowledgments

This project was inspired by and built upon concepts from the developer community. Special thanks to all the open-source contributors and the amazing tools that made this possible.

## Star This Repo! 

If you find this project helpful or use it for your own portfolio, please consider giving it a star! It helps others discover it and motivates further development.

## Suggestions or Feedback
If you have any suggestions for improving this project, please open an issue or contact me directly. Your feedback is highly appreciated!
