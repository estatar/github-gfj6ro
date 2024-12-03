// Smooth scrolling functionality
export function initializeSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
      // Close mobile menu after clicking a link
      const navLinks = document.querySelector('.nav-links');
      const mobileMenu = document.getElementById('mobile-menu');
      navLinks.classList.remove('show');
      const icon = mobileMenu.querySelector('i');
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    });
  });
}