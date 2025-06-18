// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        // Simple validation
        if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
            alert('Please fill out all fields');
            return;
        }
        
        // Simulate form submission
        alert('Form submitted successfully!');
        
        // Reset form
        contactForm.reset();
    });
}

// Button animation
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mousedown', function() {
        this.style.transform = 'scale(0.95)';
    });
    
    button.addEventListener('mouseup', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'none';
    });
});

// Mobile navigation toggle
const createMobileNavToggle = () => {
    if (window.innerWidth <= 768) {
        const nav = document.querySelector('nav');
        const navList = document.querySelector('nav ul');
        
        if (nav && navList && !document.querySelector('.nav-toggle')) {
            const toggle = document.createElement('button');
            toggle.className = 'nav-toggle';
            toggle.innerHTML = '☰';
            toggle.style.cssText = `
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                display: none;
            `;
            
            nav.querySelector('.container').insertBefore(toggle, navList);
            
            toggle.addEventListener('click', function() {
                navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
            });
        }
    }
};

// Initialize on page load
window.addEventListener('load', function() {
    createMobileNavToggle();
    
    // Add active class to current section
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
}); 