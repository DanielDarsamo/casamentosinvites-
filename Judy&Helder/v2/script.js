document.getElementById('waxSealContainer').addEventListener('click', function() {
    // Add clicked class for animation
    this.classList.add('clicked');
    
    // Remove clicked class after animation completes
    setTimeout(() => {
        this.classList.remove('clicked');
    }, 500);
    
    // Show animation effect
    const animationEffect = document.getElementById('animationEffect');
    animationEffect.classList.add('active');
    
    // Hide animation effect after delay
    setTimeout(() => {
        animationEffect.classList.remove('active');
    }, 1000);
});