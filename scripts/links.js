const baseURL = "https://nkechiyere.github.io/wdd230/";
const linksURL = "data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayLinks(data);
    } catch (error) {
        console.error('Error fetching links:', error);
        // Show error message in the activities section
        const activitiesList = document.querySelector('.activities ul');
        if (activitiesList) {
            activitiesList.innerHTML = '<li>Error loading activities</li>';
        }
    }
}

function displayLinks(weeks) {
    const activitiesList = document.querySelector('.activities ul');
    if (!activitiesList) return;

    activitiesList.innerHTML = ''; // Clear existing content

    weeks.weeks.forEach(week => {
        const li = document.createElement('li');
        const weekText = document.createTextNode(`${week.week}: `);
        li.appendChild(weekText);
        
        week.links.forEach((link, index) => {
            const a = document.createElement('a');
            a.href = link.url;
            a.textContent = link.title;
            
            if (index > 0) {
                li.appendChild(document.createTextNode(' | '));
            }
            
            li.appendChild(a);
        });
        
        activitiesList.appendChild(li);
    });
}

// Only call getLinks if we're on a page with the activities section
const activitiesList = document.querySelector('.activities ul');
if (activitiesList) {
    getLinks();
} 