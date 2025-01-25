// Dynamically set the current year in the footer
const currentYear = new Date().getFullYear();
document.querySelector('#copyright-year').textContent = currentYear;

// Set the last modified date in the footer
const lastModifiedDate = document.lastModified;
document.querySelector('#lastModified').textContent = `Last modified: ${lastModifiedDate}`;
