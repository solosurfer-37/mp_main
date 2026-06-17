

const overlay  = document.querySelector('.nav-overlay');
const backdrop = document.querySelector('.backdrop');
// const hamburger = document.getElementById('hamburger');
const hamburger = document.querySelector('.hamburger');
const closeBtn = document.getElementById('close-btn');

function openMenu() {
  overlay.classList.add('active');
  backdrop.classList.add('show');
}

function closeMenu() {
  overlay.classList.remove('active');
  backdrop.classList.remove('show');
}

hamburger.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
backdrop.addEventListener('click', closeMenu);

// Close menu automatically when you click a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', closeMenu);
});







function toggleProducts() {
  const moreProducts = document.querySelector(".more-products");
  const btn = document.querySelector(".view-more-btn");

  if (moreProducts.classList.contains("open")) {
    moreProducts.classList.remove("open");
    btn.textContent = "View More";
  } else {
    moreProducts.classList.add("open");
    btn.textContent = "View Less";
  }
}














