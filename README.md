# Management Portfolio - Astro

A modern, professional portfolio template designed specifically for management professionals, built with Astro, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Professional Design**: Clean, modern design optimized for management professionals
- **Dark/Light Mode**: Automatic theme switching with user preference persistence
- **Responsive Layout**: Mobile-first design that works on all devices
- **TypeScript Support**: Full TypeScript integration for better development experience
- **SEO Optimized**: Built-in SEO best practices with meta tags and structured data
- **Fast Performance**: Leverages Astro's static site generation for optimal loading speeds
- **Management Focus**: Tailored components for showcasing leadership experience and achievements

## 🚀 Project Structure

```
/
├── public/
│   ├── assets/
│   │   ├── fonts/
│   │   └── images/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── general/
│   │   │   ├── Footer.astro
│   │   │   ├── MetaHead.astro
│   │   │   ├── Navbar.astro
│   │   │   ├── ProjectCard.astro
│   │   │   └── ProjectsWrapper.astro
│   │   └── home/
│   │       ├── Experience.astro
│   │       └── Hero.astro
│   ├── data/
│   │   └── info.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── projects.astro
│   ├── styles/
│   │   ├── custom-styles.css
│   │   └── style.css
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   └── index.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
├── tailwind.config.cjs
└── tsconfig.json
```

## 🛠️ Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/management-portfolio.git
   cd management-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Customize your information**
   - Edit `src/data/info.ts` with your personal information, experience, projects, and contact details
   - Replace placeholder images in `public/assets/images/` with your own project screenshots and profile images

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📝 Customization

### Personal Information
Update `src/data/info.ts` with your details:
- Basic information (name, job title, about section)
- Professional experience and achievements
- Education background
- Skills and competencies
- Projects portfolio
- Social media links

### Styling
The portfolio uses a management-focused color scheme:
- **Management Blue**: `#1e3a8a` - Primary brand color
- **Management Green**: `#059669` - Success and growth
- **Accent Gold**: `#f59e0b` - Highlights and call-to-actions

Customize colors in `tailwind.config.cjs` to match your personal brand.

### Components
All components are modular and can be easily customized:
- `Hero.astro` - Landing section with introduction
- `Experience.astro` - Professional experience timeline
- `ProjectCard.astro` - Individual project showcase
- `Navbar.astro` - Navigation with theme switcher
- `Footer.astro` - Contact links and social media

## 🎯 Management-Specific Features

- **Leadership Timeline**: Visual timeline for career progression
- **Achievement Metrics**: Highlight key performance indicators and results
- **Skills Matrix**: Categorized skills (Management, Technical, Soft Skills)
- **Project Portfolio**: Showcase strategic initiatives and process improvements
- **Professional Branding**: Color scheme and typography optimized for executive presence

## 🚀 Deployment

### GitHub Pages (Recommended)

This project is configured for automatic deployment to GitHub Pages:

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "GitHub Actions"

2. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **Automatic deployment**:
   - GitHub Actions will automatically build and deploy your site
   - Your site will be available at `https://yourusername.github.io/managementportfolio`
   - Every push to `main` branch triggers a new deployment

### Other Deployment Options

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder after building
- **Manual GitHub Pages**: Build locally and push to `gh-pages` branch

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/management-portfolio/issues).

## 👨‍💼 For Management Professionals

This template is specifically designed for:
- Operations Managers
- Project Managers
- Strategic Leaders
- Business Analysts
- Consultants
- C-Level Executives

The components and styling emphasize leadership experience, strategic thinking, and operational excellence.

---

**Built with ❤️ for management professionals who want to showcase their strategic impact and leadership journey.**
Remote to showcase details about projects managed during career
