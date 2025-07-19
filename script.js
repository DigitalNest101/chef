// Glass Store Website JavaScript

// Product Data
const products = [
    {
        id: 1,
        name: "Crystal Wine Glasses Set",
        category: "drinkware",
        price: 89.99,
        description: "Elegant crystal wine glasses perfect for special occasions. Set of 6 glasses.",
        icon: "fas fa-wine-glass-alt"
    },
    {
        id: 2,
        name: "Venetian Glass Vase",
        category: "decorative",
        price: 156.50,
        description: "Hand-blown Venetian glass vase with intricate patterns and vibrant colors.",
        icon: "fas fa-seedling"
    },
    {
        id: 3,
        name: "Glass Pendant Lamp",
        category: "lighting",
        price: 245.00,
        description: "Modern glass pendant lamp with adjustable height. Perfect for dining areas.",
        icon: "fas fa-lightbulb"
    },
    {
        id: 4,
        name: "Crystal Dinner Plates",
        category: "tableware",
        price: 124.99,
        description: "Premium crystal dinner plates set. Dishwasher safe and chip resistant.",
        icon: "fas fa-utensils"
    },
    {
        id: 5,
        name: "Whiskey Tumblers",
        category: "drinkware",
        price: 67.50,
        description: "Heavy-bottom crystal whiskey tumblers. Set of 4 glasses with elegant design.",
        icon: "fas fa-glass-whiskey"
    },
    {
        id: 6,
        name: "Glass Sculpture",
        category: "decorative",
        price: 320.00,
        description: "Contemporary glass sculpture that captures and refracts light beautifully.",
        icon: "fas fa-gem"
    },
    {
        id: 7,
        name: "Chandelier",
        category: "lighting",
        price: 899.99,
        description: "Stunning crystal chandelier with 12 lights. Perfect centerpiece for any room.",
        icon: "fas fa-crown"
    },
    {
        id: 8,
        name: "Glass Serving Bowl",
        category: "tableware",
        price: 78.25,
        description: "Large glass serving bowl with elegant rim design. Perfect for salads and fruits.",
        icon: "fas fa-bowl-food"
    },
    {
        id: 9,
        name: "Champagne Flutes",
        category: "drinkware",
        price: 95.00,
        description: "Delicate champagne flutes with long stems. Set of 6 glasses.",
        icon: "fas fa-champagne-glasses"
    },
    {
        id: 10,
        name: "Glass Wall Art",
        category: "decorative",
        price: 189.75,
        description: "Abstract glass wall art piece that creates stunning light patterns.",
        icon: "fas fa-palette"
    },
    {
        id: 11,
        name: "Table Lamp",
        category: "lighting",
        price: 134.99,
        description: "Elegant glass table lamp with fabric shade. Perfect for bedside or living room.",
        icon: "fas fa-lamp"
    },
    {
        id: 12,
        name: "Glass Cake Stand",
        category: "tableware",
        price: 56.50,
        description: "Tiered glass cake stand perfect for displaying desserts and pastries.",
        icon: "fas fa-birthday-cake"
    }
];

// Shopping Cart
let cart = [];

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const productsGrid = document.getElementById('products-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const cartModal = document.getElementById('cart-modal');
const cartLink = document.querySelector('.cart-link');
const closeModal = document.querySelector('.close');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.querySelector('.cart-count');
const contactForm = document.getElementById('contact-form');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    loadProducts();
    initializeCart();
    initializeContactForm();
    initializeScrollEffects();
});

// Navigation Functions
function initializeNavigation() {
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
}

// Product Functions
function loadProducts(filter = 'all') {
    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(product => product.category === filter);

    productsGrid.innerHTML = '';

    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });

    // Add animation delay to cards
    const cards = productsGrid.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            <i class="${product.icon}"></i>
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        </div>
    `;
    return card;
}

// Filter Functions
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        loadProducts(filter);
    });
});

// Cart Functions
function initializeCart() {
    cartLink.addEventListener('click', (e) => {
        e.preventDefault();
        openCartModal();
    });

    closeModal.addEventListener('click', closeCartModal);

    window.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            closeCartModal();
        }
    });

    updateCartDisplay();
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCartDisplay();
    showAddToCartFeedback();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

function updateCartDisplay() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>Quantity: ${item.quantity}</p>
                </div>
                <div class="cart-item-price">
                    $${(item.price * item.quantity).toFixed(2)}
                    <button onclick="removeFromCart(${item.id})" style="margin-left: 10px; background: #e74c3c; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer;">Remove</button>
                </div>
            </div>
        `).join('');
    }

    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
}

function openCartModal() {
    cartModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeCartModal() {
    cartModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function showAddToCartFeedback() {
    const feedback = document.createElement('div');
    feedback.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #2c5aa0;
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    feedback.textContent = 'Item added to cart!';
    document.body.appendChild(feedback);

    setTimeout(() => {
        feedback.remove();
    }, 2000);
}

// Contact Form Functions
function initializeContactForm() {
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterForm);
    }
}

function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Simulate form submission
    showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
    contactForm.reset();
}

function handleNewsletterForm(e) {
    e.preventDefault();
    
    const email = e.target.querySelector('input[type="email"]').value;
    
    if (email) {
        showNotification('Thank you for subscribing to our newsletter!', 'success');
        e.target.reset();
    }
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : '#2c5aa0'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        z-index: 3000;
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Scroll Effects
function initializeScrollEffects() {
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for scroll animations
    document.querySelectorAll('.section-title, .about-text, .contact-info, .footer-section').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });

    // Stats counter animation
    const stats = document.querySelectorAll('.stat h3');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.textContent);
                animateCounter(entry.target, target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    stats.forEach(stat => {
        statsObserver.observe(stat);
    });
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + '+';
    }, 50);
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { opacity: 0; transform: translateX(100%); }
        to { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes slideOut {
        from { opacity: 1; transform: translateX(0); }
        to { opacity: 0; transform: translateX(100%); }
    }
`;
document.head.appendChild(style);

// Global functions for onclick handlers
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;