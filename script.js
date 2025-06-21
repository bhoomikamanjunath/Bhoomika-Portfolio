// Add JavaScript for interactivity if needed
// Example: smooth scroll for navigation
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 10,
        behavior: 'smooth'
      });
    }
  });
});
