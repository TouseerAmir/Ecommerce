# Touseer Amir - Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features a sleek navy blue design with professional animations and smooth interactions.

## 🌟 Features

- **Modern Design**: Clean, professional layout with navy blue theme
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: CSS animations and JavaScript interactions
- **Contact Form**: Functional contact form with validation
- **Mobile Navigation**: Hamburger menu for mobile devices
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Loading**: Optimized for performance
- **Accessibility**: WCAG compliant design

## 📁 File Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🚀 Quick Start

1. **Download/Clone** the files to your local machine
2. **Open** `index.html` in your web browser
3. **Customize** the content as needed (see customization guide below)

## 🎨 Customization Guide

### Personal Information

Edit the following sections in `index.html`:

#### Profile Information
```html
<!-- Update in the home section -->
<h1 class="home-title">Hi, I'm Touseer Amir</h1>
<h2 class="home-subtitle">Software Engineer & Full Stack Developer</h2>
<p class="home-description">I love coding and building responsive, full-featured websites.</p>
```

#### About Section
```html
<!-- Update in the about section -->
<p class="about-bio">
    I'm a Software Engineer currently completing my Bachelor's degree at the National University of Modern Languages in Islamabad...
</p>
```

#### Contact Information
```html
<!-- Update in the contact section -->
<p>0331-9838178</p>
<p>touseeramir@gmail.com</p>
<p><a href="https://www.linkedin.com/in/touseer-amir-805ba9363">touseer-amir-805ba9363</a></p>
```

### Profile Picture

Replace the placeholder image with your actual photo:

1. Add your profile picture to the project folder
2. Update the image source in `index.html`:
```html
<img src="your-photo.jpg" alt="Touseer Amir" class="profile-pic">
```

### Portfolio Projects

Update the portfolio section with your actual projects:

```html
<div class="portfolio-item featured">
    <div class="portfolio-image">
        <img src="project-screenshot.jpg" alt="Project Name">
    </div>
    <div class="portfolio-content">
        <h3>Your Project Name</h3>
        <p>Project description goes here...</p>
        <div class="tech-stack">
            <span class="tech-badge">React</span>
            <span class="tech-badge">Node.js</span>
        </div>
        <div class="portfolio-links">
            <a href="project-url" class="btn btn-small">View Project</a>
            <a href="github-url" class="btn btn-small btn-outline">Source Code</a>
        </div>
    </div>
</div>
```

### Color Scheme

To change the color scheme, update the CSS variables in `styles.css`:

```css
/* Primary colors */
--primary-color: #60a5fa;      /* Light blue */
--secondary-color: #3b82f6;    /* Darker blue */
--background-dark: #0f172a;    /* Navy blue */
--background-light: #1e293b;   /* Lighter navy */
--text-white: #ffffff;         /* White text */
--text-gray: #cbd5e1;          /* Gray text */
```

## 🔧 Technical Features

### JavaScript Functionality

- **Mobile Navigation**: Hamburger menu toggle
- **Smooth Scrolling**: Animated navigation between sections
- **Form Validation**: Contact form with email validation
- **Scroll Animations**: Elements animate as they come into view
- **Active Navigation**: Highlights current section in navigation
- **Typing Animation**: Animated text effect on home page
- **Notification System**: Success/error messages for form submission

### CSS Features

- **CSS Grid & Flexbox**: Modern layout techniques
- **CSS Animations**: Smooth transitions and hover effects
- **Responsive Design**: Mobile-first approach
- **Custom Properties**: CSS variables for easy theming
- **Backdrop Filter**: Modern glassmorphism effects

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📧 Contact Form

The contact form includes:
- Name field (required)
- Email field (required, with validation)
- Message field (required)
- Form validation and success/error notifications

**Note**: The form currently shows a success message but doesn't actually send emails. To make it functional, you'll need to:
1. Set up a backend service (Node.js, PHP, etc.)
2. Configure email sending (Nodemailer, SendGrid, etc.)
3. Update the form submission handler in `script.js`

## 🚀 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to Netlify
2. Your site will be deployed instantly
3. Get a custom domain or use the provided Netlify subdomain

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy your site
3. Get a custom domain or use the provided Vercel subdomain

## 🔍 SEO Optimization

The website includes:
- Proper meta tags
- Semantic HTML structure
- Alt text for images
- Open Graph tags
- Structured data (can be added)

## ♿ Accessibility

- Semantic HTML elements
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- High contrast colors
- Screen reader friendly

## 📈 Performance

- Optimized images
- Minified CSS/JS (recommended for production)
- Efficient animations
- Lazy loading (can be implemented)
- CDN for external resources

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider sharing them!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you need help customizing this portfolio website, feel free to reach out!

---

**Built with ❤️ for Touseer Amir's Portfolio** 