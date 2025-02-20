// Get current year for copyright
const currentYear = new Date().getFullYear();
const yearElement = document.getElementById('copyright-year');
if (yearElement) {
    yearElement.textContent = currentYear;
}

// Get last modified date
const lastModified = document.getElementById('lastModified');
if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
}

// Get the button and the menu
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('navbar');

if (menuToggle && menu) {
    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('open'); 
        
        // Change the button symbol (hamburger to 'X')
        if (menu.classList.contains('open')) {
            menuToggle.innerHTML = '&times;'; 
        } else {
            menuToggle.innerHTML = '&#9776;'; 
        }
    });
}

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

if (modeButton && main) {
    modeButton.addEventListener("click", () => {
        if (modeButton.textContent.includes("🕶️")) {
            main.style.background = "#000";
            main.style.color = "#fff";
            modeButton.textContent = "🔆";
        } else {
            main.style.background = "#eee";
            main.style.color = "#000";
            modeButton.textContent = "🕶️";
        }
    });
}

// Handle visit count only if the element exists
const visitCountElement = document.getElementById('visit-count');
if (visitCountElement) {
    let visitCount = localStorage.getItem('visitCount') || 0;
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    visitCountElement.textContent = visitCount;
}