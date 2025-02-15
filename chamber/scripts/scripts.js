document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navUl = document.querySelector('nav ul');

    hamburgerMenu.addEventListener('click', () => {
        navUl.classList.toggle('active');
        hamburgerMenu.classList.toggle('open');
        hamburgerMenu.textContent = hamburgerMenu.classList.contains('open') ? '✖' : '☰';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const timestampInput = document.getElementById('timestamp');
    if (timestampInput) {
        timestampInput.value = new Date().toISOString();
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // Update current year
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Update last modified date
    const lastModifiedElement = document.getElementById('last-modified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('timestamp').value = new Date().toISOString();
});