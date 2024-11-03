window.addEventListener('scroll', () => {
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });

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