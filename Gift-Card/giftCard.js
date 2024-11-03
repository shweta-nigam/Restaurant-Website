function selectCard(amount) {
    const selectionMessage = document.getElementById("selectionMessage");
    const selectedText = document.getElementById("selectedText");
    selectedText.textContent = `You've selected a ₹${amount} Xrabby Gift Card! 🎉`;
    selectionMessage.style.display = "block";
}

//header
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
//   footer
const yearElement = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;