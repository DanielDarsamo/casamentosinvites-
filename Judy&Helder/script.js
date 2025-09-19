// Simple animation on load
window.addEventListener('load', () => {
  const container = document.querySelector('.container');
  container.style.transform = 'translateY(0)';
  container.style.opacity = '1';
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Optional: Add subtle hover effect to the map button
const mapButton = document.querySelector('.map-button');
if (mapButton) {
  mapButton.addEventListener('mouseenter', () => {
    mapButton.style.transform = 'scale(1.05)';
  });

  mapButton.addEventListener('mouseleave', () => {
    mapButton.style.transform = 'scale(1)';
  });
}