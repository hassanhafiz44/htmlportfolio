# Muhammad Hassan Javed - Portfolio Website

A modern, responsive portfolio website showcasing 6+ years of PHP development expertise, server management skills, and enterprise project experience.

## 🚀 Live Demo

Access the portfolio at: `http://localhost:803` (when running with Docker)

## 📋 Features

### ✨ Modern Design
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between themes with persistent user preference
- **Glass Morphism Effects**: Modern UI with backdrop blur and transparency
- **Smooth Animations**: CSS transitions and hover effects
- **Professional Typography**: Inter font family for clean readability

### 🛠 Technical Highlights
- **Pure HTML5/CSS3/JavaScript**: No framework dependencies
- **SEO Optimized**: Comprehensive meta tags, Open Graph, and Schema markup
- **Performance Focused**: Lightweight and fast loading
- **Cross-Browser Compatible**: Works on all modern browsers
- **Docker Ready**: Easy deployment with Docker Compose

### 📱 Responsive Breakpoints
- **Desktop**: 1200px+ (Full layout with all features)
- **Laptop**: 992px - 1200px (Optimized grid layouts)
- **Tablet**: 768px - 992px (Adjusted navigation and spacing)
- **Mobile**: 480px - 768px (Single column layouts)
- **Small Mobile**: 360px - 480px (Compact design)
- **Extra Small**: ≤360px (Minimal layout)

## 🔧 Project Structure

```
staticportfolio/
├── dockerdeps/
│   └── docker-compose.yml     # Docker configuration
├── images/
│   └── hero.jpg              # Profile image
├── index.html                # Main portfolio page
├── style.css                 # All styles and responsive design
├── script.js                 # Theme management and interactions
├── favicon.ico               # Website favicon
├── favicon-16x16.png         # Small favicon
├── favicon-32x32.png         # Medium favicon
├── favicon-48x48.png         # Large favicon
└── README.md                 # This file
```

## 🐳 Quick Start with Docker

### Prerequisites
- Docker
- Docker Compose

### Installation & Setup

1. **Clone the repository** (if using Git):
   ```bash
   git clone <your-repo-url>
   cd staticportfolio
   ```

2. **Start the Docker container**:
   ```bash
   cd dockerdeps
   docker-compose up -d
   ```

3. **Access the portfolio**:
   Open your browser and navigate to `http://localhost:803`

### Docker Configuration
- **Web Server**: Nginx Alpine (lightweight)
- **Port**: 803 (external) → 80 (internal)
- **Volume Mount**: Parent directory mounted to `/usr/share/nginx/html`

## 📖 Sections Overview

### 🏠 Hero Section
- Professional profile image
- Name and title
- Years of experience highlight
- Call-to-action button

### 💼 Experience Cards
- **PHP Developer**: 5+ years of modern PHP development
- **Mobile Applications**: Xamarin.Forms experience (2018)
- **Ubuntu Instance Management**: LAMP stack, TLS/SSL setup
- **Web Applications**: Backend systems and API development

### 📊 Professional Timeline
Detailed work history including:
- **Senior PHP Developer** at Invocore (2019-2024)
- **Web Developer** at ELR Group (2018-2019)
- **Junior PHP Developer** at Skylogic (2017-2018)

### 🚀 Featured Projects
- **ELR Group Portal**: Laravel-based business management
- **Kaolin Inventory System**: QR code inventory management
- **Invotime**: Enterprise attendance and time management

### 🛠 Technical Skills
- **Backend**: PHP, Laravel, CodeIgniter
- **Frontend**: JavaScript, Bootstrap, jQuery
- **Database**: MySQL, Database Design
- **Server**: Ubuntu, LAMP Stack, TLS/SSL
- **Tools**: Git, Composer, WordPress

### 📞 Contact Information
- **Email**: dev@javedevelopers.com
- **Phone**: +92 305 6292104
- **GitHub**: [hassanhafiz44](https://github.com/hassanhafiz44)
- **Upwork**: [Professional Profile](https://www.upwork.com/freelancers/~017c167e66adb047d3)

## 🎨 Customization

### Colors
Primary color palette defined in CSS variables:
```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --background-light: #fafafa;
  --background-dark: #0f0f0f;
}
```

### Dark Mode
Automatic system preference detection with manual toggle:
- System preference detection on load
- LocalStorage persistence
- Smooth transitions between themes

### Content Updates
- **Personal Info**: Update in `index.html` hero section
- **Experience**: Modify experience cards and timeline
- **Projects**: Add/edit project cards with links
- **Skills**: Update skills grid items
- **Contact**: Update contact information in footer

## 🔍 SEO Features

### Meta Tags
- Comprehensive description and keywords
- Geographic targeting (Pakistan)
- Language and revisit frequency

### Social Media
- **Open Graph**: Facebook/LinkedIn optimization
- **Twitter Cards**: Twitter sharing optimization
- **Schema Markup**: Structured data for search engines

### Performance
- Optimized images and assets
- Minimal JavaScript for fast loading
- Semantic HTML structure

## 🌐 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile Browsers**: All modern mobile browsers

## 📱 Mobile Features

- Touch-friendly navigation
- Optimized image sizes
- Readable typography
- Fast loading on mobile networks
- Proper viewport configuration

## 🔧 Development

### Local Development
For local development without Docker:
1. Open `index.html` in a web browser
2. Use a local server like Live Server (VS Code extension)
3. Or use Python: `python3 -m http.server 8000`

### Adding New Sections
1. Add HTML structure in `index.html`
2. Style in `style.css` with responsive breakpoints
3. Add any interactions in `script.js`

### Favicon Updates
Favicons are generated from the hero image using Python PIL:
```bash
python3 -c "from PIL import Image, ImageDraw; ..."
```

## 📝 License

This portfolio is open source and available under the MIT License.

## 👨‍💻 About the Developer

**Muhammad Hassan Javed** is a Senior PHP Developer with 6+ years of experience in web development, specializing in Laravel, CodeIgniter, and enterprise solutions. Expert in Ubuntu server management, LAMP stack deployment, and TLS/SSL configuration.

---

**Contact**: dev@javedevelopers.com | **Portfolio**: https://javedevelopers.com
