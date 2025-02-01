// Hamburger Menu Toggle
const hamburgerButton = document.getElementById('hamburger-menu');
const navList = document.querySelector('nav ul');

hamburgerButton.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Dynamic Footer Content
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;