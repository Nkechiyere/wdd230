function checkBannerDay() {
    const today = new Date().getDay();
    const banner = document.querySelector('.banner');
    
    // Show banner only on Monday(1), Tuesday(2), and Wednesday(3)
    if (today >= 1 && today <= 3) {
        banner.style.display = 'block';
    } else {
        banner.style.display = 'none';
    }
}

function setupBanner() {
    const banner = document.createElement('div');
    banner.className = 'banner';
    banner.innerHTML = `
        <p>Join us for the chamber meet and greet Wednesday at 7:00 p.m.</p>
        <button class="banner-close" aria-label="Close banner">❌</button>
    `;
    
    document.body.insertBefore(banner, document.body.firstChild);
    
    const closeButton = banner.querySelector('.banner-close');
    closeButton.addEventListener('click', () => {
        banner.style.display = 'none';
    });
    
    checkBannerDay();
}

setupBanner(); 