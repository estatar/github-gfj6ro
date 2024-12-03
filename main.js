import { initializeNavigation } from './src/js/navigation.js';
import { initializeSmoothScroll } from './src/js/smoothScroll.js';
import { initializeContactForm } from './src/js/contact.js';

// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
  initializeNavigation();
  initializeSmoothScroll();
  initializeContactForm();
});