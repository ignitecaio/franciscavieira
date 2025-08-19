// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(114, 47, 55, 0.98)';
    } else {
        header.style.background = 'rgba(114, 47, 55, 0.95)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = Math.random() * 0.5 + 's';
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.card, .slide-up').forEach(el => {
    observer.observe(el);
});

// CTA Button interaction
document.getElementById('agendarBtn').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Add ripple effect
    const ripple = document.createElement('span');
    ripple.style.cssText = `
        position: absolute;
        background: rgba(255,255,255,0.6);
        border-radius: 50%;
        width: 100px;
        height: 100px;
        transform: translate(-50%, -50%) scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    `;
    
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    
    // Create ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: translate(-50%, -50%) scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Remove ripple after animation
    setTimeout(() => {
        ripple.remove();
        style.remove();
    }, 600);
    
    // Show success message
    setTimeout(() => {
        alert('🎉 Obrigada pelo interesse! Em breve entraremos em contato para agendar sua consulta. 💜');
    }, 300);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    hero.style.transform = `translateY(${rate}px)`;
});

// Add floating hearts animation
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '💜';
    heart.style.cssText = `
        position: fixed;
        font-size: 20px;
        pointer-events: none;
        z-index: 999;
        opacity: 0.7;
        animation: floatHeart 4s ease-out forwards;
    `;
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatHeart {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 0.7;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
        style.remove();
    }, 4000);
}

// Create floating hearts periodically
setInterval(createFloatingHeart, 5000);

// Mobile menu toggle (if needed)
const createMobileMenu = () => {
    if (window.innerWidth <= 768) {
        const nav = document.querySelector('nav');
        const menuBtn = document.createElement('button');
        menuBtn.innerHTML = '☰';
        menuBtn.style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
        `;
        nav.appendChild(menuBtn);
    }
};

window.addEventListener('resize', createMobileMenu);
createMobileMenu();
