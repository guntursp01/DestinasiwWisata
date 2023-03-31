// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// menu di klik
document.querySelector('#menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Klik di luar sidebar 
const menu = document.querySelector('#menu');

document.addEventListener('click', function(e) {
  if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
})

const carousel = new bootstrap.Carousel('#myCarousel')