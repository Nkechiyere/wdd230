document.addEventListener('DOMContentLoaded', function() {
    let visitCount = localStorage.getItem('visitCount') || 0;
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    document.getElementById('visit-count').textContent = visitCount;
});