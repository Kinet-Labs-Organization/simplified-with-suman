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

    // Navigation Scroll Spy (Active Link Highlighting)
    const navSections = document.querySelectorAll('section[id]');
    const navLinksArr = document.querySelectorAll('.nav-links > a[href^="#"], .nav-links .dropdown > a.dropbtn[href^="#"]');

    if (navSections.length > 0 && navLinksArr.length > 0) {
        const navObserverOptions = {
            rootMargin: '-20% 0px -79% 0px' // Trigger when section is near the top of the viewport
        };

        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    
                    navLinksArr.forEach(link => {
                        // Check if link href matches the current section ID
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        } else {
                            link.classList.remove('active');
                        }
                    });
                }
            });
        }, navObserverOptions);

        navSections.forEach(section => navObserver.observe(section));
    }

    // Scroll-triggered animations using Intersection Observer
    const observerOptions = {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters viewport
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const element = entry.target;

                // Apply animation based on element type
                if (element.classList.contains('hero')) {
                    element.style.animation = 'fadeIn 0.8s ease-out forwards';
                } else if (element.classList.contains('about-content')) {
                    element.style.animation = 'slideInLeft 0.6s ease-out forwards';
                } else if (element.classList.contains('glass-card')) {
                    if (element.closest('.episodes-grid')) {
                        element.style.animation = 'fadeInUp 0.6s ease-out forwards';
                    } else if (element.closest('.categories-grid')) {
                        element.style.animation = 'scaleIn 0.5s ease-out forwards';
                    }
                } else if (element.tagName === 'SECTION' && !element.classList.contains('hero')) {
                    element.style.animation = 'fadeInUp 0.6s ease-out forwards';
                }

                // Stop observing once animated
                observer.unobserve(element);
            }
        });
    }, observerOptions);

    // Function to check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Observe elements for animation
    setTimeout(() => {
        // Hero section
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.opacity = '0';
            if (isElementInViewport(hero)) {
                hero.style.animation = 'fadeIn 0.8s ease-out forwards';
            } else {
                observer.observe(hero);
            }
        }

        // Episode cards
        const episodeCards = document.querySelectorAll('.episodes-grid .glass-card');
        episodeCards.forEach(card => {
            card.style.opacity = '0';
            if (isElementInViewport(card)) {
                card.style.animation = 'fadeInUp 0.6s ease-out forwards';
            } else {
                observer.observe(card);
            }
        });

        // Category cards
        const categoryCards = document.querySelectorAll('.categories-grid .glass-card');
        categoryCards.forEach(card => {
            card.style.opacity = '0';
            if (isElementInViewport(card)) {
                card.style.animation = 'scaleIn 0.5s ease-out forwards';
            } else {
                observer.observe(card);
            }
        });

        // About section - handle specially to avoid visibility issues
        const aboutSection = document.querySelector('#about .about-content');
        const aboutSectionParent = document.querySelector('#about');
        if (aboutSection && aboutSectionParent) {
            // Keep parent visible, only animate child
            aboutSectionParent.style.opacity = '1';
            aboutSection.style.opacity = '0';
            
            if (isElementInViewport(aboutSection)) {
                aboutSection.style.animation = 'slideInLeft 0.6s ease-out forwards';
            } else {
                observer.observe(aboutSection);
            }
        }

        // Other sections (excluding about section and hero)
        const sections = document.querySelectorAll('section:not(.hero):not(#about)');
        sections.forEach(section => {
            section.style.opacity = '1';
            section.style.animation = 'none';
            
            // Only observe children, not parent sections
            const cards = section.querySelectorAll('.glass-card');
            if (cards.length === 0) {
                section.style.opacity = '0';
                if (isElementInViewport(section)) {
                    section.style.animation = 'fadeInUp 0.6s ease-out forwards';
                } else {
                    observer.observe(section);
                }
            }
        });
    }, 100); // Small delay to ensure DOM is ready
});