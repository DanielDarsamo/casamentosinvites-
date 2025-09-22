// Envelope Animation and Navigation
document.addEventListener('DOMContentLoaded', () => {
  const envelope = document.getElementById('envelope');
  const fadeOverlay = document.getElementById('fade-overlay');
  const petalsContainer = document.getElementById('petals-container');
  const inviteeBanner = document.getElementById('invitee-banner');
  const inviteeNameSpan = document.getElementById('invitee-name');

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

  // Token support (same mapping as invitation.js)
  function getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
  }

  const tokenToInvitee = {
    '1': 'Octávio Chambe e Fátima Chambe',
    '2': 'Afonso Pinto e Lina Chambe',
    '3': 'Ercília Chambe',
    '4': 'Anibal Chambe',
    '5': 'Paulo Chambe e Lina Chambe',
    '6': 'Judite Gemo e Candiana Gemo',
    '7': 'Valério Gemo e Inês Manuel',
    '8': 'Gino Andrade e Gercita Ugembe',
    '9': 'Helena Matsimbe',
    '10': 'Fernando Faela',
    '11': 'Maria Luísa Chambe',
    '12': 'Laércia Milagrosa',
    '13': 'Maria Joaquina',
    '14': 'Catarina Chambe'
  };

  (function renderInviteeBanner() {
    const token = getQueryParam('token');
    const invitee = token ? tokenToInvitee[token] : undefined;
    if (invitee && inviteeBanner && inviteeNameSpan) {
      inviteeNameSpan.textContent = invitee;
      inviteeBanner.style.display = 'inline-block';
    }
  })();

  // Envelope click handler
  envelope.addEventListener('click', () => {
    // Add opened class to trigger flap animation
    envelope.classList.add('opened');
    
    // Hide the click instruction
    const clickInstruction = document.querySelector('.click-instruction');
    clickInstruction.style.opacity = '0';
    
    // After flap animation completes, start fade transition
    setTimeout(() => {
      fadeOverlay.classList.add('active');
      
      // Navigate to invitation page after fade (preserve token)
      setTimeout(() => {
        const token = getQueryParam('token');
        const suffix = token ? ('?token=' + encodeURIComponent(token)) : '';
        window.location.href = 'invitation.html' + suffix;
      }, 500);
    }, 800); // Match the flap animation duration
  });
});
