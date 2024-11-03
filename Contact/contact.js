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

// contact container  
const contactForm = document.getElementById('contact-form');
const statusMessage = document.getElementById('status-message');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  statusMessage.textContent = 'Sending message...';

  setTimeout(() => {
    statusMessage.textContent = 'Thank you! Your message has been sent successfully.';
    contactForm.reset();
  }, 2000); 
});
//   footer
const yearElement = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;
