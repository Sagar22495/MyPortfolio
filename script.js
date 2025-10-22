// ===== HAMBURGER TOGGLE =====
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
  menuToggle.textContent = mainNav.classList.contains('open') ? '✕' : '☰';
});

// ===== CLOSE MENU ON LINK CLICK =====
document.querySelectorAll('#mainNav a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.textContent = '☰';
  });
});


// ANIMATION EFFECT//
// --- Continuous light sweep across cards ---
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.tech-card');
  let current = 0;

  function activateNextCard() {
    cards.forEach(card => card.classList.remove('active'));
    cards[current].classList.add('active');
    current = (current + 1) % cards.length;
  }

  if (cards.length > 0) {
    activateNextCard();
    setInterval(activateNextCard, 2500); // 2.5s interval between cards
  }
});


//BEYOND WORK SLIDE//
