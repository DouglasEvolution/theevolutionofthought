// The Evolution of Thought - Main JavaScript

// Mobile menu toggle
function toggleMenu() {
  const menu = document.getElementById('nav-menu');
  menu.classList.toggle('active');
}

// Close menu when clicking a link
document.addEventListener('DOMContentLoaded', function() {
  const menuLinks = document.querySelectorAll('#nav-menu a');
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      const menu = document.getElementById('nav-menu');
      menu.classList.remove('active');
    });
  });
});

// Add scroll effect to navigation
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(10, 10, 10, 0.98)';
  } else {
    nav.style.background = 'rgba(10, 10, 10, 0.95)';
  }
});
