document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navUl = document.querySelector('nav ul');

    hamburgerMenu.addEventListener('click', () => {
        navUl.classList.toggle('active');
        hamburgerMenu.classList.toggle('open');
        hamburgerMenu.textContent = hamburgerMenu.classList.contains('open') ? '✖' : '☰';
    });
});