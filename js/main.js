// The Evolution of Thought - Main JavaScript

// Mobile menu toggle
function toggleMenu() {
  const menu = document.getElementById('nav-menu');
  menu.classList.toggle('active');
}

// Close menu when clicking a link and handle dropdowns
document.addEventListener('DOMContentLoaded', function() {
  const menuLinks = document.querySelectorAll('#nav-menu > li > a:not(.dropdown-toggle)');
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      const menu = document.getElementById('nav-menu');
      menu.classList.remove('active');
    });
  });

  // Handle dropdown toggle on mobile
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      const dropdown = this.parentElement;
      dropdown.classList.toggle('active');
    });
  });

  // Close dropdown when clicking a dropdown link
  const dropdownLinks = document.querySelectorAll('.dropdown-menu a');
  dropdownLinks.forEach(link => {
    link.addEventListener('click', function() {
      const menu = document.getElementById('nav-menu');
      menu.classList.remove('active');
      const dropdown = this.closest('.dropdown');
      if (dropdown) dropdown.classList.remove('active');
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
