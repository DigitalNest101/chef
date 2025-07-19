# Crystal Glass Studio Website

A modern, responsive glass store website showcasing premium glass products with an elegant user interface and smooth shopping experience.

## 🌟 Features

### Design & UI
- **Modern Glass-themed Design**: Beautiful glassmorphism effects and glass-inspired color palette
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Floating glass elements, scroll-triggered animations, and smooth transitions
- **Professional Typography**: Elegant font combinations with Playfair Display and Inter

### Functionality
- **Product Catalog**: 12 premium glass products across 4 categories
- **Product Filtering**: Filter products by category (Drinkware, Decorative, Lighting, Tableware)
- **Shopping Cart**: Add/remove items with real-time cart updates and modal display
- **Contact Form**: Functional contact form with validation
- **Newsletter Signup**: Email subscription form
- **Smooth Navigation**: Smooth scrolling between sections and mobile-friendly hamburger menu

### Interactive Elements
- **Animated Statistics**: Counting animations for company stats
- **Glass Showcase**: Floating glass elements with CSS animations
- **Product Cards**: Hover effects and smooth transitions
- **Notification System**: User feedback for cart actions and form submissions

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - runs entirely in the browser

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. The website will load immediately - no additional setup required!

### File Structure
```
glass-store-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md          # Project documentation
```

## 🛍️ Product Categories

The website features four main product categories:

1. **Drinkware** - Wine glasses, whiskey tumblers, champagne flutes
2. **Decorative** - Vases, sculptures, wall art
3. **Lighting** - Pendant lamps, chandeliers, table lamps
4. **Tableware** - Dinner plates, serving bowls, cake stands

## 🎨 Design Features

### Color Palette
- **Primary Blue**: `#2c5aa0` - Professional and trustworthy
- **Secondary Light Blue**: `#87ceeb` - Soft and elegant
- **Accent Gold**: `#ffd700` - Luxury and premium feel
- **Glass Blues**: `#e6f3ff`, `#b8e6e6` - Light, airy glass effects

### Animations
- **Floating Elements**: Glass items with subtle floating animations
- **Scroll Animations**: Elements fade in as they enter viewport
- **Counter Animations**: Statistics count up when visible
- **Hover Effects**: Interactive feedback on all clickable elements

### Responsive Breakpoints
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: 767px and below

## 🔧 Customization

### Adding New Products
Edit the `products` array in `script.js`:

```javascript
const products = [
    {
        id: 13,
        name: "Your Product Name",
        category: "drinkware", // or decorative, lighting, tableware
        price: 99.99,
        description: "Product description",
        icon: "fas fa-icon-name" // FontAwesome icon
    }
    // ... existing products
];
```

### Changing Colors
Update the CSS custom properties in `styles.css`:

```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    --accent-color: #your-color;
    /* ... other variables */
}
```

### Modifying Contact Information
Update the contact details in the HTML contact section:

```html
<div class="contact-item">
    <i class="fas fa-map-marker-alt"></i>
    <div>
        <h4>Visit Our Studio</h4>
        <p>Your Address Here</p>
    </div>
</div>
```

## 📱 Browser Support

- **Chrome**: 60+ ✅
- **Firefox**: 60+ ✅
- **Safari**: 12+ ✅
- **Edge**: 79+ ✅

## 🔧 Technologies Used

- **HTML5**: Semantic markup and modern structure
- **CSS3**: Advanced styling with custom properties, flexbox, grid, and animations
- **JavaScript ES6+**: Modern JavaScript with arrow functions, destructuring, and modules
- **FontAwesome**: Icon library for consistent iconography
- **Google Fonts**: Playfair Display and Inter font families

## 📈 Performance Features

- **Optimized Images**: SVG icons and CSS-based graphics for fast loading
- **Efficient Animations**: CSS transforms and GPU acceleration
- **Lazy Loading**: Intersection Observer for scroll-triggered animations
- **Debounced Events**: Optimized scroll and resize handlers

## 🎯 SEO Features

- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Meta Tags**: Viewport and charset meta tags
- **Accessible**: ARIA labels and keyboard navigation support
- **Fast Loading**: Minimal external dependencies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **FontAwesome** for the beautiful icons
- **Google Fonts** for the elegant typography
- **CSS Tricks** for glassmorphism inspiration
- **MDN Web Docs** for web standards reference

## 📞 Support

For questions or support, please contact:
- Email: info@crystalglassstudio.com
- Phone: +1 (555) 123-4567
- Address: 123 Glass Street, Artisan Quarter, New York, NY 10001

---

**Crystal Glass Studio** - *Crafting excellence in glass since 1990*