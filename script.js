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

//BEYOND WORK SLIDE//
