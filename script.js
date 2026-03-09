// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', function() {
            const mobileBtn = navLinks.querySelector('.cta-btn');

            navLinks.classList.toggle('active');

            // Show mobile CTA when menu is open
            if (navLinks.classList.contains('active')) {
                if (mobileBtn) mobileBtn.style.display = 'flex';
            } else {
                if (mobileBtn) mobileBtn.style.display = 'none';
            }
        });
    }
});