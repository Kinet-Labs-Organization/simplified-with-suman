import { useLayoutEffect } from 'react';

export const useScrollAnimation = () => {
    useLayoutEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const element = entry.target;

                    if (element.classList.contains('hero')) {
                        element.style.animation = 'fadeIn 0.8s ease-out forwards';
                    } else if (element.classList.contains('about-content')) {
                        element.style.animation = 'slideInLeft 0.6s ease-out forwards';
                    } else if (element.classList.contains('section-header')) {
                        element.style.animation = 'fadeInUp 0.6s ease-out forwards';
                    } else if (element.classList.contains('glass-card')) {
                        if (element.closest('.episodes-grid')) {
                            element.style.animation = 'fadeInUp 0.6s ease-out forwards';
                        } else if (element.closest('.categories-grid')) {
                            element.style.animation = 'scaleIn 0.5s ease-out forwards';
                        } else {
                            // Default for other glass cards (like in legal pages)
                            element.style.animation = 'fadeInUp 0.6s ease-out forwards';
                        }
                    } else if (element.tagName === 'SECTION' && !element.classList.contains('hero')) {
                        element.style.animation = 'fadeInUp 0.6s ease-out forwards';
                    }

                    observer.unobserve(element);
                }
            });
        }, observerOptions);

        const isElementInViewport = (el) => {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };

        const prepareAnimations = () => {
            // Filter out sections that contain glass-cards to avoid double animation
            const sections = Array.from(document.querySelectorAll('section:not(.hero):not(#about)'));
            const emptySections = sections.filter(section => section.querySelectorAll('.glass-card').length === 0);

            const elementsToObserve = [
                document.querySelector('.hero'),
                ...document.querySelectorAll('.section-header'),
                ...document.querySelectorAll('.glass-card'),
                ...emptySections
            ];

            elementsToObserve.forEach(el => {
                if (!el) return;
                
                // Special handling for about section parent/child visibility
                if (el.classList.contains('about-content')) {
                    const parent = el.closest('#about');
                    if (parent) parent.style.opacity = '1';
                }

                el.style.opacity = '0';
                
                if (isElementInViewport(el)) {
                    // Trigger animation immediately if already in view
                    // (We let the observer handle the specific animation class assignment logic by re-triggering it or just manually setting it here, 
                    // but for simplicity, we just let the observer catch it on next tick or force observe)
                    observer.observe(el); 
                } else {
                    observer.observe(el);
                }
            });
        };

        prepareAnimations();

        return () => observer.disconnect();
    }, []); // Run once on mount
};