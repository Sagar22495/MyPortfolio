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

// ======= NAVBAR BURGER TOGGLE =======
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

if (burger && navLinks) {
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
  });
}
