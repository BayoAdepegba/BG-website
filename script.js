// --- Navbar scroll effect ---
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// --- Mobile menu toggle ---
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// --- Scroll animations ---
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Add fade-in class to elements
document.querySelectorAll(
  '.section-header, .about-grid, .program-card, .gallery-item, .testimonial-card, .contact-grid, .info-card, .recruitment-card, .nutrition-card, .form-download-card, .tryout-checklist, .recruitment-resources, .recruitment-note, .standards-wrapper'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Stagger cards
document.querySelectorAll('.program-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.1}s`;
});

document.querySelectorAll('.testimonial-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.1}s`;
});

document.querySelectorAll('.gallery-item').forEach((item, i) => {
  item.style.transitionDelay = `${i * 0.05}s`;
});

document.querySelectorAll('.info-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.1}s`;
});

document.querySelectorAll('.recruitment-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.08}s`;
});

// --- Contact form ---
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);

  // Placeholder: replace with actual form handling (e.g., Formspree, EmailJS, etc.)
  console.log('Form submitted:', data);

  alert('Thanks for reaching out! Coach BG will get back to you soon.');
  contactForm.reset();
});
