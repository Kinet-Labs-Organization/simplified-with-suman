import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const location = useLocation();
    const isHome = location.pathname === '/';

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    // Scroll Spy Logic
    useEffect(() => {
        if (!isHome) {
            setActiveSection('');
            return;
        }

        const navSections = document.querySelectorAll('section[id]');
        const observerOptions = {
            rootMargin: '-20% 0px -79% 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.getAttribute('id'));
                }
            });
        }, observerOptions);

        navSections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, [isHome]);

    const getLinkClass = (sectionId) => {
        return activeSection === sectionId ? 'active' : '';
    };

    return (
        <nav className="glass">
            <div className="logo">
                <div className="logo-box">SWS</div>
                <span className="logo-text">Simplified with Suman</span>
            </div>
            
            <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`} id="navLinks">
                {/* Logic: If on home, use anchor links. If on other pages, link to home + anchor */}
                <a href={isHome ? "#home" : "/#home"} className={getLinkClass('home')}>Home</a>
                
                <div className="dropdown">
                    <a href={isHome ? "#episodes" : "/#episodes"} className={`dropbtn ${getLinkClass('episodes')}`}>
                        Episodes <i className="fa-solid fa-chevron-down" style={{fontSize: '0.7em', marginLeft: '4px'}}></i>
                    </a>
                    <div className="dropdown-content">
                        <Link to="/is-your-phone-listening-to-you">Ep 01: Is your phone listening?</Link>
                        <Link to="/episode/2">Ep 02: AI Magic</Link>
                        <Link to="/episode/3">Ep 03: Time beats Money</Link>
                        <Link to="/episode/4">Ep 04: Financial Safety</Link>
                        <div style={{height: '1px', background: 'var(--glass-border)', margin: '8px 16px'}}></div>
                        <Link to="/all-episodes" style={{color: 'var(--cyan)', fontWeight: 600}}>View All Episodes &rarr;</Link>
                    </div>
                </div>

                <div className="dropdown">
                    <a href={isHome ? "#resources" : "/#resources"} className={`dropbtn ${getLinkClass('resources')}`}>
                        Resources <i className="fa-solid fa-chevron-down" style={{fontSize: '0.7em', marginLeft: '4px'}}></i>
                    </a>
                    <div className="dropdown-content">
                        <a href="#">Newsletter</a>
                        <a href="#">Reading List</a>
                        <a href="#">Tools & Gear</a>
                        <a href="#">Community</a>
                        <div style={{height: '1px', background: 'var(--glass-border)', margin: '8px 16px'}}></div>
                        <Link to="/all-resources" style={{color: 'var(--cyan)', fontWeight: 600}}>View All Resources &rarr;</Link>
                    </div>
                </div>

                <a href={isHome ? "#categories" : "/#categories"} className={getLinkClass('categories')}>Categories</a>
                <a href={isHome ? "#about" : "/#about"} className={getLinkClass('about')}>About</a>

                <button className="cta-btn" style={{display: isMobileMenuOpen ? 'flex' : 'none', width: '100%', justifyContent: 'center', marginTop: '12px'}}>
                    <i className="fa-solid fa-play"></i> Subscribe
                </button>
            </div>

            {!isMobileMenuOpen && (
                <button className="cta-btn desktop-cta">
                    <span className="mono" style={{fontSize: '0.75rem', background: 'rgba(0,0,0,0.2)', padding: '2px 8px', borderRadius: '10px', marginRight: '8px'}}>4 Live</span>
                    <i className="fa-solid fa-play"></i> Subscribe
                </button>
            )}

            <button className="hamburger" id="menuBtn" onClick={toggleMenu}>
                <i className="fa-solid fa-bars"></i>
            </button>
        </nav>
    );
};

export default Navbar;