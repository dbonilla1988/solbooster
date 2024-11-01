document.addEventListener('DOMContentLoaded', function() {
    const priceButtons = document.querySelectorAll('.price-btn');
    const modal = document.getElementById('pricing-modal');
    const modalServiceName = document.getElementById('modal-service-name');
    const modalServiceDescription = document.getElementById('modal-service-description');
    const modalServicePrice = document.getElementById('modal-service-price');
    const modalServiceDuration = document.getElementById('modal-service-duration');
    const closeModal = document.querySelector('.close');

    // Service options with descriptions and updated prices
    const serviceOptions = {
        "1": {
            name: "Basic Solana Volume Boost",
            description: "1 buy and 1 sell every minute",
            basePrice: 1.5, // Price for 1 hour
            durations: {
                "1h": { name: "1 hour", multiplier: 1 },
                "3h": { name: "3 hours", multiplier: 3 },
                "12h": { name: "12 hours", multiplier: 12 },
                "24h": { name: "24 hours", multiplier: 24 }
            }
        },
        "2": {
            name: "Advanced Solana Volume Boost",
            description: "2 buys and 1 sell every minute",
            basePrice: 3.0,
            durations: {
                "1h": { name: "1 hour", multiplier: 1 },
                "3h": { name: "3 hours", multiplier: 3 },
                "12h": { name: "12 hours", multiplier: 12 },
                "24h": { name: "24 hours", multiplier: 24 }
            }
        },
        "3": {
            name: "Premium Solana Volume Boost",
            description: "3 buys and 2 sells every minute",
            basePrice: 5.0,
            durations: {
                "1h": { name: "1 hour", multiplier: 1 },
                "3h": { name: "3 hours", multiplier: 3 },
                "12h": { name: "12 hours", multiplier: 12 },
                "24h": { name: "24 hours", multiplier: 24 }
            }
        },
        "4": {
            name: "Customizable Solana Volume Boost",
            description: "Custom buy/sell ratios with randomized intervals",
            basePrice: 7.0,
            durations: {
                "1h": { name: "1 hour", multiplier: 1 },
                "3h": { name: "3 hours", multiplier: 3 },
                "12h": { name: "12 hours", multiplier: 12 },
                "24h": { name: "24 hours", multiplier: 24 }
            }
        }
    };

    // Handle price button clicks
    priceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const serviceKey = button.getAttribute('data-service');
            const selectedService = serviceOptions[serviceKey];

            // Build duration options
            let durationOptions = '';
            for (const duration of Object.values(selectedService.durations)) {
                const totalPrice = (selectedService.basePrice * duration.multiplier).toFixed(2);
                durationOptions += `${duration.name}: ${totalPrice} SOL<br>`;
            }

            modalServiceName.innerHTML = selectedService.name;
            modalServiceDescription.innerHTML = selectedService.description;
            modalServicePrice.innerHTML = `Base Price: ${selectedService.basePrice} SOL per hour`;
            modalServiceDuration.innerHTML = `Available Durations:<br>${durationOptions}`;

            modal.style.display = 'flex';
        });
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // FAQ toggle functionality
    const faqs = document.querySelectorAll('.faq');
    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            faq.classList.toggle('active');
            const content = faq.querySelector('.faq-content');
            if (faq.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        });
    });

    // Initialize Particles.js
    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('Particles.js config loaded');
    });

    // Contact Form Submission
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset(); // Reset the form after submission
    });

    // Change header background on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.pageYOffset > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');

    menuIcon.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            nav.classList.remove('active'); // Close mobile menu
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});