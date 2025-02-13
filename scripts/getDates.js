// Dynamically set the current year in the footer
const currentYear = new Date().getFullYear();
document.querySelector('#copyright-year').textContent = currentYear;

// Set the last modified date in the footer
const lastModifiedDate = document.lastModified;
document.querySelector('#lastModified').textContent = `Last modified: ${lastModifiedDate}`;

// Get the button and the menu
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('navbar');

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

menuToggle.addEventListener('click', function () {
  menu.classList.toggle('open'); 
  
  // Change the button symbol (hamburger to 'X')
  if (menu.classList.contains('open')) {
    menuToggle.innerHTML = '&times;'; 
  } else {
    menuToggle.innerHTML = '&#9776;'; 
  }
});

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

let visitCount = localStorage.getItem('visitCount') || 0;
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    document.getElementById('visit-count').textContent = visitCount;