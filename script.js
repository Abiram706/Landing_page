// Mobile menu functionality
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenuClose = document.querySelector('.mobile-menu-close');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.add('open');
  document.body.style.overflow = 'hidden';
});

mobileMenuClose.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.mobile-menu a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// FAQ accordion functionality
document.querySelectorAll('.faq-question').forEach((button) => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const icon = button.querySelector('svg');

    // Close all other answers first
    document.querySelectorAll('.faq-answer').forEach((item) => {
      if (item !== answer) {
        item.classList.add('hidden');
        item.previousElementSibling.querySelector('svg').classList.remove('rotate-180');
      }
    });

    // Toggle current answer
    answer.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
  });
});

// Scroll animations
function animateOnScroll() {
  const elements = document.querySelectorAll('.slide-up, .fade-in, .scale-in');

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (elementPosition < screenPosition) {
      element.classList.add('show');
    }
  });
}

// Initialize animations on load
window.addEventListener('load', () => {
  animateOnScroll();

  // Animate hero text sequentially
  const heroElements = document.querySelectorAll('.hero-bg h1, .hero-bg p, .hero-bg button');
  heroElements.forEach((el, index) => {
    setTimeout(() => {
      el.style.opacity = 1;
    }, index * 300);
  });
});

// Animate on scroll
window.addEventListener('scroll', animateOnScroll);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  });
});

// Form submission
const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Here you would typically send the form data to a server
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
  });
}
