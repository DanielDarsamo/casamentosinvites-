// Invitation page with music controls
document.addEventListener('DOMContentLoaded', () => {
  const musicToggle = document.getElementById('music-toggle');
  const volumeSlider = document.getElementById('volume-slider');
  const volumeControl = document.getElementById('volume-control');
  const backgroundMusic = document.getElementById('background-music');
  const petalsContainer = document.getElementById('petals-container');
  const musicControls = document.getElementById('music-controls');
  const hideControls = document.getElementById('hide-controls');
  const hiddenMusicBtn = document.getElementById('hidden-music-btn');

  // Create falling petals
  function createPetals() {
    for (let i = 0; i < 20; i++) {
      const petal = document.createElement('div');
      petal.className = 'petal';
      petal.style.left = Math.random() * 100 + '%';
      petal.style.animationDuration = (Math.random() * 3 + 2) + 's';
      petal.style.animationDelay = Math.random() * 2 + 's';
      petalsContainer.appendChild(petal);
    }
  }

  // Start petals animation
  createPetals();

  // Set initial volume
  backgroundMusic.volume = 0.5;

  // Music toggle functionality
  musicToggle.addEventListener('click', () => {
    if (backgroundMusic.paused) {
      backgroundMusic.play().catch(e => console.log('Autoplay prevented:', e));
      musicToggle.innerHTML = '<span class="music-icon">🎵</span>';
      volumeControl.style.display = 'flex';
    } else {
      backgroundMusic.pause();
      musicToggle.innerHTML = '<span class="music-icon">🔇</span>';
      volumeControl.style.display = 'none';
    }
  });

  // Hidden music button functionality
  hiddenMusicBtn.addEventListener('click', () => {
    musicControls.style.display = 'flex';
    hiddenMusicBtn.classList.remove('show');
  });

  // Hide controls functionality
  hideControls.addEventListener('click', () => {
    musicControls.style.display = 'none';
    hiddenMusicBtn.classList.add('show');
  });

  // Volume control
  volumeSlider.addEventListener('input', (e) => {
    const volume = e.target.value / 100;
    backgroundMusic.volume = volume;
    
    // Update volume icon based on level
    const volumeIcon = volumeControl.querySelector('.volume-icon');
    if (volume === 0) {
      volumeIcon.textContent = '🔇';
    } else if (volume < 0.5) {
      volumeIcon.textContent = '🔉';
    } else {
      volumeIcon.textContent = '🔊';
    }
  });

  // Try to start music automatically (may be blocked by browser)
  backgroundMusic.play().catch(e => {
    console.log('Autoplay prevented, user needs to interact first');
    // Show music controls to indicate music is available
    volumeControl.style.display = 'flex';
  });

  // Add smooth scroll behavior
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
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
});
