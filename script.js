// header........

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.createElement('div');
  hamburger.className = 'hamburger-icon';
  hamburger.innerHTML = '☰'; 
  document.querySelector('nav').appendChild(hamburger);

  const centerNav = document.querySelector('.center-nav');
  const rightNav = document.querySelector('.right-nav');

  hamburger.addEventListener('click', () => {
      centerNav.classList.toggle('active');
      rightNav.classList.toggle('active');
  });
});
/* menu hidden section................. */

const menuLink = document.querySelector('.center-nav a[href="Menu/menu.html"]');
const menuSection = document.querySelector('.menu-hidden-sec');
let hideTimeout;

menuLink.addEventListener('mouseenter', () => {
  clearTimeout(hideTimeout);
  menuSection.classList.add('show');
});


menuSection.addEventListener('mouseenter', () => {
  clearTimeout(hideTimeout); 
  menuSection.classList.add('show');
});

const hideMenuWithDelay = () => {
  hideTimeout = setTimeout(() => {
    if (!menuSection.matches(':hover')) {
      menuSection.classList.remove('show');
    }
  }, 1000);
};

menuLink.addEventListener('mouseleave', hideMenuWithDelay);
menuSection.addEventListener('mouseleave', hideMenuWithDelay);


// section 3
window.addEventListener("load", () => {
    const cards = document.querySelectorAll(".flex-fill");
  
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("fade-in");
      }, index * 300); 
    });
  });
  
// section 4th
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".testimonial-card");
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = 1;
        card.style.transform = "translateY(0)";
      }, index * 150);
    });
  });

//   footer
const yearElement = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;
