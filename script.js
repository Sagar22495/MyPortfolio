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

//PROJECT SECTION//

// ===== PROJECT FILTERS =====
const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    projects.forEach(project => {
      if (filter === "all" || project.dataset.category === filter) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
});

// ===== OPEN GITHUB REPO =====
function openRepo(url) {
  window.open(url, "_blank");
}

//CONTACT DETAILS //



//BEYOND WORK SLIDE//
