// Mobile menu functionality
export function initializeNavigation() {
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');

  mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    const icon = mobileMenu.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('show');
      const icon = mobileMenu.querySelector('i');
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  });
}