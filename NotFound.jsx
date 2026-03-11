import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from './useScrollAnimation';

const NotFound = () => {
    useScrollAnimation();

    return (
        <main style={{paddingTop: '140px', paddingBottom: '80px', minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div className="container" style={{textAlign: 'center'}}>
                <div className="glass-card" style={{padding: '60px 40px', display: 'inline-block', maxWidth: '600px'}}>
                    <h1 style={{fontSize: 'clamp(4rem, 10vw, 6rem)', marginBottom: '8px', background: 'var(--grad-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1}}>404</h1>
                    <h2 style={{fontSize: '2rem', marginBottom: '24px'}}>Page Not Found</h2>
                    <p style={{color: 'var(--text-muted)', marginBottom: '32px', margin: '0 auto 32px auto'}}>
                        Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                    <Link to="/" className="cta-btn" style={{display: 'inline-flex', justifyContent: 'center', textDecoration: 'none'}}>
                        <i className="fa-solid fa-house" style={{marginRight: '8px'}}></i> Back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default NotFound;