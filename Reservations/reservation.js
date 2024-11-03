function submitReservation() {
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;

    const confirmationMessage = document.getElementById("confirmationMessage");
    const confirmText = document.getElementById("confirmText");

    if (name && date && time && guests) {
        confirmText.textContent = `Thank you, ${name}! Your reservation for ${guests} guest(s) on ${date} at ${time} has been confirmed. We look forward to welcoming you at Xrabby! 🎉`;
        confirmationMessage.style.display = "block";
    } else {
        confirmText.textContent = "Please fill out all fields to complete your reservation.";
        confirmationMessage.style.display = "block";
    }
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