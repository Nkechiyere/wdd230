const gridButton = document.getElementById('grid-view');
const listButton = document.getElementById('list-view');
const membersContainer = document.querySelector('.members-container');

async function getMembers() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error('Error loading members:', error);
        membersContainer.innerHTML = '<p>Error loading members data</p>';
    }
}

function displayMembers(members) {
    membersContainer.innerHTML = '';
    
    members.forEach(member => {
        const card = document.createElement('div');
        card.className = 'member-card';
        
        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}" loading="lazy">
            <div class="member-info">
                <h2>${member.name}</h2>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p><a href="${member.website}" target="_blank">Website</a></p>
                <span class="member-level">${member.membershipLevel}</span>
            </div>
        `;
        
        membersContainer.appendChild(card);
    });
}

gridButton.addEventListener('click', () => {
    membersContainer.classList.add('grid');
    membersContainer.classList.remove('list');
    gridButton.classList.add('active');
    listButton.classList.remove('active');
});

listButton.addEventListener('click', () => {
    membersContainer.classList.add('list');
    membersContainer.classList.remove('grid');
    listButton.classList.add('active');
    gridButton.classList.remove('active');
});

// Load members when page loads
getMembers(); 