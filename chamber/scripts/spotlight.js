async function getSpotlights() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        
        // Filter gold and silver members
        const eligibleMembers = data.members.filter(member => 
            member.membershipLevel === "Gold" || member.membershipLevel === "Silver"
        );
        
        // Randomly select 2-3 members
        const spotlightCount = Math.floor(Math.random() * 2) + 2; // 2 or 3
        const spotlights = [];
        
        while (spotlights.length < spotlightCount && eligibleMembers.length > 0) {
            const randomIndex = Math.floor(Math.random() * eligibleMembers.length);
            spotlights.push(eligibleMembers.splice(randomIndex, 1)[0]);
        }
        
        displaySpotlights(spotlights);
    } catch (error) {
        console.error('Error loading spotlights:', error);
    }
}

function displaySpotlights(spotlights) {
    const container = document.querySelector('.spotlights');
    if (!container) return;
    
    container.innerHTML = spotlights.map(member => `
        <div class="spotlight">
            <img src="${member.image}" alt="${member.name}" loading="lazy">
            <h3>${member.name}</h3>
            <p>${member.description}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}" target="_blank">Website</a></p>
        </div>
    `).join('');
}

getSpotlights(); 