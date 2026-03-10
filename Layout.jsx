import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const [showAd, setShowAd] = useState(!isHome);

    useEffect(() => {
        if (!isHome) {
            setShowAd(true);
            return;
        }

        const handleScroll = () => {
            const hero = document.querySelector('.hero');
            if (hero) {
                // Show ad when user scrolls past 80% of the hero section
                const threshold = hero.offsetHeight * 0.8;
                setShowAd(window.scrollY > threshold);
            } else {
                setShowAd(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial position
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHome, location.pathname]);

    return (
        <>
            <div className="bg-grid"></div>
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>
            {children}
            {showAd && (
                <div className="bottom-ad-banner" style={{ animation: 'fadeInUp 0.5s ease-out' }}>
                    <div style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                        [ Fixed Bottom Ad - 728x90 ]
                    </div>
                </div>
            )}
        </>
    );
};

export default Layout;